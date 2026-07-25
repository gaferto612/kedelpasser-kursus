const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../../docs/01-certifikater/index.html');
const content = fs.readFileSync(filePath, 'utf-8');

console.log('Checking HTML file:', filePath);

let pos = 0;
const tagsStack = [];
const errors = [];
const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

// Simple regex parser for tags
const tagRegex = /<(\/?[a-zA-Z0-9:-]+)([^>]*)>/g;
let match;
while ((match = tagRegex.exec(content)) !== null) {
  const fullTag = match[0];
  const tagName = match[1].toLowerCase();
  const isClosing = tagName.startsWith('/');
  const actualTagName = isClosing ? tagName.substring(1) : tagName;
  
  if (voidTags.has(actualTagName)) {
    continue;
  }
  
  if (isClosing) {
    if (tagsStack.length === 0) {
      errors.push(`Unexpected closing tag </${actualTagName}> at index ${match.index}`);
    } else {
      const lastTag = tagsStack.pop();
      if (lastTag.name !== actualTagName) {
        errors.push(`Mismatched tags: open <${lastTag.name}> at index ${lastTag.index} vs closing </${actualTagName}> at index ${match.index}`);
      }
    }
  } else {
    if (fullTag.endsWith('/>')) {
      continue;
    }
    tagsStack.push({ name: actualTagName, index: match.index });
  }
}

while (tagsStack.length > 0) {
  const unclosed = tagsStack.pop();
  errors.push(`Unclosed tag <${unclosed.name}> opened at index ${unclosed.index}`);
}

// Check relative links
const linkRegex = /(href|src)=["']([^"']+)["']/g;
const links = [];
while ((match = linkRegex.exec(content)) !== null) {
  const attr = match[1];
  const url = match[2];
  if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('#') && url.trim() !== '') {
    links.push({ attr, url, index: match.index });
  }
}

const baseDir = path.dirname(filePath);
for (const link of links) {
  let parsedPath = link.url.split('?')[0].split('#')[0];
  let targetPath = path.resolve(baseDir, parsedPath);
  if (fs.existsSync(targetPath)) {
    const stat = fs.statSync(targetPath);
    if (stat.isDirectory()) {
      targetPath = path.join(targetPath, 'index.html');
    }
  }
  if (!fs.existsSync(targetPath)) {
    errors.push(`Broken link [${link.attr}="${link.url}"] resolved to "${targetPath}" (does not exist)`);
  }
}

// Check SVG well-formedness
const svgRegex = /<svg.*?>([\s\S]*?)<\/svg>/g;
let svgIndex = 1;
while ((match = svgRegex.exec(content)) !== null) {
  const svgText = match[0];
  const svgTagsStack = [];
  const svgTagRegex = /<(\/?[a-zA-Z0-9:-]+)([^>]*)>/g;
  let svgMatch;
  while ((svgMatch = svgTagRegex.exec(svgText)) !== null) {
    const fullSvgTag = svgMatch[0];
    const svgTagName = svgMatch[1].toLowerCase();
    const isSvgClosing = svgTagName.startsWith('/');
    const actualSvgTagName = isSvgClosing ? svgTagName.substring(1) : svgTagName;
    
    if (fullSvgTag.endsWith('/>')) {
      continue;
    }
    
    const svgVoidTags = new Set([]);
    if (svgVoidTags.has(actualSvgTagName) && !isSvgClosing) {
      continue;
    }
    
    if (isSvgClosing) {
      if (svgTagsStack.length === 0) {
        errors.push(`SVG ${svgIndex}: Unexpected closing tag </${actualSvgTagName}>`);
      } else {
        const lastSvgTag = svgTagsStack.pop();
        if (lastSvgTag !== actualSvgTagName) {
          errors.push(`SVG ${svgIndex}: Mismatched tags <${lastSvgTag}> vs </${actualSvgTagName}>`);
        }
      }
    } else {
      svgTagsStack.push(actualSvgTagName);
    }
  }
  while (svgTagsStack.length > 0) {
    const unclosedSvg = svgTagsStack.pop();
    errors.push(`SVG ${svgIndex}: Unclosed tag <${unclosedSvg}>`);
  }
  
  // Check local references url(#id) in this SVG
  const urlRefRegex = /url\(#([^)]+)\)/g;
  let urlMatch;
  while ((urlMatch = urlRefRegex.exec(svgText)) !== null) {
    const refId = urlMatch[1];
    const idRegex = new RegExp(`id=["']${refId}["']`);
    if (!idRegex.test(svgText)) {
      errors.push(`SVG ${svgIndex}: Broken local reference url(#${refId}) (ID not found in SVG)`);
    }
  }
  
  svgIndex++;
}

console.log('--- Errors Found ---');
if (errors.length === 0) {
  console.log('No errors found! HTML is valid.');
  process.exit(0);
} else {
  errors.forEach(err => console.error(err));
  process.exit(1);
}
