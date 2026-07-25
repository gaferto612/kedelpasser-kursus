# Handoff Report: Modul 01 — Certifikater & Lovgivning (Explorer 2)

**Prepared by**: Explorer 2 (Technical Investigator & Regulatory Auditor)  
**Target File for Expansion**: `docs/01-certifikater/index.html`  
**Related File**: `docs/09-formler-tabeller/index.html`  
**Milestone**: M1: Certifikater & Lovgivning  
**Date**: 2026-07-16  

---

## 1. Observation
We observed the following in the repository:
1. **Incorrect Executive Order Reference**: In `docs/01-certifikater/index.html` (lines 34-35), the code states:
   > "Ifølge **BEK 498/2024** (tidligere BEK 100/2007) kræves kedelpassercertifikat..."
2. **Discrepant Control Class Thresholds**:
   - In `docs/01-certifikater/index.html` (lines 140–177), the thresholds are:
     > Klasse A: $PS \times V > 200$, Klasse B: $25 - 200$, Klasse C: $< 25$.
   - In `docs/09-formler-tabeller/index.html` (lines 315–317), the thresholds are:
     > Klasse A: $> 1000$ bar·L (Eks. anlæg: Industri-dampkedel)
     > Klasse B: $200–1000$ bar·L (Eks. anlæg: Mellemstort hedtvandsanlæg)
     > Klasse C: $50–200$ bar·L (Eks. anlæg: Mindre varmtvandskedler)
3. **Incorrect Boiler Inspection Intervals**: In `docs/01-certifikater/index.html` (lines 148, 150, 161, 163, 174, 176), the following intervals are specified for boilers:
   - Klasse A: Ydre 1 år, Indre 5 år.
   - Klasse B: Ydre 2 år, Indre 6 år.
   - Klasse C: Ydre 4 år, Indre Ingen krav.
4. **Lack of In-depth Mathematical Distinction**: The calculation example in `docs/01-certifikater/index.html` (lines 183-191) does not explain the difference between design pressure ($PS$) and operating pressure, nor does it showcase the certificate exemptions for low-volume boilers (like water-tube boilers).

---

## 2. Logic Chain
1. **Observation 1 & Danish Law**:
   - In Denmark, **BEK 499/2024** (*Bekendtgørelse om anvendelse af trykbærende udstyr*) governs the use, training, certificates, control classes, and inspection intervals of pressure equipment.
   - **BEK 498/2024** governs *indretning* (design and manufacturing).
   - *Therefore*, the text should be corrected to reference **BEK 499/2024** for operational rules, while **BEK 498/2024** (and the PED 2014/68/EU) should be referenced for design, repairs, and CE markings.
2. **Observation 2 & Classification Tables**:
   - Under BEK 499/2024 Bilag 1, steam and hot water boilers are subject to the stricter thresholds ($>200$, $25-200$, $<25$), whereas general pressure vessels (containing Group 2 gases, like air receivers) use the higher thresholds ($>1000$, $200-1000$, $50-200$).
   - *Therefore*, Modul 09 incorrectly labels the general pressure vessel thresholds as "Industri-dampkedel". This conflict must be resolved by updating Modul 09 to separate steam boilers from other pressure vessels.
3. **Observation 3 & Boiler Inspection Intervals**:
   - Under BEK 499/2024 Bilag 1, Section 2.1, the maximum intervals for steam and hot water boilers in Klasse A are **12 months (ydre)** and **24 months (indre)**, and for Klasse B they are **24 months (ydre)** and **48 months (indre)**.
   - *Therefore*, the "5 år" and "6 år" internal inspection intervals currently listed in Modul 01 are legally incorrect and underestimate inspection frequency by more than double. They must be corrected to 24 months (2 years) and 48 months (4 years) respectively.
4. **Observation 4 & Engineering Details**:
   - Using design pressure ($PS$) vs. operating pressure is a core academic distinction that students are tested on. In water-tube boilers (e.g., $V = 800\text{ l}$), the volume is often below the 1,000-liter certificate limit, meaning they are exempt from certificate requirements even if they operate above 10 bar, although they still require inspections as they are Klasse A.
   - *Therefore*, adding a comparative calculation example (like Boiler A vs. Boiler B) is highly valuable to illustrate this interplay.

---

## 3. Caveats
- We did not audit the other modules (Modul 02 to Modul 08) in detail, but they may contain similar references to BEK 498/2024 that will need to be verified or updated by the respective explorers/implementers.
- This report assumes standard steam boilers. Special approval processes under BEK 499/2024 § 29 (for 72-hour unattended operation) or customized inspection programs agreed upon with the notified body are mentioned as advanced notes but not as the baseline rules.

---

## 4. Conclusion
We recommend a comprehensive content expansion and correction strategy for `docs/01-certifikater/index.html` (and a corresponding correction in `docs/09-formler-tabeller/index.html`) to align the text with Danish law (**BEK 499/2024** and **BEK 498/2024**) and European standards (DS/EN 12953 and DS/EN 12952):
1. **Differentiate the Laws**: Cite **BEK 499/2024** for operation, certificates, classes, and inspection intervals. Cite **BEK 498/2024** for design, CE marking, modifications, and repairs.
2. **Correct Inspection Intervals**: Update Modul 01's text and Figure 1.2 SVG to show:
   - Klasse A: Ydre 1 år, Indre 2 år.
   - Klasse B: Ydre 2 år, Indre 4 år.
   - Klasse C: Ydre 4 år, Indre Ingen krav.
3. **Resolve Modul 09 Discrepancy**: Update Section 9.7 in Modul 09 to separate steam boilers from other pressure vessels.
4. **Add Comparative Engineering Example**: Showcase a shell boiler vs. a water-tube boiler to demonstrate how $PS \times V$ and the 1,000-liter threshold determine both the control class and the need for a certified boiler operator.
5. **Add Technical Citations**: List relevant sections of BEK 499/2024 (§ 16, 20, 23, 26, 29) and standard series DS/EN 12953 / DS/EN 12952 (water quality, safety equipment, unattended operation).

---

## 5. Verification Method
1. **Visual inspection of HTML files**: Verify that the text modifications and SVGs in `docs/01-certifikater/index.html` and `docs/09-formler-tabeller/index.html` contain the correct thresholds and intervals.
2. **Link and structure verification**: Ensure that no relative links are broken and all layout CSS classes (`.card`, `.formula`, `.alert info`, `.badge`) are preserved.
3. **Reference matching**: Confirm that the new citations match the official text of BEK 499/2024 and European standards (EN 12953 / EN 12952).
