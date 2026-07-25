# Project Plan: kedelpasser-kursus content expansion

## Objectives
1. Audit the 9 HTML modules of the kedelpasser-kursus.
2. Expand them with advanced technical details in Danish.
3. Ensure citations/references are included for all engineering facts/formulas (e.g., BEK 498/2024, EN-standards, engineering textbooks).
4. Preserve layout CSS classes and prevent design breakage.
5. Do not add external dependencies.

## Orchestration Strategy
- **Pattern**: Project Pattern (Orchestrator → Sub-orchestrators → Workers).
- **Decomposition**: 9 Milestones, each representing one HTML module.
- For each milestone, a sub-orchestrator (`self`) is spawned to handle the specific module.
- Each sub-orchestrator will run an Explorer -> Worker -> Reviewer -> Challenger -> Auditor loop.

## Milestones
1. **M1**: Audit & expand `docs/01-certifikater/index.html` (Certifikater & Lovgivning)
2. **M2**: Audit & expand `docs/02-dampkedler/index.html` (Dampkedler)
3. **M3**: Audit & expand `docs/03-termodynamik/index.html` (Termodynamik)
4. **M4**: Audit & expand `docs/04-forbraending/index.html` (Forbrænding & Brændsel)
5. **M5**: Audit & expand `docs/05-vandbehandling/index.html` (Vandbehandling)
6. **M6**: Audit & expand `docs/06-armaturer-sikkerhed/index.html` (Armaturer & Sikkerhed)
7. **M7**: Audit & expand `docs/07-drift-vedligehold/index.html` (Drift & Vedligehold)
8. **M8**: Audit & expand `docs/08-energi-groen/index.html` (Energi & Grøn Omstilling)
9. **M9**: Audit & expand `docs/09-formler-tabeller/index.html` (Formler & Tabeller)

## Detailed Steps
1. Create `PROJECT.md` at project root defining the milestones and interface contracts (layout rules).
2. Spawn sub-orchestrators for milestones M1 to M9.
3. Sub-orchestrators report progress and output results.
4. Verify changes in each module.
5. Write final report and notify parent agent.
