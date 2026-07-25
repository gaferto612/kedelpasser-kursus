const fs = require('fs');
const path = require('path');

const targetFilePath = path.resolve('c:/Users/henri/Desktop/GitHub/kedelpasser-kursus/docs/02-dampkedler/index.html');
const baseDir = path.dirname(targetFilePath);
const rootDir = path.resolve('c:/Users/henri/Desktop/GitHub/kedelpasser-kursus');

console.log(`Analyzing file: ${targetFilePath}`);
console.log(`Base directory: ${baseDir}`);
console.log(`Root directory: ${rootDir}\n`);

if (!fs.existsSync(targetFilePath)) {
  console.error("Error: Target file does not exist.");
  process.exit(1);
}

const htmlContent = fs.readFileSync(targetFilePath, 'utf8');

// --- 1. HTML / SVG Tag Structure & Validity Check ---
console.log("=== 1. HTML/SVG Tag Structure Check ===");

// Remove comments
const noCommentsHtml = htmlContent.replace(/<!--[\s\S]*?-->/g, '');

const voidElements = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'source', 'track', 'wbr'
]);

const tagRegex = /<(\/?)([a-zA-Z0-9:-]+)([\s\S]*?)>/g;
let match;
const stack = [];
const tagLocations = []; // To track line numbers
let hasErrors = false;

// Function to find line and column of an index
function getLineAndCol(str, index) {
  const lines = str.substring(0, index).split('\n');
  return {
    line: lines.length,
    col: lines[lines.length - 1].length + 1
  };
}

let tagCount = 0;
while ((match = tagRegex.exec(noCommentsHtml)) !== null) {
  tagCount++;
  const fullTag = match[0];
  const isClosing = match[1] === '/';
  const tagName = match[2].toLowerCase();
  const attributes = match[3];
  const index = match.index;
  const { line, col } = getLineAndCol(noCommentsHtml, index);

  // Check if tag is self-closing
  const isSelfClosing = attributes.trim().endsWith('/') || voidElements.has(tagName);

  if (isSelfClosing) {
    if (isClosing) {
      console.error(`[Line ${line}, Col ${col}]: Malformed tag </${tagName}/> (closing and self-closing at the same time)`);
      hasErrors = true;
    }
    // Self-closing tag, do not push to stack
    continue;
  }

  if (isClosing) {
    if (stack.length === 0) {
      console.error(`[Line ${line}, Col ${col}]: Unexpected closing tag </${tagName}> (empty stack)`);
      hasErrors = true;
    } else {
      const top = stack.pop();
      if (top.name !== tagName) {
        console.error(`[Line ${line}, Col ${col}]: Mismatched closing tag. Expected </${top.name}> (opened at Line ${top.line}, Col ${top.col}), but found </${tagName}>`);
        hasErrors = true;
        // Push top back and pop until we find it or empty, or keep stack as is?
        // Let's restore top to avoid cascade, but note the mismatch
        stack.push(top);
      }
    }
  } else {
    // Opening tag
    stack.push({ name: tagName, line, col });
  }
}

if (stack.length > 0) {
  console.error(`Error: Unclosed tags remaining at the end of the document:`);
  stack.forEach(tag => {
    console.error(`  - <${tag.name}> opened at Line ${tag.line}, Col ${tag.col}`);
  });
  hasErrors = true;
} else if (!hasErrors) {
  console.log(`Success: All ${tagCount} tags match and are properly nested.\n`);
}

// --- 2. Link Sanity Check ---
console.log("=== 2. Link Sanity Check ===");

const hrefRegex = /href=["']([^"']*)["']/g;
let hrefMatch;
const checkedLinks = new Set();
let linkErrors = 0;

