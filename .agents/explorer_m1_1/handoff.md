# Handoff Report — Explorer 1 (Milestone 1)

This report summarizes the findings of the detailed audit performed on `docs/01-certifikater/index.html`. It provides a self-contained strategy for the subsequent implementation phase (Worker/Implementer).

---

## 1. Observation

Direct observations made during the audit of `docs/01-certifikater/index.html` (lines 1 to 249):
- **Boiler operators' certifications**: Section 1.1 and 1.2 reference `BEK 498/2024` but lack specific paragraph citations (e.g., § 29, stk. 1 and stk. 2) and do not define the term *"vandindhold"* as the total geometrical volume $V$ of the vessel (including water and steam spaces).
- **Control Classes and Inspections**: Section 1.3 details Klasse A, B, and C based on $PS \times V$ and lists inspection intervals but omits the hydrostatic pressure test (*"trykprøvning"* / *"styrke- og tæthedsprøvning"*) required for Klasse A every 10 years (120 months) jf. BEK 498/2024 Bilag 1. It also lacks context on the Pressure Equipment Directive (PED 2014/68/EU) categories and the role of the accredited inspection body (*"inspektionsorgan"*).
- **Safety valves and limiters**: Section 1.4 mentions the weekly/monthly testing of safety valves and limiters but does not cite the relevant design standards such as **DS/EN ISO 4126** (safety valves) or **DS/EN 12952-11 / DS/EN 12953-9** (limiters).
- **Missing critical modules**:
  - **72-hour operation**: No mention of *drift uden konstant overvågning* (operation without constant supervision) in accordance with **DS/EN 12952-7** and **DS/EN 12953-6 (Annex B/C)**.
  - **Water chemistry**: No guidelines on feedwater and boiler water chemistry limits (pH, hardness, conductivity, oxygen) which are critical for preventing explosions and corrosion under **DS/EN 12952-12** and **DS/EN 12953-10**.

---

## 2. Logic Chain

1. **Aim of the course**: The course is designed to prepare candidates for the official Danish boiler operator examination (*"kedelpasserprøve"*).
2. **Exam requirements**: The examination board tests candidates on current legislation (**BEK 498/2024** and **BEK 497/2024**) and the European safety standards (**EN 12952** and **EN 12953**).
3. **Safety impact of gaps**: Operating a boiler without understanding the difference between water-tube (vandrørskedler) and shell (storrumskedler) boilers, their corresponding water chemistry limits, and the requirements for 72-hour automated operation poses significant safety risks (corrosion, scale build-up, dry-boiling, thermal shock).
4. **Conclusion**: It is necessary to expand `docs/01-certifikater/index.html` by adding precise regulatory citations, explaining the role of EN standards, and inserting two new subsections: **1.5 Drift uden konstant overvågning (72-timers drift)** and **1.6 Kemiske krav til kedelvand og fødevand**.

---

## 3. Caveats

- **Read-only role**: As the Explorer, I did not modify the HTML file itself. The implementation must be executed by the designated Implementer/Worker agent.
- **Assumed scope**: I assumed that the course targets both shell boilers (typically industrial/district heating plants) and water-tube boilers (typically large power plants), requiring references to both **DS/EN 12953** and **DS/EN 12952**.
- **Layout restrictions**: All recommendations must adhere to the existing CSS styles. No new CSS files or JS dependencies are allowed.

---

## 4. Conclusion

The course content should be expanded to include:
1. **Clarified definitions**: Define $V$ as total volume (water + steam space) and specify pressure/temperature limits for both steam and high-temperature water boilers under **BEK 498/2024 § 29**.
2. **Accredited Inspections**: Explicitly mention the role of accredited inspection bodies and the 10-year hydrostatic pressure testing requirement for Klasse A boilers.
3. **Section 1.5 (72-hour operation)**: Explain redundant safety systems (LWLL, HPL) and manual testing duties under **DS/EN 12952-7** and **DS/EN 12953-6**.
4. **Section 1.6 (Water chemistry)**: Outline water quality parameters (pH, hardness, conductivity, $O_2$) and safety implications under **DS/EN 12952-12** and **DS/EN 12953-10**.
5. **Technical Glossary**: Standardize terminology across the module (e.g. *storrumskedler*, *vandrørskedler*, *trykprøvning*, *sikkerhedskæde*).

A complete analysis report containing copy-pasteable HTML snippets is available in the working directory:
`c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\explorer_m1_1\analysis.md`

---

## 5. Verification Method

To verify the implementation of the strategy:
1. **File to inspect**: `docs/01-certifikater/index.html`.
2. **Checks**:
   - Verify that sections **1.5** and **1.6** have been successfully added to the HTML file.
   - Verify that all relative navigation links (`../../index.html`, `../02-dampkedler/`) are intact and functional.
   - Inspect the HTML syntax to ensure no tags are unclosed.
   - Check the page layout in a browser (or via validator) to ensure CSS class compatibility (`.card`, `.formula`, `.grid`, `.alert`, `.checklist` are rendered properly).
   - Invalidation conditions: The verification fails if the terms *DS/EN 12952*, *DS/EN 12953*, *BEK 498/2024 § 29*, or water quality tables are missing, or if the layout breaks on standard viewports.
