# Detailed Audit Report: Modul 01 — Certifikater & Lovgivning

**Prepared by**: Explorer 2 (Technical Investigator & Regulatory Auditor)  
**Target File**: `docs/01-certifikater/index.html`  
**Milestone**: M1: Certifikater & Lovgivning  
**Date**: 2026-07-16  

---

## 1. Executive Summary
This audit evaluated the regulatory correctness, technical accuracy, and consistency of the course material in `docs/01-certifikater/index.html`. The investigation revealed a critical systemic discrepancy between **Modul 01 (Certifikater & Lovgivning)** and **Modul 09 (Formler & Tabeller)** regarding boiler control classes ($PS \times V$) and inspection intervals, as well as a conflation of Danish executive orders. 

Specifically:
1. **Conflation of BEK 498/2024 and BEK 499/2024**: The current text attributes all certificate and inspection rules to **BEK 498/2024**. In Danish law, **BEK 498/2024** governs the *design, manufacturing, modification, and repair* of pressure equipment, while **BEK 499/2024** is the specific executive order governing the *use, operation, control classes, inspection intervals, and certificates* of pressure equipment.
2. **Control Class Discrepancies**: Modul 01 lists the correct thresholds for steam/hot water boilers ($PS \times V > 200$ for Klasse A), but Modul 09 lists thresholds for general pressure vessels ($PS \times V > 1000$ for Klasse A) and incorrectly labels them as "Industri-dampkedel".
3. **Incorrect Inspection Intervals**: Modul 01 lists incorrect internal inspection intervals for steam boilers in Kontrolklasse A (5 years instead of the legally required 2 years / 24 months) and Klasse B (6 years instead of 4 years / 48 months).

We propose a clear restructuring and correction strategy that rectifies these errors, adds precise legal citations, provides advanced engineering examples for $PS \times V$ calculations, and maintains compatibility with the existing CSS styles.

---

## 2. Core Findings & Discrepancies

### Finding 1: Conflation of Danish Executive Orders (BEK)
* **Observation**: In `docs/01-certifikater/index.html` (lines 26, 34, 73, 80, 243) and throughout the project, **BEK 498/2024** is cited as the sole legislation replacing **BEK 100/2007** and governing boiler certificates and inspection intervals.
* **Legal Fact**: 
  - **BEK nr. 499 af 15/05/2024** (*Bekendtgørelse om anvendelse af trykbærende udstyr*) is the direct successor of **BEK nr. 100 af 31/01/2007**. It governs operation, maintenance, logbooks (kedelbog), control classes, inspection intervals, and boiler operator certificates.
  - **BEK nr. 498 af 15/05/2024** (*Bekendtgørelse om indretning, ombygning og reparation af trykbærende udstyr*) governs design, manufacturing, compliance, and modifications, implementing the European Pressure Equipment Directive (PED 2014/68/EU).
* **Impact**: Presenting BEK 498/2024 as the source for certificates and inspections is legally inaccurate and would fail a professional audit or exam. Both executive orders should be cited and distinguished by their roles.

---

### Finding 2: Conflict of Control Class Thresholds Between Modul 01 and Modul 09
* **Observation**:
  - `docs/01-certifikater/index.html` (lines 140–177) defines:
    - **Klasse A**: $PS \times V > 200\text{ bar}\cdot\text{l}$
    - **Klasse B**: $PS \times V = 25 - 200\text{ bar}\cdot\text{l}$
    - **Klasse C**: $PS \times V < 25\text{ bar}\cdot\text{l}$
  - `docs/09-formler-tabeller/index.html` (lines 315–317) defines:
    - **Klasse A**: $PS \times V > 1000\text{ bar}\cdot\text{l}$ (Example: "Industri-dampkedel")
    - **Klasse B**: $PS \times V = 200 - 1000\text{ bar}\cdot\text{l}$ (Example: "Mellemstort hedtvandsanlæg")
    - **Klasse C**: $PS \times V = 50 - 200\text{ bar}\cdot\text{l}$ (Example: "Mindre varmtvandskedler")
* **Legal Fact**: Under BEK 499/2024 Bilag 1, there are two distinct classification tables:
  1. **Dampkedelanlæg og hedtvandsanlæg** (fired/heated steam and hot water boilers with temp $> 120\text{ }^\circ\text{C}$):
     - **Klasse A**: $PS \times V > 200$
     - **Klasse B**: $25 \le PS \times V \le 200$
     - **Klasse C**: $PS \times V < 25$
  2. **Andre trykbeholdere** (unfired pressure vessels containing Group 2 gases, e.g., air receivers, feed water tanks, or steam accumulators):
     - **Klasse A**: $PS \times V > 1000$
     - **Klasse B**: $200 < PS \times V \le 1000$
     - **Klasse C**: $50 < PS \times V \le 200$
