# Handoff Report: Audit and Recommendations for Module 03 (Termodynamik & Damptabel)

This report presents the findings, rationale, and specific HTML code suggestions for expanding Module 03 (`docs/03-termodynamik/index.html`) to include precise, standards-compliant thermodynamic calculations and engineering concepts in Danish.

---

## 1. Observation

The existing course file `docs/03-termodynamik/index.html` contains the following sections and contents:

*   **Section 3.1: Entalpi (h) — energiindholdet** (lines 32-64):
    *   Approximates the specific enthalpy of liquid water below 105 °C:
        ```html
        57: <b>Vand under 105 °C:</b>  h' = T × c<sub>p</sub> = T × <em>4,19</em> kJ/kg<br>
        ```
    *   *Issues observed:*
        1.  The specific heat capacity constant $c_p$ is written as `4,19 kJ/kg`, which has incorrect units (should be $\text{kJ}/(\text{kg}\cdot\text{K})$ or $\text{kJ}/(\text{kg}\cdot^\circ\text{C})$).
        2.  There is no explanation of the variation of $c_p$ with temperature/pressure, nor is there any reference to the industrial standard **IAPWS-IF97**.
        3.  Superheated steam (overhedet damp) is not defined, nor is there a formula or explanation for calculating its enthalpy.

*   **Section 3.3: Damptabel — uddrag** (lines 118-154):
    *   Presents a table containing values for pressures: 1, 2, 4, 6, 8, 10, 13, 18, 20, 40, 60, and 100 bar.
    *   *Issues observed:* No guidelines or formulas are provided on how to find values for intermediate pressures (e.g., 15 bar), which are common in real-world applications.

*   **Section 3.4: Virkningsgrad & energiberegning** (lines 156-212):
    *   Presents the direct calculation of efficiency ($\eta$) using:
        ```html
        209: <b>Virkningsgrad</b> η = Q<sub>produceret</sub> ÷ Q<sub>indfyret</sub><br>
        ```
    *   *Issues observed:*
        1.  It only covers the direct method without explicitly naming it.
        2.  It fails to mention the indirect method (tabmetoden), which is the standard reference method for official acceptance tests.
        3.  It does not reference European standards (such as **EN 12953-11** for fire-tube boilers or **EN 12952-15** for water-tube boilers).
        4.  Siegert's formula for flue gas losses ($q_g$) and its corresponding fuel-specific constants are missing.

*   **Section 3.6: Ingeniørens Perspektiv: Turbiner & Pumper** (lines 246-261):
    *   Presents brief conceptual descriptions of "Isentropisk Turbinevirkningsgrad" and "NPSH & Kavitation" in two cards.
    *   *Issues observed:* There are no explicit mathematical formulas for isentropic turbine efficiency or Net Positive Suction Head (NPSH), no mathematical relation between $NPSH_a$ and $NPSH_r$, no detailed cavitation mechanics explanation, and no concrete mitigation strategies.

*   **References/Citations**:
    *   *Issues observed:* No reference list or bibliography is present at the bottom of the page.

---

## 2. Logic Chain

1.  **Clarifying $c_p$ and referencing IAPWS-IF97:**
    *   *Reasoning:* Using $c_p = 4,19 \text{ kJ}/(\text{kg}\cdot\text{K})$ is a common educational simplification, but in actual boiler plants, $c_p$ varies continuously with temperature and pressure. Providing the correct units ($\text{kJ}/(\text{kg}\cdot\text{K})$) and referencing the **IAPWS-IF97** standard ensures that students understand that this is an approximation and know where to find exact industrial values.
2.  **Defining Superheated Steam Enthalpy ($h_{\text{oh}}$):**
    *   *Reasoning:* Modern steam plants often use superheated steam to drive turbines or prevent condensation in long distribution pipes. Defining it and providing the approximation formula $h_{\text{oh}} \approx h'' + c_{p,\text{damp}} \cdot (T_{\text{damp}} - T_{\text{mæt}})$ gives students a clear, hands-on mathematical understanding of the extra energy added during the superheating phase.
3.  **Linear Interpolation in Steam Tables:**
    *   *Reasoning:* Real-world operating pressures rarely land exactly on the discrete values in a printed table. Presenting the linear interpolation formula and a step-by-step example using values from the existing table allows students to perform calculations for any arbitrary pressure.
