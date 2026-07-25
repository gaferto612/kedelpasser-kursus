## 2026-07-16T11:17:20Z
You are the Worker for Milestone 1: Certifikater & Lovgivning.
Your working directory is: c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\worker_m1

Objective:
Implement the content expansion and corrections in:
docs/01-certifikater/index.html
Use technical Danish.

Source Material & Reference Audits:
1. Explorer 1 Analysis: c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\explorer_m1_1\analysis.md
2. Explorer 2 Analysis: c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\explorer_m1_2\analysis.md
3. Explorer 3 Analysis: c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\explorer_m1_3\analysis.md

Required Updates to docs/01-certifikater/index.html:
1. Legal Citations & Conflation Fix:
   - Differentiate between BEK nr. 499 af 15/05/2024 (anvendelse: operation, maintenance, logbooks, control classes, inspection intervals, and certificates) and BEK nr. 498 af 15/05/2024 (indretning: design, manufacturing, modifications, repairs, CE marking).
   - In all certificate/inspection contexts, replace BEK 498/2024 with BEK 499/2024 (except where discussing design/compliance or repair, which fall under BEK 498/2024).

2. Correct Inspection Intervals & SVG:
   - Update Figure 1.2 SVG text and any description tables to the correct legal steam boiler intervals under BEK 499/2024 Bilag 1:
     * Kontrolklasse A: Ydre eftersyn (driftseftersyn) = 12 mdr (1 år), Indre eftersyn (besigtigelse) = 24 mdr (2 år), Trykprøvning = 96 mdr (8 år).
     * Kontrolklasse B: Ydre eftersyn = 24 mdr (2 år), Indre eftersyn = 48 mdr (4 år), Trykprøvning = 96 mdr (8 år).
     * Kontrolklasse C: Ydre eftersyn = 48 mdr (4 år), Indre eftersyn = Ingen lovkrav.
   - Add a note in section 1.3 explaining that steam boilers have stricter thresholds than general pressure vessels (which have Klasse A for PS x V > 1000).

3. Expand PS x V & Engineering Examples:
   - Explicitly define V as total geometric internal volume (both water and steam spaces in liters) and PS as maximum allowable pressure (tilladt overtryk in bar overtryk relative to atmosphere, read from typeskilt, not operating pressure).
   - Add the comparative example: Boiler A (Shell boiler: PS = 12 bar, V = 1200 liters, PSxV = 14400, requires Type I certificate since PS > 10 and V > 1000) vs. Boiler B (Water-tube boiler: PS = 12 bar, V = 800 liters, PSxV = 9600, Klasse A, but does NOT require certificate because volume is <= 1000 liters).

4. Expand Section 1.4 (Kedelpasserens Ansvar):
   - Clearly separate the owner's legal responsibility (Brugerens ansvar under § 23: written operating instructions, inspections, certified staff) from the operator's duty (Kedelpasserens pligt under § 24: follow instructions, test, log, intervene).
   - Detail Emergency Shutdown (Nødstandsning) protocols: include LSLL (Low Safety Level Limit) with a strict, bold warning: NEVER add cold feed water to a hot, dry boiler to avoid a catastrophic steam explosion. The boiler must cool naturally. Also cover safety valve failure, structural damages, safety limiter failures, combustion chamber gas explosions.
   - Detail the legal logbook (kedelbog) requirements: immutable format, log parameters (pH, hardness, conductivity, oxygen, bottom blowdown, safety tests, alarms, signed vagtskifte).
   - Detail safety valve testing intervals: weekly manual lift test, annual functional test (witnessed by inspection body), 5-yearly workshop overhaul and calibration.

5. Add Section 1.5: "Drift uden konstant overvågning (72-timers drift)":
   - Detail the rules under DS/EN 12953-6/9 and DS/EN 12952-7. Explain redundant safety circuits, LWLL and HPL limiters, and the requirement for a certified operator to perform physical rounds and manual tests of the safety chain at least once every 72 hours.

6. Add Section 1.6: "Vandkemiske krav — DS/EN 12953-10 & DS/EN 12952-12":
   - Explain why water chemistry is a safety-critical factor (kalk/scale causing local overheating and explosions, pH causing corrosion, conductivity causing foaming/water hammer).
   - Include a table with typical feedwater and boiler water limits for shell boilers < 20 bar (as detailed in Explorer 1's report).

7. Add a "Referencer & Lovgivning" section at the bottom of the HTML page, referencing BEK 499/2024, BEK 498/2024, DS/EN 12953, DS/EN 12952, DS/EN ISO 4126, and PED 2014/68/EU.

Constraints:
- Keep all layout CSS classes and formatting intact. Do not add external CSS/JS dependencies.
- Retain relative navigation links.
- Danish language only.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Output:
Write your implementation details to c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\worker_m1\changes.md and write a handoff.md. When complete, send a message back to the Sub-Orchestrator.