* **Impact**: Modul 09 has erroneously applied the thresholds of *other pressure vessels* to steam boilers and hot water boilers, leading to dangerous confusion (e.g., claiming a boiler with a produkttal of 500 is Klasse B, whereas it is actually Klasse A and subject to much stricter inspection rules).

---

### Finding 3: Incorrect Inspection Intervals for Steam Boilers in Modul 01
* **Observation**: In `docs/01-certifikater/index.html` (lines 140–177), the intervals for steam boilers are listed as:
  - **Klasse A**: Udvendigt 1 år, Indvendigt 5 år.
  - **Klasse B**: Udvendigt 2 år, Indvendigt 6 år.
  - **Klasse C**: Udvendigt 4 år, Indvendigt Ingen krav.
* **Legal Fact**: Under BEK 499/2024 Bilag 1, Section 2.1, the maximum intervals for **damp- og hedtvandskedelanlæg** are:
  - **Kontrolklasse A**:
    - **Driftseftersyn (ydre)**: Hver 12. måned (1 år).
    - **Besigtigelse (indre)**: Hver 24. måned (2 år) — *not 5 years!*
    - **Trykprøvning**: Hver 96. måned (8 år).
  - **Kontrolklasse B**:
    - **Driftseftersyn (ydre)**: Hver 24. måned (2 år).
    - **Besigtigelse (indre)**: Hver 48. måned (4 år) — *not 6 years!*
    - **Trykprøvning**: Hver 96. måned (8 år).
  - **Kontrolklasse C**:
    - **Driftseftersyn (ydre)**: Hver 48. måned (4 år).
    - **Besigtigelse (indre)**: Intet krav.
    - **Trykprøvning**: Intet krav.
* **Impact**: The current Modul 01 text understates the frequency of internal inspections by more than double. Steam boilers must undergo internal inspections (besigtigelse) every 2 years (Klasse A) or 4 years (Klasse B) to ensure safety against scale build-up, corrosion, and structural cracks.

---

## 3. Recommended Legislative and Standard Citations

To satisfy the project's requirement for objective accuracy, the expanded content should include specific inline citations and reference tables.

### Danish Law (Arbejdstilsynets bekendtgørelser)
1. **BEK nr. 499 af 15. maj 2024** (*Bekendtgørelse om anvendelse af trykbærende udstyr*):
   - **§ 16 & § 20**: Responsibility of the user to ensure operators have the necessary instruction, training, and qualification.
   - **§ 23**: Requirements for written operating instructions (driftsinstrukser) for safe maintenance and emergency procedures.
   - **§ 26**: Legal obligation to maintain a boiler logbook (kedelbog) for steam boilers.
   - **§ 29**: Special rules permitting boilers to operate without constant supervision (e.g., up to 72 hours unattended operation under EN 12953-6 or EN 12952-7).
   - **Bilag 1, afsnit 2**: Control classes and inspection intervals for steam and hot water boilers.
   - **Bilag 2, afsnit 3**: Requirements for boiler operator certificates (Type I, II, III).
2. **BEK nr. 498 af 15. maj 2024** (*Bekendtgørelse om indretning, ombygning og reparation af trykbærende udstyr*):
   - **§ 5 & § 9**: Basic safety requirements for design and manufacturing, aligned with PED (2014/68/EU).
   - **Kapitel 4**: Requirements for modifications (ombygninger) and repairs (reparationer) of boilers.

### European Standards (DS/EN-standarder)
1. **DS/EN 12953 (Røgrørskedler / Shell Boilers)**:
   - **DS/EN 12953-6**: Requirements for equipment for the boiler (safety valves, level limiters, feedwater systems).
   - **DS/EN 12953-9**: Requirements for limiting devices (begrænsere) and safety circuits, which are mandatory for operating without constant supervision under BEK 499/2024 § 29.
   - **DS/EN 12953-10**: Limits for boiler water and feedwater quality (essential to prevent scale and corrosion).
2. **DS/EN 12952 (Vandrørskedler / Water-Tube Boilers)**:
   - **DS/EN 12952-7**: Requirements for equipment.
   - **DS/EN 12952-10**: Requirements for safeguards.
   - **DS/EN 12952-12**: Feedwater and boiler water quality standards.