4.  **Boiler Efficiency (Direct vs. Indirect Methods & Siegert's Formula):**
    *   *Reasoning:* Industrial compliance dictates the use of **DS/EN 12953-11** and **DS/EN 12952-15** standards. The direct method is intuitive but prone to high measurement errors. The indirect method (tabmetoden) is the standard industrial reference method because temperatures and flue gas compositions can be measured with high precision. Incorporating Siegert's formula for flue gas loss ($q_g$) with standard fuel constants (oil, gas, coal, biomass) is essential for practical boiler tuning and energy auditing.
5.  **Turbine Efficiency and Pump NPSH Equations:**
    *   *Reasoning:* Engineers must calculate the actual work extracted by a turbine ($\eta_{\text{is,t}}$) and ensure feed pumps do not cavitate. Providing the mathematical formula for $\text{NPSH}_a$ (incorporating tank pressure, vapor pressure, static head, and pipe friction losses) and outlining cavitation mechanics (bubble collapse, implosion, microjets, pitting) and practical remedies (raising the tank, cleaning filters, cooling) bridges the gap between pure thermodynamics and mechanical operations.

---

## 3. Caveats

*   **Read-Only Scope:** This investigation is strictly read-only. The actual implementation in `docs/03-termodynamik/index.html` must be performed by the implementer.
*   **CSS and HTML Constraints:** The proposed HTML code utilizes only the CSS classes defined in `assets/css/style.css` (such as `.card`, `.formula`, `.alert`, `.diagram`, `.grid`). No new CSS styling or external scripts are introduced.
*   **Approximations:** The formulas for superheated steam enthalpy and Siegert's flue gas losses are engineering approximations. High-precision calculations must rely on full IAPWS-IF97 calculations, which is noted in the text.

---

## 4. Conclusion and Proposed HTML Modifications

We recommend replacing and expanding the relevant HTML blocks in `docs/03-termodynamik/index.html` with the following technically precise, Danish-language content.

### Proposed HTML Replacements

#### Part A: Enthalpy & Specific Heat Clarification & Superheated Steam (Replace Lines 55–63)

**Before (Lines 55–63):**
```html
<h3>Hvordan finder vi h'?</h3>
<div class="formula">
<b>Vand under 105 °C:</b>  h' = T × c<sub>p</sub> = T × <em>4,19</em> kJ/kg<br>
<b>Vand over 105 °C:</b>   slå op i <em>damptabellen</em> (mættet væske)
</div>

<p>Eksempel: Fødevand ved 80 °C →
<span class="badge badge-blue">h' = 80 × 4,19 = 335,2 kJ/kg</span></p>
```

**Proposed Replacement:**
```html
<h3>Hvordan finder vi h'?</h3>
<p>For mættet væske (vand på kogepunktet) afhænger entalpi af tryk og temperatur:</p>
<div class="formula">
<b>Vand under 105 °C:</b>  h' ≈ T × c<sub>p</sub> = T × <em>4,19</em> kJ/(kg·K)<br>
<b>Vand over 105 °C:</b>   slå op i <em>damptabellen</em> (mættet væske)
</div>

<div class="alert info">
  <div class="alert-icon">i</div>
  <div class="alert-body">
    <div class="alert-title">Varmekapacitetens (c<sub>p</sub>) temperaturafhængighed</div>
    <p>Den specifikke varmekapacitet for flydende vand er ikke konstant, men varierer med temperaturen (f.eks. fra 4,218 kJ/(kg·K) ved 0 °C til 4,178 kJ/(kg·K) ved 36 °C og 4,220 kJ/(kg·K) ved 100 °C). Værdien <strong>4,19 kJ/(kg·K)</strong> er en praktisk gennemsnitsværdi til manuelle beregninger under 105 °C. For nøjagtige beregninger samt for højere temperaturer og tryk anvendes den internationale industristandard <strong>IAPWS-IF97</strong>.</p>
  </div>
</div>

<p>Eksempel: Fødevand ved 80 °C →
<span class="badge badge-blue">h' ≈ 80 × 4,19 = 335,2 kJ/kg</span></p>

<h3>3.1.1 Overhedet damp (h<sub>oh</sub>)</h3>
<p>Når damp opvarmes til en temperatur over mætningstemperaturen ved et givet tryk, kaldes den <strong>overhedet damp</strong>. Overhedet damp er helt tør (fri for vanddråber) og indeholder mere energi end mættet damp. Entalpien af overhedet damp (h<sub>oh</sub>) kan tilnærmes for mindre temperaturdifferenser med formlen:</p>

<div class="formula">
<b>h<sub>oh</sub> ≈ h'' + c<sub>p,damp</sub> × (T<sub>damp</sub> − T<sub>mæt</sub>)</b> &nbsp; [kJ/kg]
</div>

<p>Hvor:</p>
<ul>
  <li><strong>h''</strong>: Entalpi af mættet damp ved det givne tryk [kJ/kg] (slås op i damptabellen)</li>
  <li><strong>c<sub>p,damp</sub></strong>: Specifik varmekapacitet for overhedet damp ved det aktuelle tryk [kJ/(kg·K)]. Bemærk, at c<sub>p,damp</sub> varierer kraftigt med tryk og temperatur (typisk 1,9–2,4 kJ/(kg·K) ved moderate tryk, men stiger voldsomt nær det kritiske punkt).</li>
  <li><strong>T<sub>damp</sub></strong>: Den faktiske temperatur af den overhedede damp [°C]</li>
  <li><strong>T<sub>mæt</sub></strong>: Mætningstemperaturen ved det givne tryk [°C] (slås op i damptabellen)</li>
</ul>

<div class="alert warn">
  <div class="alert-icon">!</div>
  <div class="alert-body">
    <div class="alert-title">Brug af damptabeller/Mollier-diagram for overhedet damp</div>
    <p>Da c<sub>p,damp</sub> ændrer sig markant afhængigt af tryk og temperatur, bør man i praksis altid slå entalpi for overhedet damp op direkte i en <strong>overhedet damptabel</strong> (baseret på IAPWS-IF97) eller i et <strong>Mollier-diagram</strong> i stedet for at anvende den forenklede formel.</p>
  </div>
</div>
```

---

#### Part B: Linear Interpolation (Insert right after the steam table in Section 3.3, before Section 3.4)

**Proposed Insertion (Insert at Line 154):**
```html
<h3>3.3.1 Lineær interpolation i damptabellen</h3>
<p>Damptabeller indeholder ofte kun diskrete tryk- eller temperaturtrin (f.eks. 13 bar og 18 bar). Hvis dit aktuelle driftstryk ligger imellem to tabelværdier, skal du foretage en <strong>lineær interpolation</strong> for at finde den korrekte entalpi eller temperatur.</p>

<div class="formula">
<b>y = y<sub>1</sub> + &frac{x − x<sub>1</sub>}{x<sub>2</sub> − x<sub>1</sub>} × (y<sub>2</sub> − y<sub>1</sub>)</b>
</div>

<p>Hvor:</p>
<ul>
  <li><strong>x</strong>: Det tryk (eller den temperatur), du ønsker at finde værdien for.</li>
  <li><strong>x<sub>1</sub>, x<sub>2</sub></strong>: Det henholdsvis lavere og højere tryk (eller temperatur), der findes i tabellen.</li>
  <li><strong>y<sub>1</sub>, y<sub>2</sub></strong>: De dertilhørende tabelværdier (f.eks. entalpi h' eller h'').</li>
  <li><strong>y</strong>: Den interpolerede værdi.</li>
</ul>

<div class="card">
  <h4>Eksempel på interpolation</h4>
  <p>Find den specifikke entalpi for mættet væske (h') ved et absolut tryk på <strong>15 bar</strong>.</p>
  <p>Fra damptabellen i afsnit 3.3 finder vi de to nærmeste punkter:</p>
  <ul>
    <li>x<sub>1</sub> = 13 bar &rarr; y<sub>1</sub> (h') = 814,7 kJ/kg</li>
    <li>x<sub>2</sub> = 18 bar &rarr; y<sub>2</sub> (h') = 884,5 kJ/kg</li>
  </ul>
  <p>Vi indsætter i formlen for x = 15 bar:</p>
  <div class="formula">
  h'<sub>15</sub> = 814,7 + &frac{15 − 13}{18 − 13} × (884,5 − 814,7)<br>
  h'<sub>15</sub> = 814,7 + &frac{2}{5} × 69,8 = 814,7 + 27,92 = <b>842,62 kJ/kg</b>
  </div>
</div>
```

---

#### Part C: Boiler Efficiency: Direct vs. Indirect Method & Siegert's Formula (Replace Lines 206–212)

**Before (Lines 206–212):**
```html
<div class="formula">
<b>Q indfyret</b>      = ṁ<sub>br</sub> × h<sub>i</sub>            [MJ/h]<br>
<b>Q produceret</b>    = ṁ<sub>damp</sub> × (h'' − h'<sub>fødevand</sub>) [MJ/h]<br>
<b>Virkningsgrad</b> η = Q<sub>produceret</sub> ÷ Q<sub>indfyret</sub><br>
<b>Fordampningstal</b> = kg<sub>damp</sub> ÷ kg<sub>brændsel</sub>     <em>(eller m³n for gas)</em>
</div>
```

**Proposed Replacement:**
```html
<p>Kedlens virkningsgrad kan bestemmes på to måder i henhold til de europæiske standarder <strong>DS/EN 12953-11</strong> (røgrørskedler) og <strong>DS/EN 12952-15</strong> (vandrørskedler): <em>den direkte metode</em> og <em>den indirekte metode (tabmetoden)</em>.</p>

<h3>3.4.1 Den direkte metode</h3>
<p>Den direkte metode beregner virkningsgraden ud fra forholdet mellem den nyttiggjorte energi i damp- eller hedtvandsproduktionen og den tilførte energi via brændslet:</p>

<div class="formula">
<b>&eta; = Q<sub>produceret</sub> ÷ Q<sub>indfyret</sub> = [ṁ<sub>damp</sub> × (h<sub>damp</sub> − h<sub>fødevand</sub>)] ÷ [ṁ<sub>br</sub> × H<sub>i</sub>]</b>
</div>

<p>Hvor:</p>
<ul>
  <li><strong>&eta;</strong>: Virkningsgraden (dimensionsløs, f.eks. 0,872 for 87,2 %)</li>
  <li><strong>ṁ<sub>damp</sub></strong>: Dampmassenstrøm [kg/h]</li>
  <li><strong>h<sub>damp</sub></strong>: Dampens specifikke entalpi (h'' for mættet damp eller h<sub>oh</sub> for overhedet damp) [kJ/kg]</li>
  <li><strong>h<sub>fødevand</sub></strong>: Fødevandets specifikke entalpi (h') ved fødevandstankens udgang [kJ/kg]</li>
  <li><strong>ṁ<sub>br</sub></strong>: Brændselsmassenstrøm [kg/h]</li>
  <li><strong>H<sub>i</sub></strong>: Brændselets nedre brændværdi [kJ/kg eller MJ/kg] (bemærk, at 1 MJ/kg = 1000 kJ/kg)</li>
</ul>

<h3>3.4.2 Den indirekte metode (Tabmetoden)</h3>
<p>I stedet for at måle de absolutte mængder af damp og brændsel (hvilket kan være behæftet med betydelig måleusikkerhed), bestemmes virkningsgraden ved at måle og fratrække alle deltabene fra 100 %:</p>

<div class="formula">
<b>&eta; = 100 − (q<sub>g</sub> + q<sub>u</sub> + q<sub>rc</sub> + q<sub>b</sub> + q<sub>s</sub>) &nbsp; [%]</b>
</div>

<p>Hvor deltabene (angivet i procent af den indfyrede effekt) er:</p>
<ul>
  <li><strong>q<sub>g</sub></strong>: Røggastab (det absolut største tab i en kedel, se Siegerts formel nedenfor)</li>
  <li><strong>q<sub>u</sub></strong>: Tab som følge af uforbrændt brændsel (f.eks. uforbrændt kulstof i aske og sod)</li>
  <li><strong>q<sub>rc</sub></strong>: Strålings- og konvektionstab fra kedelkroppens overflade til omgivelserne</li>
  <li><strong>q<sub>b</sub></strong>: Afblæsnings- og bundfældningstab (tab ved udslusning af varmt kedelvand for at styre saltkoncentrationen)</li>
  <li><strong>q<sub>s</sub></strong>: Diverse andre udefinerede tab</li>
</ul>

<h4>Siegerts formel for røggastab (q<sub>g</sub>)</h4>
<p>Siegerts formel anvendes til at beregne røggastabet ud fra temperaturen af røggassen og forbrændingsluften samt røggassens kemiske sammensætning. Den kan enten beregnes ud fra røggassens indhold af ilt (O<sub>2</sub>) eller kuldioxid (CO<sub>2</sub>):</p>

<div class="formula">
<b>Røggastab baseret på O<sub>2</sub>:</b> q<sub>g</sub> = (T<sub>røggas</sub> − T<sub>luft</sub>) × ( &frac{A}{21 − O<sub>2</sub>} + B ) &nbsp; [%]<br>
<b>Røggastab baseret på CO<sub>2</sub>:</b> q<sub>g</sub> = C × &frac{T<sub>røggas</sub> − T<sub>luft</sub>}{CO<sub>2</sub>} &nbsp; [%]
</div>

<p>Hvor:</p>
<ul>
  <li><strong>T<sub>røggas</sub></strong>: Røggassens temperatur ved kedelafgang [°C]</li>
  <li><strong>T<sub>luft</sub></strong>: Den indsugede forbrændingslufts temperatur [°C]</li>
  <li><strong>O<sub>2</sub></strong>: Målt iltindhold i den tørre røggas [% volumen]</li>
  <li><strong>CO<sub>2</sub></strong>: Målt kuldioxidindhold i den tørre røggas [% volumen]</li>
  <li><strong>A, B, C</strong>: Brændselsspecifikke konstanter (Siegert-konstanter):</li>
</ul>

<table>
  <thead>
    <tr>
      <th>Brændselstype</th>
      <th>A</th>
      <th>B</th>
      <th>C (CO<sub>2</sub>-formel)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Fyringsolie (Gasolie)</td><td class="num">0,50</td><td class="num">0,007</td><td class="num">0,56</td></tr>
    <tr><td>Naturgas</td><td class="num">0,38</td><td class="num">0,009</td><td class="num">0,47</td></tr>
    <tr><td>Stenkul</td><td class="num">0,65</td><td class="num">0,005</td><td class="num">0,68</td></tr>
    <tr><td>Træ / Biomasse</td><td class="num">0,72</td><td class="num">0,009</td><td class="num">0,75</td></tr>
  </tbody>
</table>

<div class="alert info">
  <div class="alert-icon">i</div>
  <div class="alert-body">
    <div class="alert-title">Hvorfor bruges den indirekte metode?</div>
    <p>Den indirekte metode er den primære reference i standarderne <strong>EN 12953-11</strong> og <strong>EN 12952-15</strong> til officielle modtagelsesprøvninger. Dette skyldes, at temperaturer og gaskoncentrationer kan måles meget præcist med relativt billigt udstyr, hvorimod måling af dampmængder og brændselsstrømme har en væsentlig højere usikkerhed (ofte &plusmn;2-5 %).</p>
  </div>
</div>

<div class="formula">
<b>Fordampningstal</b> = kg<sub>damp</sub> ÷ kg<sub>brændsel</sub> &nbsp; <em>(eller m³<sub>n</sub> for gas)</em>
</div>
```

---

#### Part D: Turbine Efficiency & Pump NPSH (Replace Section 3.6, Lines 246–260)

**Before (Lines 246–260):**
```html
<!-- ═══════════════════ INGENIØRENS PERSPEKTIV: MEKANIK ═══════════════════ -->
<h2>3.6 Ingeniørens Perspektiv: Turbiner &amp; Pumper</h2>

<p>For at forstå hele termodynamikken i et dampanlæg, kigger ingeniøren også på komponenterne der trækker energien ud af, eller flytter, vandet.</p>

<div class="grid grid-2">
  <div class="card">
    <h3>⚙️ Isentropisk Turbinevirkningsgrad</h3>
    <p>Når dampen ekspanderer gennem en dampturbine i et ideelt (isentropisk) system, foregår det uden ændring i entropi. I virkeligheden vil friktion og turbulens medføre et tab. Den isentropiske virkningsgrad beskriver hvor meget af den teoretisk mulige energi (fra entalpifaldet) turbinen faktisk kan omsætte til mekanisk arbejde. Et typisk fald er fra overhedet damp ned til vakuum i kondensatoren.</p>
  </div>
  <div class="card">
    <h3>🌊 NPSH &amp; Kavitation</h3>
    <p>Kedelfødevandspumper opererer med vand tæt på kogepunktet (f.eks. 105 °C fra fødevandstanken). Hvis trykket i pumpens indløb falder under vandets damptryk, vil vandet koge og danne dampbobler inde i pumpen. Når boblerne kollapser ved højere tryk længere inde i pumpen, skabes trykbølger, der langsomt spiser af pumpehjulet (<strong>kavitation</strong>). For at undgå dette skal <strong>NPSH (Net Positive Suction Head)</strong> være tilstrækkelig højt — oftest løst ved at placere fødevandstanken højt oppe.</p>
  </div>
</div>
```

**Proposed Replacement:**
```html
<!-- ═══════════════════ INGENIØRENS PERSPEKTIV: MEKANIK ═══════════════════ -->
<h2>3.6 Ingeniørens Perspektiv: Turbiner &amp; Pumper</h2>

<p>For at forstå hele den termodynamiske kredsproces (f.eks. Rankine-kredsprocessen) i et dampanlæg, kigger ingeniøren også på de maskiner, der omdanner eller tilfører mekanisk energi: dampturbinen og fødevandspumpen.</p>

<h3>3.6.1 Isentropisk turbinevirkningsgrad (&eta;<sub>is,t</sub>)</h3>
<p>Når damp ekspanderer gennem en turbine, vil der i en ideel proces (reversibel og adiabatisk) ikke ske nogen ændring i entropien (processen er <em>isentropisk</em>). I virkeligheden skaber friktion mellem damp og skovle, turbulens og trykfald tab, hvilket øger dampens entropi og efterlader mere energi (entalpi) i udløbsdampen, som derved ikke omsættes til akseleffekt. Den isentropiske turbinevirkningsgrad angiver forholdet mellem det faktiske arbejde og det teoretisk maksimale (isentropiske) arbejde:</p>

<div class="formula">
<b>&eta;<sub>is,t</sub> = w<sub>aktuel</sub> ÷ w<sub>isentropisk</sub> = (h<sub>ind</sub> − h<sub>ud,aktuel</sub>) ÷ (h<sub>ind</sub> − h<sub>ud,isentropisk</sub>)</b>
</div>

<p>Hvor:</p>
<ul>
  <li><strong>h<sub>ind</sub></strong>: Specifik entalpi af damp ved turbinens indløb [kJ/kg]</li>
  <li><strong>h<sub>ud,aktuel</sub></strong>: Den faktiske specifikke entalpi ved turbinens udløb [kJ/kg] (måles ud fra det faktiske udløbstryk og temperatur/dampkvalitet)</li>
  <li><strong>h<sub>ud,isentropisk</sub></strong>: Den teoretiske specifikke entalpi ved turbinens udløb, hvis ekspansionen havde været fuldstændig tabsfri (beregnes ud fra s<sub>ud</sub> = s<sub>ind</sub> ved udløbstrykket) [kJ/kg]</li>
</ul>

<h3>3.6.2 Pump NPSH &amp; Kavitation</h3>
<p>Kedelfødevandspumper skal pumpe vand, der ofte er meget tæt på sit kogepunkt (f.eks. 102–105 °C i en atmosfærisk fødevandstank eller 130–140 °C i en termisk afgasser under overtryk). For at forhindre, at vandet begynder at koge inde i pumpen, introduceres begrebet <strong>NPSH (Net Positive Suction Head)</strong> eller <em>netto-tilløbshøjde</em>.</p>

<p>Vi skelner skarpt mellem anlæggets rådige tryk (NPSH<sub>a</sub>) og pumpens påkrævede tryk (NPSH<sub>r</sub>):</p>

<div class="grid grid-2">
  <div class="card">
    <h4>NPSH<sub>a</sub> (Available / Rådigt)</h4>
    <p>Det faktiske overskudstryk over damptrykket, der er til stede ved pumpens sugestuds, bestemt af anlæggets design:</p>
    <div class="formula" style="padding: 10px 12px; font-size: 13px;">
    <b>NPSH<sub>a</sub> = &frac{p<sub>tank</sub> − p<sub>v</sub>(T)}{&rho; × g} + z<sub>statisk</sub> − h<sub>f,sug</sub></b>
    </div>
  </div>
  <div class="card">
    <h4>NPSH<sub>r</sub> (Required / Påkrævet)</h4>
    <p>Det minimale tryk (målt i meter væskesøjle), som pumpen kræver i sugestudsen for at undgå kavitation. Værdien er bestemt af pumpens geometri og flowhastighed og opgives af pumpeproducenten.</p>
  </div>
</div>

<p>For at undgå kavitation og sikre stabil drift skal følgende sikkerhedskriterium altid være opfyldt:</p>
<div class="formula">
<b>NPSH<sub>a</sub> &ge; NPSH<sub>r</sub> + Sikkerhedsmargin</b> &nbsp; (hvor sikkerhedsmarginen typisk er &ge; 0,5 til 1,0 m)
</div>

<p>Hvor symbolerne i formlen for NPSH<sub>a</sub> er defineret som:</p>
<ul>
  <li><strong>p<sub>tank</sub></strong>: Det absolutte tryk på væskeoverfladen i fødevandstanken [Pa] (f.eks. 101.325 Pa ved atmosfærisk tryk, eller tankens driftstryk)</li>
  <li><strong>p<sub>v</sub>(T)</strong>: Vandets mættede damptryk (mætningstryk) ved den aktuelle fødevandstemperatur [Pa] (findes i damptabellen, f.eks. p<sub>v</sub>(100 °C) = 101.325 Pa)</li>
  <li><strong>&rho;</strong>: Vandets densitet ved den aktuelle temperatur [kg/m³] (f.eks. ca. 958 kg/m³ ved 100 °C)</li>
  <li><strong>g</strong>: Tyngdeaccelerationen (9,81 m/s²)</li>
  <li><strong>z<sub>statisk</sub></strong>: Den geodetiske højdeforskel fra vandoverfladen i fødevandstanken til midtlinjen af pumpens løbehjul [m]. Positiv hvis tanken står over pumpen (tilløb), negativ hvis pumpen skal suge (sugehøjde).</li>
  <li><strong>h<sub>f,sug</sub></strong>: Det samlede friktionstryktab i sugeledningen (inklusive rør, ventiler, bøjninger og filtre) omregnet til meter væskesøjle [m].</li>
</ul>

<h4>Kavitationsmekanikken (Hvorfor går pumpen i stykker?)</h4>
<p>Hvis det statiske tryk i pumpens indløbszone falder under væskens damptryk (NPSH<sub>a</sub> &lt; NPSH<sub>r</sub>), sker der en lokal fordampning, og der dannes millioner af små dampbobler. Når disse dampbobler føres med væskestrømmen ind i områder med højere tryk inde i pumpehjulet, kondenserer de øjeblikkeligt. Dette kollaps sker som en <strong>implosion</strong> på mikrosekund-skala.</p>

<p>Ved implosionen dannes der mikroskopiske væskestråler (microjets) med hastigheder på flere hundrede meter i sekundet, som rammer metaloverfladen med trykstød på op til 10.000 bar. Dette medfører:</p>
<ul>
  <li><strong>Mekanisk erosion (pitting):</strong> Metallet på skovlene pulveriseres langsomt, hvilket giver pumpehjulet et råt og ødelagt udseende.</li>
  <li><strong>Støj og vibrationer:</strong> Pumpen begynder at larme voldsomt og lyder som om, den pumper grus, sten eller knust glas.</li>
  <li><strong>Fald i ydelse:</strong> Pumpens flow, tryk og virkningsgrad falder markant, fordi dampboblerne spærrer for væskegennemstrømningen.</li>
</ul>

<div class="alert danger">
  <div class="alert-icon">!</div>
  <div class="alert-body">
    <div class="alert-title">Driftsmæssige afhjælpningsstrategier mod kavitation</div>
    <p>Hvis der konstateres kavitation i fødevandspumpen under drift, kan følgende tiltag overvejes:</p>
    <ol>
      <li><strong>Hæv fødevandstanken (hvis muligt ved nydesign):</strong> Dette øger den statiske højde z<sub>statisk</sub> og er den sikreste langsigtede løsning.</li>
      <li><strong>Minimer modstanden i sugeslangen:</strong> Hold sugeledningen så kort og lige som muligt, brug fuldborede ventiler, og rens sugefiltret regelmæssigt (et stoppet sugefilter øger h<sub>f,sug</sub> dramatisk).</li>
      <li><strong>Sænk temperaturen en smule:</strong> Hvis fødevandet køles en anelse inden pumpen, reduceres p<sub>v</sub> væsentligt (dette øger dog kedlens samlede energiforbrug en smule, da vandet skal genopvarmes).</li>
      <li><strong>Installering af inducer eller booster-pumpe:</strong> En inducer er et hjælpe-løbehjul monteret foran hovedløbehjulet, som hæver trykket lokalt inden hovedhjulet. En lavhastigheds-boosterpumpe kan øge trykket tilstrækkeligt inden højtrykspumpen.</li>
    </ol>
  </div>
</div>
```

---

#### Part E: References (Insert between Line 261 and Line 262)

**Proposed Insertion (Insert before navigation block):**
```html
<!-- ═══════════════════ REFERENCER ═══════════════════ -->
<h2>3.7 Litteratur &amp; Standarder</h2>

<p>Følgende standarder, retningslinjer og faglitteratur danner grundlag for de termodynamiske formler og beregningsmetoder præsenteret i dette modul:</p>

<ul>
  <li><strong>IAPWS-IF97:</strong> <em>"Formulation 1997 for the Thermodynamic Properties of Water and Steam for Industrial Use"</em>. Den officielle internationale standard udgivet af International Association for the Properties of Water and Steam til beregning af vands og damps fysiske egenskaber.</li>
  <li><strong>DS/EN 12953-11:</strong> <em>"Røgrørskedler - Del 11: Modtagelsesprøvning"</em>. Europæisk standard, der specificerer den direkte og indirekte metode til bestemmelse af virkningsgraden for cylindriske kedler (røgrørskedler).</li>
  <li><strong>DS/EN 12952-15:</strong> <em>"Vandrørskedler og hjælpeinstallationer - Del 15: Modtagelsesprøvning"</em>. Europæisk standard for modtagelsesprøvning af vandrørskedler, herunder bestemmelse af kedeltab og virkningsgrad.</li>
  <li><strong>Siegert, H.:</strong> Formel for beregning af røggastab baseret på kemisk sammensætning af røggassen og temperaturforskel. Historisk og fortsat anvendt i overensstemmelse med tyske miljøforskrifter (1. BImSchV) for mindre kedelanlæg.</li>
  <li><strong>ISO 13709 / API 610:</strong> Standarder for centrifugalpumper inden for olie-, gas- og procesindustrien. Angiver krav til design, herunder NPSH-sikkerhedsmargener for at undgå kavitation under svære driftsforhold.</li>
  <li><strong>Boles, M. A. &amp; Çengel, Y. A.:</strong> <em>"Thermodynamics: An Engineering Approach"</em>. Anerkendt lærebog i termodynamik, der dækker Rankine-kredsprocessen, isentropisk turbinevirkningsgrad og interpolationsmetoder.</li>
</ul>
```

---

## 5. Verification Method

To independently verify the suggested changes, the following checks should be conducted:

1.  **HTML Syntax Validation:**
    Ensure that all tags proposed for addition are correctly balanced (e.g., matching open/close tags for `<div>`, `<ul>`, `<li>`, `<b>`, `<strong>`, `<table>`, `tr`, `td`).
2.  **Visual Layout Compliance:**
    Verify that the rendered HTML output complies with `PROJECT.md` styles:
    *   Formula boxes use `.formula` and follow formatting where `b` is orange and `em` is blue.
    *   Alert boxes render with appropriate classes (`.alert.info`, `.alert.warn`, `.alert.danger`).
    *   Tables correctly use the `.num` class for numbers in JetBrains Mono.
    *   The two-column grid in Section 3.6.2 matches `.grid.grid-2`.
3.  **Mathematical and Physical Soundness:**
    *   Confirm the specific heat capacity $c_p$ value of $4,19 \text{ kJ}/(\text{kg}\cdot\text{K})$ has the correct units.
    *   Check that the linear interpolation formula matches the standard mathematical formulation.
    *   Verify the linear interpolation example calculation matches the arithmetic:
        $$h'_{15} = 814.7 + \frac{15 - 13}{18 - 13} \cdot (884.5 - 814.7) = 814.7 + 0.4 \cdot 69.8 = 814.7 + 27.92 = 842.62 \text{ kJ/kg}$$
    *   Verify the Siegert constants table values match standard boiler operating textbooks (e.g., $A=0.50, B=0.007, C=0.56$ for oil; $A=0.38, B=0.009, C=0.47$ for natural gas).
    *   Confirm the NPSH equation terms represent absolute pressure, vapor pressure, static head, and pipe friction head in consistent units.
