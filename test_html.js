const fs = require('fs');
const path = require('path');

const voidTags = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr'
]);

function validateHtml(filePath) {
  console.log(`Validating HTML file: ${filePath}`);
  if (!fs.existsSync(filePath)) {
    console.error(`Error: File ${filePath} does not exist.`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let index = 0;
  const stack = [];
  const errors = [];

  function getLineCol(pos) {
    const lines = content.substring(0, pos).split('\n');
    return { line: lines.length, col: lines[lines.length - 1].length + 1 };
  }

  while (index < content.length) {
    // 1. Skip comments
    if (content.substring(index, index + 4) === '<!--') {
      const endComment = content.indexOf('-->', index + 4);
      if (endComment === -1) {
        errors.push(`Unclosed comment starting at ${JSON.stringify(getLineCol(index))}`);
        break;
      }
      index = endComment + 3;
      continue;
    }

    // 2. Skip DOCTYPE or XML declarations
    if (content.substring(index, index + 2) === '<!') {
      const endTag = content.indexOf('>', index + 2);
      if (endTag === -1) {
        errors.push(`Unclosed special tag starting at ${JSON.stringify(getLineCol(index))}`);
        break;
      }
      index = endTag + 1;
      continue;
    }

    // 3. Find tag
    if (content[index] === '<') {
      const tagStart = index;
      const endTag = content.indexOf('>', tagStart);
      if (endTag === -1) {
        errors.push(`Unclosed tag starting at ${JSON.stringify(getLineCol(tagStart))}`);
        break;
      }

      const tagContent = content.substring(tagStart + 1, endTag).trim();
      index = endTag + 1;

      if (!tagContent) {
        continue;
      }

      // Check if closing tag
      if (tagContent.startsWith('/')) {
        const tagName = tagContent.substring(1).trim().split(/\s+/)[0].toLowerCase();
        if (voidTags.has(tagName)) {
          // Closing void tags is technically allowed but weird in HTML, we ignore or log
          continue;
        }

        if (stack.length === 0) {
          const loc = getLineCol(tagStart);
          errors.push(`Unexpected closing tag </${tagName}> at line ${loc.line}, col ${loc.col}`);
          continue;
        }

        const popped = stack.pop();
        if (popped.name !== tagName) {
          const loc = getLineCol(tagStart);
          errors.push(`Mismatched closing tag </${tagName}> at line ${loc.line}, col ${loc.col}. Expected </${popped.name}> (opened at line ${popped.line}, col ${popped.col})`);
        }
      } else {
        // Opening tag
        const isSelfClosing = tagContent.endsWith('/');
        const cleanContent = isSelfClosing ? tagContent.slice(0, -1).trim() : tagContent;
        const tagName = cleanContent.split(/\s+/)[0].toLowerCase();

        if (!voidTags.has(tagName) && !isSelfClosing) {
          const loc = getLineCol(tagStart);
          stack.push({ name: tagName, line: loc.line, col: loc.col });
        }
      }
      continue;
    }

    index++;
  }

  while (stack.length > 0) {
    const popped = stack.pop();
    errors.push(`Unclosed tag <${popped.name}> opened at line ${popped.line}, col ${popped.col}`);
  }

  if (errors.length > 0) {
    console.error("HTML Structure Errors:");
    errors.forEach(err => console.error(`  - ${err}`));
    return false;
  } else {
    console.log("HTML nesting and structure is valid.");
    return true;
  }
}

function verifyLinks(filePath) {
  console.log(`\nVerifying links in: ${filePath}`);
  const content = fs.readFileSync(filePath, 'utf8');
  const baseDir = path.dirname(filePath);
  const hrefRegex = /href="([^"]+)"/g;
  let match;
  let allOk = true;

  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];

    if (href.startsWith('http://') || href.startsWith('https://')) {
      console.log(`  - External link (skipped): ${href}`);
      continue;
    }
    if (href.startsWith('#')) {
      console.log(`  - Anchor link: ${href}`);
      continue;
    }

    const resolvedPath = path.resolve(baseDir, href);
    if (!fs.existsSync(resolvedPath)) {
      console.error(`  - Link ERROR (path does not exist): ${href} -> resolved to ${resolvedPath}`);
      allOk = false;
      continue;
    }

    const stat = fs.statSync(resolvedPath);
    if (stat.isDirectory()) {
      const indexFile = path.join(resolvedPath, 'index.html');
      if (fs.existsSync(indexFile)) {
        console.log(`  - Link OK (directory with index.html): ${href} -> ${indexFile}`);
      } else {
        console.error(`  - Link ERROR (directory has no index.html): ${href} -> ${resolvedPath}`);
        allOk = false;
      }
    } else {
      console.log(`  - Link OK (file): ${href} -> ${resolvedPath}`);
    }
  }

  return allOk;
}

const targetFile = path.resolve(__dirname, 'docs/03-termodynamik/index.html');
const htmlValid = validateHtml(targetFile);
const linksValid = verifyLinks(targetFile);

if (htmlValid && linksValid) {
  console.log("\nAll checks passed successfully.");
  process.exit(0);
} else {
  console.error("\nSome checks failed.");
  process.exit(1);
}
