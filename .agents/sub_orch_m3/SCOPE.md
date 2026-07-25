# Scope: Milestone 3 - Termodynamik

## Architecture
- Target file: `docs/03-termodynamik/index.html`
- Style dependency: `assets/css/style.css`
- Navigation dependency: Relies on relative hyperlinks to adjacent modules (`../02-dampkedler/index.html`, `../04-forbraending/index.html`, and `../../index.html`).
- Structural components: Requires strict alignment with existing layout classes (`.card`, `.formula`, `.diagram`, `.grid`, `.alert`, `.checklist`).

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | M3.1: Explorer Stage | Audit `docs/03-termodynamik/index.html`, compile expansion list and specific citations/references in Danish. | none | DONE |
| 2 | M3.2: Worker Stage | Implement the recommended HTML additions in the file. | M3.1 | DONE |
| 3 | M3.3: Reviewer Stage | Verify markup styling, Danish grammar, citation compliance, CSS classes. | M3.2 | IN_PROGRESS |
| 4 | M3.4: Challenger Stage | Verify HTML syntax validity, link integrity, and calculation correctness. | M3.3 | IN_PROGRESS |
| 5 | M3.5: Auditor Stage | Run independent checks to verify no cheating, no hardcoded verification bypasses. | M3.4 | PLANNED |

## Interface Contracts
### HTML Page Structure ↔ CSS Style Sheet
- HTML elements must use existing CSS classes (`.card`, `.formula`, `.diagram`, `.grid`, `.alert`, `.badge`, `.num`). No custom styles or embedded CSS allowed.
- Navigation links must remain functional and correct: `../02-dampkedler/` (prev), `../04-forbraending/` (next), `../../index.html` (home).
- Language must be Danish (`lang="da"` on `<html lang="da">`).
- Content must contain detailed thermodynamic explanation:
  - Specific heat capacity of water/steam ($c_p$)
  - Enthalpy calculations ($h'$, $h''$)
  - Heat of vaporization ($r$)
  - Boiler thermal efficiency ($\eta$)
  - Boiler steam factor (fordampningstal)
  - Turbines & feed-water pumps (NPSH, cavitation)
  - Real-world standards (e.g., DS/EN 12952, BEK 1009) and reference textbooks (e.g., "Praktisk Dampteknik" or standard steam tables).
