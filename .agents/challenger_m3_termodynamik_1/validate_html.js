const fs = require('fs');

class HTMLValidator {
    constructor() {
        this.tags = [];
        this.errors = [];
        this.selfClosing = new Set([
            'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
            'meta', 'param', 'source', 'track', 'wbr', 'circle', 'rect', 'line', 'path', 'defs', 'marker', 'svg'
        ]);
    }

    validate(content) {
        // Simple tokenization using regex
        const tagRegex = /<\/?([a-zA-Z0-9:-]+)(?:\s+[^>]*)?>/g;
        let match;
        
        // Find line numbers for matches
        const lines = content.split('\n');
        const getLineCol = (index) => {
            let count = 0;
            for (let i = 0; i < lines.length; i++) {
                if (count + lines[i].length + 1 > index) {
                    return { line: i + 1, col: index - count + 1 };
                }
                count += lines[i].length + 1;
            }
            return { line: lines.length, col: 1 };
        };

        while ((match = tagRegex.exec(content)) !== null) {
            const fullTag = match[0];
            const tagName = match[1].toLowerCase();
            const isEndTag = fullTag.startsWith('</');
            const pos = getLineCol(match.index);

            // Skip SVG and self-closing tags
            if (this.selfClosing.has(tagName)) {
                // If it is an end tag for svg/defs/marker, let's pop them, else ignore
                if (tagName === 'svg' || tagName === 'defs' || tagName === 'marker') {
                    if (isEndTag) {
                        const expected = this.tags.pop();
                        if (expected && expected.name !== tagName) {
                            this.errors.push(`Mismatched SVG tag: expected </${expected.name}> (opened at line ${expected.pos.line}:${expected.pos.col}), but found </${tagName}> at line ${pos.line}:${pos.col}`);
                            this.tags.push(expected);
                        }
                    } else if (!fullTag.endsWith('/>')) {
                        this.tags.push({ name: tagName, pos });
                    }
                }
                continue;
            }

            if (isEndTag) {
                if (this.tags.length === 0) {
                    this.errors.push(`Unexpected end tag </${tagName}> at line ${pos.line}:${pos.col}`);
                    continue;
                }
                const expected = this.tags.pop();
                if (expected.name !== tagName) {
                    this.errors.push(`Mismatched tag: expected </${expected.name}> (opened at line ${expected.pos.line}:${expected.pos.col}), but found </${tagName}> at line ${pos.line}:${pos.col}`);
                    this.tags.push(expected); // restore to try to match others
                }
            } else {
                // Check if it is self-closed like <div />
                if (!fullTag.endsWith('/>')) {
                    this.tags.push({ name: tagName, pos });
                }
            }
        }

        while (this.tags.length > 0) {
            const unclosed = this.tags.pop();
            this.errors.push(`Unclosed tag <${unclosed.name}> opened at line ${unclosed.pos.line}:${unclosed.pos.col}`);
        }
    }
}

const filepath = process.argv[2];
if (!filepath) {
    console.error("Please provide a filepath.");
    process.exit(1);
}

try {
    const content = fs.readFileSync(filepath, 'utf8');
    const validator = new HTMLValidator();
    validator.validate(content);
    
    if (validator.errors.length > 0) {
        console.error("HTML validation errors found:");
        validator.errors.forEach(err => console.error(err));
        process.exit(1);
    } else {
        console.log("HTML validation successful: no structural tag mismatches found.");
        process.exit(0);
    }
} catch (e) {
    console.error(`Error reading or validating file: ${e.message}`);
    process.exit(1);
}
