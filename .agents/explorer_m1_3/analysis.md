# Audit & Gap Analysis: Boiler Operator Duties & Documentation (Milestone 1)

**Prepared by**: Explorer 3 (Milestone 1)  
**Target File**: `docs/01-certifikater/index.html`  
**Focus Area**: Roles, duties, safety responsibilities of the boiler operator (kedelpasser), and required documentation (kedelbog, safety valve testing intervals) under BEK 498/2024 and standard operating procedures (SOP).  
**Date**: 2026-07-16

---

## 1. Executive Summary

An audit of `docs/01-certifikater/index.html` was conducted to assess the depth, accuracy, and completeness of the content regarding the legal and practical duties of a boiler operator (*kedelpasser*) and the associated documentation requirements under Danish executive order **BEK 498/2024**.

While the current page (Section 1.4) lists brief bullet points for daily/periodic tasks and a short warning about the logbook (*kedelbog*), it lacks the necessary technical depth, legal references, and safety-critical explanations required for a professional curriculum. 

### Key Gaps Identified:
1. **Legal Distinction (Bruger vs. Kedelpasser)**: No mention of the distinction between the owner's (*bruger*) and the operator's (*kedelpasser*) responsibilities under BEK 498/2024 § 23 and § 24.
2. **Emergency Shutdown Protocols (Nødstandsning)**: Crucial, life-safety shutdown criteria (such as dry-cooking/tørkogning and the strict prohibition of adding cold water to a hot, dry boiler) are entirely missing.
3. **Logbook Legal Requirements (Kedelbogsføring)**: The logbook is described as a general record but lacks the detailed requirements of BEK 498/2024 (e.g., tamper-proofing, retention, specific parameters to record like water chemistry parameters).
4. **Safety Valve Testing Intervals (Sikkerhedsventiler)**: Testing frequencies (manual, functional, workshop calibration) are not structured or clearly linked to regulatory requirements.

---

## 2. Detailed Gap Analysis & Technical Context

### 2.1 The Roles and Duties under BEK 498/2024
Danish executive order **BEK 498/2024** (Bekendtgørelse om anvendelse og opstilling af trykbærende udstyr) outlines the legal framework for operating boilers.
*   **§ 23 (Brugerens ansvar)**: The user/owner (*brugeren*) has the overall responsibility to ensure that the boiler is installed, operated, maintained, and inspected safely and in accordance with manufacturer instructions. This includes the legal duty to establish **written operating instructions** (*skriftlige driftsanvisninger*) covering startup, operation, shutdown, maintenance, and emergency actions.
*   **§ 24 (Kvalifikationskrav)**: The user must ensure that the boiler is operated by qualified personnel holding the correct certificate (Type I, II, or III) when required.
*   **Kedelpasseren (The Operator)**: Acting as the designated competent person (*den sagkyndige*), the operator is responsible for executing the written instructions, maintaining safe operating parameters, and taking immediate corrective action during malfunctions.

### 2.2 Safety Responsibilities and Emergency Shutdown (Nødstandsning)
The boiler operator has the ultimate authority and duty to shut down the boiler immediately if any condition threatens its structural integrity or safe operation. Standard operating procedures (SOP) and general safety practices require an immediate emergency shutdown (*nødstandsning*) in the following scenarios:
1.  **LSLL (Low Safety Level Limit) / Tørkogning**: The water level falls below the absolute minimum allowable limit. 
    *   *Critical Safety Rule*: Under no circumstances must cold feed water be added to a hot, dry boiler. The sudden temperature drop will cause rapid metal contraction and explosive steam generation, leading to a catastrophic **steam explosion** (*dampeksplosion*). The burner must be cut off immediately, and the boiler must cool down naturally before inspection.
2.  **Overtryk (Overpressure)**: Pressure rises above the maximum allowable pressure (PS) without the burner cutting out and without the safety valves opening.
3.  **Mekaniske skader (Structural damage)**: Observation of cracks, bulges, deformations, or significant leaks in the pressure-bearing parts (e.g., boiler shell, tubes, welds).
4.  **Svigt af sikkerhedsudstyr (Limiter failures)**: Failure of essential safety limiters (e.g., high-pressure cutout, low-water cutoff, flame monitor/flammestyring).
5.  **Røggasside-eksplosionsfare (Flue gas explosion hazard)**: Accumulation of unburned fuel in the combustion chamber or flue gas passages, creating an explosion risk.

