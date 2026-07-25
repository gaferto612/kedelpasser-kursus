## 2026-07-16T11:16:23Z
You are the Thermodynamics Worker. Your working directory is c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\worker_m3_termodynamik.

Objective:
Implement the proposed HTML content expansions in c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\docs\03-termodynamik\index.html using the recommendations and HTML templates drafted by the Explorers.

Instructions:
1. Read the Explorer handoff reports at:
   - c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\explorer_m3_termodynamik_1\handoff.md
   - c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\explorer_m3_termodynamik_3\handoff.md
2. Edit c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\docs\03-termodynamik\index.html to integrate:
   - Specific heat capacity variation note and reference to IAPWS-IF97 in Section 3.1.
   - Superheated steam enthalpy formula and explanations in Section 3.1.
   - Section 3.3.1 on Linear Interpolation in the steam table with the formula and a step-by-step example for 5 bar.
   - Section 3.4 expansion to cover both Direct and Indirect (Loss-based / EN 12953-11 / EN 12952-15) methods, and Siegert's formula with a table of constants for common fuels.
   - Section 3.6 expansion with math formulas for turbine isentropic efficiency, NPSHa vs NPSHr, cavitation mechanics, and mitigation strategies.
   - A References section (Litteratur, standarder & referencer) at the bottom, just above the footer.
3. Ensure all changes use the existing CSS classes (.card, .formula, .diagram, .grid, .alert, .badge, .num, etc.), retain language "da", and preserve all relative links. Do NOT add external dependencies.
4. Write your implementation report to c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\worker_m3_termodynamik\handoff.md.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Once completed, send a message back with the path to your handoff report.

## 2026-07-16T11:17:15Z
Sender: d1b063e1-9fff-4309-a181-9c5dd71b0e20
Context: Implement content expansion for Milestone 3 (Termodynamik).
Content: Please read the Explorer 1 handoff report at `c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\teamwork_preview_explorer_m3_1\handoff.md` and implement the recommended thermodynamic content expansions in `c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\docs\03-termodynamik\index.html`.
Make sure to keep all layout CSS classes and formatting intact, using the copy-pasteable HTML snippets provided in the report. Ensure that no other files are modified, and all added text is in technical Danish with correct terminology.
Ensure to run verification on the page layout, links, and tags once applied.

## 2026-07-16T11:17:46Z
Sender: d1b063e1-9fff-4309-a181-9c5dd71b0e20
Context: Additional inputs for content expansion of Milestone 3.
Content: Note that Explorer 2 also completed their report and has additional recommendations. Please read the Explorer 2 report at `c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\teamwork_preview_explorer_m3_2\handoff.md`.
Specifically, note:
1. Correct the unit of c_p from kJ/kg to kJ/(kg·K) while ensuring the final entalpi unit remains kJ/kg (e.g., h' ≈ T × c_p, where c_p = 4,19 kJ/(kg·K)).
2. Include the linear interpolation explanation with the step-by-step example at 15 bar absolute pressure.
3. Keep the direct vs. indirect efficiency methods and the Siegert-konstanter table aligned with both reports.
4. Ensure the NPSHa formula includes all variables (z_statisk, h_friction, etc.) and cavitation mitigation strategies.
