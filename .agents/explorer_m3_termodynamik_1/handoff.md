# Handoff Report: Thermodynamics Audit & Expansions for Module 03

This report provides the detailed observations, logical reasoning, and recommended HTML/text additions (in technical Danish) for the Module 03 course content located in `docs/03-termodynamik/index.html`.

---

## 1. Observation

A read-only audit of the file `c:\Users\henri\Desktop\GitHub\kedelpasser-kursus\docs\03-termodynamik\index.html` revealed the following:

1. **Specific Heat Capacity of Water ($c_p$)** is treated as constant at $4.19\text{ kJ/kg}$ (lines 55–63):
   ```html
   55: <h3>Hvordan finder vi h'?</h3>
   56: <div class="formula">
   57: <b>Vand under 105 °C:</b>  h' = T × c<sub>p</sub> = T × <em>4,19</em> kJ/kg<br>
   58: <b>Vand over 105 °C:</b>   slå op i <em>damptabellen</em> (mættet væske)
   59: </div>
   ```
   No explanation is provided regarding the temperature or pressure dependency of $c_p$, nor is there any reference to the industrial standard formulation **IAPWS-IF97**.

2. **Superheated Steam (Overhedet damp)**:
   The document lacks any definitions, formulas, or explanations of superheated steam. Enthalpy lookup is limited to saturated liquid ($h'$) and saturated vapor ($h''$) in the steam table (lines 120–144).

3. **Steam Table Interpolation**:
   The steam table in Section 3.3 (lines 120–144) provides discrete entries for absolute pressure (1, 2, 4, 6, 8, 10, 13, 18, 20, 40, 60, 100 bar). There is no explanation or mathematical formula for how students should calculate properties at intermediate pressures (e.g., 5 bar or 15 bar) using linear interpolation.

4. **Boiler Efficiency Methods**:
   Section 3.4 (lines 206–211) only contains formulas for the **direct method** (den direkte metode):
   ```html
   206: <div class="formula">
   207: <b>Q indfyret</b>      = ṁ<sub>br</sub> × h<sub>i</sub>            [MJ/h]<br>
   208: <b>Q produceret</b>    = ṁ<sub>damp</sub> × (h'' − h'<sub>fødevand</sub>) [MJ/h]<br>
   209: <b>Virkningsgrad</b> η = Q<sub>produceret</sub> ÷ Q<sub>indfyret</sub><br>
   210: <b>Fordampningstal</b> = kg<sub>damp</sub> ÷ kg<sub>brændsel</sub>     <em>(eller m³n for gas)</em>
   211: </div>
   ```
   There is no mention of the **indirect method** (den indirekte metode / tabmetoden) according to European standards (**EN 12953-11** / **EN 12952-15**), nor is **Siegert's formula** (Siegerts formel) for flue gas loss ($q_f$) included.

5. **Turbine & Pump Thermodynamics**:
   Section 3.6 (lines 247–260) describes isentropic turbine efficiency and pump NPSH/cavitation qualitatively:
   ```html
   251: <div class="grid grid-2">
   252:   <div class="card">
   253:     <h3>⚙️ Isentropisk Turbinevirkningsgrad</h3>
   254:     <p>Når dampen ekspanderer gennem en dampturbine i et ideelt (isentropisk) system, foregår det uden ændring i entropi...</p>
   255:   </div>
   256:   <div class="card">
   257:     <h3>🌊 NPSH &amp; Kavitation</h3>
   258:     <p>Kedelfødevandspumper opererer med vand tæt på kogepunktet... For at undgå dette skal <strong>NPSH (Net Positive Suction Head)</strong> være tilstrækkelig højt...</p>
   259:   </div>
   260: </div>
   ```
   No mathematical formulas are given for isentropic turbine efficiency ($\eta_s$) or available NPSH ($NPSH_a$). In addition, physical mechanics of cavitation and engineering mitigation strategies are not detailed.

6. **References/Citations**:
   The document has no reference section or bibliography at the bottom of the page (it ends with the footer on line 276).

---

## 2. Logic Chain

1. **Specific Heat Capacity**:
   * *Premise*: Liquid water's specific heat capacity ($c_p$) is non-linear and varies between $4.18$ and $4.22\text{ kJ/(kg}\cdot\text{K)}$ in the range of $0$ to $100\text{ °C}$ under atmospheric pressure.
   * *Inference*: Presenting $c_p$ as a constant ($4.19\text{ kJ/kg}$) without qualification can lead to conceptual errors.
   * *Conclusion*: We must add a clarifying note explaining that $4.19\text{ kJ/(kg}\cdot\text{K)}$ is a simplified engineering average and reference **IAPWS-IF97** as the precise industrial model.

2. **Superheated Steam**:
   * *Premise*: Industrial steam systems frequently use superheating to prevent condensation in pipelines and increase turbine work capacity.
   * *Inference*: A thermodynamics module for boiler operators is incomplete without explaining how to determine or approximate superheated steam enthalpy ($h$).
   * *Conclusion*: We must introduce the superheated steam enthalpy approximation formula: $h = h'' + c_{p,\text{damp}} \cdot (T - T_{\text{sat}})$.

3. **Linear Interpolation**:
   * *Premise*: Boiler operating pressures rarely align perfectly with discrete values in small reference tables.
   * *Inference*: Operators and engineers must be able to perform linear interpolation to determine correct enthalpies.
   * *Conclusion*: We must add a section showing the general linear interpolation formula and a step-by-step example using values from the existing table.

4. **Boiler Efficiency**:
   * *Premise*: Industrial standards (EN 12953-11 for shell boilers and EN 12952-15 for water-tube boilers) define two main methods for efficiency evaluation: the direct method and the indirect (loss-based) method. Siegert's formula is the standard way to calculate the primary loss (flue gas loss).
   * *Inference*: The current material only teaches the direct method, neglecting the standard method used in flue gas analyzers.
   * *Conclusion*: We must expand the efficiency section to include both methods, defining the standard loss terms ($q_f, q_s, q_u, q_r$) and providing both oxygen and carbon dioxide forms of Siegert's formula with fuel-specific constants.

5. **Turbines & Pumper**:
   * *Premise*: Quantitative modeling of components is necessary for engineering diagnostics. Cavitation damages pumps and can be prevented by maintaining $NPSH_a > NPSH_r$.
   * *Inference*: Qualitative text alone is insufficient for calculating suction head margins or determining turbine losses.
   * *Conclusion*: We must replace the qualitative sections with mathematical definitions ($\eta_s$ and $NPSH_a$) and add structured lists for cavitation mechanics and mitigation strategies.

6. **References/Citations**:
   * *Premise*: Technical training material must be backed by official standards and recognized textbooks.
   * *Inference*: Currently, the page lacks external scientific references.
   * *Conclusion*: We must add a reference block containing the relevant European standards, IAPWS formulations, API pump standards, and thermodynamic textbooks.

---

## 3. Caveats

* **Execution Bounds**: The investigation was read-only; no live code or files were modified. The proposed HTML segments assume that the existing CSS file (`../../assets/css/style.css`) contains the required formatting for existing classes like `.formula`, `.card`, `.alert`, `.grid`, and `.note`.
* **Accuracy of Constants**: Siegert constants vary slightly across local guidelines (e.g., German vs. Danish engineering handbooks). The values chosen ($A = 0.38 - 0.70$) represent standard Danish boiler practice values.

---

## 4. Conclusion & Proposed Additions

To enhance the thermodynamic rigor of Module 03, the following changes are recommended for `docs/03-termodynamik/index.html`. All proposals are written in technical Danish and structured to comply with the existing CSS layouts.

### Proposal A: Clarification on $c_p$ and IAPWS-IF97
**Target Location**: Immediately after the formula box in Section 3.1 (around line 60).
**Proposed Danish Content**:
```html
<p class="note" style="margin-top: 10px; font-style: italic; font-size: 0.95em;">
  <strong>Bemærk:</strong> Den specifikke varmekapacitet for flydende vand ($c_p$) er ikke konstant, men varierer svagt med temperatur og tryk (f.eks. fra $4,22 \text{ kJ/(kg}\cdot\text{K)}$ ved $0\text{ °C}$ til $4,18 \text{ kJ/(kg}\cdot\text{K)}$ ved $35\text{ °C}$ og stiger igen til $4,21 \text{ kJ/(kg}\cdot\text{K)}$ ved $100\text{ °C}$). Værdien $4,19 \text{ kJ/(kg}\cdot\text{K)}$ er en forenklet ingeniørmæssig middelværdi. For nøjagtige, industrielle beregninger anvendes den internationale industristandard <strong>IAPWS-IF97</strong>.
</p>
```

### Proposal B: Add Superheated Steam Section
**Target Location**: Inside Section 3.1, before the subheader "Hvordan finder vi h'?" (around line 54).
**Proposed Danish Content**:
```html
<h3>Overhedet damp (h)</h3>
<p>Hvis damp opvarmes til en temperatur over mætningstemperaturen ved et givet tryk, kaldes den <strong>overhedet damp</strong>. Denne tilstand forekommer typisk efter en overheder (superheater). Enthalpien for overhedet damp ($h$) beregnes tilnærmet ved:</p>
<div class="formula">
  <b>h = h'' + c<sub>p,damp</sub> × (T − T<sub>sat</sub>)</b>  [kJ/kg]
</div>
<p>Hvor:</p>
<ul>
  <li><strong>h</strong> = entalpi for den overhedede damp [kJ/kg]</li>
  <li><strong>h''</strong> = mættet dampentalpi ved det givne tryk [kJ/kg] (fra damptabel)</li>
  <li><strong>c<sub>p,damp</sub></strong> = gennemsnitlig specifik varmekapacitet for damp, typisk ca. $1,9$ til $2,2 \text{ kJ/(kg}\cdot\text{K)}$ afhængig af tryk og temperatur</li>
  <li><strong>T</strong> = den aktuelle temperatur på den overhedede damp [°C]</li>
  <li><strong>T<sub>sat</sub></strong> = mætningstemperaturen ved det givne tryk [°C] (fra damptabel)</li>
</ul>
```

### Proposal C: Add Linear Interpolation Section
**Target Location**: Immediately after the table in Section 3.3, before the "Bevar alle decimaler" alert box (around line 145).
**Proposed Danish Content**:
```html
<h3>3.3.1 Lineær interpolation i damptabellen</h3>
<p>Når arbejdstrykket ligger mellem to værdier i damptabellen, anvendes <strong>lineær interpolation</strong> til at finde de mellemliggende entalpi-værdier:</p>

<div class="formula">
  <b>y = y<sub>1</sub> + &frac58;(x − x<sub>1</sub>) ÷ (x<sub>2</sub> − x<sub>1</sub>)&frac59; × (y<sub>2</sub> − y<sub>1</sub>)</b>
</div>

<p>Hvor:</p>
<ul>
  <li><strong>x</strong> = det tryk eller den temperatur, du ønsker at slå op</li>
  <li><strong>x<sub>1</sub>, x<sub>2</sub></strong> = de tabellagte værdier lige under og over $x$</li>
  <li><strong>y<sub>1</sub>, y<sub>2</sub></strong> = de tilsvarende entalpi-værdier i tabellen</li>
  <li><strong>y</strong> = den interpolerede entalpi ved $x$</li>
</ul>

<div class="card" style="margin-top: 15px;">
  <h4>Eksempel på interpolation:</h4>
  <p>Find specifik mættet væskeentalpi ($h'$) ved et absolut tryk på <strong>5 bar</strong>.</p>
  <p>Fra tabellen i 3.3 aflæses:</p>
  <ul>
    <li>$x_1 = 4\text{ bar} \rightarrow y_1 (h'_1) = 604,7\text{ kJ/kg}$</li>
    <li>$x_2 = 6\text{ bar} \rightarrow y_2 (h'_2) = 670,4\text{ kJ/kg}$</li>
  </ul>
  <p>Beregning:</p>
  <div class="formula">
    h' (5 bar) = 604,7 + &frac58;(5 − 4) ÷ (6 − 4)&frac59; × (670,4 − 604,7)<br>
    h' (5 bar) = 604,7 + 0,5 × 65,7 = <b>637,55 kJ/kg</b>
  </div>
</div>
```

### Proposal D: Expand Boiler Efficiency Methods
**Target Location**: In Section 3.4 (around line 205), replacing the formula block with a more thorough explanation.
**Proposed Danish Content**:
```html
<p>Virkningsgraden for en dampkedel kan beregnes på to måder i henhold til standarderne <strong>EN 12953-11</strong> (for røgrørskedler) og <strong>EN 12952-15</strong> (for vandrørskedler):</p>

<div class="grid grid-2">
  <div class="card">
    <h3>1. Den direkte metode</h3>
    <p>Kedlens virkningsgrad findes ved direkte måling af den producerede nyttevarme i forhold til den indfyrede brændselsenergi:</p>
    <div class="formula">
      <b>&eta; = [ ṁ<sub>damp</sub> × (h<sub>damp</sub> − h<sub>fødevand</sub>) ] ÷ [ ṁ<sub>br</sub> × h<sub>i</sub> ] × 100 %</b>
    </div>
    <p>Hvor:</p>
    <ul>
      <li><strong>ṁ<sub>damp</sub></strong> = dampmængde [kg/h]</li>
      <li><strong>h<sub>damp</sub></strong> = entalpi for den producerede damp ($h''$ eller $h$) [kJ/kg]</li>
      <li><strong>h<sub>fødevand</sub></strong> = entalpi for fødevandet ($h'$) [kJ/kg]</li>
      <li><strong>ṁ<sub>br</sub></strong> = brændselsforbrug [kg/h eller m³/h]</li>
      <li><strong>h<sub>i</sub></strong> = brændselets nedre brændværdi [kJ/kg eller kJ/m³]</li>
    </ul>
  </div>

  <div class="card">
    <h3>2. Den indirekte metode (Tabmetoden)</h3>
    <p>Her beregnes virkningsgraden ved at fratrække de enkelte varmetab fra 100 %:</p>
    <div class="formula">
      <b>&eta; = 100 % − (q<sub>f</sub> + q<sub>s</sub> + q<sub>u</sub> + q<sub>r</sub>)</b>
    </div>
    <p>Hvor tabene angives i procent [%]:</p>
    <ul>
      <li><strong>q<sub>f</sub></strong> = Røggastab (den varmeenergi, der forlader kedlen med røggassen)</li>
      <li><strong>q<sub>s</sub></strong> = Strålings- og konvektionstab fra kedelkroppen</li>
      <li><strong>q<sub>u</sub></strong> = Tab pga. uforbrændt kulstof i aske/sod</li>
      <li><strong>q<sub>r</sub></strong> = Resttab (f.eks. spædevandstab, afsalting og udblæsning)</li>
    </ul>
  </div>
</div>

<h3>Siegerts formel for røggastab (q<sub>f</sub>)</h3>
<p>Røggastabet er det dominerende tab i en kedel og kan beregnes ved måling af røggastemperaturen og luftens/iltens sammensætning:</p>
<div class="formula">
  <b>Baseret på tør ilt (O<sub>2</sub>):</b>  q<sub>f</sub> = A × (T<sub>røggas</sub> − T<sub>luft</sub>) ÷ (21 − O<sub>2</sub>)  [%]<br>
  <b>Baseret på tør kuldioxid (CO<sub>2</sub>):</b>  q<sub>f</sub> = C × (T<sub>røggas</sub> − T<sub>luft</sub>) ÷ CO<sub>2</sub>  [%]
</div>
<p>Hvor:</p>
<ul>
  <li><strong>T<sub>røggas</sub></strong> = røggastemperatur ved kedeludgang [°C]</li>
  <li><strong>T<sub>luft</sub></strong> = temperatur på indsugningsluften til brænderen [°C]</li>
  <li><strong>O<sub>2</sub></strong> = målt iltindhold i den tørre røggas [%]</li>
  <li><strong>CO<sub>2</sub></strong> = målt kuldioxidindhold i den tørre røggas [%]</li>
  <li><strong>A, C</strong> = brændselsspecifikke Siegert-konstanter:</li>
</ul>
<table>
  <thead>
    <tr>
      <th>Brændselstype</th>
      <th>Konstant A (ved O<sub>2</sub>)</th>
      <th>Konstant C (ved CO<sub>2</sub>)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Naturgas</td><td class="num">0,38</td><td class="num">0,50</td></tr>
    <tr><td>Fyringsolie (let)</td><td class="num">0,48</td><td class="num">0,57</td></tr>
    <tr><td>Fuelolie (tung)</td><td class="num">0,52</td><td class="num">0,62</td></tr>
    <tr><td>Kul (stenkul)</td><td class="num">0,65</td><td class="num">0,68</td></tr>
    <tr><td>Træ / biomasse</td><td class="num">0,70</td><td class="num">0,80</td></tr>
  </tbody>
</table>
```

### Proposal E: Expand Turbine and Pump Section
**Target Location**: Replace the entire Section 3.6 cards (lines 251–260) with the following detailed code.
**Proposed Danish Content**:
```html
<div class="grid grid-2">
  <div class="card">
    <h3>⚙️ Isentropisk Turbinevirkningsgrad (&eta;<sub>s</sub>)</h3>
    <p>En ideel dampturbine ekspanderer damp tabsfri (isentropisk, dvs. uden ændring i entropi). I virkeligheden vil mekanisk friktion og turbulens medføre et energitab. Den isentropiske virkningsgrad beskriver dette tab:</p>
    <div class="formula">
      <b>&eta;<sub>s</sub> = (h<sub>1</sub> − h<sub>2</sub>) ÷ (h<sub>1</sub> − h<sub>2s</sub>)</b>
    </div>
    <p>Hvor:</p>
    <ul>
      <li><strong>h<sub>1</sub></strong> = entalpi ved turbinens indløb [kJ/kg]</li>
      <li><strong>h<sub>2</sub></strong> = den virkelige entalpi ved turbinens udløb [kJ/kg]</li>
      <li><strong>h<sub>2s</sub></strong> = den teoretiske entalpi ved turbinens udløb under en perfekt isentropisk proces ($s_2 = s_1$) [kJ/kg]</li>
    </ul>
    <p>En lavere virkningsgrad betyder, at der overføres mindre mekanisk energi til akslen, og at afgangsdampen indeholder mere restvarme end teoretisk forventet.</p>
  </div>

  <div class="card">
    <h3>🌊 NPSH &amp; Kavitation</h3>
    <p>For at undgå kogning i fødevandspumpen skal det tilgængelige tryk ved pumpens sugestuds (NPSHa) altid være større end det af fabrikanten påkrævede tryk (NPSHr):</p>
    <div class="formula">
      <b>NPSH<sub>a</sub> &gt; NPSH<sub>r</sub> + sikkerhedsmargin (typisk 0,5 - 1,0 m)</b>
    </div>
    <p>Den tilgængelige trykhøjde beregnes ved:</p>
    <div class="formula">
      <b>NPSH<sub>a</sub> = (p<sub>tank, abs</sub> − p<sub>v</sub>) ÷ (&rho; × g) &plusmn; z<sub>s</sub> − h<sub>tab</sub></b>
    </div>
    <p>Hvor:</p>
    <ul>
      <li><strong>p<sub>tank, abs</sub></strong> = det absolutte tryk på væskeoverfladen i fødevandstanken [Pa]</li>
      <li><strong>p<sub>v</sub></strong> = vandets mætningsdamptryk ved den aktuelle fødevandstemperatur [Pa]</li>
      <li><strong>&rho;</strong> = vandets densitet [kg/m³]</li>
      <li><strong>g</strong> = tyngdeaccelerationen ($9,81\text{ m/s}^2$)</li>
      <li><strong>z<sub>s</sub></strong> = den lodrette højdeforskel fra tankens vandoverflade til pumpehjulets center [m] (positiv hvis tanken er hævet over pumpen)</li>
      <li><strong>h<sub>tab</sub></strong> = tryktab pga. friktion i sugeledningen [m]</li>
    </ul>

    <h4>Kavitationsmekanik</h4>
    <p>Hvis det statiske tryk i pumpens løbehjul falder under vandets damptryk ($p_v$), begynder vandet at koge lokaliseret. Der dannes dampbobler, som trækkes ind i områder med højere tryk længere inde i pumpen. Her kollapser (imploderer) dampboblerne med ekstrem hastighed. Implosionerne danner mikrosmæld og væskestråler med hastigheder op til $1000\text{ m/s}$ og trykspidser op til $10.000\text{ bar}$. Dette fører til pitting-skader (materialeudrivning), kraftig støj, vibrationer og reduceret pumpeydelse.</p>

    <h4>Afhjælpningsstrategier:</h4>
    <ol>
      <li><strong>Forøg den geodetiske højde (z<sub>s</sub>):</strong> Hæv fødevandstanken eller placer pumpen i en kælder.</li>
      <li><strong>Sænk fødevandstemperaturen:</strong> Reducerer damptrykket ($p_v$) markant.</li>
      <li><strong>Minimer sugetab (h<sub>tab</sub>):</strong> Gør sugerøret kortere, øg diameteren, og undgå skarpe bøjninger, ventiler og snavsede filtre.</li>
      <li><strong>Vælg den rigtige pumpe:</strong> Vælg en pumpe med et lavere påkrævet $NPSH_r$ eller installer en booster-pumpe.</li>
    </ol>
  </div>
</div>
```

### Proposal F: Add References Section
**Target Location**: Directly above the closing footer block (around line 275).
**Proposed Danish Content**:
```html
<!-- ═══════════════════ REFERENCER ═══════════════════ -->
<div class="card" style="margin-top: 40px; font-size: 0.9em; opacity: 0.85; border-left: 4px solid #ea580c;">
  <h3 style="margin-top: 0;">Litteratur, standarder &amp; referencer</h3>
  <ol style="padding-left: 20px; line-height: 1.6;">
    <li><strong>IAPWS-IF97:</strong> <em>"Formulation for the Thermodynamic Properties of Water and Steam for Industrial Use"</em>. Udgivet af International Association for the Properties of Water and Steam. Standarden bag alle moderne computermodeller og præcise damptabeller.</li>
    <li><strong>DS/EN 12953-11:</strong> <em>"Røgrørskedler - Del 11: Krav til modtagerinspektion af kedlen og forbrændingsudstyret"</em>. Dansk Standard. Definerer procedurerne for direkte og indirekte virkningsgradsbestemmelse på storrumskedler.</li>
    <li><strong>DS/EN 12952-15:</strong> <em>"Vandrørskedler og hjælpeinstallationer - Del 15: Modtagelsesprøvninger"</em>. Dansk Standard.</li>
    <li><strong>Siegert-formlen:</strong> Standardiseret tysk kedelpraksis for røggastabsberegninger, oprindeligt afledt under DIN 1942: <em>"Abnahmeversuche an Dampferzeugern"</em>.</li>
    <li><strong>API Standard 610 / ISO 13709:</strong> <em>"Centrifugal Pumps for Petroleum, Petrochemical and Natural Gas Industries"</em>. Beskriver bl.a. designregler og sikkerhedsmargener for NPSH.</li>
    <li><strong>Thermodynamics: An Engineering Approach</strong> af Yunus A. Çengel og Michael A. Boles. Klassisk akademisk værk om anvendt termodynamik, isentropisk ekspansion og fluidmekanik.</li>
  </ol>
</div>
```

---

## 5. Verification Method

To verify the integration and validity of these changes:
1. **HTML Structure Integrity**:
   Verify that all closing tags (`</div>`, `</li>`, `</ol>`, `</ul>`, `</td>`, `</tr>`, `</tbody>`, `</table>`) are correctly matched.
2. **Visual Inspection**:
   Open `docs/03-termodynamik/index.html` in a web browser. Verify that:
   * The new math equations in the formula boxes align correctly.
   * The table in the efficiency section displays correctly.
   * The reference section is formatted at the bottom of the page, above the footer, using the appropriate styles.
3. **Link Verification**:
   Ensure that the module navigation links in the header and footer (`Modul 02` and `Modul 04`) still work correctly.