---

## 4. Expansion of Produkttal ($PS \times V$) and Boundaries

### 4.1 Definition of Calculation Components
To prevent common mathematical errors on exams, the text should clarify:
* **$PS$ (Maximum Allowable Pressure)**: The maximum pressure for which the equipment is designed, given as **overpressure** (overtryk, barg) relative to atmospheric pressure. It is read directly from the manufacturer’s nameplate (typeskilt), *never* the operating pressure (driftstryk).
  - *Note*: If a boiler operates at 8 bar but is designed for 15 bar ($PS = 15$), the $PS \times V$ calculation *must* use $PS = 15$ bar.
* **$V$ (Volume)**: The total internal volume of the pressure vessel in **liters**, including the water and steam space (vand- og damprum). For boilers, this excludes the volume of internal tubes if they form a separate closed circuit, but includes the main drum and water-carrying tubes.
* **Unit Safety**: Show that $PS \times V$ results in $\text{bar}\cdot\text{liter}$.

### 4.2 Interplay of Certificate Requirements and Control Classes
A certificate is required **only** if:
$$\text{Design Pressure } (PS) > 10\text{ bar } (\text{or } T > 110\text{ }^\circ\text{C}) \quad \mathbf{AND} \quad \text{Volume } (V) > 1000\text{ liters}$$

This creates unique boundaries where a boiler can belong to a strict control class but not require a certified operator. 

#### Advanced Engineering Comparison Example:
* **Boiler A (Fyrbokskedel / Shell Boiler)**:
  - $PS = 12\text{ bar}$ (overpressure)
  - $V = 1,200\text{ liters}$
  - **Produkttal**: $PS \times V = 12 \times 1,200 = 14,400\text{ bar}\cdot\text{l}$
  - **Control Class**: **Kontrolklasse A** (since $PS \times V > 200$).
  - **Certifikat Krav**: **Ja**, because $PS > 10\text{ bar}$ AND $V > 1,000\text{ l}$. Since $PS \le 30\text{ bar}$ and $V \le 5,000\text{ l}$, a **Type I** certificate is required.
  - **Inspection Intervals**: Ydre eftersyn every 12 months, Indre eftersyn every 24 months.
* **Boiler B (Vandrørskedel / Water-Tube Boiler)**:
  - $PS = 12\text{ bar}$ (overpressure)
  - $V = 800\text{ liters}$ (water-tube boilers contain far less water for safety and rapid steam generation).
  - **Produkttal**: $PS \times V = 12 \times 800 = 9,600\text{ bar}\cdot\text{l}$
  - **Control Class**: **Kontrolklasse A** (since $PS \times V > 200$).
  - **Certifikat Krav**: **Nej**, because the volume $V$ (800 l) is $\le 1,000\text{ liters}$. The boiler can be operated without a certificate.
  - **Inspection Intervals**: Ydre eftersyn every 12 months, Indre eftersyn every 24 months.

*Adding this comparison to Modul 01 will illustrate the practical difference between water-tube and fire-tube boilers regarding safety regulations, which is a major learning objective.*

---

## 5. Proposed Code Structure Improvements (HTML Strategy)

To implement these changes without modifying the HTML structure, the worker agent should apply the following layout revisions using the existing CSS framework:

### A. Adjust Section 1.1 Diagram & Footnote
Keep the SVG flow but update the texts to reflect **BEK 499/2024 § 29** (or rather, **BEK 499/2024 Bilag 2**) instead of BEK 498/2024, since certificates are in Bilag 2 of BEK 499/2024.

### B. Revise Section 1.2 Table & Categories
Ensure the table explicitly labels the volume as "Vandindhold (V)" and pressure as "Tilladt overtryk (PS)", and adds a note explaining that both limits must be exceeded for the certificate requirement to apply.

### C. Revise Section 1.3 Kontrolklasser
1. Replace the SVG text in Figure 1.2 and the accompanying tables with the correct Danish inspection intervals for steam boilers:
   - **Klasse A**: Ydre = 12 mdr (1 år), Indre = 24 mdr (2 år), Trykprøvning = 96 mdr (8 år).
   - **Klasse B**: Ydre = 24 mdr (2 år), Indre = 48 mdr (4 år), Trykprøvning = 96 mdr (8 år).
   - **Klasse C**: Ydre = 48 mdr (4 år), Indre = Ingen lovkrav.