### 2.3 Required Documentation (Kedelbogsføring)
Under BEK 498/2024, the owner must document all checks and maintenance. The **kedelbog** (boiler logbook) serves as the official legal record of compliance.
*   **Format**: Physical or digital, but it must be tamper-proof (protected against retro-active alterations).
*   **Required Entries**:
    *   *Daily operation*: Steam pressure, temperature, water level, feed water parameters, fuel consumption.
    *   *Water chemistry*: pH-value, conductivity (*ledningsevne*), hardness (*hårdhed*), phosphate, and oxygen scavenger levels. Proper water treatment is essential to prevent scaling (*kedelsten*) and corrosion.
    *   *Safety tests*: Functional testing of safety limiters (e.g., low-water cutout, high-pressure cutout) and safety valves.
    *   *Maintenance*: Bottom blowdown (*bundblæsning*) time and duration, soot blowing, filter cleaning.
    *   *Operational events*: Alarms, automatic shutdowns, manual shutdowns, shift handovers (signed by both outgoing and incoming operators).
    *   *External checks*: Reports from the authorized inspection body (*bemyndiget organ / inspektionsorgan*).

### 2.4 Safety Valve Testing & Service Intervals (Sikkerhedsventiler)
Safety valves are the last line of defense against overpressure. Danish regulations and standards (e.g., EN 12953-6 / EN 12952-7) define strict testing intervals:
1.  **Manuel afblæsning (Løftestangstest)**: 
    *   *Purpose*: To ensure the valve disk is not stuck to the valve seat due to scale or corrosion.
    *   *Interval*: **Ugentligt** (weekly) during operation for manned boilers, or before every startup. For boilers running under periodic supervision (§ 29), this must follow the approved operating manual.
2.  **Funktionsafprøvning (Åbningstryktest)**:
    *   *Purpose*: Verification that the valve opens exactly at the designated set pressure (PS).
    *   *Interval*: **Årligt** (annually), conducted during the annual external inspection (*ydre eftersyn*) and witnessed by the authorized inspection body.
3.  **Renovering og kalibrering**:
    *   *Purpose*: Dismantling, cleaning, grinding seats, replacing worn seals, recalibrating on a test bench, and sealing (plombering) the valve.
    *   *Interval*: **Hvert 5. år** (every 5 years), typically aligned with the mandatory internal inspection (*indre eftersyn*) and performed by an authorized valve service workshop.

---

## 3. Recommended Layout & Content Expansions

To implement these expansions, we recommend replacing Section 1.4 in `docs/01-certifikater/index.html` with a more structured and technical sub-layout. The proposed additions leverage the existing CSS styles (`.card`, `.grid`, `.alert`, `.checklist`, `table`) and ensure full mobile responsiveness.

### 3.1 Proposed Structure for Section 1.4

The following HTML structure is proposed to replace the current section 1.4:

```html
<!-- ═══════════════════ KEDELPASSERENS ANSVAR ═══════════════════ -->
<h2>1.4 Kedelpasserens ansvar &amp; pligter</h2>

<p>
  Betjening af et damp- eller hedtvandsanlæg er underlagt et strengt juridisk og
  sikkerhedsmæssigt ansvar. Her gennemgås roller, nødprocedurer, krav til
  dokumentation samt testintervaller for sikkerhedsudstyr under <strong>BEK 498/2024</strong>.
</p>

<!-- 1.4.1 Bruger vs. Kedelpasser -->
<h3>1.4.1 Juridiske roller (Bruger vs. Kedelpasser)</h3>
<div class="grid grid-2">
  <div class="card">
    <div class="card-head">
      <div class="card-num">§23</div>
      <div class="card-title">Brugerens ansvar</div>
    </div>
    <p>
      Ejer eller driftsherre (brugeren) har det overordnede ansvar for anlæggets
      sikkerhed. Det indebærer:
    </p>
    <ul class="checklist">
      <li>At anlægget er godkendt og efterset af et bemyndiget organ.</li>
      <li>Udarbejdelse af <strong>skriftlige driftsanvisninger</strong> for drift, pasning og nødstop.</li>
      <li>At betjeningen varetages af kvalificeret og instrueret personale (certifikatkrav jf. § 24).</li>
    </ul>
  </div>
  <div class="card">
    <div class="card-head">
      <div class="card-num">§24</div>
      <div class="card-title">Kedelpasserens pligt</div>
    </div>
    <p>
      Som certificeret kedelpasser fungerer du som den <strong>sagkyndige person</strong>,
      der forestår den daglige, sikre drift. Dine pligter er:
    </p>
    <ul class="checklist">
      <li>At følge de skriftlige driftsanvisninger nøje.</li>
      <li>At overvåge driftsparametre og udføre lovpligtige test.</li>
      <li>At dokumentere alle hændelser og målinger i kedelbogen.</li>
      <li>At gribe ind og nødstandse kedlen ved kritiske afvigelser.</li>
    </ul>
  </div>
</div>

<!-- 1.4.2 Nødstandsning -->
<h3>1.4.2 Nødstandsning — Hvornår skal kedlen stoppes?</h3>
<p>
  Kedelpasseren har pligt til omgående at afbryde brænderen og nødstandse kedelanlægget,
  hvis der opstår forhold, som truer sikkerheden. De væsentligste nødstopskriterier er:
</p>

<div class="alert danger">
  <div class="alert-icon">!</div>
  <div class="alert-body">
    <div class="alert-title">Livsfare: Tørkogning (LSLL - Low Safety Level Limit)</div>
    <p>
      Hvis vandstanden falder under den absolut laveste tilladte grænse (LSLL):
      <strong>Afbryd brænderen omgående! Tilføj ALDRIG fødevand til en tørkogt kedel!</strong>
      Det kolde vand vil medføre en øjeblikkelig dampeksplosion med katastrofale trykstigninger
      og metalsprængning til følge. Kedlen skal køle helt ned og inspiceres for termiske
      skader (f.eks. revnede svejsninger eller deformerede rør), før den må tages i drift igen.
    </p>
  </div>
</div>

<div class="card">
  <h4>Kritiske situationer, der kræver omgående standsning:</h4>
  <ul class="checklist">
    <li><strong>Sikkerhedsventil-svigt:</strong> Hvis trykket stiger over det maksimalt tilladte arbejdstryk (PS), uden at sikkerhedsventilerne åbner, eller hvis de ikke lukker tæt.</li>
    <li><strong>Mekanisk skade / deformation:</strong> Hvis der konstateres revner, buler eller markante lækager på den trykbærende kedelkrop eller rørforbindelser.</li>
    <li><strong>Svigt af begrænsere:</strong> Hvis vitale sikkerhedsanordninger, såsom lavvandsbegrænseren, højtrykspressostaten eller flammeovervågningen, svigter.</li>
    <li><strong>Forbrændingsfejl:</strong> Kraftige røggaseksplosioner (puf) eller uforbrændt brændselsophobning i fyrboksen.</li>
  </ul>
</div>

<!-- 1.4.3 Kedelbogen -->
<h3>1.4.3 Kedelbogen (Lovpligtig dokumentation)</h3>
<p>
  Kedelbogen er anlæggets juridiske journal. Den skal opbevares i eller ved kedelrummet,
  være tilgængelig for Arbejdstilsynet og det bemyndigede organ, og være sikret mod
  efterfølgende ændringer (uforanderlig).
</p>

<table>
  <thead>
    <tr>
      <th>Kategori</th>
      <th>Specifikke logningskrav</th>
      <th>Driftsmæssigt formål</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Vandbehandling</strong></td>
      <td>Måling af pH, ledningsevne (µS/cm), hårdhed (°dH), fosfat (PO₄) og iltbindersulfat (SO₃).</td>
      <td>Forebyggelse af korrosion og opbygning af kedelsten (kalkbelægninger).</td>
    </tr>
    <tr>
      <td><strong>Sikkerhedstest</strong></td>
      <td>Dato, tidspunkt og resultat af manuel test af sikkerhedsventiler samt kontrol af lavvandsbegrænsere.</td>
      <td>Dokumentation for at sikkerhedskæden fungerer mekanisk og elektrisk.</td>
    </tr>
    <tr>
      <td><strong>Daglige rutiner</strong></td>
      <td>Bundblæsning (tidspunkt og varighed), overfladeblæsning/afsaltning, sodblæsning.</td>
      <td>Fjernelse af slam, styring af ledningsevne og optimering af varmeoverførsel.</td>
    </tr>
    <tr>
      <td><strong>Driftsjournal</strong></td>
      <td>Vagtovertagelse (med underskrift), registrerede alarmer, nødstop, reparationer og udskiftning af komponenter.</td>
      <td>Sikring af sporbarhed og kontinuerlig videndeling mellem vagthold.</td>
    </tr>
  </tbody>
</table>

<!-- 1.4.4 Sikkerhedsventiler - Afprøvningsintervaller -->
<h3>1.4.4 Sikkerhedsventiler — Afprøvnings- &amp; serviceintervaller</h3>
<p>
  For at garantere, at sikkerhedsventilen beskytter mod overtryk, skal der udføres
  systematisk test og vedligeholdelse efter følgende faste intervaller:
</p>

<div class="grid grid-3">
  <div class="card">
    <h4>Ugentligt</h4>
    <p><strong>Manuel afblæsning</strong></p>
    <p style="font-size: 13px; color: var(--ink-2);">
      Kedelpasseren foretager en manuel løftestangstest (blæsning). Formålet er at
      sikre, at ventilkeglen ikke sidder fast i sædet pga. kedelsten, korrosion eller urenheder.
    </p>
  </div>
  <div class="card">
    <h4>Årligt</h4>
    <p><strong>Funktionsafprøvning</strong></p>
    <p style="font-size: 13px; color: var(--ink-2);">
      Test af åbningstryk under det lovpligtige ydre eftersyn. Kedeltrykket hæves forsigtigt
      til ventilens indstillede tryk (PS) for at verificere, at den åbner og lukker korrekt.
      Skal overværes af det bemyndigede organ.
    </p>
  </div>
  <div class="card">
    <h4>Hvert 5. år</h4>
    <p><strong>Revision &amp; kalibrering</strong></p>
    <p style="font-size: 13px; color: var(--ink-2);">
      Sikkerhedsventilen afmonteres og sendes til et autoriseret ventilværksted. Her
      adskilles, rengøres, slibes, samles og trykprøves ventilen, hvorefter der udstedes et
      certifikat og påsættes en ny plombering. Sker typisk ved indre eftersyn.
    </p>
  </div>
</div>
```