while ((hrefMatch = hrefRegex.exec(htmlContent)) !== null) {
  const rawHref = hrefMatch[1];
  const index = hrefMatch.index;
  const { line, col } = getLineAndCol(htmlContent, index);

  if (checkedLinks.has(rawHref)) continue;
  checkedLinks.add(rawHref);

  // Ignore absolute URLs (HTTP/HTTPS) and mailto/tel links
  if (/^(https?:|mailto:|tel:)/i.test(rawHref)) {
    console.log(`[Line ${line}]: Skipping absolute/external link: ${rawHref}`);
    continue;
  }

  // Handle anchors on same page
  if (rawHref.startsWith('#')) {
    console.log(`[Line ${line}]: Checking local anchor: ${rawHref}`);
    // Check if element with this ID exists in the HTML
    const id = rawHref.substring(1);
    const idRegex = new RegExp(`id=["']${id}["']`, 'i');
    if (!idRegex.test(htmlContent)) {
      console.error(`  - ERROR: Anchor ID "${id}" not found in current document.`);
      linkErrors++;
    }
    continue;
  }

  // Resolve relative paths
  // If it's a directory link, check if it has / at the end and check index.html there
  let resolvedPath = path.resolve(baseDir, rawHref);
  let targetExists = false;
  let targetType = "";

  if (fs.existsSync(resolvedPath)) {
    const stats = fs.statSync(resolvedPath);
    if (stats.isDirectory()) {
      // Look for index.html inside the directory
      const indexPath = path.join(resolvedPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        targetExists = true;
        targetType = "directory (with index.html)";
      } else {
        targetType = "directory (WITHOUT index.html)";
      }
    } else {
      targetExists = true;
      targetType = "file";
    }
  }

  if (targetExists) {
    console.log(`[Line ${line}]: OK - Resolved "${rawHref}" to ${targetType} at: ${resolvedPath}`);
  } else {
    console.error(`[Line ${line}]: ERROR - Broken link "${rawHref}". Target does not exist at: ${resolvedPath}`);
    linkErrors++;
  }
}
console.log(`Link checking complete. Found ${linkErrors} broken links.\n`);

// --- 3. SVG Attribute and Visual Elements Check ---
console.log("=== 3. SVG Integrity Check ===");

// Let's check fill, stroke and other attributes inside SVG blocks
const svgBlockRegex = /<svg[\s\S]*?<\/svg>/gi;
let svgMatch;
let svgCount = 0;
let svgErrors = 0;

while ((svgMatch = svgBlockRegex.exec(htmlContent)) !== null) {
  svgCount++;
  const svgText = svgMatch[0];
  const index = svgMatch.index;
  const { line } = getLineAndCol(htmlContent, index);
  console.log(`Checking SVG diagram #${svgCount} starting near Line ${line}...`);

  // Check viewBox attribute
  if (!/viewBox=["']/i.test(svgText)) {
    console.error(`  - WARNING: SVG lacks viewBox attribute (highly recommended for scaling)`);
  }

  // Check xmlns
  if (!/xmlns=["']/i.test(svgText)) {
    console.error(`  - WARNING: SVG lacks xmlns namespace attribute`);
  }

  // Look for invalid colors in fill or stroke
  // E.g. fill="#something" where something is not hex or valid named color
  const colorAttrRegex = /(fill|stroke)=["']([^"']*)["']/g;
  let colorMatch;
  while ((colorMatch = colorAttrRegex.exec(svgText)) !== null) {
    const attrName = colorMatch[1];
    const colorValue = colorMatch[2];
    
    // Check if hex color starts with # but is not valid hex
    if (colorValue.startsWith('#')) {
      const hex = colorValue.substring(1);
      // Valid hex lengths: 3, 4, 6, 8
      const isValidHex = /^[0-9a-fA-F]{3,4}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(hex);
      if (!isValidHex) {
        console.error(`  - ERROR: Invalid hex color in SVG attribute: ${attrName}="${colorValue}"`);
        svgErrors++;
      }
    } else {
      // Check for none, currentcolor, url(#...), or valid CSS keywords
      const isValidOther = /^(none|currentColor|inherit|transparent|url\(#[a-zA-Z0-9_-]+\))$/i.test(colorValue) ||
                           /^[a-zA-Z]+$/.test(colorValue); // Standard color names (red, blue, etc.)
      if (!isValidOther) {
        console.error(`  - ERROR: Suspected invalid color/reference in SVG attribute: ${attrName}="${colorValue}"`);
        svgErrors++;
      }
    }
  }

  // Check for any tag mismatches specifically within SVG
  // Since general HTML tags are already verified, this is secondary, but let's check path d attribute syntax
  const pathRegex = /<path[^>]*d=["']([^"']*)["']/g;
  let pathMatch;
  while ((pathMatch = pathRegex.exec(svgText)) !== null) {
    const dVal = pathMatch[1];
    // Simple check: shouldn't be empty, and should contain commands
    if (dVal.trim() === '') {
      console.error(`  - WARNING: Path has empty d attribute.`);
    } else {
      // Check if path has alphabetic characters that aren't valid path commands (M, L, H, V, C, S, Q, T, A, Z, etc.)
      const invalidPathChars = dVal.replace(/[0-9\s,\.-]/g, '').split('').filter(c => !/^[mlhvcsqtaz]$/i.test(c));
      if (invalidPathChars.length > 0) {
        console.error(`  - WARNING: Path d attribute contains unrecognized characters: ${invalidPathChars.join(', ')}`);
      }
    }
  }
}
console.log(`SVG checking complete. Checked ${svgCount} SVGs. Found ${svgErrors} errors/warnings.\n`);