2. Add a clear `.alert info` box explaining the difference between steam boilers and general pressure vessels (to resolve the conflict with Modul 09).
3. Update Modul 09's table to accurately separate "Dampkedelanlæg" and "Andre Trykbeholdere".

### D. Add a Reference Section at the bottom of Modul 01
Add a clean `.card` or list at the bottom of `docs/01-certifikater/index.html` referencing the exact laws and standards, enhancing pedagogical rigor.

---

## 6. Layout-Compatible HTML Code Drafts (For Implementer)

### Proposed Update for the Control Class Diagram SVG (Figure 1.2)
The text elements in the SVG should be modified to show the correct intervals:
```html
<!-- Klasse A -->
<text x="150" y="205" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c" font-weight="700">Ydre eftersyn:</text>
<text x="150" y="222" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" fill="#dc2626" font-weight="700">12 mdr. (1 år)</text>
<text x="150" y="245" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c" font-weight="700">Indre eftersyn (Besigtigelse):</text>
<text x="150" y="262" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" fill="#dc2626" font-weight="700">24 mdr. (2 år)</text>

<!-- Klasse B -->
<text x="350" y="205" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c" font-weight="700">Ydre eftersyn:</text>
<text x="350" y="222" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" fill="#ea580c" font-weight="700">24 mdr. (2 år)</text>
<text x="350" y="245" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c" font-weight="700">Indre eftersyn (Besigtigelse):</text>
<text x="350" y="262" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" fill="#ea580c" font-weight="700">48 mdr. (4 år)</text>

<!-- Klasse C -->
<text x="550" y="205" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c" font-weight="700">Ydre eftersyn:</text>
<text x="550" y="222" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" fill="#15803d" font-weight="700">48 mdr. (4 år)</text>
<text x="550" y="245" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c" font-weight="700">Indre eftersyn:</text>
<text x="550" y="262" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" fill="#15803d" font-weight="700">Intet krav</text>
```

### Proposed New Sub-section in 1.3: "Dampkedler vs. Andre Trykbeholdere"
Using existing CSS components:
```html
<div class="alert info">
  <div class="alert-icon">i</div>
  <div class="alert-body">
    <div class="alert-title">Skelnen mellem Dampkedler og Andre Trykbeholdere (BEK 499/2024)</div>
    <p>Bemærk, at grænserne for kontrolklasser og eftersynsintervaller er betydeligt strengere for dampkedler end for almindelige trykbeholdere (f.eks. trykluftbeholdere):</p>
    <ul>
      <li><strong>Dampkedler (Klasse A):</strong> $PS \times V > 200$ bar·l. Eftersyn: 1 år ydre / 2 år indre.</li>
      <li><strong>Andre trykbeholdere (Klasse A):</strong> $PS \times V > 1000$ bar·l. Eftersyn: 2 år ydre / 4 år indre.</li>
    </ul>
    <p>Dette skyldes den store potentielle energi i komprimeret damp og risikoen for kedeleksplosioner.</p>
  </div>
</div>
```

---

## 7. Reconciling Modul 09 (Formler & Tabeller)
Modul 09 (`docs/09-formler-tabeller/index.html`) Section 9.7 should be updated to separate steam boilers from other pressure vessels to avoid misleading students. The proposed update layout is:

| Klasse | Dampkedler ($PS \times V$) | Andre Trykbeholdere ($PS \times V$) | Eftersyn Dampkedel (Ydre/Indre) |
|---|---|---|---|
| **A** | $> 200\text{ bar}\cdot\text{l}$ | $> 1000\text{ bar}\cdot\text{l}$ | Hvert 1. år / 2. år |
| **B** | $25 - 200\text{ bar}\cdot\text{l}$ | $200 - 1000\text{ bar}\cdot\text{l}$ | Hvert 2. år / 4. år |
| **C** | $< 25\text{ bar}\cdot\text{l}$ | $50 - 200\text{ bar}\cdot\text{l}$ | Hvert 4. år / Intet indre krav |

This table clarifies both classifications in one concise reference.

---

## 8. Conclusion
The audit reveals that while the skeleton of `docs/01-certifikater/index.html` is well-structured and styled, it contains legal inaccuracies and major inconsistencies with Modul 09. By implementing the correct Danish Working Environment Authority (Arbejdstilsynet) regulations (**BEK 499/2024** and **BEK 498/2024**) and updating the inspection intervals and classification thresholds, we will elevate the course to a professional and legally compliant standard.
