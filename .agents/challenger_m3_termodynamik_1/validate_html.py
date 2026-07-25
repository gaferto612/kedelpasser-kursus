import sys
from html.parser import HTMLParser

class HTMLValidator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.errors = []

    def handle_starttag(self, tag, attrs):
        # Self-closing tags in HTML5
        self_closing = {
            'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
            'meta', 'param', 'source', 'track', 'wbr', 'circle', 'rect', 'line', 'path'
        }
        if tag not in self_closing:
            self.tags.append((tag, self.getpos()))

    def handle_endtag(self, tag):
        self_closing = {
            'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
            'meta', 'param', 'source', 'track', 'wbr', 'circle', 'rect', 'line', 'path'
        }
        if tag in self_closing:
            return
        if not self.tags:
            self.errors.append(f"Unexpected end tag </{tag}> at line {self.getpos()[0]}:{self.getpos()[1]}")
            return
        expected_tag, pos = self.tags.pop()
        if expected_tag != tag:
            self.errors.append(
                f"Mismatched tag: expected </{expected_tag}> (opened at line {pos[0]}:{pos[1]}), "
                f"but found </{tag}> at line {self.getpos()[0]}:{self.getpos()[1]}"
            )
            # Try to recover by popping until we find a match
            # but for strict checking we report and continue
            self.tags.append((expected_tag, pos)) # restore

    def close(self):
        super().close()
        while self.tags:
            tag, pos = self.tags.pop()
            self.errors.append(f"Unclosed tag <{tag}> opened at line {pos[0]}:{pos[1]}")

def validate_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    parser = HTMLValidator()
    parser.feed(content)
    parser.close()
    
    if parser.errors:
        print("HTML validation errors found:")
        for err in parser.errors:
            print(err)
        sys.exit(1)
    else:
        print("HTML validation successful: no structural tag mismatches found.")
        sys.exit(0)

if __name__ == '__main__':
    if len(sys.argv) > 1:
        validate_file(sys.argv[1])
    else:
        print("Please provide a filepath.")
