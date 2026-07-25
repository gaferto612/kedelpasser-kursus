# Handoff Report: Boiler Operator Duties & Documentation (Milestone 1)

**Role**: Explorer 3 (Milestone 1)  
**Destination**: Sub-Orchestrator  
**Working Directory**: `c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\.agents\explorer_m1_3`  
**Target File**: `docs/01-certifikater/index.html`

---

## 1. Observation

A detailed audit of `docs/01-certifikater/index.html` was conducted. The following verbatim lines and elements were analyzed:
*   **Section 1.4: Kedelpasserens ansvar** (lines 193-227):
    ```html
    <!-- ═══════════════════ KEDELPASSERENS ANSVAR ═══════════════════ -->
    <h2>1.4 Kedelpasserens ansvar</h2>
    
    <div class="grid grid-2">
      <div class="card">
        <h3>Daglige opgaver</h3>
        <ul>
          <li>Tilsyn med kedlens drift og sikkerhedsudstyr</li>
          <li>Aflæsning af tryk, temperatur og vandstand</li>
          <li>Vandanalyse efter foreskreven frekvens</li>
          <li>Bundblæsning og overfladeblæsning</li>
          <li>Føring af kedelbog</li>
        </ul>
      </div>
      <div class="card">
        <h3>Periodiske opgaver</h3>
        <ul>
          <li>Ugentlig afprøvning af sikkerhedsventil (manuelt løft)</li>
          <li>Ugentlig blæsning af vandstandsglas</li>
          <li>Månedlig kontrol af regulatorer og pressostater</li>
          <li>Tilsyn ved indre/ydre eftersyn af inspektionsorgan</li>
        </ul>
      </div>
    </div>
    
    <div class="alert warn">
      <div class="alert-icon">!</div>
      <div class="alert-body">
        <div class="alert-title">Vigtigt — Kedelbog</div>
        <p>Alle observationer, hændelser, vandanalyser, bundblæsninger og vagtskift
        skal indføres i kedelbogen. Den er det officielle dokument over kedlens drift
        og indgår i inspektionsorganets vurdering ved eftersyn.</p>
      </div>
    </div>
    ```
*   **No other sections** in this file address the legal obligations, nødstandsning rules (especially dry-cooking precautions), detailed logbook parameters, or safety valve testing intervals.

---

## 2. Logic Chain

1.  **Observation**: The current content only lists basic bullet points for daily/weekly tasks without defining the legal and technical scope of these tasks.
2.  **Premise**: Boiler operators in Denmark must understand the strict safety and legal implications of their role to pass the certification exam and run plants safely.
3.  **Inference**: The course must explicitly cover the legal responsibilities of the owner vs. operator under BEK 498/2024 § 23/24, critical emergency shutdown scenarios (such as dry-cooking, overpressure, and limiter failures), detailed logbook entry requirements (including water chemistry parameters), and safety valve testing frequencies (weekly manual, annual functional, 5-yearly workshop calibration).
4.  **Observation**: The site uses consistent styling classes like `.card`, `.grid`, `.alert`, `.checklist`, and `table`.
5.  **Inference**: To maintain visual consistency, the proposed additions must be formatted using these exact classes without external CSS/JS dependencies.
6.  **Conclusion**: Section 1.4 must be replaced and expanded with the structured layout proposed in `analysis.md`, using high-quality technical Danish and precise legal citations.

---

## 3. Caveats

*   **Read-Only Limitation**: This audit is strictly advisory. No code changes have been implemented in `docs/01-certifikater/index.html` by this agent.
*   **Cross-Module Consistency**: There is a minor overlap with Modul 07 (Drift & Vedligehold) regarding the practical side of the logbook. We recommend that Modul 01 maintains its focus on the **regulatory and compliance framework** (intervals, legal requirements, nødstop criteria), while cross-referencing Modul 07 for day-to-day operations.
*   **External Regulations**: References are based on the latest Danish executive order BEK 498/2024. Future revisions by Arbejdstilsynet will invalidate these specific section citations.

---

## 4. Conclusion

We recommend a complete replacement of Section 1.4 in `docs/01-certifikater/index.html` with a detailed, four-part subsection structure:
1.  **1.4.1 Juridiske roller (Bruger vs. Kedelpasser)**: Detailing § 23 and § 24 under BEK 498/2024.
2.  **1.4.2 Nødstandsning — Hvornår skal kedlen stoppes?**: Highlighting emergency shutdown criteria and the critical dry-cooking safety rule in a `.alert.danger` block.
3.  **1.4.3 Kedelbogen (Lovpligtig dokumentation)**: Providing a table detailing logbook requirements, including specific water chemistry parameters.
4.  **1.4.4 Sikkerhedsventiler — Afprøvnings- & serviceintervaller**: Structuring intervals (weekly manual, annual functional, 5-yearly workshop calibration) in a `.grid-3` layout.

*A ready-to-copy HTML blueprint and full translation in technical Danish are provided in `analysis.md`.*

---

## 5. Verification Method

To verify the subsequent implementation:
1.  **Inspection**: Check `docs/01-certifikater/index.html` to confirm that the new sections have been added and that the old section 1.4 is removed.
2.  **Visual Layout**: Open the HTML file in a web browser and verify that the grid layouts (`.grid.grid-2`, `.grid.grid-3`) and cards render correctly on both desktop and mobile viewports.
3.  **Link Integrity**: Verify that relative navigation links (`../../index.html` and `../02-dampkedler/`) work and are not broken.
4.  **Syntax Checking**: Validate the modified HTML file with an HTML linter or standard validator to ensure all tags are closed properly.
