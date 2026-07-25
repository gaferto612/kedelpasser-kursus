# Scope: M1: Certifikater & Lovgivning

## Architecture
- Static HTML file: `docs/01-certifikater/index.html`.
- Shared stylesheet: `assets/css/style.css`.
- Layout classes: `.card`, `.formula`, `.diagram`, `.grid`, `.alert`, `.checklist`.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1.1 | Audit and Exploration | Explorer reads HTML and plans specific technical expansions. | none | DONE |
| 1.2 | Content Expansion | Worker implements Danish content, formulas, diagrams, and citations. | 1.1 | IN_PROGRESS |
| 1.3 | Technical & Quality Review | Reviewers check HTML syntax, grammar, classes, and references. | 1.2 | PLANNED |
| 1.4 | Verification & Challenger testing | Challenger tests HTML structure, link validation, and correctness. | 1.3 | PLANNED |
| 1.5 | Forensic Audit | Auditor checks for integrity, genuine logic, and conformity. | 1.4 | PLANNED |

## Interface Contracts
- No new external CSS/JS dependencies.
- Retain existing classes and relative path links (`../../index.html`, etc.).
- Target: `docs/01-certifikater/index.html`.