---

## 4. Cross-Module Consistency & Navigation

*   **Relationship with Modul 07 (Drift & Vedligehold)**:  
    Modul 07 covers the practical steps of shift handovers, logbook writing, and blowdown processes. Modul 01 should focus on the **regulatory framework** (why the logbook is a legal document, what BEK 498/2024 demands, and what the formal testing intervals are). We should add cross-references in both modules to link them together.
    *   *In Modul 01*: Link to Modul 07 for the practical execution of a shift handover and daily operating procedures.
    *   *In Modul 07*: Cross-reference Modul 01 when discussing the legal requirements of the logbook.

*   **CSS Class Compliance**:  
    The proposed additions exclusively use pre-existing CSS classes defined in `assets/css/style.css`:
    *   `.grid`, `.grid-2`, `.grid-3` for multi-column responsive cards.
    *   `.card` and `.card-head` with `.card-num` and `.card-title` for structured text and sectioning.
    *   `.alert.danger` with `.alert-icon` and `.alert-body` for warning callouts.
    *   `.checklist` for bulleted points.
    *   Standard `table`, `thead`, `tbody`, `tr`, `th`, `td` styling.
    This ensures that the page layout matches the rest of the application without requiring custom style overrides.

---

## 5. Verification Strategy

The following checklist must be used to verify the correct implementation of the proposed content:
1.  **HTML Validation**: Ensure the added code has no open tags or syntax issues.
2.  **CSS Class Integrity**: Verify that no new classes or styles are introduced in the HTML.
3.  **Link Verification**: Ensure that relative links in the navigation (`../../index.html`, etc.) remain fully functional.
4.  **Danish Grammar & Spelling**: Verify that the technical Danish terms (*tørkogning*, *bemyndiget organ*, *ledningsevne*, *plombering*, *løftestangstest*) are used correctly and spelled accurately.
5.  **BEK 498/2024 Reference Accuracy**: Check that the references to § 23, § 24, and § 29 are correct and consistent with current Danish Working Environment Authority (Arbejdstilsynet) regulations.
