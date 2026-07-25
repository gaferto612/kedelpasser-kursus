# Handoff Rapport — Revisionsrapport & Anbefalinger til Modul 03 (Termodynamik)

Denne rapport indeholder observationer, logisk ræsonnement og konkrete anbefalinger til udvidelse af kursusmaterialet i **Modul 03: Termodynamik & Damptabel** (`docs/03-termodynamik/index.html`). Udvidelsen tilføjer avancerede termodynamiske begreber, formler og danske lovgivnings- og ingeniørreferencer ved brug af de eksisterende CSS-klasser i projektet.

---

## 1. Observationer (Observation)

Følgende er direkte observationer foretaget under revisionen af `docs/03-termodynamik/index.html` og tilhørende filer:

1. **Filstruktur og nuværende omfang af Modul 03:**
   - Filen `docs/03-termodynamik/index.html` har i alt 283 linjer.
   - Den dækker overordnet:
     - **Afsnit 3.1 (linje 32-63):** Basale definitioner af entalpi ($h'$, $h''$, $r$), mættet væske og mættet damp. Den viser en forenklet formel for entalpi af vand under 105 °C ($h' = T \times 4,19 \text{ kJ/kg}$).
     - **Afsnit 3.2 (linje 65-116):** Forskel på arbejdstryk og absolut tryk ($p_{\text{abs}} = p_{\text{man}} + 1 \text{ bar}$) med et diagram.
     - **Afsnit 3.3 (linje 118-154):** Uddrag af mætningstabel for vand/damp og en kort bemærkning om decimaler.
     - **Afsnit 3.4 (linje 156-212):** Kedlens energikæde og den direkte virkningsgradsberegning ($\eta = Q_{\text{produceret}} / Q_{\text{indfyret}}$) samt en kort formel for fordampningstal.
     - **Afsnit 3.5 (linje 214-245):** Komplet beregningseksempel for en olieindfyret kedel.
     - **Afsnit 3.6 (linje 247-261):** Kort overordnet beskrivelse af turbinevirkningsgrad samt NPSH & kavitation som to uafhængige kort.
     - **Mangler:** Materialet mangler tekniske detaljer vedrørende temperaturafhængigheden af vands specifikke varmekapacitet ($c_p$), entalpi for overhedet og våd damp, fysisk forklaring på ændringen i fordampningsvarme ($r$) frem til det kritiske punkt, en beskrivelse af Mollier-diagrammet, den indirekte virkningsgradsmetode (tabmetoden/Siegerts formel), det normaliserede fordampningstal (equivalent evaporation), samt de matematiske formler for turbinevirkningsgrad og tilgængelig NPSH. Der mangler desuden specifikke danske kildehenvisninger og normreferencer (som DS/EN 12952/12953, BEK 1009, og standardlærebøger).

2. **Formatering og CSS-klasser i `assets/css/style.css`:**
   - Websitet bruger et fælles stylesheet med specifikke designmønstre til formelsamlinger og tekniske illustrationer:
     - `.card` til baggrundskort (f.eks. eksempler).
     - `.formula` til formler (monospaced med et rødt "FORMEL" tag i øverste højre hjørne. Fed tekst `<b>` bliver gul, og fremhævet tekst `<em>` bliver blå).
     - `.alert.info`, `.alert.warn`, `.alert.danger`, `.alert.ok` til fremhævede bokse.
     - `.grid.grid-2`, `.grid.grid-3` til layout.
     - `.badge.badge-blue`, `.badge-amber`, `.badge-green`, `.badge-red` til små badges.
     - `.fact`, `.fact-label`, `.fact-val`, `.fact-note` til visning af nøgletal.

3. **Formelsamling i Modul 09 (`docs/09-formler-tabeller/index.html`):**
   - Modul 09 (linje 67-84) indeholder allerede Siegerts formel til røggastab ($q_A$) og tabeller med brændselsværdier samt en damptabel (linje 137-231) baseret på **IAPWS-IF97** med det kritiske punkt beskrevet ved 221,2 bar abs og 374,15 °C.

---

## 2. Logisk Ræsonnement (Logic Chain)

Baseret på observationerne er ræsonnementet for de foreslåede udvidelser som følger:

1. **Behov for præcisering af $c_p$ og overhedet/våd damp:**
   - Nuværende materiale angiver $c_p = 4,19 \text{ kJ/kg}$ som en konstant (linje 57). For at give studerende en dybere forståelse af termodynamikken bør det præciseres, at vands specifikke varmekapacitet ændrer sig med temperaturen (se tabel i Modul 9.3).
   - Industrielle dampanlæg producerer ofte enten overhedet damp (f.eks. til turbiner) eller våd damp (medrevet vand). Derfor er formlerne for overhedet damp ($h = h'' + c_{p,\text{damp}} \cdot \Delta T$) og våd damp ($h_x = h' + x \cdot r$) afgørende for, at en kedelpasser kan lave præcise energibalancer.

2. **Mollier-diagrammets anvendelse:**
   - Mollier-diagrammet (h-s) nævnes i introduktionen (linje 28), men forklares ikke yderligere. For at gøre kurset operationelt, skal det forklares, hvordan man aflæser isobarer, isotermer og linjer for konstant dampkvalitet ($x$), samt hvordan ekspansions- og drosselprocesser afbildes.

3. **Direkte vs. indirekte virkningsgrad samt normalisering:**
   - Nuværende afsnit 3.4 viser kun den direkte metode (linje 207-211). I praksis og under DS/EN standarder (f.eks. DS/EN 12952-15) anvendes den indirekte metode (tabmetoden) ofte, da det er svært at måle damp- og brændselsmængde præcist nok på driftsanlæg. Røggastab (via Siegerts formel) og strålingstab skal derfor introduceres formelt.
   - For at sammenligne kedlers effektivitet på tværs af driftstryk og fødevandstemperaturer, er det nødvendigt at introducere begrebet *normaliseret fordampningstal* (equivalent evaporation), som standardiserer dampproduktionen til en referenceværdi på $2257,9 \text{ kJ/kg}$.

4. **Pumper og turbiner formeludvidelse:**
   - Afsnit 3.6 nævner NPSH og isentropisk virkningsgrad uden formler. For en teknisk audit skal disse understøttes med matematiske udtryk ($\eta_{\text{is}}$ og $NPSH_{\text{tilgængelig}}$), så beregninger af kavitationsrisiko kan udføres efter gængse ingeniørmæssige metoder (f.eks. under hensyntagen til temperaturafhængigt mætningstryk).

5. **Strukturel og sproglig integration:**
   - Alle anbefalede tilføjelser skal skrives på fejlfrit dansk og integreres direkte i den eksisterende HTML-struktur. HTML-koden skal udelukkende anvende godkendte CSS-klasser (f.eks. `.formula`, `.card` og `.alert.info`) for at bevare sidens visuelle identitet ("industrial-blueprint" æstetikken) uden at bryde layoutet.

---

## 3. Forbehold (Caveats)

- **Ingen kodeændringer udført:** Da Explorer 1 har en read-only rolle, er ingen af de foreslåede ændringer skrevet direkte ind i `docs/03-termodynamik/index.html`. Ændringerne skal implementeres af en efterfølgende agent (Implementer).
- **Vand/damp-tabeller:** De præsenterede formler for overhedet damp anvender en gennemsnitlig tilnærmet værdi for $c_{p,\text{damp}}$ på $2,0 \text{ kJ/(kg·K)}$. For helt præcise beregninger skal de studerende altid henvises til direkte opslag i IAPWS-IF97 tabeller for overhedet damp, da $c_p$ for damp varierer kraftigt nær mætningslinjen.
- **Siegerts formel:** Konstanterne i Siegerts formel varierer en smule afhængigt af brændselstype og den præcise europæiske standardudgave (EN 12952-15 / EN 12953-11). Vi anvender her de standardværdier, som er etableret i Modul 09 for overensstemmelse på tværs af modulerne.

---

## 4. Konklusion (Conclusion) — Anbefalede ændringer

Her følger de specifikke anbefalinger og præcise HTML-kodeblokke, der anbefales indsat i `docs/03-termodynamik/index.html`.

### Anbefaling A: Udvidelse af Afsnit 3.1 med overhedet og våd damp
**Placering:** Indsættes efter linje 63 (lige efter eksemplet på fødevandsentalpi).

```html
<!-- TILFØJELSE: Overhedet damp og våd damp -->
<h3>3.1.1 Overhedet damp og specifik varmekapacitet</h3>
<p>
  Når mættet damp tilføres yderligere varme i en overheder, stiger dens temperatur over mætningstemperaturen ved det givne tryk. Den overhedede damp indeholder mere energi end mættet damp, og temperaturen kan reguleres uafhængigt af trykket.
</p>
<p>
  Entalpien for overhedet damp ($h_{\text{overhedet}}$) beregnes ved at lægge overhedningsvarmen til entalpien for den mættede damp ($h''$):
</p>
<div class="formula">
  <b>h<sub>overhedet</sub> = h'' + c<sub>p,damp</sub> × (T<sub>overhedet</sub> − T<sub>mætning</sub>)</b> &nbsp; <em>[kJ/kg]</em>
</div>
<p>
  Hvor <b>c<sub>p,damp</sub></b> er dampens specifikke varmekapacitet, som ved typiske kedeltryk (1–20 bar) kan antages at være <strong>~2,0 kJ/(kg·K)</strong> som et gennemsnit.
</p>

<div class="card">
  <div class="card-head">
    <div class="card-num">EKSEMPEL</div>
    <div class="card-title">Entalpi for overhedet damp</div>
  </div>
  <p>
    En dampkedel leverer overhedet damp ved <strong>10 bar absolut tryk</strong> og en temperatur på <strong>250 °C</strong>.
  </p>
  <ul>
    <li>Mætningstemperatur fra damptabellen ved 10 bar: $T_{\text{mætning}} = 179,9 \text{ °C}$</li>
    <li>Entalpi for mættet damp fra damptabellen: $h'' = 2778,1 \text{ kJ/kg}$</li>
    <li>Overhedning i Kelvin: $\Delta T = 250 - 179,9 = 70,1 \text{ K}$</li>
  </ul>
  <div class="formula">
    h<sub>overhedet</sub> = 2778,1 + 2,0 × 70,1 = <b>2918,3 kJ/kg</b>
  </div>
</div>

<h3>3.1.2 Våd damp og dampkvalitet (x)</h3>
<p>
  I mange kedler (især røgrørskedler uden overheder) vil dampen trække små vanddråber med sig. Dette kaldes <strong>våd damp</strong>. Dampens kvalitet angives ved tørhedsgraden <b>x</b> (dampkvalitet), som angiver masseandelen af tør damp i blandingen:
</p>
<div class="formula">
  <b>x = m<sub>damp</sub> ÷ (m<sub>damp</sub> + m<sub>vand</sub>)</b> &nbsp; <em>(hvor 0 ≤ x ≤ 1)</em>
</div>
<p>
  Entalpien for våd damp ($h_x$) beregnes ud fra entalpien for mættet væske ($h'$) og fordampningsvarmen ($r$):
</p>
<div class="formula">
  <b>h<sub>x</sub> = h' + x × r = h' + x × (h'' − h')</b> &nbsp; <em>[kJ/kg]</em>
</div>
<p>
  En dampkvalitet på $x = 0,97$ betyder eksempelvis, at dampstrømmen indeholder 3 % flydende vand. Dette reducerer den tilgængelige varmeenergi og øger risikoen for vandslag i rørledningerne.
</p>
```

---

### Anbefaling B: Udvidelse af Afsnit 3.3 med det kritiske punkt og Mollier-diagrammet
**Placering:** Indsættes efter linje 153 (lige efter `.alert info` om decimaler).

```html
<!-- TILFØJELSE: Det kritiske punkt og Mollier-diagrammet -->
<h3>3.3.1 Fordampningsvarme (r) og det kritiske punkt</h3>
<p>
  Fordampningsvarmen ($r = h'' - h'$) angiver den energimængde, der kræves for at omdanne 1 kg kogende vand til tør damp ved konstant tryk. Som det ses i damptabellen, <strong>falder fordampningsvarmen gradvist, når trykket stiger</strong>. 
</p>
<p>
  Dette skyldes, at forskellen i massefylde (og dermed molekylær afstand) mellem vand og damp mindskes. Ved det <b>kritiske punkt</b> (et absolut tryk på <strong>221,2 bar</strong> og en temperatur på <strong>374,15 °C</strong>) forsvinder faseovergangen fuldstændigt:
</p>
<div class="formula">
  Ved det kritiske punkt: <b>r = 0 kJ/kg</b> &nbsp; og &nbsp; <b>h' = h'' = 2011,1 kJ/kg</b>
</div>
<p>
  Over det kritiske punkt kan vand opvarmes og omdannes til damp uden at koge (enfaset strømning), hvilket udnyttes i overkritiske kraftværkskedler (f.eks. Benson-kedler).
</p>

<h3>3.3.2 Mollier-diagrammet (h-s diagram)</h3>
<p>
  Mollier-diagrammet er et grafisk værktøj, der afbilder specifik entalpi ($h$ på y-aksen) mod specifik entropi ($s$ på x-aksen). Det bruges til hurtigt at visualisere damptekniske processer uden komplekse tabelslag:
</p>
<ul>
  <li><strong>Isobarer (konstant tryk):</strong> Linjer, der skærer op gennem diagrammet. I våddampsområdet er de rette linjer, men knækker opad i overhedningsområdet.</li>
  <li><strong>Isotermer (konstant temperatur):</strong> Følger isobarerne i våddampsområdet (da tryk og temperatur er koblede under kogning), men flader ud mod højre i overhedningsområdet.</li>
  <li><strong>Konstante x-linjer (dampkvalitet):</strong> Kurver under mætningslinjen ($x = 1,0$), der gør det muligt at aflæse entalpien af våd damp direkte.</li>
</ul>
<p>
  Processer som <strong>drosling</strong> (trykfald uden energiudveksling, f.eks. i en reduktionsventil) forløber som en vandret linje i diagrammet ($h = \text{konstant}$), mens en ideel ekspansion i en dampturbine forløber som en lodret linje ($s = \text{konstant}$).
</p>
```

---

### Anbefaling C: Udvidelse af Afsnit 3.4 med indirekte virkningsgrad og normaliseret fordampningstal
**Placering:** Indsættes efter linje 211 (lige efter formelboksen for virkningsgrad).

```html
<!-- TILFØJELSE: Indirekte virkningsgrad og Normaliseret fordampningstal -->
<h3>3.4.1 Kedelvirkningsgrad — Direkte og indirekte metode</h3>
<p>
  Kedelvirkningsgraden ($\eta$) beskriver effektiviteten af energioverførslen fra brændslet til dampen. Denne kan bestemmes på to måder:
</p>

<div class="grid grid-2">
  <div class="card">
    <h4>1. Den direkte metode</h4>
    <p>Virkningsgraden beregnes direkte som forholdet mellem den nyttiggjorte energi i dampen og den indfyrede energi i brændslet. Kræver præcis flowmåling af damp og brændsel.</p>
    <div class="formula">
      <b>η = Q<sub>produceret</sub> ÷ Q<sub>indfyret</sub></b>
    </div>
  </div>
  <div class="card">
    <h4>2. Den indirekte metode (Tabmetoden)</h4>
    <p>Virkningsgraden findes ved at måle og fratrække alle enkelttab fra 100 %. Dette er den mest anvendte metode ved acceptprøvning i henhold til standarden <strong>DS/EN 12952-15</strong>.</p>
    <div class="formula">
      <b>η = 100 − (q<sub>a</sub> + q<sub>str</sub> + q<sub>rest</sub>) &nbsp; [%]</b>
    </div>
  </div>
</div>

<p>
  Hvor varmetabene defineres som:
</p>
<ul>
  <li><b>q<sub>a</sub> (Røggastab):</b> Det største tab i en kedel, som skyldes den varme, der ledes ud gennem skorstenen. Beregnes ved Siegerts formel (se Modul 09) baseret på differencen mellem røggas- og lufttemperatur samt røggassens $CO_2$- eller $O_2$-indhold.</li>
  <li><b>q<sub>str</sub> (Strålingstab):</b> Varmetab fra kedlens ydre overflader til omgivende rum pga. stråling og konvektion (typisk 1–3 % afhængigt af isolering).</li>
  <li><b>q<sub>rest</sub> (Uforbrændt tab/Resttab):</b> Energi tabt som sod, ubrændte gasser ($CO$) eller uforbrændt kulstof i aske.</li>
</ul>

<h3>3.4.2 Normaliseret fordampningstal (f<sub>norm</sub>)</h3>
<p>
  Det rå fordampningstal ($f = \text{kg damp} / \text{kg brændsel}$) angiver mængden af damp produceret pr. enhed brændsel. Da kedler arbejder under forskellige fødevandstemperaturer og tryk, kan rå fordampningstal ikke sammenlignes direkte.
</p>
<p>
  For at muliggøre sammenligning introduceres det <strong>normaliserede fordampningstal</strong> ($f_{\text{norm}}$ / equivalent evaporation). Dette omregner den faktiske dampproduktion til en referencefordampning "fra og ved 100 °C" under atmosfærisk tryk, hvor fordampningsvarmen er en konstant ($r_0 = 2257,9 \text{ kJ/kg}$):
</p>
<div class="formula">
  <b>f<sub>norm</sub> = f × (h'' − h'<sub>fødevand</sub>) ÷ 2257,9</b> &nbsp; <em>[kg damp/kg brændsel]</em>
</div>
<p>
  Dette tal fungerer som en central nøgleværdi (KPI) for kedlens sande termodynamiske effektivitet over tid, uafhængigt af skiftende driftsbetingelser.
</p>
```

---

### Anbefaling D: Opdatering af Afsnit 3.6 med matematiske formler for pumper og turbiner
**Placering:** Erstatter det eksisterende indhold i de to kort i grid-layoutet under afsnit 3.6 (linje 251-260).

```html
<!-- TILFØJELSE: Detaljerede turbiner og pumper kort -->
<div class="grid grid-2">
  <div class="card">
    <h3>⚙️ Isentropisk Turbinevirkningsgrad</h3>
    <p>Når damp ekspanderer gennem en turbine i et tabsfri (isentropisk) system, sker det ved konstant entropi ($s = \text{konstant}$). I praksis vil friktion, hvirvler og dråbedannelser medføre tab, som øger mediets entropi ($s_{ud} > s_{ind}$). Den isentropiske turbinevirkningsgrad ($\eta_{is}$) beskriver, hvor stor en andel af det teoretiske entalpifald, der reelt omsættes til mekanisk arbejde:</p>
    <div class="formula">
      <b>η<sub>is</sub> = (h<sub>ind</sub> − h<sub>ud,faktisk</sub>) ÷ (h<sub>ind</sub> − h<sub>ud,isentropisk</sub>)</b>
    </div>
    <p>Denne ekspansionslinje og dens afvigelse fra den lodrette isentrope linje kan direkte indtegnes og aflæses i et Mollier-diagram.</p>
  </div>
  <div class="card">
    <h3>🌊 NPSH &amp; Kavitation</h3>
    <p>Kedelfødevandspumper arbejder ofte med vand tæt på kogepunktet (f.eks. 105 °C). Hvis det statiske tryk i pumpens sugeside falder under vandets damptryk ($p_{\text{damp}}$), begynder vandet at koge, og der dannes dampbobler. Når boblerne føres ind i pumpen, hvor trykket er højere, kollapser de eksplosionsagtigt. Dette skaber trykspidser (op til flere tusinde bar lokalt), som beskadiger pumpehjulet (kavitation). For at undgå dette skal den tilgængelige trykhøjde (NPSH<sub>tilgængelig</sub>) altid overstige pumpens krævede NPSH<sub>krævet</sub>:</p>
    <div class="formula">
      <b>NPSH<sub>tilgængelig</sub> = (p<sub>tank</sub> − p<sub>damp</sub>(T)) ÷ (ρ × g) + h<sub>statisk</sub> − h<sub>friktion</sub></b> &nbsp; <em>[m]</em>
    </div>
    <p>Hvor $p_{\text{tank}}$ er det absolutte tryk i fødevandsbeholderen [Pa], $p_{\text{damp}}(T)$ er vandets damptryk ved temperaturen [Pa abs], $\rho$ er vandets densitet [kg/m³], $g = 9,81 \text{ m/s}²$, $h_{\text{statisk}}$ er højden af vandstanden over pumpen [m], og $h_{\text{friktion}}$ er tabet i sugerøret [m]. Der indbygges normalt en sikkerhedsmargin på mindst <b>0,5 m</b>.</p>
  </div>
</div>
```

---

### Anbefaling E: Tilføjelse af Afsnit 3.7 Litteratur & Normer (Referencer)
**Placering:** Indsættes lige før navigationslinjen (linje 263).

```html
<!-- TILFØJELSE: Afsnit 3.7 - Litteratur & Normer -->
<!-- ═══════════════════ LITTERATUR & NORMER ═══════════════════ -->
<h2>3.7 Litteratur &amp; Normer</h2>
<p>
  Alle termodynamiske beregninger, sikkerhedskrav og driftsbetingelser i dette modul refererer til anerkendte standarder, lovgivning og teknisk litteratur i Danmark:
</p>
<div class="grid grid-2">
  <div class="card">
    <h4>Lovgivning &amp; Standarder</h4>
    <ul>
      <li><strong>BEK nr. 1009 af 25/08/2017:</strong> <em>Bekendtgørelse om anvendelse af trykbærende udstyr.</em> Fastlægger de retslige rammer for sikker drift, opstillingskontrol, periodiske eftersyn samt krav om kedelpassercertifikat i Danmark.</li>
      <li><strong>DS/EN 12952-15:</strong> <em>Vandrørskedler og hjælpeudstyr - Del 15: Acceptprøvning.</em> Europæisk standard til beregning af varmebalancer og virkningsgrad ved acceptprøver (direkte/indirekte metode).</li>
      <li><strong>DS/EN 12953-11:</strong> <em>Røgrørskedler - Del 11: Acceptprøvning.</em> Europæisk standard til acceptprøvning af røgrørskedler.</li>
    </ul>
  </div>
  <div class="card">
    <h4>Fagbøger &amp; Tabeller</h4>
    <ul>
      <li><strong>Praktisk Dampteknik:</strong> af Carl-Erik Andersen. Det primære referenceværk for kedelpassere og driftsledere i Danmark, som dækker praktisk anvendt dampteknologi og beregningsmetoder.</li>
      <li><strong>Kedel- og maskinpasser:</strong> (Erhvervsskolernes Forlag). Standard lærebog anvendt i undervisningen på de danske erhvervsskoler.</li>
      <li><strong>IAPWS-IF97:</strong> Den internationale standard for termodynamiske egenskaber for vand og damp, udgivet af <em>International Association for the Properties of Water and Steam</em>, som ligger til grund for alle anvendte damptabeller.</li>
    </ul>
  </div>
</div>
```

---

## 5. Verifikationsmetode (Verification Method)

Efter at en Implementer-agent har indsat de foreslåede HTML-blokke i `docs/03-termodynamik/index.html`, kan ændringerne verificeres som følger:

1. **Visuel verifikation:**
   - Åbn `docs/03-termodynamik/index.html` i en standard browser (eller brug en lokal webserver) og bekræft:
     - At alle formelbokse (`.formula`) vises korrekt med den karakteristiske mørke baggrund og det røde "FORMEL" badge i øverste højre hjørne.
     - At de nye underafsnit (3.1.1, 3.1.2, 3.3.1, 3.3.2, 3.4.1, 3.4.2 og 3.7) følger kapitlets numeriske rækkefølge og hierarki.
     - At grid-opstillingen (`.grid.grid-2`) til virkningsgradsmetoderne og referencerne tilpasser sig korrekt på skærmen uden at bryde sidens maksimale bredde på 980px.
     - At der ikke optræder uformateret rå tekst eller rå HTML-tags.

2. **Validering af links og referencer:**
   - Tjek at de interne links i dokumentet og topbaren fungerer korrekt.
   - Bekræft at sproglige udtryk stemmer overens med dansk ingeniørterminologi (f.eks. "drossling", "isentropisk", "mætningstryk", "equivalent evaporation", "røggastab", "Siegert").

3. **Invalideringsbetingelser:**
   - Verifikationen vil fejle, hvis der introduceres eksterne styles eller hvis der bruges CSS-klasser, der ikke er defineret i `assets/css/style.css` (hvilket ville bryde med blueprint-æstetikken).
