# Handoff Rapport: Audit og anbefalinger til Modul 03 (Termodynamik & Damptabel)

Denne rapport præsenterer resultaterne af en grundig læse-audit af termodynamikindholdet i `docs/03-termodynamik/index.html` samt tværgående sammenligninger med andre moduler og peer-analyser. Den indeholder detaljerede observationer, logiske ræsonnementer, forholdsregler samt konkrete anbefalinger til udvidelser skrevet på teknisk dansk. Udvidelserne overholder de eksisterende CSS-klasser i `assets/css/style.css`.

---

## 1. Observationer

Ved en læse-audit af `docs/03-termodynamik/index.html` (og relaterede filer i `docs/09-formler-tabeller/index.html`) blev følgende observeret:

1. **Specifik varmekapacitet for vand ($c_p$)**:
   * *Placering*: Linje 57 i `docs/03-termodynamik/index.html`:
     ```html
     57: <b>Vand under 105 °C:</b>  h' = T × c<sub>p</sub> = T × <em>4,19</em> kJ/kg<br>
     ```
   * *Observation*: Den specifikke varmekapacitet ($c_p$) er angivet med den forkerte enhed `kJ/kg` (enheden for entalpi og fordampningsvarme), hvor den korrekte enhed er `kJ/(kg·K)` eller `kJ/(kg·°C)`. Derudover præsenteres $c_p$ som en konstant uden at forklare dens temperatur- og trykafhængighed eller referere til den internationale industristandard **IAPWS-IF97**.

