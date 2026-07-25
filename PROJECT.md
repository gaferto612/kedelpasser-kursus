# Project: Kedelpasser Kursus Content Expansion

## Architecture
- Static HTML content located in `docs/` module subdirectories.
- Shared CSS style rules in `assets/css/style.css`.
- Relative navigation between modules in topbars.
- Layout patterns are defined using existing classes: `.card`, `.formula`, `.diagram`, `.grid`, `.alert`, `.checklist`.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | M1: Certifikater & Lovgivning | Audit & expand `docs/01-certifikater/index.html` | none | IN_PROGRESS |
| 2 | M2: Dampkedler | Audit & expand `docs/02-dampkedler/index.html` | M1 | PLANNED |
| 3 | M3: Termodynamik | Audit & expand `docs/03-termodynamik/index.html` | M2 | IN_PROGRESS |
| 4 | M4: Forbrænding & Brændsel | Audit & expand `docs/04-forbraending/index.html` | M3 | PLANNED |
| 5 | M5: Vandbehandling | Audit & expand `docs/05-vandbehandling/index.html` | M4 | PLANNED |
| 6 | M6: Armaturer & Sikkerhed | Audit & expand `docs/06-armaturer-sikkerhed/index.html` | M5 | PLANNED |
| 7 | M7: Drift & Vedligehold | Audit & expand `docs/07-drift-vedligehold/index.html` | M6 | PLANNED |
| 8 | M8: Energi & Grøn Omstilling | Audit & expand `docs/08-energi-groen/index.html` | M7 | PLANNED |
| 9 | M9: Formler & Tabeller | Audit & expand `docs/09-formler-tabeller/index.html` | M8 | PLANNED |

## Code Layout & Design Constraints
1. **Danish Language**: All content additions must be written in grammatically correct technical Danish.
2. **Citations & References**: Every added engineering formula, regulatory limit, chemical reaction, or technical principle must be accompanied by an inline citation or a reference block referencing recognized standards (e.g., BEK, EN, ISO) or reputable textbooks.
3. **Class Integrity**: Do not add new external CSS/JS dependencies. Keep existing structural elements, navigation, styles, and classes intact. Use standard components like `.card`, `.formula`, `.alert info`, `.grid`, etc.
4. **Link Integrity**: Preserve all existing relative hyper-links (`../../index.html`, `../02-dampkedler/`, etc.).
