# BRIEFING — 2026-07-16T13:19:00+02:00

## Mission
Empirically verify the correctness of `docs/02-dampkedler/index.html` (HTML structure, links, SVGs, Danish terminology).

## 🔒 My Identity
- Archetype: Empirical Challenger
- Roles: critic, specialist
- Working directory: c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\teamwork_preview_challenger_dampkedler_2
- Original parent: 852fee0f-316f-4073-a958-6ecab1b6d35a
- Milestone: Verification of Dampkedler HTML
- Instance: 1 of 1

## 🔒 Key Constraints
- Review-only — do NOT modify implementation code.
- Network restricted to CODE_ONLY mode (no external curl/wget/etc.).
- Document all findings in handoff.md and do not fix any issues found.

## Current Parent
- Conversation ID: 852fee0f-316f-4073-a958-6ecab1b6d35a
- Updated: not yet

## Review Scope
- **Files to review**: `docs/02-dampkedler/index.html`
- **Interface contracts**: Link sanity, HTML validity, SVG soundness, Danish terminology correctness.
- **Review criteria**: Tag structure, broken links, valid attributes, valid SVG XML/paths, and accurate Danish boiler terminology.

## Attack Surface
- **Hypotheses tested**:
  - Run Node.js script to check HTML tag matching.
  - Resolve relative URLs against the project structure.
  - Check SVG attributes for valid syntax and color representations.
  - Manually review technical Danish terminology and regulations (Arbejdstilsynet, BEK).
- **Vulnerabilities found**:
  - SVG #2 burner text has invalid color attribute `fill="#hot"` (line 136).
  - SVG #1 uses incorrect anglicism "DAMPDRUM" (line 58) instead of "DAMPTROMLE".
  - SVG #3 uses incorrect term "VARMTVANDS- KEDEL" (lines 264-266) instead of "HEDTVANDS- KEDEL".
  - SVG #3 uses incorrect compound spelling "EKSPANSION BEHOLDER" (lines 291-292) instead of "EKSPANSIONS- BEHOLDER".
  - Introduction text (line 26) contains dangling prefixes "røgrørs, vandrørs" without hyphens.
  - Grammatical gender mismatch "stor skadepotentiale" instead of "stort skadepotentiale" at line 171.
- **Untested angles**:
  - CSS styling validation (assumed styling works since styles are in assets/css/style.css, which is outside our scope).

## Loaded Skills
- None specified by orchestrator.

## Key Decisions Made
- Wrote and executed automated script `verify_html.js` to ensure deterministic verification of HTML tags, links, and SVGs.
- Converted findings into a structured report following the Adversarial Review format and the 5-component handoff report.

## Artifact Index
- `verify_html.js` — Custom verification tool.
- `handoff.md` — Final verification report.