2. **Mangel på overhedet damp (Overhedet damp)**:
   * *Placering*: Hele afsnit 3.1 (linje 32-64).
   * *Observation*: Sektionen dækker kun mættet væske ($h'$) og mættet damp ($h''$). Der findes ingen formler, definitioner eller forklaringer på overhedet damp (superheated steam) eller beregning af dets entalpi ($h_{\text{oh}}$), hvilket er afgørende for dampturbinesystemer og forebyggelse af kondensering i dampledninger.

3. **Manglende interpolation i damptabellen**:
   * *Placering*: Mellem afsnit 3.3 (linje 118-154) og afsnit 3.4 (linje 156-212).
   * *Observation*: Damptabellen i afsnit 3.3 viser diskrete værdier for absolut tryk (1, 2, 4, 6, 8, 10, 13, 18, 20, 40, 60, 100 bar). Der er ingen instruktioner eller matematiske formler til, hvordan man finder entalpier eller mætningstemperaturer for mellemliggende tryk (f.eks. 15 bar) via lineær interpolation.

4. **Forendlet virkningsgrads- og energiberegning**:
   * *Placering*: Afsnit 3.4 (linje 156-212) og afsnit 3.5 (linje 214-245).
   * *Observation*: Sektionen præsenterer kun den *direkte metode* (virkningsgrad $\eta = Q_{\text{produceret}} / Q_{\text{indfyret}}$). Den *indirekte metode (tabmetoden)* er ikke nævnt, på trods af at den er den primære reference i de europæiske standarder **DS/EN 12953-11** (røgrørskedler) og **DS/EN 12952-15** (vandrørskedler). Siegerts formel til beregning af røggastab ($q_{\text{røggas}}$) og dens brændselsspecifikke konstanter mangler ligeledes.

5. **Kvalitativ dækning af turbiner og pumper**:
   * *Placering*: Afsnit 3.6 (linje 247-260).
   * *Observation*: Afsnittet beskriver isentropisk turbinevirkningsgrad og pumpe-NPSH/kavitation rent kvalitativt. Der gives ingen matematiske formler for isentropisk virkningsgrad:
     $$\eta_{\text{is,t}} = \frac{h_{\text{ind}} - h_{\text{ud,aktuel}}}{h_{\text{ind}} - h_{\text{ud,isentropisk}}}$$
     eller for anlæggets rådige netto-tilløbshøjde ($NPSH_a$):
     $$NPSH_a = \frac{p_{\text{tank,abs}} - p_v(T)}{\rho \cdot g} \pm z_{\text{statisk}} - h_{\text{tab}}$$
     Der mangler også en fysisk forklaring på kavitationsmekanikken (kollaps/implosion af dampbobler) samt driftsmæssige afhjælpningsstrategier.

6. **Mangel på referencer/litteraturliste**:
   * *Placering*: Slutningen af filen (linje 276-283).
   * *Observation*: Der er ingen referenceliste eller kildehenvisninger til regulatoriske love (såsom **BEK 1009**), standarder (såsom **EN 12952** og **EN 12953**) eller anerkendte lærebøger (såsom "Praktisk Dampteknik").

7. **Tværgående uoverensstemmelse i Siegerts formel**:
   * *Placering*: `docs/09-formler-tabeller/index.html` linje 68 og 73-84.
   * *Observation*: Formlen for røggastab baseret på ilt ($O_2$) er angivet som:
     $$q_A = (t_{\text{røg}} - t_{\text{luft}}) \cdot \left( \frac{A_1}{21 - O_2} + B \right)$$
     Dette er en utraditionel blanding. I standardiseret europæisk/tysk praksis (1. BImSchV) indeholder $O_2$-formlen ikke det brændselsspecifikke led $+ B$ (som kun hører til $CO_2$-formlen), men er i stedet defineret simpelt som:
     $$q_A = (t_{\text{røg}} - t_{\text{luft}}) \cdot \frac{A_2}{21 - O_2}$$
     Desuden er Siegert-konstanterne i tabellen i modul 9 angivet som hele tal (f.eks. `68` for gasolie, `66` for naturgas), hvilket betyder, at der i formlen skal divideres med 100, hvis $CO_2$ indtastes i procent (f.eks. $12$ i stedet for $0,12$). Dette skal forklares klart.

---

## 2. Logisk kæde (Logic Chain)

Baseret på ovenstående observationer udledes følgende konklusioner:

1. **Rettelse af enhed og c_p-forklaring (Observation 1)**:
   * Varmekapacitet ($c_p$) måles i energi pr. masse pr. temperaturændring. Enheden `kJ/kg` er en trykfejl og skal rettes til `kJ/(kg·K)`.
   * Da $c_p$ stiger med temperaturen, bør det forklares, at $4,19 \text{ kJ/(kg·K)}$ er en praktisk gennemsnitsværdi til manuelle beregninger under 105 °C, mens præcise industrielle beregninger skal baseres på **IAPWS-IF97**.

2. **Tilføjelse af overhedet damp (Observation 2)**:
   * For at give en komplet termodynamisk forståelse skal overhedet damp defineres. Formlen $h \approx h'' + c_{p,\text{damp}} \cdot (T - T_{\text{sat}})$ skal introduceres som en lineær tilnærmelse, og der skal henvises til overhedede damptabeller eller Mollier-diagrammer på grund af $c_{p,\text{damp}}$'s stærke tryk- og temperaturafhængighed.

3. **Udarbejdelse af interpolationsvejledning (Observation 3)**:
   * Da et anlægs driftstryk sjældent rammer tabellens præcise værdier (f.eks. 15 bar), skal den lineære interpolationsformel præsenteres. Det er mest pædagogisk at give et fuldt gennemregnet eksempel (opsøgning af $h'$ ved 15 bar ved brug af værdierne for 13 bar og 18 bar fra tabellen i afsnit 3.3).

4. **Udvidet virkningsgrads- og tabsberegning (Observation 4 og 7)**:
   * En kedelpasser skal forstå både den direkte metode (nytteeffekt divideret med tilført effekt) og den indirekte metode (100 % minus tab).
   * Den indirekte metode skal referere til standarderne **DS/EN 12953-11** og **DS/EN 12952-15**.
   * Siegerts formel skal præsenteres i begge udgaver ($CO_2$-baseret og $O_2$-baseret). For at sikre konsistens med Modul 09 skal Siegert-konstanterne ($K = 68$ for gasolie, $66$ for naturgas, $70$ for fuelolie, $74$ for træ) forklares, herunder hvordan division med 100 håndteres, når $CO_2$ angives i procent.

5. **Matematisk modellering af turbine og pumpe (Observation 5)**:
   * For at understøtte ingeniørens perspektiv skal den isentropiske turbinevirkningsgrad defineres som forholdet mellem det faktiske entalpifald og det isentropiske entalpifald.
   * NPSH-kriteriet skal opstilles som $NPSH_a \ge NPSH_r + \text{sikkerhedsmargin}$.
   * Formlen for $NPSH_a$ skal præsenteres med alle fysiske variable (tanktryk, damptryk, densitet, geodetisk højde og gnidningstab). Kavitationsmekanismen (implosion, microjets, pitting) og afhjælpningsstrategier (hævning af tank, sænkning af temperatur, rensning af filtre) skal opstilles i overskuelige lister.

6. **Etablering af referenceliste (Observation 6)**:
   * Tilføjelse af afsnit 3.7 med korrekte litteraturhenvisninger (IAPWS, EN-standarder, BEK 1009, samt anerkendte lærebøger) sikrer, at materialet fremstår fagligt velfunderet og sporbart.

---

## 3. Forholdsregler (Caveats)

* **Kun læse-audit**: Denne undersøgelse er rent analytisk. Ændringerne må IKKE implementeres direkte i `docs/03-termodynamik/index.html` af denne agent.
* **Layout og klasser**: Alle foreslåede HTML-segmenter skal anvende klasser fra `style.css` (såsom `.card`, `.formula`, `.alert.info`, `.alert.warn`, `.alert.danger`, `.grid.grid-2`, `.badge`, `.num`). Der må ikke tilføjes inline-styles eller eksterne scripts.
* **Konstant-uoverensstemmelser**: De simple Siegert-konstanter ($K$) varierer en smule i litteraturen afhængigt af den specifikke brændselssammensætning. De anbefalede værdier i denne rapport er afstemt direkte med Modul 09 for at undgå forvirring hos kursisterne.

---

## 4. Konklusion og specifikke HTML-anbefalinger

For at bringe Modul 03 op på et professionelt og præcist ingeniørmæssigt niveau anbefales det at integrere følgende HTML-ændringer i `docs/03-termodynamik/index.html`.

### Anbefalet ændring A: Rettelse af varmekapacitet og tilføjelse af overhedet damp
*Placering: Erstat linje 55-63 i `docs/03-termodynamik/index.html`.*

**Nuværende kode (Linje 55-63):**
```html
<h3>Hvordan finder vi h'?</h3>
<div class="formula">
<b>Vand under 105 °C:</b>  h' = T × c<sub>p</sub> = T × <em>4,19</em> kJ/kg<br>
<b>Vand over 105 °C:</b>   slå op i <em>damptabellen</em> (mættet væske)
</div>

<p>Eksempel: Fødevand ved 80 °C →
<span class="badge badge-blue">h' = 80 × 4,19 = 335,2 kJ/kg</span></p>
```

**Foreslået erstatningskode (på korrekt dansk og med præcise enheder):**
```html
<h3>Hvordan finder vi h'?</h3>
<p>For mættet væske (vand på kogepunktet) afhænger entalpien af tryk og temperatur:</p>

<div class="formula">
<b>Vand under 105 °C:</b>  h' ≈ T × c<sub>p</sub> = T × <em>4,19</em> kJ/(kg·K)<br>
<b>Vand over 105 °C:</b>   slå op i <em>damptabellen</em> (mættet væske)
</div>

<div class="alert info">
  <div class="alert-icon">i</div>
  <div class="alert-body">
    <div class="alert-title">Varmekapacitetens (c<sub>p</sub>) temperaturafhængighed</div>
    <p>Den specifikke varmekapacitet for flydende vand er ikke konstant, men varierer med temperaturen (f.eks. fra 4,218 kJ/(kg·K) ved 0 °C til 4,178 kJ/(kg·K) ved 35 °C og stiger igen til 4,220 kJ/(kg·K) ved 100 °C). Værdien <strong>4,19 kJ/(kg·K)</strong> er en praktisk gennemsnitsværdi til manuelle beregninger under 105 °C. For nøjagtige industrielle beregninger anvendes den internationale industristandard <strong>IAPWS-IF97</strong>.</p>
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
  <li><strong>c<sub>p,damp</sub></strong>: Specifik varmekapacitet for overhedet damp ved det aktuelle tryk [kJ/(kg·K)]. Bemærk, at c<sub>p,damp</sub> varierer med tryk og temperatur (typisk 1,9–2,4 kJ/(kg·K) ved moderate tryk).</li>
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

### Anbefalet ændring B: Lineær interpolation i damptabellen
*Placering: Indsættes i sektion 3.3 direkte efter damptabel-uddraget (linje 144) og før den eksisterende "Bevar alle decimaler" alert box.*

**Foreslået indsættelseskode:**
```html
<h3>3.3.1 Lineær interpolation i damptabellen</h3>
<p>Damptabeller indeholder ofte kun diskrete tryk- eller temperaturtrin (f.eks. 13 bar og 18 bar). Hvis dit aktuelle driftstryk ligger imellem to tabelværdier, skal du foretage en <strong>lineær interpolation</strong> for at finde den korrekte entalpi eller temperatur.</p>

<div class="formula">
<b>y = y<sub>1</sub> + &frac{(x − x<sub>1</sub>)}{(x<sub>2</sub> − x<sub>1</sub>)} × (y<sub>2</sub> − y<sub>1</sub>)</b>
</div>

<p>Hvor:</p>
<ul>
  <li><strong>x</strong>: Det tryk (eller den temperatur), du ønsker at finde værdien for.</li>
  <li><strong>x<sub>1</sub>, x<sub>2</sub></strong>: Det henholdsvis lavere og højere tryk (eller temperatur), der findes i tabellen.</li>
  <li><strong>y<sub>1</sub>, y<sub>2</sub></strong>: De dertilhørende tabelværdier (f.eks. entalpi h' eller h'').</li>
  <li><strong>y</strong>: Den interpolerede (beregnede) værdi.</li>
</ul>

<div class="card">
  <h4>Eksempel på lineær interpolation</h4>
  <p>Find den specifikke entalpi for mættet væske (h') ved et absolut tryk på <strong>15 bar</strong>.</p>
  <p>Fra damptabellen i afsnit 3.3 finder vi de to nærmeste punkter:</p>
  <ul>
    <li>x<sub>1</sub> = 13 bar &rarr; y<sub>1</sub> (h') = 814,7 kJ/kg</li>
    <li>x<sub>2</sub> = 18 bar &rarr; y<sub>2</sub> (h') = 884,5 kJ/kg</li>
  </ul>
  <p>Vi indsætter i formlen for x = 15 bar:</p>
  <div class="formula">
  h'<sub>15</sub> = 814,7 + &frac{(15 − 13)}{(18 − 13)} × (884,5 − 814,7)<br>
  h'<sub>15</sub> = 814,7 + 0,4 × 69,8 = 814,7 + 27,92 = <b>842,62 kJ/kg</b>
  </div>
</div>
```

---

### Anbefalet ændring C: Udvidet virkningsgrads- og tabsberegning (Direkte vs. Indirekte metode)
*Placering: Erstat linje 206-211 i `docs/03-termodynamik/index.html`.*

**Nuværende kode (Linje 206-211):**
```html
<div class="formula">
<b>Q indfyret</b>      = ṁ<sub>br</sub> × h<sub>i</sub>            [MJ/h]<br>
<b>Q produceret</b>    = ṁ<sub>damp</sub> × (h'' − h'<sub>fødevand</sub>) [MJ/h]<br>
<b>Virkningsgrad</b> η = Q<sub>produceret</sub> ÷ Q<sub>indfyret</sub><br>
<b>Fordampningstal</b> = kg<sub>damp</sub> ÷ kg<sub>brændsel</sub>     <em>(eller m³n for gas)</em>
</div>
```

**Foreslået erstatningskode (præciserer standarder og metoder):**
```html
<p>Kedlens virkningsgrad kan bestemmes på to måder i henhold til de europæiske standarder <strong>DS/EN 12953-11</strong> (røgrørskedler) og <strong>DS/EN 12952-15</strong> (vandrørskedler): <em>den direkte metode</em> og <em>den indirekte metode (tabmetoden)</em>.</p>

<h3>3.4.1 Den direkte metode</h3>
<p>Den direkte metode beregner virkningsgraden ud fra forholdet mellem den nyttiggjorte energi i damp- eller hedtvandsproduktionen og den tilførte energi via brændslet:</p>

<div class="formula">
<b>&eta;<sub>direkte</sub> = Q<sub>produceret</sub> ÷ Q<sub>indfyret</sub> = [ṁ<sub>damp</sub> × (h<sub>damp</sub> − h<sub>fødevand</sub>)] ÷ [ṁ<sub>br</sub> × H<sub>i</sub>]</b>
</div>

<p>Hvor:</p>
<ul>
  <li><strong>&eta;<sub>direkte</sub></strong>: Kedelvirkningsgraden (dimensionsløs, f.eks. 0,872 for 87,2 %)</li>
  <li><strong>ṁ<sub>damp</sub></strong>: Dampmassenstrøm [kg/h]</li>
  <li><strong>h<sub>damp</sub></strong>: Dampens specifikke entalpi (h'' for mættet damp eller h<sub>oh</sub> for overhedet damp) [kJ/kg]</li>
  <li><strong>h<sub>fødevand</sub></strong>: Fødevandets specifikke entalpi (h') ved indløb til kedlen [kJ/kg]</li>
  <li><strong>ṁ<sub>br</sub></strong>: Brændselsmassenstrøm [kg/h] (eller volumenstrøm i m³<sub>n</sub>/h for gas)</li>
  <li><strong>H<sub>i</sub></strong>: Brændselets nedre brændværdi [kJ/kg eller MJ/kg] (bemærk: 1 MJ/kg = 1000 kJ/kg)</li>
</ul>

<h3>3.4.2 Den indirekte metode (Tabmetoden)</h3>
<p>I stedet for at måle de absolutte mængder af damp og brændsel (hvilket i praksis kan være behæftet med stor måleusikkerhed), bestemmes virkningsgraden ved at måle og fratrække alle deltabene fra 100 %:</p>

<div class="formula">
<b>&eta;<sub>indirekte</sub> = 100 − (q<sub>g</sub> + q<sub>rc</sub> + q<sub>u</sub> + q<sub>b</sub> + q<sub>s</sub>) &nbsp; [%]</b>
</div>

<p>Hvor deltabene (angivet i procent af den indfyrede effekt) er:</p>
<ul>
  <li><strong>q<sub>g</sub></strong>: Røggastab (det absolut største tab i en kedel, se Siegerts formel nedenfor) [%]</li>
  <li><strong>q<sub>rc</sub></strong>: Strålings- og konvektionstab fra kedelkroppens overflade til omgivelserne [%]</li>
  <li><strong>q<sub>u</sub></strong>: Tab som følge af uforbrændt brændsel (uforbrændt kulstof i aske og sod) [%]</li>
  <li><strong>q<sub>b</sub></strong>: Afblæsnings- og bundfældningstab (tab ved udslusning af varmt kedelvand for at styre saltkoncentrationen) [%]</li>
  <li><strong>q<sub>s</sub></strong>: Diverse andre udefinerede tab [%]</li>
</ul>

<h4>Siegerts formel for røggastab (q<sub>g</sub>)</h4>
<p>Siegerts formel anvendes til at beregne røggastabet ud fra temperaturen af røggassen og forbrændingsluften samt røggassens kemiske sammensætning. Den kan enten beregnes ud fra røggassens indhold af ilt (O<sub>2</sub>) eller kuldioxid (CO<sub>2</sub>):</p>

<div class="formula">
<b>Røggastab baseret på CO<sub>2</sub>:</b> q<sub>g</sub> = f<sub>CO2</sub> × &frac{(T<sub>røggas</sub> − T<sub>luft</sub>)}{CO<sub>2,%</sub>} &nbsp; [%]<br>
<b>Røggastab baseret på O<sub>2</sub>:</b> q<sub>g</sub> = f<sub>O2</sub> × &frac{(T<sub>røggas</sub> − T<sub>luft</sub>)}{(21 − O<sub>2,%</sub>)} &nbsp; [%]
</div>

<p>Hvor:</p>
<ul>
  <li><strong>T<sub>røggas</sub></strong>: Røggassens temperatur ved kedelafgang [°C]</li>
  <li><strong>T<sub>luft</sub></strong>: Den indsugede forbrændingslufts temperatur [°C]</li>
  <li><strong>CO<sub>2,%</sub></strong>: Målt kuldioxidindhold i den tørre røggas [% volumen] (f.eks. indtastes 12 ved 12 %)</li>
  <li><strong>O<sub>2,%</sub></strong>: Målt iltindhold i den tørre røggas [% volumen] (f.eks. indtastes 3 ved 3 %)</li>
  <li><strong>f<sub>CO2</sub>, f<sub>O2</sub></strong>: Brændselsspecifikke Siegert-konstanter. De svarer direkte til konstanterne angivet i Modul 9 divideret med 100:</li>
</ul>

<table>
  <thead>
    <tr>
      <th>Brændselstype</th>
      <th>f<sub>CO2</sub> (CO<sub>2</sub>-formel)</th>
      <th>f<sub>O2</sub> (O<sub>2</sub>-formel)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Fyringsgasolie (let olie)</td><td class="num">0,56</td><td class="num">0,68</td></tr>
    <tr><td>Fuelolie (tung olie)</td><td class="num">0,57</td><td class="num">0,70</td></tr>
    <tr><td>Naturgas</td><td class="num">0,47</td><td class="num">0,66</td></tr>
    <tr><td>Træ / Biomasse</td><td class="num">0,75</td><td class="num">0,74</td></tr>
  </tbody>
</table>

<div class="alert info">
  <div class="alert-icon">i</div>
  <div class="alert-body">
    <div class="alert-title">Hvorfor foretrækkes den indirekte metode i praksis?</div>
    <p>Den indirekte metode er den primære reference i standarderne <strong>DS/EN 12953-11</strong> og <strong>DS/EN 12952-15</strong> til officielle modtagelsesprøvninger. Dette skyldes, at gastemperaturer og gaskoncentrationer kan måles meget præcist med relativt billigt måleudstyr (røggasanalysatorer), hvorimod direkte måling af dampmængder og brændselsstrømme er behæftet med en væsentlig højere usikkerhed (ofte &plusmn;2-5 %).</p>
  </div>
</div>

<div class="formula">
<b>Fordampningstal (f)</b> = kg<sub>damp</sub> ÷ kg<sub>brændsel</sub> &nbsp; <em>(eller kg<sub>damp</sub> pr. m³<sub>n</sub> gas)</em>
</div>
```

---

### Anbefalet ændring D: Turbinevirkningsgrad, NPSH-ligning og Kavitationsmekanik
*Placering: Erstat hele afsnit 3.6 (linje 246-260) med følgende dybdegående og formelbaserede indhold.*

**Nuværende kode (Linje 246-260):**
```html
<!-- ═══════════════════ INGENIØRENS PERSPEKTIV: MEKANIK ═══════════════════ -->
<h2>3.6 Ingeniørens Perspektiv: Turbiner &amp; Pumper</h2>

<p>For at forstå hele termodynamikken i et dampanlæg, kigger ingeniøren også på komponenterne der trækker energien ud av, eller flytter, vandet.</p>

<div class="grid grid-2">
  <div class="card">
    <h3>⚙️ Isentropisk Turbinevirkningsgrad</h3>
    <p>Når dampen ekspanderer gennem en dampturbine i et ideelt (isentropisk) system, foregår det uden ændring i entropi...</p>
  </div>
  <div class="card">
    <h3>🌊 NPSH &amp; Kavitation</h3>
    <p>Kedelfødevandspumper opererer med vand tæt på kogepunktet...</p>
  </div>
</div>
```

**Foreslået erstatningskode (med isentropisk formel, NPSH-ligning og afhjælpningsliste):**
```html
<!-- ═══════════════════ INGENIØRENS PERSPEKTIV: MEKANIK ═══════════════════ -->
<h2>3.6 Ingeniørens perspektiv: Turbiner &amp; pumper</h2>
<p>For at forstå hele den termodynamiske kredsproces (Rankine-kredsprocessen) i et dampanlæg, skal vi analysere de komponenter, der enten udtager mekanisk arbejde (dampturbinen) eller tilfører arbejde (fødevandspumpen).</p>

<h3>3.6.1 Isentropisk turbinevirkningsgrad (&eta;<sub>is,t</sub>)</h3>
<p>Når damp ekspanderer gennem en turbine, vil der i en ideel proces (reversibel og adiabatisk) ikke ske nogen ændring i entropien (processen er <em>isentropisk</em>). I virkeligheden skaber friktion mellem damp og skovle, hvirvler og trykfald tab, hvilket øger dampens entropi og efterlader mere energi (entalpi) i udløbsdampen. Den isentropiske turbinevirkningsgrad angiver forholdet mellem det faktiske arbejde og det teoretisk maksimale (isentropiske) arbejde:</p>

<div class="formula">
<b>&eta;<sub>is,t</sub> = w<sub>aktuel</sub> ÷ w<sub>isentropisk</sub> = (h<sub>ind</sub> − h<sub>ud,aktuel</sub>) ÷ (h<sub>ind</sub> − h<sub>ud,isentropisk</sub>)</b>
</div>

<p>Hvor:</p>
<ul>
  <li><strong>h<sub>ind</sub></strong>: Specifik entalpi af damp ved turbinens indløb [kJ/kg]</li>
  <li><strong>h<sub>ud,aktuel</sub></strong>: Den faktiske specifikke entalpi ved turbinens udløb [kJ/kg]</li>
  <li><strong>h<sub>ud,isentropisk</sub></strong>: Den teoretiske specifikke entalpi ved turbinens udløb, hvis ekspansionen havde været fuldstændig tabsfri (beregnes ud fra s<sub>ud</sub> = s<sub>ind</sub> ved udløbstrykket) [kJ/kg]</li>
</ul>

<div class="alert info">
  <div class="alert-icon">i</div>
  <div class="alert-body">
    <div class="alert-title">Dampkvalitet (x) og skovlerosion</div>
    <p>Når damp ekspanderer i en turbine, falder trykket, og dampen bliver våd (en blanding af damp og fine vanddråber). Dampkvaliteten <strong>x</strong> angiver massefraktionen af tør damp i blandingen. Entalpien af våd damp beregnes som <strong>h<sub>x</sub> = h' + x × r</strong>. Hvis dampkvaliteten falder under ca. 0,88 (dvs. over 12 % vanddråber), vil de små vanddråber ramme turbineskovlene med høj hastighed og forårsage alvorlig <strong>mekanisk erosion</strong>. Dette undgås ved at overhede dampen inden turbinen.</p>
  </div>
</div>

<h3>3.6.2 Pump NPSH &amp; Kavitation</h3>
<p>Kedelfødevandspumper skal pumpe vand, der ofte er meget tæt på sit kogepunkt (f.eks. 102–105 °C i en atmosfærisk fødevandstank eller 130–140 °C i en termisk afgasser under overtryk). For at forhindre, at vandet begynder at koge inde i pumpen, introduceres begrebet <strong>NPSH (Net Positive Suction Head)</strong> eller <em>netto-tilløbshøjde</em>.</p>

<p>Vi skelner skarpt mellem anlæggets rådige tryk (NPSH<sub>a</sub>) og pumpens påkrævede tryk (NPSH<sub>r</sub>):</p>

<div class="grid grid-2">
  <div class="card">
    <h4>NPSH<sub>a</sub> (Available / Rådigt)</h4>
    <p>Det faktiske trykoverskud over væskens damptryk ved pumpens sugestuds, som er bestemt af anlæggets opbygning og rørføring:</p>
    <div class="formula" style="padding: 10px 12px; font-size: 13px;">
    <b>NPSH<sub>a</sub> = &frac{(p<sub>tank,abs</sub> − p<sub>v</sub>(T))}{(&rho; × g)} + z<sub>statisk</sub> − h<sub>f,sug</sub></b>
    </div>
  </div>
  <div class="card">
    <h4>NPSH<sub>r</sub> (Required / Påkrævet)</h4>
    <p>Det minimale tryk (målt i meter væskesøjle), som pumpen kræver i sugestudsen for at undgå kavitation. Værdien er bestemt af pumpens geometri og flowhastighed og opgives af pumpeproducenten.</p>
  </div>
</div>

<p>For at undgå kavitation og sikre stabil drift skal følgende sikkerhedskriterium altid være opfyldt under alle driftsforhold:</p>
<div class="formula">
<b>NPSH<sub>a</sub> &ge; NPSH<sub>r</sub> + Sikkerhedsmargin</b> &nbsp; (hvor sikkerhedsmarginen typisk er &ge; 0,5 til 1,0 m)
</div>

<p>Hvor symbolerne i formlen for NPSH<sub>a</sub> er defineret som:</p>
<ul>
  <li><strong>p<sub>tank,abs</sub></strong>: Det absolutte tryk på væskeoverfladen i fødevandstanken [Pa] (f.eks. 101.325 Pa ved atmosfærisk tryk, eller tankens driftstryk)</li>
  <li><strong>p<sub>v</sub>(T)</strong>: Vandets mættede damptryk (mætningstryk) ved den aktuelle fødevandstemperatur [Pa] (findes i damptabellen, f.eks. p<sub>v</sub>(100 °C) = 101.325 Pa)</li>
  <li><strong>&rho;</strong>: Vandets densitet ved den aktuelle temperatur [kg/m³] (f.eks. ca. 958 kg/m³ ved 100 °C)</li>
  <li><strong>g</strong>: Tyngdeaccelerationen (9,81 m/s²)</li>
  <li><strong>z<sub>statisk</sub></strong>: Den geodetiske højdeforskel fra vandoverfladen i fødevandstanken til midtlinjen af pumpens sugestuds [m]. Denne er positiv ved tilløb (tanken hævet over pumpen) og negativ ved sugedrift (pumpen placeret over tanken).</li>
  <li><strong>h<sub>f,sug</sub></strong>: Det samlede friktionstryktab i sugeledningen (inklusive rør, ventiler, bøjninger og filtre) omregnet til meter væskesøjle [m].</li>
</ul>

<h4>Kavitationsmekanikken (Hvorfor går pumpen i stykker?)</h4>
<p>Hvis det statiske tryk i pumpens indløbszone falder under væskens damptryk (NPSH<sub>a</sub> &lt; NPSH<sub>r</sub>), sker der en lokal fordampning, og der dannes millioner af små dampbobler. Når disse dampbobler føres med væskestrømmen ind i områder med højere tryk inde i pumpehjulet, kondenserer dampboblerne øjeblikkeligt. Dette kollaps sker som en <strong>implosion</strong> på mikrosekund-skala.</p>

<p>Ved implosionen dannes der mikroskopiske væskestråler (microjets) med hastigheder på flere hundrede meter i sekundet, som rammer metaloverfladen med trykstød på op til 10.000 bar. Dette medfører:</p>
<ul>
  <li><strong>Mekanisk erosion (pitting):</strong> Metallet på skovlene pulveriseres langsomt, hvilket over tid helt ødelægger pumpehjulet.</li>
  <li><strong>Støj og vibrationer:</strong> Pumpen støjer voldsomt og lyder som om, den pumper grus, sten eller knust glas, hvilket også slider lejer og akseltætninger.</li>
  <li><strong>Fald i ydelse:</strong> Pumpens flow, tryk og virkningsgrad falder markant, fordi dampboblerne spærrer for væskegennemstrømningen.</li>
</ul>

<div class="alert danger">
  <div class="alert-icon">!</div>
  <div class="alert-body">
    <div class="alert-title">Driftsmæssige afhjælpningsstrategier mod kavitation</div>
    <p>Hvis der konstateres kavitation i fødevandspumpen under drift, kan følgende tiltag anvendes til afhjælpning:</p>
    <ol>
      <li><strong>Hæv fødevandstanken (ved nydesign):</strong> Dette øger den statiske tilløbshøjde z<sub>statisk</sub> og er den mest pålidelige løsning.</li>
      <li><strong>Minimer modstanden i sugeslangen:</strong> Hold sugeledningen så kort og lige som muligt, brug fuldborede ventiler, og rens sugefiltret regelmæssigt (et stoppet sugefilter øger h<sub>f,sug</sub> dramatisk).</li>
      <li><strong>Sænk temperaturen en smule:</strong> Hvis fødevandet køles en anelse, reduceres p<sub>v</sub> væsentligt. (Bemærk: Dette øger dog kedlens samlede brændselsforbrug en smule, da vandet skal genopvarmes).</li>
      <li><strong>Installering af inducer eller booster-pumpe:</strong> En inducer er et hjælpehjul monteret foran hovedløbehjulet, som hæver trykket lokalt inden hovedhjulet. En lavhastigheds-boosterpumpe kan også øge trykket tilstrækkeligt inden højtrykspumpen.</li>
    </ol>
  </div>
</div>
```

---

### Anbefalet ændring E: Etablering af referencer og standarder
*Placering: Indsættes efter sektion 3.6 (linje 261) og før navigation-linket (linje 263).*

**Foreslået indsættelseskode:**
```html
<!-- ═══════════════════ REFERENCER ═══════════════════ -->
<h2>3.7 Litteratur &amp; Standarder</h2>
<p>Følgende standarder, retningslinjer og faglitteratur danner grundlag for de termodynamiske formler og beregningsmetoder præsenteret i dette modul:</p>

<ul>
  <li><strong>IAPWS-IF97:</strong> <em>"Formulation 1997 for the Thermodynamic Properties of Water and Steam for Industrial Use"</em>. Den officielle internationale standard udgivet af International Association for the Properties of Water and Steam til beregning af vands og damps fysiske egenskaber.</li>
  <li><strong>DS/EN 12953-11:</strong> <em>"Røgrørskedler - Del 11: Modtagelsesprøvning"</em>. Europæisk standard, der specificerer den direkte og indirekte metode til bestemmelse af virkningsgraden for cylindriske kedler (røgrørskedler).</li>
  <li><strong>DS/EN 12952-15:</strong> <em>"Vandrørskedler og hjælpeinstallationer - Del 15: Modtagelsesprøvning"</em>. Europæisk standard for modtagelsesprøvning af vandrørskedler, herunder bestemmelse af kedeltab og virkningsgrad.</li>
  <li><strong>BEK nr. 1009 (eller nyere BEK nr. 1902):</strong> <em>"Bekendtgørelse om anvendelse og opstilling af trykbærende udstyr"</em>. Dansk lovgivning, der fastsætter sikkerhedskrav til drift og kontrol af dampkedelanlæg.</li>
  <li><strong>Siegert, H.:</strong> Formel for beregning af røggastab baseret på kemisk sammensætning af røggassen og temperaturforskel. Historisk og fortsat anvendt i overensstemmelse med de tyske miljøforskrifter (1. BImSchV).</li>
  <li><strong>ISO 13709 / API 610:</strong> Standarder for centrifugalpumper inden for olie-, gas- og procesindustrien. Angiver krav til pumpedesign og NPSH-sikkerhedsmargener.</li>
  <li><strong>Schmidt, Jens:</strong> <em>"Praktisk Dampteknik"</em>. Standarddansk lærebog inden for kedelpasseruddannelsen og drift af dampkedelanlæg.</li>
  <li><strong>Boles, M. A. &amp; Çengel, Y. A.:</strong> <em>"Thermodynamics: An Engineering Approach"</em>. Anerkendt international lærebog i termodynamik, der dækker Rankine-kredsprocessen, isentropisk turbinevirkningsgrad og interpolationsmetoder.</li>
</ul>
```

---

## 5. Verifikationsmetode (Verification Method)

Da dette projekt er en statisk dokumentationshjemmeside uden automatiserede kodesøgningstests, foreslås følgende verifikationsmetode for at bekræfte integriteten af ændringerne efter implementeringen:

1. **Visuel inspektion af layout (Layout Compliance)**:
   * Åbn den opdaterede `docs/03-termodynamik/index.html` i en browser.
   * Kontroller, at formlerne i `.formula` renderes korrekt med orange fremhævelse på `b` og blå på `em`.
   * Kontroller, at de nye `.alert.info`, `.alert.warn` og `.alert.danger` renderes korrekt med deres respektive farver og ikoner.
   * Kontroller, at tabellen over Siegert-konstanter og tabellen over interpolationsdata renderes i overensstemmelse med resten af siden og anvender `.num` klassen til talformatering (højrestillet, JetBrains Mono font).
   * Verificer, at navigationen i topbaren (`../02-dampkedler/`, `../../index.html`, `../04-forbraending/`) og pagenav-knapperne i bunden fungerer fejlfrit uden brudte links.

2. **Matematisk og fysisk konsistenskontrol**:
   * Kontroller, at den specifikke varmekapacitet af vand ($c_p$) i formlen under 3.1 har enheden `kJ/(kg·K)`.
   * Kontroller, at interpolationsberegningen for $h'$ ved 15 bar giver præcis $842,62 \text{ kJ/kg}$:
     $$h'_{15} = 814,7 + \frac{15 - 13}{18 - 13} \times (884,5 - 814,7) = 814,7 + 0,4 \times 69,8 = 814,7 + 27,92 = 842,62 \text{ kJ/kg}$$
   * Kontroller, at de opgivne Siegert-konstanter ($f_{\text{CO2}}$ og $f_{\text{O2}}$) er konsistente med Modul 09 ($K / 100$).
   * Kontroller, at NPSH-sikkerhedskriteriet opfylder:
     $$NPSH_a \ge NPSH_r + \text{Sikkerhedsmargin}$$

3. **HTML Validering**:
   * Kør filen igennem en lokal HTML-syntaks-tjekker (f.eks. `tidy` eller `htmlhint`) for at sikre, at der ikke er ubalancerede tags (f.eks. manglende lukke-tags på `div`, `ul`, `li` eller `table`).
