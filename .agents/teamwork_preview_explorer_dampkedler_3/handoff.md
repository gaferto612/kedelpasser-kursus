# Handoff Report: Dampkedeltyper Audit (Modul 02)
**Dato**: 16. juli 2026  
**Agent**: Explorer 3  
**Status**: Hard Handoff (Task Complete)

## 1. Observation
I have audited the file `docs/02-dampkedler/index.html` (360 lines of HTML). The following observations were made:
- **Vandcirkulationsprincipper (Linje 184–231)**: The descriptions for the four principles (Naturcirkulation, La Mont, Benson, Sulzer) are qualitative and omit engineering details like the critical point (221.2 bar), density formulas, or circulation ratios.
- **Spændinger i trykbeholdere (Linje 316–324)**: Section 2.5 contains the card `⚙️ Trykbeholderdesign & Spændinger`, which states:
  > "Hoop stress (Tangentialspænding): Den kraft der prøver at sprænge cylinderen på langs... Longitudinal stress (Længdespænding): Kraften der trækker i beholderens endebunde."
  However, it does not state the formulas, variable definitions, unit conversions, or the relation $\sigma_t = 2 \cdot \sigma_l$.
- **Lovgivning & Standarder (Mangler)**: The document contains no structured explanation of the EN 12952/EN 12953 standards or Danish AT-vejledninger (such as B.4.3, B.4.4, B.4.8, B.4.9) despite their high relevance for Danish boiler operator exams.
- **Formatering**: The repository style (verified in `docs/09-formler-tabeller/index.html`) relies on standard HTML tags (e.g., `<sub>`, `<sup>`, `<b>`) and a `.formula` class instead of MathJax/KaTeX libraries.

## 2. Logic Chain
- **Observation 1**: The HTML lacks mathematical equations for the driving forces of circulation and stresses.
  - **Inference 1**: Students cannot calculate the actual forces or understand the exact physical boundaries (e.g. the density difference vanishing at 221.2 bar).
  - **Conclusion 1**: We must add explicit formulas using the existing HTML formatting conventions (e.g. `formula` class and subscripts).
- **Observation 2**: Section 2.5 mentions that tangential stress is twice as high as longitudinal stress but gives no proof or standard citation.
  - **Inference 2**: Adding the formulas ($\sigma_t = \frac{p \cdot d}{2 \cdot s}$ and $\sigma_l = \frac{p \cdot d}{4 \cdot s}$) and citing EN 12952-3/12953-3 provides the mathematical proof and connects the concept to industry standards.
  - **Conclusion 2**: Recommending these formula additions improves both mechanical understanding and compliance with standards.
- **Observation 3**: EN 12952/12953 and AT-vejledninger are crucial regulatory topics for boiler operation in Denmark.
  - **Inference 3**: These must be presented to students in Modul 02 as a dedicated section to bridge the gap between mechanical design and legal operation.
  - **Conclusion 3**: A new section 2.6 should be added right before the navigation element at line 339.

## 3. Caveats
- The audit is read-only. No modifications have been made to `docs/02-dampkedler/index.html`.
- Formulas are formatted to fit the CSS styles present in the project's CSS files (using the `.formula` class). No external math rendering engines (like KaTeX) are assumed to be available.

## 4. Conclusion
I have compiled a detailed audit and written a set of exact HTML recommendations in technical Danish in `analysis.md`. The recommendations cover:
1. Extended technical descriptions for the four water circulation types (Naturcirkulation, La Mont, Benson, Sulzer) including circulation ratios and pressure limits.
2. Complete formulas for tangential and longitudinal stress, explaining all symbols ($p, d_i, s$), citing EN 12952-3/12953-3, and clarifying unit conversions (1 bar = 0.1 N/mm²).
3. A new section 2.6 (`Lovgivning, standarder & eftersyn`) detailing the requirements of EN 12952, EN 12953, and AT-vejledninger B.4.3, B.4.4, B.4.8, and B.4.9.

All recommended text is ready for direct insertion by a worker agent.

## 5. Verification Method
- **File inspection**: Open `c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\teamwork_preview_explorer_dampkedler_3\analysis.md` and check that the recommendations are written in technical Danish and contain clear "Before -> After" snippets.
- **HTML validation**: Ensure the proposed HTML snippets use valid syntax and match the class names (`formula`, `grid`, `card`, `checklist`) used in the parent document.
- **Logical consistency**: Confirm that all requirements from the prompt (EN 12952/12953 parts, AT-vejledninger, stress formulas, and circulation details) are fully addressed in the recommendations.
