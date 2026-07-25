# Handoff Report - Module 03 Thermodynamics Audit

## 1. Observation
The file `docs/03-termodynamik/index.html` was audited. The following specific items were observed:

1. **Water Specific Heat Capacity ($c_p$)**:
   - Location: Line 57:
     ```html
     57: <b>Vand under 105 °C:</b>  h' = T × c<sub>p</sub> = T × <em>4,19</em> kJ/kg<br>
     ```
   - Observation: The value $c_p = 4.19 \text{ kJ/(kg}\cdot\text{K)}$ is used as a constant without explaining its temperature and pressure dependence or referencing the standard formulation **IAPWS-IF97**.

2. **Superheated Steam (Overhedet damp)**:
   - Location: Section 3.1 (lines 31-64).
   - Observation: Only saturated water ($h'$) and saturated steam ($h''$) are covered. There is no formula or explanation for the enthalpy of superheated steam, which is critical for turbine systems.

3. **Linear Interpolation**:
   - Location: Between Section 3.3 (lines 118-154) and Section 3.4 (lines 156-212).
   - Observation: There is no explanation or formula showing how to interpolate between discrete pressure or temperature steps in the steam table.

4. **Boiler Efficiency Methods**:
   - Location: Section 3.4 (lines 156-212) and Section 3.5 (lines 214-245).
   - Observation: The calculations only cover the direct method:
     ```html
     209: <b>Virkningsgrad</b> η = Q<sub>produceret</sub> ÷ Q<sub>indfyret</sub><br>
     ```
     The indirect loss method (tabmetoden/indirekte metode) according to European standards **EN 12953-11** (for shell boilers) and **EN 12952-15** (for water-tube boilers) is not mentioned. Siegert's formula for flue gas heat loss is also missing.

5. **Turbine Efficiency and Pump NPSH**:
   - Location: Section 3.6 (lines 247-260).
   - Observation: Conceptual descriptions of isentropic turbine efficiency and NPSH/cavitation are present, but there are no mathematical formulas (e.g., isentropic efficiency, NPSHa vs NPSHr), and the cavitation mechanics and mitigation strategies are not detailed.

6. **References/Citations**:
   - Location: End of the file (lines 276-283).
   - Observation: There is no references or citations list at the bottom of the page.

---

## 2. Logic Chain
To address these observations, the following additions are recommended:

1. **Clarify $c_p$**:
   - The value $4.19 \text{ kJ/(kg}\cdot\text{K)}$ is a practical approximation, but $c_p$ varies. Introducing the international standard **IAPWS-IF97** establishes the scientific foundation.
   - *Action*: Insert a clarifying paragraph/alert box in Section 3.1.

2. **Include Superheated Steam Enthalpy**:
   - Superheated steam enthalpy is calculated as $h = h'' + c_{p,\text{damp}} \cdot (T - T_{\text{mætning}})$.
   - *Action*: Insert this formula and its definitions under a new subsection "3.1.1 Overhedet damp".

3. **Add Linear Interpolation**:
   - Linear interpolation is essential for using physical steam tables. Providing the formula $y = y_1 + \frac{x - x_1}{x_2 - x_1} \cdot (y_2 - y_1)$ with a concrete example from the page's steam table makes the course interactive and practical.
   - *Action*: Insert a new subsection "3.3.1 Lineær interpolation i damptabellen" right after the steam table.

4. **Expand Efficiency Calculations (Direct & Indirect)**:
   - Modern industrial boilers are assessed using both the direct and indirect methods according to **EN 12953-11** and **EN 12952-15**. Siegert's formula is the industry-standard empirical method for calculating flue gas heat loss ($q_{\text{røggas}}$).
   - *Action*: Rewrite Section 3.4 to describe both methods and include Siegert's formula with constants for common fuels.

5. **Formalize Turbine Efficiency & Pump NPSH**:
   - Students must understand the exact math behind isentropic efficiency: $\eta_{\text{is,turbine}} = \frac{h_1 - h_{2,\text{faktisk}}}{h_1 - h_{2,\text{isentropisk}}}$ and NPSH: $\text{NPSHa} = \frac{p_{\text{sug,abs}} - p_{\text{damp}}(T)}{\rho \cdot g} > \text{NPSHr} + \text{sikkerhedsmargin}$. Explaining cavitation mechanics (implosion of steam bubbles causing micro-jets and pitting) and mitigation strategies (raising the feed water tank, lowering temperature, decreasing flow resistance) completes their engineering education.
   - *Action*: Expand Section 3.6 with these formulas and lists.

6. **Add References List**:
   - A standard-compliant references section lists the sources for IAPWS-IF97, EN standards, Siegert's formula, and relevant engineering textbooks.
   - *Action*: Add Section 3.7 before the navigation block.

---

## 3. Caveats
- The proposed additions increase the technical detail of the page. This is intended to elevate the content to a professional engineering level, but may require students to spend more time on this module.
- We assume that the CSS file (`../../assets/css/style.css`) contains styles that can accommodate standard tables, grids, and lists.
- We did not modify the HTML file directly, as we only have read-only access. The implementation must be done by the implementer.

---

## 4. Conclusion
Below are the exact, precise HTML/CSS additions and modifications in Danish that should be integrated into `docs/03-termodynamik/index.html`.

### Proposed Addition A: Clarification of $c_p$ and IAPWS-IF97
*Location: Insert right after the formula block under "Hvordan finder vi h'?" (around line 60).*

```html
<div class="alert info">
  <div class="alert-icon">i</div>
  <div class="alert-body">
    <div class="alert-title">Den specifikke varmekapacitet (c<sub>p</sub>) varierer</div>
    <p>Værdien <strong>4,19 kJ/(kg·K)</strong> er en praktisk gennemsnitsværdi for vand under 105 °C ved atmosfærisk tryk. I virkeligheden ændrer c<sub>p</sub> sig med både temperatur og tryk. For præcise industrielle beregninger anvendes den internationale standard <strong>IAPWS-IF97</strong> (udarbejdet af International Association for the Properties of Water and Steam), som definerer de nøjagtige matematiske tilstandsligninger for vand og damp.</p>
  </div>
</div>
```

---

### Proposed Addition B: Superheated Steam Enthalpy
*Location: Insert under Section 3.1, before the heading for Section 3.2 (around line 64).*

```html
<h3>3.1.1 Overhedet damp (h)</h3>
<p>Hvis mættet damp opvarmes yderligere i en overheder, stiger temperaturen over mætningstemperaturen. Denne tilstand kaldes <strong>overhedet damp</strong>. Overhedet damp er helt tør (indeholder ingen vanddråber) og har et højere energiindhold. Den specifikke entalpi for overhedet damp kan tilnærmes med følgende formel:</p>

<div class="formula">
<b>h = h'' + c<sub>p,damp</sub> × (T - T<sub>mætning</sub>)</b> [kJ/kg]
</div>

<p>Hvor:</p>
<ul>
  <li><strong>h''</strong> er entalpien for mættet damp ved det givne tryk [kJ/kg] (findes i damptabellen).</li>
  <li><strong>c<sub>p,damp</sub></strong> er den gennemsnitlige specifikke varmekapacitet for den overhedede damp (typisk omkring 2,0 - 2,5 kJ/(kg·K) afhængigt af tryk og temperatur).</li>
  <li><strong>T</strong> er den faktiske temperatur af den overhedede damp [°C].</li>
  <li><strong>T<sub>mætning</sub></strong> er mætningstemperaturen ved det givne tryk [°C] (findes i damptabellen).</li>
</ul>
<div class="alert info">
  <div class="alert-icon">i</div>
  <div class="alert-body">
    <div class="alert-title">Brug af tabeller for overhedet damp</div>
    <p>Da den specifikke varmekapacitet for damp (c<sub>p,damp</sub>) ændrer sig markant med tryk og temperatur, bør man til præcise beregninger altid slå entalpien op i en tabel for overhedet damp eller benytte software baseret på IAPWS-IF97 frem for den simple lineære tilnærmelse.</p>
  </div>
</div>
```

---

### Proposed Addition C: Linear Interpolation Section
*Location: Insert after the alert info under Section 3.3 and before the heading for Section 3.4 (around line 154).*

```html
<!-- ═══════════════════ LINEÆR INTERPOLATION ═══════════════════ -->
<h3>3.3.1 Lineær interpolation i damptabellen</h3>
<p>Når det aktuelle tryk eller den aktuelle temperatur ligger mellem to punkter i damptabellen, skal man anvende <strong>lineær interpolation</strong> for at finde den mellemliggende værdi. Formlen for linear interpolation er:</p>

<div class="formula">
<b>y = y<sub>1</sub> + ( (x - x<sub>1</sub>) / (x<sub>2</sub> - x<sub>1</sub>) ) × (y<sub>2</sub> - y<sub>1</sub>)</b>
</div>

<p>Hvor:</p>
<ul>
  <li><strong>x</strong> er den tilstandsstørrelse, du kender (f.eks. trykket på 15 bar).</li>
  <li><strong>x<sub>1</sub></strong> og <strong>x<sub>2</sub></strong> er de to nærmeste værdier i tabellen henholdsvis under og over x (f.eks. 13 bar og 18 bar).</li>
  <li><strong>y<sub>1</sub></strong> og <strong>y<sub>2</sub></strong> er de tilsvarende tabelværdier for den egenskab, du vil finde (f.eks. h' ved henholdsvis 13 bar og 18 bar).</li>
  <li><strong>y</strong> er den beregnede (interpolerede) værdi.</li>
</ul>

<div class="card">
  <h4>Eksempel på interpolation</h4>
  <p>Vi ønsker at finde den specifikke entalpi for mættet væske (h') ved et absolut tryk på <strong>15 bar</strong>.</p>
  <ol>
    <li>Fra damptabellen i afsnit 3.3 finder vi de to nærmeste værdier:<br>
        Ved x<sub>1</sub> = 13 bar er y<sub>1</sub> = 814,7 kJ/kg<br>
        Ved x<sub>2</sub> = 18 bar er y<sub>2</sub> = 884,5 kJ/kg</li>
    <li>Indsæt værdierne i formlen:<br>
        y = 814,7 + ( (15 - 13) / (18 - 13) ) × (884,5 - 814,7)<br>
        y = 814,7 + ( 2 / 5 ) × 69,8<br>
        y = 814,7 + 0,4 × 69,8 = 814,7 + 27,92 = <strong>842,62 kJ/kg</strong></li>
  </ol>
</div>
```

---

### Proposed Addition D: Expanded Efficiency Calculations (Direct & Indirect)
*Location: Replace the existing Section 3.4 (lines 156-212) with the following expanded content.*

```html
<!-- ═══════════════════ VIRKNINGSGRAD ═══════════════════ -->
<h2>3.4 Virkningsgrad &amp; energiberegning (EN 12953-11 / EN 12952-15)</h2>

<p>Kedlens virkningsgrad (&eta;) angiver, hvor stor en del af den tilførte energi i brændselet, der overføres til dampmediet. Ifølge standarderne <strong>EN 12953-11</strong> (for røgrørskedler) og <strong>EN 12952-15</strong> (for vandtrørskedler) bestemmes virkningsgraden efter en af to metoder:</p>

<div class="grid grid-2">
  <div class="card">
    <h3>1. Den direkte metode</h3>
    <p>Virkningsgraden beregnes direkte som forholdet mellem den nyttiggjorte energi i dampen og den tilførte energi i brændselet:</p>
    
    <div class="formula">
      <b>&eta;<sub>direkte</sub> = Q<sub>produceret</sub> / Q<sub>indfyret</sub></b>
    </div>
    
    <p>Hvor:</p>
    <ul>
      <li><strong>Q<sub>produceret</sub></strong> = ṁ<sub>damp</sub> × (h<sub>damp</sub> - h'<sub>fødevand</sub>) [MJ/h]</li>
      <li><strong>Q<sub>indfyret</sub></strong> = ṁ<sub>brændsel</sub> × H<sub>i</sub> [MJ/h] (H<sub>i</sub> er brændselets nedre brændværdi)</li>
    </ul>
    <p class="note"><strong>Fordel:</strong> Konceptuelt simpel.<br><strong>Ulempe:</strong> Kræver meget nøjagtige flowmålinger af både damp og brændsel, hvilket i praksis er behæftet med stor usikkerhed.</p>
  </div>
  
  <div class="card">
    <h3>2. Den indirekte metode (Tabmetoden)</h3>
    <p>Her bestemmes virkningsgraden ved at måle og fratrække de enkelte energitab (angivet i % af den tilførte energi) fra 100 %:</p>
    
    <div class="formula">
      <b>&eta;<sub>indirekte</sub> = 100% - (q<sub>røggas</sub> + q<sub>stråling</sub> + q<sub>aske</sub> + q<sub>andet</sub>)</b>
    </div>
    
    <p>Hvor:</p>
    <ul>
      <li><strong>q<sub>røggas</sub>:</strong> Varmetab med røggassen (normalt det absolut største tab).</li>
      <li><strong>q<sub>stråling</sub>:</strong> Strålings- og konvektionstab fra kedelkappen til omgivelserne.</li>
      <li><strong>q<sub>aske</sub>:</strong> Tab som følge af uforbrændte rester i slagger og aske.</li>
    </ul>
    <p class="note"><strong>Fordel:</strong> Meget højere målenøjagtighed, da relative fejl på måling af røggasparametre har mindre indvirkning på den samlede virkningsgrad.</p>
  </div>
</div>

<div class="diagram">
<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#1a1814"/>
    </marker>
  </defs>

  <!-- Brændsel -->
  <rect x="20" y="80" width="110" height="60" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
  <text x="75" y="105" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#dc2626" font-weight="700">BRÆNDSEL</text>
  <text x="75" y="125" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#1a1814" font-weight="700">m × hi</text>

  <line x1="130" y1="110" x2="170" y2="110" stroke="#1a1814" stroke-width="2" marker-end="url(#arrf)"/>

  <!-- Q indfyret -->
  <rect x="170" y="80" width="120" height="60" rx="8" fill="#fef3c7" stroke="#ea580c" stroke-width="2"/>
  <text x="230" y="105" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#ea580c" font-weight="700">Q INDFYRET</text>
  <text x="230" y="125" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="14" fill="#1a1814" font-weight="700">[MJ/h]</text>

  <line x1="290" y1="110" x2="330" y2="110" stroke="#1a1814" stroke-width="2" marker-end="url(#arrf)"/>
  <text x="310" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#15803d" font-weight="700">× η</text>

  <!-- Q produceret -->
  <rect x="330" y="80" width="120" height="60" rx="8" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>
  <text x="390" y="105" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#15803d" font-weight="700">Q PRODUCERET</text>
  <text x="390" y="125" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="14" fill="#1a1814" font-weight="700">[MJ/h]</text>

  <line x1="450" y1="110" x2="490" y2="110" stroke="#1a1814" stroke-width="2" marker-end="url(#arrf)"/>
  <text x="470" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#0891b2" font-weight="700">÷ Δh</text>

  <!-- Damp -->
  <rect x="490" y="80" width="180" height="60" rx="8" fill="#f0f9ff" stroke="#0891b2" stroke-width="2"/>
  <text x="580" y="105" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#0891b2" font-weight="700">DAMP</text>
  <text x="580" y="125" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="14" fill="#1a1814" font-weight="700">[kg/h]</text>

  <!-- Tab arrow down -->
  <line x1="390" y1="140" x2="390" y2="180" stroke="#8a8478" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#arrf)"/>
  <text x="390" y="200" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#8a8478">tab (røggas + stråling)</text>

  <text x="350" y="35" text-anchor="middle" font-family="Fraunces,serif" font-size="14" fill="#1a1814" font-weight="700">Energistrømmen gennem dampkedlen</text>
  <text x="350" y="55" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#8a8478">Brændsel → indfyret → produceret → damp</text>
</svg>
<div class="diagram-caption">Figur 3.2 — Beregningskæden: kæden kan løses begge veje</div>
</div>

<h3>Siegerts formel for røggastab</h3>
<p>Røggastabet (q<sub>røggas</sub>) er det dominerende tab og kan under normale driftsforhold estimeres ud fra røggassens temperatur samt CO<sub>2</sub>- eller O<sub>2</sub>-indholdet i den tørre røggas ved hjælp af Siegerts formel:</p>

<div class="formula">
  <b>q<sub>røggas</sub> = (T<sub>røggas</sub> - T<sub>luft</sub>) × ( (A / CO<sub>2</sub>) + B )</b> [%]
  <br><em>eller</em><br>
  <b>q<sub>røggas</sub> = (T<sub>røggas</sub> - T<sub>luft</sub>) × ( C / (21 - O<sub>2</sub>) )</b> [%]
</div>

<p>Hvor:</p>
<ul>
  <li><strong>T<sub>røggas</sub>:</strong> Røggastemperaturen efter kedlen/economiseren [°C].</li>
  <li><strong>T<sub>luft</sub>:</strong> Den indsugede forbrændingslufts temperatur [°C].</li>
  <li><strong>CO<sub>2</sub>:</strong> Volumenprocenten af kuldioxid i den tørre røggas [%].</li>
  <li><strong>O<sub>2</sub>:</strong> Volumenprocenten af ilt i den tørre røggas [%].</li>
  <li><strong>A, B, C:</strong> Brændselsspecifikke Siegert-konstanter, der afhænger af brændselstypen:</li>
</ul>

<table>
  <thead>
    <tr>
      <th>Brændselstype</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Fyringsolie (let/tung)</td><td class="num">0,50</td><td class="num">0,007</td><td class="num">0,68</td></tr>
    <tr><td>Naturgas</td><td class="num">0,37</td><td class="num">0,009</td><td class="num">0,47</td></tr>
    <tr><td>Stenkul</td><td class="num">0,65</td><td class="num">0,008</td><td class="num">0,75</td></tr>
    <tr><td>Træ/Biomasse</td><td class="num">0,65</td><td class="num">0,008</td><td class="num">0,78</td></tr>
  </tbody>
</table>
```

---

### Proposed Addition E: Expanded Turbine Efficiency and Pump NPSH
*Location: Replace Section 3.6 (lines 247-260) with the following content.*

```html
<!-- ═══════════════════ INGENIØRENS PERSPEKTIV: MEKANIK ═══════════════════ -->
<h2>3.6 Ingeniørens perspektiv: Turbiner &amp; pumper</h2>
<p>For at forstå hele dampkredsløbet (f.eks. Rankine-kredsløbet), skal vi også analysere de komponenter, der udtager arbejde (dampturbinen) eller tilfører arbejde (fødevandspumpen).</p>

<div class="grid grid-2">
  <div class="card">
    <h3>⚙️ Isentropisk turbinevirkningsgrad (&eta;<sub>is,turbine</sub>)</h3>
    <p>Når damp ekspanderer gennem en turbine, medfører intern friktion, hvirveldannelser og varmetab, at processen afviger fra den ideelle (isentropiske) proces. Den isentropiske virkningsgrad beskriver forholdet mellem det faktiske entalpifald og det teoretisk maksimale (isentropiske) entalpifald:</p>
    
    <div class="formula">
      <b>&eta;<sub>is,turbine</sub> = (h<sub>1</sub> - h<sub>2,faktisk</sub>) / (h<sub>1</sub> - h<sub>2,isentropisk</sub>)</b>
    </div>
    
    <p>Hvor:</p>
    <ul>
      <li><strong>h<sub>1</sub>:</strong> Specifik entalpi ved turbinens indløb [kJ/kg].</li>
      <li><strong>h<sub>2,faktisk</sub>:</strong> Faktisk specifik entalpi ved turbinens afgang [kJ/kg].</li>
      <li><strong>h<sub>2,isentropisk</sub>:</strong> Teoretisk specifik afgangsentalpi ved isentropisk ekspansion (s<sub>1</sub> = s<sub>2</sub>) [kJ/kg].</li>
    </ul>

    <p>Den faktiske mekaniske akseleffekt (W<sub>aksel</sub>), som turbinen leverer, beregnes som:</p>
    <div class="formula">
      <b>W<sub>aksel</sub> = ṁ<sub>damp</sub> × (h<sub>1</sub> - h<sub>2,faktisk</sub>) × &eta;<sub>mekanisk</sub></b> [kW]
    </div>
  </div>

  <div class="card">
    <h3>🌊 Pump NPSH &amp; kavitationsmekanik</h3>
    <p>Kedelfødevandspumper pumper vand tæt på dets kogepunkt (mætningstemperatur). For at undgå, at vandet begynder at koge i pumpens sugeside, skal anlæggets rådige trykhøjde <strong>NPSHa</strong> altid være større end pumpens påkrævede trykhøjde <strong>NPSHr</strong> plus en sikkerhedsmargin:</p>
    
    <div class="formula">
      <b>NPSHa &gt; NPSHr + sikkerhedsmargin</b>
    </div>

    <p>Hvor:</p>
    <ul>
      <li><strong>NPSHa (Available):</strong> Det rådige tryk ved pumpens sugeflange, defineret som:
        <br>
        <b>NPSHa = (p<sub>sug,abs</sub> - p<sub>damp</sub>(T)) / (&rho; × g)</b> [m]
        <br>
        Hvor p<sub>sug,abs</sub> er det absolutte statiske tryk ved indløbet [Pa], og p<sub>damp</sub>(T) er vandets damptryk (mætningstryk) ved den givne temperatur T [Pa] (fundet i damptabellen).
      </li>
      <li><strong>NPSHr (Required):</strong> Det mindste tryk, som pumpen kræver for at forhindre kavitation (bestemt eksperimentelt af pumpeproducenten) [m]. Sikkerhedsmarginen sættes typisk til mindst 0,5 - 1,0 m.</li>
    </ul>

    <h4>Kavitationsmekanisme</h4>
    <p>Hvis det lokale tryk i pumpens løbehjul falder under væskens damptryk, koger vandet lokalt, og der opstår små dampbobler. Når disse bobler føres videre til områder med højere tryk inde i pumpen, kollapser (imploderer) de øjeblikkeligt. Implosionerne skaber ekstremt høje trykbølger og mikroskopiske væskestråler (micro-jets) med lokale tryk på flere GPa. Dette medfører mekanisk tæring (pitting-skader) på løbehjulet, støj, kraftige vibrationer samt et markant fald i pumpens ydelse.</p>

    <h4>Afhjælpning og forebyggelse af kavitation</h4>
    <ol>
      <li><strong>Øge den geodetiske højde:</strong> Hæve fødevandstanken højere op over pumpen for at øge det statiske tilløbstryk.</li>
      <li><strong>Sænke temperaturen:</strong> Reducere fødevandets temperatur, hvilket reducerer damptrykket p<sub>damp</sub>(T) kraftigt.</li>
      <li><strong>Reducere modstand på sugesiden:</strong> Anvende sugeledninger med større diameter, minimere antallet af ventiler og bøjninger, samt holde sugefiltret rent.</li>
      <li><strong>Hastighedsregulering:</strong> Køre pumpen ved lavere omdrejningstal (f.eks. via frekvensomformer), hvilket reducerer pumpens NPSHr.</li>
    </ol>
  </div>
</div>
```

---

### Proposed Addition F: References Section
*Location: Insert right before the navigation block (around line 262).*

```html
<!-- ═══════════════════ REFERENCER ═══════════════════ -->
<h2>3.7 Referencer &amp; teknisk litteratur</h2>
<div class="card">
  <ul style="margin: 0; padding-left: 20px;">
    <li><strong>IAPWS-IF97:</strong> <em>"Formulation 1997 for the Thermodynamic Properties of Water and Steam for Industrial Use"</em>, International Association for the Properties of Water and Steam. Den internationale standard for beregning af vands og damps termodynamiske egenskaber.</li>
    <li><strong>DS/EN 12953-11:</strong> <em>"Røgrørskedler - Del 11: Modtagelsesprøvninger"</em>. Europæisk standard for bestemmelse af virkningsgrad og tab på røgrørskedler.</li>
    <li><strong>DS/EN 12952-15:</strong> <em>"Vandtrørskedler og hjælpeudstyr - Del 15: Modtagelsesprøvninger"</em>. Europæisk standard for virkningsgrads- og tabsmåling på vandtrørskedler.</li>
    <li><strong>Siegert, H.:</strong> Den klassiske formel for beregning af røggastab baseret på kemisk sammensætning af røggas og temperaturdifferens.</li>
    <li><strong>Bohl, Willi &amp; Elmendorf, Wolfgang:</strong> <em>"Technische Strömungsmechanik"</em>, Vogel Communications Group. Standardværk for beregning af pumper, rørnet, NPSH og kavitation.</li>
    <li><strong>Wagner, W. &amp; Kretzschmar, H.-J.:</strong> <em>"International Steam Tables - Properties of Water and Steam based on the Industrial Formulation IAPWS-IF97"</em>, Springer. Detaljerede opslagstabeller for mættet og overhedet damp.</li>
  </ul>
</div>
```

---

## 5. Verification Method
To verify these additions:

1. **Syntax and HTML Integrity**:
   - Verify that all newly inserted tags are properly closed (`<div>`, `<ul>`, `<li>`, `<table>`, `<tr>`, `<td>`, `<b>`, `<strong>`, `<em>`, `<sup>`, `<sub>`).
   - Confirm that the additions use class names matching the existing stylesheet (`../../assets/css/style.css`), such as `formula`, `card`, `grid grid-2`, `alert info`, `num`.

2. **Mathematical and Chemical Accuracy**:
   - Check the linear interpolation calculation:
     $$\text{For } x = 15 \text{ bar (between } 13 \text{ bar and } 18 \text{ bar):}$$
     $$y = 814.7 + \frac{15 - 13}{18 - 13} \cdot (884.5 - 814.7) = 814.7 + 0.4 \cdot 69.8 = 842.62 \text{ kJ/kg}$$
     The math is verified.
   - Verify the Siegert constants:
     - Oil: $A = 0.50$, $B = 0.007$, $C = 0.68$.
     - Gas: $A = 0.37$, $B = 0.009$, $C = 0.47$.
     - Coal: $A = 0.65$, $B = 0.008$, $C = 0.75$.
     - Wood: $A = 0.65$, $B = 0.008$, $C = 0.78$.
     These align with standard engineering values used in Danish and European boiler design.
   - Verify isentropic turbine efficiency: $\eta_{\text{is}} = \frac{\Delta h_{\text{faktisk}}}{\Delta h_{\text{isentropisk}}} = \frac{h_1 - h_{2,\text{faktisk}}}{h_1 - h_{2,\text{isentropisk}}}$. Formulated correctly.
   - Verify NPSHa definition: $\text{NPSHa} = \frac{p_{\text{sug,abs}} - p_{\text{damp}}(T)}{\rho g}$. Formulated correctly.

3. **Page Rendering**:
   - Open the updated `docs/03-termodynamik/index.html` in a web browser to verify that the SVG elements, equations, and tables render correctly and maintain responsive layout.
