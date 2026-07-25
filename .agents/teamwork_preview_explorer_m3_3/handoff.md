# Revisions- og anbefalingsrapport — Modul 03 Termodynamik

## 1. Observationer (Observation)
Følgende observationer blev gjort under revisionen af filen `docs/03-termodynamik/index.html`:

1. **Specifik varmekapacitet for vand ($c_p$):**
   - *Lokation:* Linje 57:
     ```html
     <b>Vand under 105 °C:</b>  h' = T × c<sub>p</sub> = T × <em>4,19</em> kJ/kg<br>
     ```
   - *Observation:* Værdien $c_p = 4,19 \text{ kJ/(kg·K)}$ præsenteres som en konstant. Der mangler en forklaring på, at $c_p$ varierer med temperatur og tryk, samt en reference til den internationale industristandard **IAPWS-IF97**.

2. **Overhedet damp (Overhedet damp):**
   - *Lokation:* Sektion 3.1 (linje 32-63).
   - *Observation:* Sektionen dækker kun mættet væske ($h'$) og mættet damp ($h''$). Der mangler formel og forklaring for beregning af entalpi for overhedet damp ($h$), hvilket er essentielt for dampturbiner.

3. **Fordampningsvarme ($r$):**
   - *Lokation:* Linje 49-52:
     ```html
     <div class="fact">
       <div class="fact-label">r = h'' − h'</div>
       <div class="fact-val">Fordampningsvarme</div>
       <div class="fact-note">Energi til at omdanne væske til damp</div>
     </div>
     ```
   - *Observation:* Der mangler en vigtig termodynamisk uddybning af, hvordan fordampningsvarmen $r$ aftager ved stigende tryk og forsvinder helt (bliver lig med 0) ved det kritiske punkt ($221,2 \text{ bar abs.}$, $374,15 \text{ }^\circ\text{C}$).

4. **Lineær interpolation:**
   - *Lokation:* Sektion 3.3 (linje 118-154).
   - *Observation:* Damptabellen i afsnittet indeholder kun diskrete trykpunkter. Der mangler en forklaring på og et beregningseksempel med lineær interpolation, som gør det muligt for studerende at finde mellemliggende værdier.

5. **Kedelvirkningsgrad (Virkningsgrad):**
   - *Lokation:* Sektion 3.4 (linje 156-212) og Sektion 3.5 (linje 214-245).
   - *Observation:* Virkningsgraden præsenteres udelukkende via den direkte metode på linje 209:
     ```html
     <b>Virkningsgrad</b> η = Q<sub>produceret</sub> ÷ Q<sub>indfyret</sub><br>
     ```
     Der mangler den **indirekte metode (tabmetoden)** samt **Siegerts formel** for beregning af røggastab ($q_{\text{røggas}}$), som er de primære metoder i henhold til de europæiske standarder **DS/EN 12953-11** (røgrørskedler) og **DS/EN 12952-15** (vandrørskedler).

6. **Fordampningstal (Steam Factor):**
   - *Lokation:* Linje 210:
     ```html
     <b>Fordampningstal</b> = kg<sub>damp</sub> ÷ kg<sub>brændsel</sub>     <em>(eller m³n for gas)</em>
     ```
   - *Observation:* Beskrivelsen af fordampningstallet er ekstremt kort. Der mangler typiske værdier for forskellige brændselstyper samt en introduktion til **ækvivalent fordampning** (dampfaktoren) til sammenligning af kedler under standardbetingelser ($2257,9 \text{ kJ/kg}$).

7. **Mollier-diagram (h-s diagram):**
   - *Lokation:* Sektion 3.6 (linje 247-261).
   - *Observation:* Sektionen nævner kort turbiner og pumper, men mangler konkrete detaljer om Mollier-diagrammet (akser, kurver og processer som drosling og isentropisk ekspansion).

8. **NPSH & Kavitationsmekanik:**
   - *Lokation:* Sektion 3.6 (linje 257-260).
   - *Observation:* Beskrivelsen af NPSH og kavitation er rent konceptuel. Der mangler matematiske formler for rådig og påkrævet NPSH ($\text{NPSHa} > \text{NPSHr}$), en præcis forklaring på implosionsmekanismen (pitting-skader) samt praktiske afhjælpningsmetoder.

9. **Referencer og Lovgivning:**
   - *Lokation:* Slutningen af dokumentet (linje 262-283).
   - *Observation:* Der mangler en dedikeret referenceliste med korrekte danske henvisninger til **DS/EN 12952**, **DS/EN 12953**, **BEK nr. 423 af 06/04/2022** (og dennes forgænger BEK 1009), **BEK nr. 197 af 18/03/2015**, samt standard-lærebogen *'Praktisk Dampteknik'*.

---

## 2. Logisk kæde (Logic Chain)
For at hæve dokumentets faglige niveau til en professionel kedelpasser- og maskinmesteruddannelse foreslås følgende udvidelser understøttet af de observerede mangler:

1. **Forståelse af $c_p$ og IAPWS-IF97:**
   - *Begrundelse:* Ved at præcisere, at $c_p \approx 4,19 \text{ kJ/(kg·K)}$ er en tilnærmelse for flydende vand under $105\text{ }^\circ\text{C}$ og introducere standarden **IAPWS-IF97**, får de studerende en korrekt videnskabelig forståelse af vandmediets termodynamik (afhjælper Observation 1).
   - *Løsning:* Tilføj en `.alert.info`-boks lige efter formlen i Sektion 3.1.

2. **Entalpi for overhedet damp:**
   - *Begrundelse:* Kedelanlæg med dampturbiner kører altid med overhedet damp for at optimere virkningsgraden og undgå våddampsskader. Formlen $h = h'' + c_{p,\text{damp}} \times (T_{\text{damp}} - T_{\text{mætning}})$ skal introduceres (afhjælper Observation 2).
   - *Løsning:* Opret et nyt afsnit "3.1.1 Overhedet damp" før Sektion 3.2.

3. **Fordampningsvarmens fysik:**
   - *Begrundelse:* Studerende skal vide, at fordampning kræver mindre energi ved højt tryk. Introduktion af det kritiske punkt forklarer, hvorfor grænserne mellem væske og damp ophører ved $221,2\text{ bar abs.}$ og $374,15\text{ }^\circ\text{C}$ (afhjælper Observation 3).
   - *Løsning:* Tilføj en `.alert.info`-boks under Sektion 3.1.

4. **Lineær interpolation i praksis:**
   - *Begrundelse:* Praktisk arbejde med damptabeller kræver interpolation. En trin-for-trin guide med et regneeksempel vil gøre de studerende selvkørende (afhjælper Observation 4).
   - *Løsning:* Opret afsnit "3.3.1 Lineær interpolation i damptabellen" under damptabelskemæt.

5. **Standardisering af virkningsgrad og røggastab:**
   - *Begrundelse:* Industriel verifikation af kedelvirkningsgrader udføres oftest med tabmetoden (indirekte metode) jf. **DS/EN 12953-11** og **DS/EN 12952-15**. Siegerts formel gør det muligt at beregne røggastabet direkte ud fra målinger af ilt/kuldioxid og temperatur (afhjælper Observation 5).
   - *Løsning:* Udvid Sektion 3.4 med to kort-strukturer (`.grid.grid-2`) for direkte og indirekte metoder samt en tabel med Siegert-konstanter.

6. **Fordampningstal og ækvivalent fordampning:**
   - *Begrundelse:* At kunne vurdere om et fordampningstal er realistisk (f.eks. $\sim 14$ for olie) beskytter mod regnefejl. Ækvivalent fordampning normaliserer beregningen til standardbetingelser ($2257,9\text{ kJ/kg}$) jf. *'Praktisk Dampteknik'* (afhjælper Observation 6).
   - *Løsning:* Opret afsnit "3.4.1 Fordampningstal og Ækvivalent fordampning" med typiske brændselsværdier.

7. **Mollier-diagrammets anvendelse:**
   - *Begrundelse:* Kedelpassere skal kunne visualisere drosling (konstant entalpi) og isentropisk ekspansion (konstant entropi) for at forstå procesregulering (afhjælper Observation 7).
   - *Løsning:* Opret en ny Sektion 3.6 dedikeret til Mollier-diagrammet.

8. **Matematisk præcisering af NPSH & Kavitation:**
   - *Begrundelse:* NPSH skal underbygges med formlen for $\text{NPSHa}$ (rådig trykhøjde), der direkte anvender damptrykket $p_{\text{damp}}(T)$ fra damptabellen. Beskrivelse af implosioner og micro-jets forklarer slitage på pumper, og forebyggelsesprincipperne giver praktisk handlingskompetence (afhjælper Observation 8).
   - *Løsning:* Udvid afsnittet om turbiner og pumper (nu Sektion 3.7) med formler og en struktureret liste over afhjælpningsmetoder.

9. **Lovmæssige referencer:**
   - *Begrundelse:* Alt trykbærende udstyr i Danmark er underlagt Arbejdstilsynets bekendtgørelser (**BEK nr. 423 af 06/04/2022** og **BEK nr. 197 af 18/03/2015**). Kursusmaterialet skal henvise til disse samt standarderne og *'Praktisk Dampteknik'* for at sikre juridisk og faglig validitet (afhjælper Observation 9).
   - *Løsning:* Opret Sektion 3.8 med en komplet dansk referenceliste.

---

## 3. Forbehold (Caveats)
- Rapporten indeholder anbefalinger og præcis kode, men selve HTML-filen `docs/03-termodynamik/index.html` opdateres ikke direkte af denne agent, da undersøgelsen er begrænset til skrivebeskyttet auditering.
- Det forudsættes, at den eksisterende CSS-fil `assets/css/style.css` understøtter klasser som `.card`, `.formula`, `.diagram`, `.grid`, `.alert`, `.badge` og `.num` på en responsiv måde.
- Beregningerne og konstanterne for Siegerts formel gælder for tør røggas under standardforhold, hvilket er kutyme på dette uddannelsesniveau.

---

## 4. Konklusion (Conclusion)
Herunder angives de konkrete anbefalinger og HTML-kodedele i dansk sprog, som bør integreres i `docs/03-termodynamik/index.html` for at opfylde alle kvalitets- og indholdskrav.

### Anbefaling A: Præcisering af $c_p$ og IAPWS-IF97
*Placering: Indsættes umiddelbart efter formelboksen under "Hvordan finder vi h'?" (omkring linje 60).*

```html
<div class="alert info">
  <div class="alert-icon">i</div>
  <div class="alert-body">
    <div class="alert-title">Den specifikke varmekapacitet (c<sub>p</sub>) varierer</div>
    <p>Værdien <strong>4,19 kJ/(kg·K)</strong> er en praktisk gennemsnitsværdi for vand under 105 °C ved atmosfærisk tryk (typisk anvendt til grundlæggende beregninger som angivet i <em>'Praktisk Dampteknik'</em>). I virkeligheden ændrer c<sub>p</sub> sig med både temperatur og tryk. For præcise industrielle beregninger anvendes den internationale standard <strong>IAPWS-IF97</strong> (udarbejdet af International Association for the Properties of Water and Steam), som definerer de nøjagtige matematiske tilstandsligninger for vand og damp.</p>
  </div>
</div>
```

---

### Anbefaling B: Overhedet damp og specifik varmekapacitet for damp ($c_{p,\text{damp}}$)
*Placering: Indsættes i Sektion 3.1, før overskriften til Sektion 3.2 (omkring linje 64).*

```html
<h3>3.1.1 Overhedet damp (h)</h3>
<p>Hvis mættet damp opvarmes yderligere i en overheder uden trykstigning, stiger temperaturen over mætningstemperaturen. Denne tilstand kaldes <strong>overhedet damp</strong>. Overhedet damp har et højere energiindhold og indeholder ingen frie vanddråber, hvilket beskytter turbineskovle mod erosion. Den specifikke entalpi for overhedet damp kan beregnes ud fra:</p>

<div class="formula">
  <b>h = h'' + c<sub>p,damp</sub> × (T<sub>damp</sub> - T<sub>mætning</sub>)</b> [kJ/kg]
</div>

<p>Hvor:</p>
<ul>
  <li><strong>h''</strong> er entalpien for mættet damp ved det givne tryk [kJ/kg] (findes i damptabellen).</li>
  <li><strong>c<sub>p,damp</sub></strong> er den gennemsnitlige specifikke varmekapacitet for den overhedede damp (typisk omkring 1,86 - 2,2 kJ/(kg·K) afhængigt af tryk og temperatur).</li>
  <li><strong>T<sub>damp</sub></strong> er den faktiske temperatur af den overhedede damp [°C].</li>
  <li><strong>T<sub>mætning</sub></strong> er mætningstemperaturen ved det givne absolutte tryk [°C] (fundet i damptabellen).</li>
</ul>

<div class="alert info">
  <div class="alert-icon">i</div>
  <div class="alert-body">
    <div class="alert-title">Præcision i beregninger</div>
    <p>Da damps specifikke varmekapacitet (c<sub>p,damp</sub>) varierer markant med tryk og temperatur, bør man til præcise beregninger altid slå entalpien op i en tabel for overhedet damp eller benytte software baseret på IAPWS-IF97 frem for den simple lineære tilnærmelse.</p>
  </div>
</div>
```

---

### Anbefaling C: Fordampningsvarme ($r$) og det kritiske punkt
*Placering: Indsættes i slutningen af Sektion 3.1 (efter Anbefaling B).*

```html
<div class="alert info">
  <div class="alert-icon">i</div>
  <div class="alert-body">
    <div class="alert-title">Fordampningsvarmens afhængighed af trykket</div>
    <p>Bemærk i damptabellen, at fordampningsvarmen <strong>r (kJ/kg)</strong> falder, når det absolutte tryk stiger. Ved 1 bar abs. er r = 2257,9 kJ/kg, mens den ved 100 bar abs. er faldet til 1316,6 kJ/kg. Ved det <strong>kritiske punkt</strong> (221,2 bar abs. og 374,15 °C) forsvinder grænsen mellem vand og damp fuldstændigt, og fordampningsvarmen er <strong>r = 0 kJ/kg</strong>. Dette er en vigtig termodynamisk egenskab beskrevet i <em>'Praktisk Dampteknik'</em>.</p>
  </div>
</div>
```

---

### Anbefaling D: Lineær interpolation i damptabellen
*Placering: Indsættes efter advarselsboksen under Sektion 3.3 og før overskriften for Sektion 3.4 (omkring linje 154).*

```html
<!-- ═══════════════════ LINEÆR INTERPOLATION ═══════════════════ -->
<h3>3.3.1 Lineær interpolation i damptabellen</h3>
<p>Hvis det aktuelle tryk eller den aktuelle temperatur ligger mellem to punkter i damptabellen, skal man anvende <strong>lineær interpolation</strong> for at finde den mellemliggende værdi. Formlen for lineær interpolation er:</p>

<div class="formula">
  <b>y = y<sub>1</sub> + ( (x - x<sub>1</sub>) / (x<sub>2</sub> - x<sub>1</sub>) ) × (y<sub>2</sub> - y<sub>1</sub>)</b>
</div>

<p>Hvor:</p>
<ul>
  <li><strong>x</strong> er den tilstandsstørrelse, du kender (f.eks. et aktuelt tryk på 15 bar).</li>
  <li><strong>x<sub>1</sub></strong> og <strong>x<sub>2</sub></strong> er de to nærmeste værdier i tabellen henholdsvis under og over x (f.eks. 13 bar og 18 bar).</li>
  <li><strong>y<sub>1</sub></strong> og <strong>y<sub>2</sub></strong> er de tilsvarende tabelværdier for den egenskab, du vil finde (f.eks. mætningstemperatur eller entalpi).</li>
  <li><strong>y</strong> er den beregnede (interpolerede) værdi.</li>
</ul>

<div class="card">
  <h4>Eksempel på interpolation</h4>
  <p>Vi ønsker at finde mætningstemperaturen (T<sub>mætning</sub>) ved et absolut tryk på <strong>15 bar</strong>.</p>
  <ol>
    <li>Fra damptabellen i afsnit 3.3 finder vi de to nærmeste værdier:<br>
        Ved x<sub>1</sub> = 13 bar er T<sub>1</sub> = 191,6 °C<br>
        Ved x<sub>2</sub> = 18 bar er T<sub>2</sub> = 207,1 °C</li>
    <li>Indsæt værdierne i formlen:<br>
        T = 191,6 + ( (15 - 13) / (18 - 13) ) × (207,1 - 191,6)<br>
        T = 191,6 + ( 2 / 5 ) × 15,5<br>
        T = 191,6 + 0,4 × 15,5 = 191,6 + 6,2 = <strong>197,8 °C</strong></li>
  </ol>
</div>
```

---

### Anbefaling E: Virkningsgrad (Direkte vs. Indirekte) og Siegerts formel (EN 12953-11 / EN 12952-15)
*Placering: Erstatter den nuværende Sektion 3.4 (linje 156-212).*

```html
<!-- ═══════════════════ VIRKNINGSGRAD ═══════════════════ -->
<h2>3.4 Virkningsgrad &amp; energiberegning (EN 12953-11 / EN 12952-15)</h2>

<p>Kedlens virkningsgrad (&eta;) angiver, hvor stor en del af den tilførte energi i brændselet, der overføres til dampmediet. I henhold til standarderne <strong>EN 12953-11</strong> (røgrørskedler) og <strong>EN 12952-15</strong> (vandrørskedler) beregnes virkningsgraden efter en af to metoder:</p>

<div class="grid grid-2">
  <div class="card">
    <h3>1. Den direkte metode</h3>
    <p>Virkningsgraden beregnes som forholdet mellem den nyttiggjorte energi i dampen og den tilførte energi i brændselet:</p>
    
    <div class="formula">
      <b>&eta;<sub>direkte</sub> = Q<sub>produceret</sub> / Q<sub>indfyret</sub></b>
    </div>
    
    <p>Hvor:</p>
    <ul>
      <li><strong>Q<sub>produceret</sub></strong> = ṁ<sub>damp</sub> × (h<sub>damp</sub> - h'<sub>fødevand</sub>) [MJ/h]</li>
      <li><strong>Q<sub>indfyret</sub></strong> = ṁ<sub>brændsel</sub> × H<sub>i</sub> [MJ/h] (H<sub>i</sub> er brændselets nedre brændværdi)</li>
    </ul>
    <p class="note"><strong>Fordel:</strong> Konceptuelt simpel.<br><strong>Ulempe:</strong> Kræver meget præcise målinger af brændsels- og dampflow, hvilket under praktisk drift ofte er behæftet med betydelig usikkerhed.</p>
  </div>
  
  <div class="card">
    <h3>2. Den indirekte metode (Tabmetoden)</h3>
    <p>Virkningsgraden bestemmes ved at trække de enkelte energitab (angivet i % af den tilførte energi) fra 100 %:</p>
    
    <div class="formula">
      <b>&eta;<sub>indirekte</sub> = 100% - (q<sub>røggas</sub> + q<sub>stråling</sub> + q<sub>aske</sub> + q<sub>andet</sub>)</b>
    </div>
    
    <p>Hvor:</p>
    <ul>
      <li><strong>q<sub>røggas</sub>:</strong> Varmetab med den varme røggas (kedlens absolut største tab).</li>
      <li><strong>q<sub>stråling</sub>:</strong> Strålings- og konvektionstab fra kedelkroppens overflade til omgivelserne.</li>
      <li><strong>q<sub>aske</sub>:</strong> Tab som følge af uforbrændt brændsel i aske og slagge (hovedsageligt aktuelt ved fastbrændselskedler).</li>
    </ul>
    <p class="note"><strong>Fordel:</strong> Højere målenøjagtighed under drift, da mindre fejl i måling af røggasparametre har begrænset indflydelse på den samlede virkningsgrad.</p>
  </div>
</div>

<p>Forbrændingsluften tilfører også energi til systemet, og i standarderne EN 12953-11 og EN 12952-15 indgår en detaljeret opgørelse over alle energistrømme, herunder tab til stråling og spædevand.</p>

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
<p>Røggastabet (q<sub>røggas</sub>) er det dominerende tab. Ved normal drift med et luftoverskud kan det beregnes ud fra røggassens temperatur og CO<sub>2</sub>- eller O<sub>2</sub>-indholdet i den tørre røggas ved hjælp af Siegerts formel:</p>

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
  <li><strong>A, B, C:</strong> Brændselsspecifikke Siegert-konstanter, som afhænger af brændselstypen:</li>
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

### Anbefaling F: Fordampningstal og ækvivalent fordampning
*Placering: Indsættes umiddelbart efter Anbefaling E og før Sektion 3.5 (omkring linje 213).*

```html
<h3>3.4.1 Fordampningstal og Ækvivalent fordampning</h3>
<p><strong>Fordampningstallet</strong> angiver, hvor mange kg damp der produceres pr. kg (eller pr. norm-m³ for gas) afbrændt brændsel:</p>

<div class="formula">
  <b>Fordampningstal = ṁ<sub>damp</sub> / ṁ<sub>brændsel</sub></b> [kg<sub>damp</sub> / kg<sub>brændsel</sub>]
</div>

<p>Typiske praktiske værdier for velfungerende kedler (baseret på standardværdier fra <em>'Praktisk Dampteknik'</em>):</p>
<ul>
  <li><strong>Fyringsolie (let):</strong> ca. 13 - 15 kg damp pr. kg olie</li>
  <li><strong>Naturgas:</strong> ca. 11 - 13 kg damp pr. m³<sub>n</sub> gas</li>
  <li><strong>Træpiller / Biomasse:</strong> ca. 5 - 6 kg damp pr. kg træpiller</li>
  <li><strong>Stenkul:</strong> ca. 7 - 9 kg damp pr. kg kul</li>
</ul>

<h4>Ækvivalent fordampningstal (Fordampningsfaktor)</h4>
<p>Da dampkedler kører ved forskellige tryk og fødevandstemperaturer, kan det faktiske fordampningstal ikke bruges direkte til at sammenligne kedlers effektivitet. Her benyttes den <strong>ækvivalente fordampning</strong>, som omregner den faktiske dampproduktion til en standardiseret tilstand (mættet damp ved 100 °C produceret af fødevand ved 100 °C, hvilket kræver den specifikke fordampningsvarme r = 2257,9 kJ/kg):</p>

<div class="formula">
  <b>ṁ<sub>ækvivalent</sub> = ṁ<sub>damp</sub> × ( (h<sub>damp</sub> - h'<sub>fødevand</sub>) / 2257,9 )</b> [kg/h]
</div>

<p>Forholdet <strong>(h<sub>damp</sub> - h'<sub>fødevand</sub>) / 2257,9</strong> kaldes <strong>dampfaktoren</strong> (eller fordampningsfaktoren).</p>
```

---

### Anbefaling G: Mollier-diagram (h-s diagram)
*Placering: Indsættes efter det komplette beregningseksempel (Sektion 3.5) og før Sektion 3.6 (omkring linje 246).*

```html
<!-- ═══════════════════ MOLLIER-DIAGRAM ═══════════════════ -->
<h2>3.6 Mollier-diagrammet (h-s diagram)</h2>
<p>Mollier-diagrammet er et uundværligt visuelt værktøj for en maskinmester eller kedelpasser. Det afbilder specifik entalpi (<strong>h</strong> på y-aksen) mod specifik entropi (<strong>s</strong> på x-aksen).</p>

<div class="grid grid-2">
  <div class="card">
    <h3>Diagrammets opbygning</h3>
    <ul>
      <li><strong>Våddampsområdet (Dampkuplen):</strong> Det klokkeformede område begrænset af grænsekurverne for mættet væske (x = 0) og mættet damp (x = 1).</li>
      <li><strong>Kritiske punkt:</strong> Toppen af dampkuplen (221,2 bar abs. og 374,15 °C).</li>
      <li><strong>Linjer for konstant damptørhed (x):</strong> Ligger inde i dampkuplen og viser andelen af tør damp i våddampen (f.eks. x = 0,95 betyder 95 % damp og 5 % vanddråber).</li>
      <li><strong>Isobarer (konstant tryk p):</strong> Tryklinjer, der er rette, skrå linjer i våddampsområdet, men som knækker opad i det overhedede område.</li>
      <li><strong>Isotermer (konstant temperatur T):</strong> Horisontale linjer i våddampsområdet (fordi temperatur og tryk er koblede under fordampning) og krummer mod højre i det overhedede område.</li>
    </ul>
  </div>
  
  <div class="card">
    <h3>Typiske processer i diagrammet</h3>
    <ul>
      <li><strong>Isentropisk ekspansion (f.eks. i en turbine):</strong> En idealiseret ekspansion uden entropiændring (s = konstant), der tegnes som en <strong>lodret linje direkte nedad</strong>.</li>
      <li><strong>Drosling (f.eks. i en reduktionsventil):</strong> En proces, hvor dampen falder i tryk uden at udrette arbejde og uden varmetab til omgivelserne (h = konstant). Dette tegnes som en <strong>vandret linje mod højre</strong>. Drosling resulterer i en højere damptørhed (x) eller overhedning.</li>
    </ul>
  </div>
</div>
```

---

### Anbefaling H: Turbiner & pumper samt NPSH & Kavitation (EN 12952-7 / EN 12953-6)
*Placering: Erstatter den nuværende Sektion 3.6 (linje 247-261) og omdøbes til Sektion 3.7.*

```html
<!-- ═══════════════════ TURBINER OG PUMPER ═══════════════════ -->
<h2>3.7 Turbiner &amp; pumper i dampkredsløbet</h2>
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
    <p>Hvis det lokale tryk i pumpens løbehjul falder under væskens damptryk, koger vandet lokalt, og der opstår små dampbobler. Når disse bobler føres videre to områder med højere tryk inde i pumpen, kollapser (imploderer) de øjeblikkeligt. Implosionerne skaber ekstremt høje trykbølger og mikroskopiske væskestråler (micro-jets) med lokale tryk på flere GPa. Dette medfører mekanisk tæring (pitting-skader) på løbehjulet, støj, kraftige vibrationer samt et markant fald i pumpens ydelse.</p>

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

### Anbefaling I: Referencer og teknisk litteratur
*Placering: Indsættes umiddelbart før navigationsblokken (omkring linje 262) som Sektion 3.8.*

```html
<!-- ═══════════════════ REFERENCER ═══════════════════ -->
<h2>3.8 Referencer &amp; teknisk litteratur</h2>
<div class="card">
  <ul style="margin: 0; padding-left: 20px;">
    <li><strong>IAPWS-IF97:</strong> <em>"Formulation 1997 for the Thermodynamic Properties of Water and Steam for Industrial Use"</em>, International Association for the Properties of Water and Steam. Den internationale standard for beregning af vands og damps termodynamiske egenskaber.</li>
    <li><strong>DS/EN 12953-11:</strong> <em>"Røgrørskedler - Del 11: Modtagelsesprøvninger"</em>. Dansk/Europæisk standard for bestemmelse af virkningsgrad og tab på røgrørskedler (direkte og indirekte metode).</li>
    <li><strong>DS/EN 12952-15:</strong> <em>"Vandtrørskedler og hjælpeudstyr - Del 15: Modtagelsesprøvninger"</em>. Dansk/Europæisk standard for virkningsgrads- og tabsmåling på vandtrørskedler.</li>
    <li><strong>BEK nr. 423 af 06/04/2022:</strong> <em>"Bekendtgørelse om anvendelse af trykudstyr"</em> (Arbejdstilsynets gældende regler for trykanlæg, erstatter BEK 1009). Fastlægger myndighedskrav til sikkerhed, eftersyn og opstilling af trykbærende anlæg i Danmark.</li>
    <li><strong>BEK nr. 197 af 18/03/2015:</strong> <em>"Bekendtgørelse om indretning, ombygning og reparation af trykbærende udstyr"</em>.</li>
    <li><strong>Larsen, Erik D.:</strong> <em>"Praktisk Dampteknik"</em>, Mercantec. Standard-lærebog anvendt på maskinmesterstudiet og kedelpasserkurser i Danmark.</li>
    <li><strong>Siegert, H.:</strong> Formel og konstanter for beregning af det tørre røggastab, udbredt anvendt i dansk forbrændingsteknik.</li>
    <li><strong>Wagner, W. &amp; Kretzschmar, H.-J.:</strong> <em>"International Steam Tables - Properties of Water and Steam based on the Industrial Formulation IAPWS-IF97"</em>, Springer. Autoritative damptabeller anvendt i europæisk maskinteknik.</li>
  </ul>
</div>
```

---

## 5. Verifikationsmetode (Verification Method)
For at eftervise rigtigheden af de foreslåede ændringer efter implementering, kan følgende fremgangsmåde benyttes:

1. **HTML- og CSS-validering:**
   - Kontroller, at alle nyligt indsatte HTML-tags er korrekt lukkede (`<div>`, `<ul>`, `<li>`, `<table>`, `<tr>`, `<td>`, `<b>`, `<strong>`, `<em>`, `<sup>`, `<sub>`).
   - Kontroller, at der udelukkende anvendes eksisterende layout-klasser som `.card`, `.formula`, `.diagram`, `.grid`, `.alert`, `.badge` og `.num` for at bevare designintegriteten uden at bryde sidens struktur eller introducere inline-styles.

2. **Matematisk og formelmæssig efterprøvning:**
   - **Lineær interpolation:** Eftervis beregningen af mætningstemperaturen ved et absolut tryk på $15\text{ bar}$:
     $$T = T_1 + \frac{p - p_1}{p_2 - p_1} \times (T_2 - T_1)$$
     $$T = 191,6 + \frac{15 - 13}{18 - 13} \times (207,1 - 191,6) = 191,6 + 0,4 \times 15,5 = 197,8\text{ }^\circ\text{C}$$
     Det beregnede resultat på $197,8\text{ }^\circ\text{C}$ stemmer overens med eksemplet.
   - **Siegerts formel:** Kontroller, at de angivne konstanter for naturgas ($A=0,37$, $B=0,009$, $C=0,47$) og fyringsolie ($A=0,50$, $B=0,007$, $C=0,68$) svarer til de standardværdier, der benyttes i dansk forbrændingsteknik.
   - **NPSHa-ligning:** Bekræft, at den foreslåede formel $\text{NPSHa} = \frac{p_{\text{sug,abs}} - p_{\text{damp}}(T)}{\rho g}$ er fysisk korrekt dimensioneret.

3. **Visuel inspektion:**
   - Åbn filen i en moderne webbrowser (f.eks. Chrome, Edge eller Firefox) efter ændringerne, og kontroller, at grid-layoutet (`.grid.grid-2`), tabellerne, formlerne og informationsboksene renderes korrekt og tilpasser sig forskellige skærmstørrelser (responsivitet).
