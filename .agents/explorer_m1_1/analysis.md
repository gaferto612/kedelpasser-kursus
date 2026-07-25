# Revisionsanalyse — Modul 01: Certifikater & Lovgivning

Dette dokument indeholder en detaljeret gennemgang og revisionsplan for `docs/01-certifikater/index.html` med henblik på at hæve det faglige niveau. Formålet er at tilføje præcise lovmæssige referencer til **BEK 498/2024** (samt den relaterede **BEK 497/2024**), europæiske standarder (**DS/EN 12952** og **DS/EN 12953**), samt dybere ingeniørmæssige detaljer om kedeldrift, kontrolklasser og kedelpasserens ansvar.

---

## 1. Hovedkonklusioner og Gaps i det nuværende indhold

Ved gennemgang af `docs/01-certifikater/index.html` er følgende primære mangler identificeret:
1. **Mangel på præcise lovhenvisninger**: Selvom BEK 498/2024 nævnes, mangler der specifikke henvisninger til de relevante paragraffer (§ 29 om certifikater) og bilag (Bilag 1 om kontrolklasser og eftersynsintervaller). Ligeledes mangler sammenhængen med **PED 2014/68/EU** (Pressure Equipment Directive) og den danske **BEK 497/2024** (om indretning, ombygning og reparation).
2. **Udeladelse af EN-standarder**: Der er ingen omtale af de europæiske standarder for kedelkonstruktion og -udrustning:
   - **DS/EN 12952** (Vandrørskedler)
   - **DS/EN 12953** (Storrumskedler / røgrørskedler)
3. **Mangel på tekniske krav til "Drift uden konstant overvågning" (72-timers drift)**: Dette er et centralt emne i moderne kedeldrift. Det er udeladt, at automatisk overvågede anlæg kan køre uden konstant opsyn i op til 72 timer jf. **DS/EN 12952-7** og **DS/EN 12953-6** (Annex B/C), under forudsætning af specifikke sikkerhedssystemer og regelmæssig manuel test.
4. **Vandkemiske krav er udeladt**: Forholdet mellem vandkvalitet og sikkerhed er ikke berørt i dette modul. Kravene til fødevand og kedelvand i henhold til **DS/EN 12952-12** og **DS/EN 12953-10** (pH, ledningsevne, hårdhed, iltindhold) skal introduceres her, da manglende overholdelse udgør en alvorlig sikkerhedsrisiko.
5. **Tekniske detaljer om sikkerhedsudstyr (Sikkerhedsventiler)**: Sikkerhedsventilers funktion, afprøvning og dimensionering i henhold til **DS/EN ISO 4126** bør uddybes under kedelpasserens opgaver.
6. **Kedelbogens juridiske status**: Kedelbogens rolle som et officielt dokument, herunder kravene til opbevaringstid (typisk minimum 5 år) og logningsdetaljer, bør klarlægges.

---

## 2. Detaljerede anbefalinger sektion for sektion

### 1.1 Hvornår kræves der certifikat?
- **Lovmæssig præcisering**: Tilføj eksplicitte henvisninger til **BEK 498/2024 § 29, stk. 1**.
- **Begrebsafklaring**: Præciser, at "vandindhold" i lovgivningens forstand refererer til det samlede geometriske volumen ($V$) af kedlens trykbærende dele (både vand- og damprum), og ikke kun den flydende vandfase under drift.
- **Opdeling**: Lav en klar adskillelse mellem dampkedler og hedtvandsanlæg:
  - **Dampkedler**: Arbejdstryk ($PS$) > 10 bar **og** volumen ($V$) > 1.000 liter.
  - **Hedtvandsanlæg**: Temperatur ($TS$) > 110 °C **og** volumen ($V$) > 1.000 liter.
- **Sikkerhedsmæssig opsamling**: Tilføj en note om, at kedler under disse grænser stadig skal betjenes forsvarligt og være underlagt regelmæssigt tilsyn jf. **BEK 498/2024 § 23** (om forsvarlig anvendelse og vedligeholdelse).

### 1.2 Certifikattyper I, II & III
- **Opdatering af grænser og anvendelse**:
  - **Type I (Almindeligt kedelpassercertifikat)**: Giver ret til at passe dampkedler med $PS \le 30\text{ bar}$ og $V \le 5.000\text{ liter}$ samt hedtvandsanlæg med $TS \le 120\text{ °C}$ og $V \le 10.000\text{ liter}$.
  - **Type II (Udvidet kedelpassercertifikat)**: Giver ret til at passe dampkedler med $PS \le 60\text{ bar}$ og $V \le 20.000\text{ liter}$ samt hedtvandsanlæg med $TS \le 120\text{ °C}$ og ubegrænset volumen.
  - **Type III (Stort kedelpassercertifikat)**: Giver ubegrænset ret til alle tryk og volumener (kraftværkskedler).
- **Lovmæssige krav til oplæring**: Uddyb betingelserne for pasning uden certifikat (under oplæring jf. § 29, stk. 2). Det skal fremgå, at der skal foreligge et skriftligt oplæringsprogram, og at den certifikathavende person, der overvåger oplæringen, har det fulde driftsmæssige ansvar under forløbet.

### 1.3 Kontrolklasser A, B & C — PS×V
- **Sammenhæng med PED 2014/68/EU**: Forklar, at kontrolklasserne A, B og C i den danske **BEK 498/2024 Bilag 1** er tæt forbundet med farekategorierne (kategori I-IV) i det europæiske direktiv for trykbærende udstyr (PED).
- **Eftersynsintervaller**: Uddyb kravene for de enkelte klasser:
  - **Klasse A** ($PS \times V > 200$): Ydre eftersyn hvert år (12 mdr.), Indre eftersyn hvert 5. år (60 mdr.), samt **styrke- og tæthedsprøvning** (normalt hydrostatisk trykprøvning ved 1,43 × maks. tilladt arbejdstryk) hvert 10. år (120 mdr.) efter bemyndiget organs/inspektionsorgans anvisning.
  - **Klasse B** ($25 < PS \times V \le 200$): Ydre eftersyn hvert 2. år (24 mdr.), Indre eftersyn hvert 6. år (72 mdr.).
  - **Klasse C** ($PS \times V \le 25$): Ydre eftersyn hvert 4. år (48 mdr.).
- **Inspektionsorganets rolle**: Præciser, at eftersyn skal udføres af et akkrediteret inspektionsorgan (type A, fx Force Technology eller TÜV) godkendt af DANAK til at udføre periodiske eftersyn af trykbærende udstyr.

### 1.4 Kedelpasserens ansvar
- **Sikkerhedsventiler (DS/EN ISO 4126)**: Tilføj tekniske detaljer om, at sikkerhedsventilen skal være CE-mærket og dimensioneret til at aflede kedlens maksimale dampydelse uden en trykstigning på over 10 % over det maksimalt tilladte tryk ($PS$). Kedelpasseren skal foretage regelmæssig manuel afprøvning (kontrolleret løft) for at forhindre fastgroning af ventilkeglen.
- **Sikkerhedskæde (Safety Chain)**: Forklar princippet i sikkerhedskæden, hvor fejl på kritiske parametre (vandstand for lav, tryk for højt, flammesvigt) udløser en ufravigelig mekanisk og elektrisk blokering (hardwired nødstop af brænderen), som kun må genindkobles manuelt efter fejlretning jf. **DS/EN 12952-11 / DS/EN 12953-9**.
- **Kedelbogens dokumentationskrav**: Præciser, at kedelbogen (enten fysisk eller digitalt) skal indeholde sporbar dokumentation for:
  - Daglige/ugentlige funktionstest af sikkerhedsudstyr (vandstands-begrænsere, trykbegrænsere).
  - Vandanalyseresultater.
  - Bund- og overfladeblæsninger (for at reducere slam og inddampning).
  - Unormale hændelser, fejl og reparationer.
  - Rapporter fra det akkrediterede eftersynsorgan.
  Opbevaringstiden skal være i overensstemmelse med virksomhedens ledelsessystem, men juridisk set skal den kunne fremvises ved ethvert myndighedstilsyn.

---

## 3. Forslag til nye tekniske afsnit (Gaps)

Vi anbefaler at indsætte to helt nye underafsnit (1.5 og 1.6) i HTML-filen. Disse afsnit vil udfylde de kritiske huller omkring EN-standarder for automatiseret drift og vandkemi.

### Afsnit 1.5: Drift uden konstant overvågning (72-timers drift)
Dette afsnit skal forklare de tekniske rammer for, hvordan moderne anlæg må køre ubemandet. Det skal baseres på **DS/EN 12952-7** og **DS/EN 12953-6** (Annex B og C).
- **Hovedprincip**: Sikkerhedssystemerne skal være redundante og fejlsikre (fail-safe).
- **Nøglekomponenter**:
  - Dobbelt uafhængig måling af kritisk lav vandstand (Low Water Level Limiter – LWLL) med selvovervågende sensorer.
  - Redundant trykbegrænser (High Pressure Limiter – HPL).
  - Automatisk brænderslukning ved fejl i fødevandssystemet eller strømsvigt.
- **Operatørens opgaver**: Selvom anlægget kører automatisk, skal en certificeret kedelpasser foretage en fysisk inspektion og manuel funktionstest af sikkerhedskæden mindst én gang hver 72. time. Dette omfatter blæsning af niveaustande og manuel simulering af fejl.

### Afsnit 1.6: Kemiske krav til kedel- og fødevand
Dette afsnit skal introducere de grundlæggende parametre for vandbehandling baseret på **DS/EN 12952-12** (vandrørskedler) og **DS/EN 12953-10** (storrumskedler).
- **Hvorfor er vandkemi en sikkerhedsfaktor?**:
  - Hårdhedsdannere (kalk) aflejres på kedelrørene og fungerer som isolator. Dette fører til lokal overophedning af metallet med risiko for rørbrud (kedeleksplosion).
  - Forkert pH-værdi fører til syre- eller iltkorrosion, som svækker de trykbærende vægge.
  - Høj ledningsevne (for mange opløste salte) medfører skumdannelse og vandmedrivning til dampsystemet (vandslag i rørledninger).
- **Standard grænseværdier for storrumskedler (driftstryk < 20 bar)**:
  - **Fødevand**: Hårdhed < 0,02 mmol/l (praktisk talt 0 °dH), Iltindhold ($O_2$) < 0,05 mg/l (ved termisk afgasning).
  - **Kedelvand**: pH-værdi: 9,0 – 11,5 (typisk 10,0 – 11,0 for optimal passivering af stål), Ledningsevne < 6.000 μS/cm (afhængigt af kedelproducentens anvisninger).

---

## 4. HTML-implementeringsskabelon (Forslag til struktur)

For at bevare CSS-layoutkompatibiliteten skal de foreslåede ændringer struktureres ved hjælp af eksisterende CSS-klasser (`.card`, `.formula`, `.alert`, `.grid`, `.checklist`, osv.). Herunder vises eksempler på, hvordan koden kan struktureres.

### Skabelon til Afsnit 1.5 (Drift uden konstant overvågning)
```html
<!-- ═══════════════════ DRIFT UDEN KONSTANT OVERVÅGNING ═══════════════════ -->
<h2>1.5 Drift uden konstant overvågning (72-timers drift)</h2>

<p>
  Moderne damp- og hedtvandsanlæg kan indrettes til drift uden konstant opsyn i op til 72 timer. 
  Dette reguleres af de europæiske standarder <strong>DS/EN 12952-7</strong> (vandrørskedler) og 
  <strong>DS/EN 12953-6 Annex B/C</strong> (storrumskedler).
</p>

<div class="grid grid-2">
  <div class="card">
    <h3>Tekniske krav til anlægget</h3>
    <p>For at opnå godkendelse til 72-timers drift skal kedlen udrustes med fejltolerante sikkerhedssystemer:</p>
    <ul class="checklist">
      <li><strong>Redundante vandstandsbegrænsere:</strong> To uafhængige, selvovervågende niveausensorer (2oo2 eller 1oo2 systemer) til beskyttelse mod tørkogning.</li>
      <li><strong>Redundante trykbegrænsere:</strong> Uafhængige pressostater med manuel genindkobling.</li>
      <li><strong>Fejlsikker styring (Fail-safe):</strong> Sikkerhedskredsløb (Safety Integrity Level - SIL), der lukker for brændselstilførslen ved enhver systemfejl.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Kedelpasserens kontrolrutiner</h3>
    <p>Selvom anlægget kører ubemandet, skal kedelpasseren udføre regelmæssige manuelle kontroller:</p>
    <ul>
      <li>Fysisk rundgang og visuel kontrol af kedel og hjælpeudstyr mindst én gang hver 72. time.</li>
      <li>Manuel afprøvning af lavvandssikringen ved at simulere lav vandstand.</li>
      <li>Kontrol og logning af vandkvalitet (pH, ledningsevne).</li>
      <li>Afprøvning af brænderens nødstop og sikkerhedskæde.</li>
    </ul>
  </div>
</div>

<div class="alert info">
  <div class="alert-icon">i</div>
  <div class="alert-body">
    <div class="alert-title">Sikkerhedskædens funktion</div>
    <p>Hvis en af sikkerhedsbegrænserne bryder (fx pga. for lav vandstand eller for højt tryk), skal brændselstilførslen afbrydes øjeblikkeligt. Genindkobling må <em>kun</em> ske manuelt direkte på kedeltavlen efter fejlsøgning.</p>
  </div>
</div>
```

### Skabelon til Afsnit 1.6 (Vandkemiske krav)
```html
<!-- ═══════════════════ VANDKEMISKE KRAV ═══════════════════ -->
<h2>1.6 Vandkemiske krav — DS/EN 12953-10 &amp; DS/EN 12952-12</h2>

<p>
  Vandbehandling er afgørende for kedelsikkerheden. Ubehandlet vand medfører hurtigt korrosion 
  og kedelsten, hvilket i værste fald kan føre til eksplosionsagtige rørskader. Kravene til 
  vandkvaliteten er fastlagt i <strong>DS/EN 12953-10</strong> (storrumskedler) og 
  <strong>DS/EN 12952-12</strong> (vandrørskedler).
</p>

<div class="grid grid-2">
  <div class="card">
    <h3>Vigtige parametre og risici</h3>
    <p>Kedelpasseren skal overvåge og styre følgende kemiske faktorer:</p>
    <ul>
      <li><strong>pH-værdi:</strong> Skal holdes alkalisk (basisk) for at danne en beskyttende magnetithinde på ståloverfladerne. For lav pH fører til syrekorrosion.</li>
      <li><strong>Hårdhed (Kalk):</strong> Skal være tæt på 0. Kalkaflejringer isolerer og medfører lokal overophedning af kedelvæggene, som deformeres eller revner.</li>
      <li><strong>Ledningsevne (Saltindhold):</strong> Måler mængden af opløste salte. For høj ledningsevne medfører skumdannelse og vandmedrivning til damprørene (risiko for vandslag).</li>
      <li><strong>Iltindhold (O₂):</strong> Ilt forårsager grubetæring (korrosion). Ilt fjernes mekanisk (termisk afgasning) og kemisk (iltbindere).</li>
    </ul>
  </div>
  
  <div class="card">
    <h3>Typiske grænseværdier (Storrumskedler < 20 bar)</h3>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Fødevand (Feedwater)</th>
          <th>Kedelvand (Boiler water)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Udseende</strong></td>
          <td>Klart, uden suspenderet stof</td>
          <td>Klart, uden suspenderet stof</td>
        </tr>
        <tr>
          <td><strong>pH-værdi</strong></td>
          <td>&gt; 9,2</td>
          <td>9,0 – 11,5</td>
        </tr>
        <tr>
          <td><strong>Samlet hårdhed</strong></td>
          <td>&lt; 0,02 mmol/l (~0,1 °dH)</td>
          <td>Ingen krav (skal være 0)</td>
        </tr>
        <tr>
          <td><strong>Ledningsevne</strong></td>
          <td>—</td>
          <td>&lt; 6.000 μS/cm (saltholdigt)</td>
        </tr>
        <tr>
          <td><strong>Iltindhold (O₂)</strong></td>
          <td>&lt; 0,05 mg/l</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>
    <div class="diagram-caption">Tabel 1.3 — Vandkvalitetskrav jf. DS/EN 12953-10 for kedler med saltholdigt kedelvand.</div>
  </div>
</div>
```

---

## 5. Faglig ordbog (Glossary) og terminologikontrol

For at sikre ensartethed og faglig præcision på tværs af materialet foreslås følgende terminologi anvendt:

| Engelsk term | Dansk fagterm (standardiseret) | Lovgivningsmæssig / teknisk reference |
| :--- | :--- | :--- |
| **Shell Boiler** | Storrumskedler / Røgrørskedler | DS/EN 12953 |
| **Water-tube Boiler** | Vandrørskedler | DS/EN 12952 |
| **Safety Valve** | Sikkerhedsventil | DS/EN ISO 4126 |
| **Safety Chain** | Sikkerhedskæde / Sikkerhedskredsløb | DS/EN 12953-9 / DS/EN 12952-11 |
| **Boiler Logbook** | Kedelbog | BEK 498/2024 |
| **Periodic Inspection** | Periodisk eftersyn | BEK 498/2024 Bilag 1 |
| **Accredited Inspection Body** | Akkrediteret inspektionsorgan (Type A) | BEK 498/2024 |
| **Hydrostatic Pressure Test** | Trykprøvning (Styrke- og tæthedsprøvning) | BEK 498/2024 Bilag 1 |
| **High Temperature Water Boiler** | Hedtvandsanlæg | BEK 498/2024 § 29 |
| **Low Water Level Limiter (LWLL)** | Lavvandssikring / Vandstandsbegrænser | DS/EN 12953-9 / DS/EN 12952-11 |
| **Conductivity** | Ledningsevne (elektrisk) | DS/EN 12953-10 / DS/EN 12952-12 |
| **Feedwater** | Fødevand | DS/EN 12953-10 / DS/EN 12952-12 |
| **Boiler water** | Kedelvand | DS/EN 12953-10 / DS/EN 12952-12 |
| **Thermal Deaeration** | Termisk afgasning | Kedelteknisk praksis |
| **Blowdown (bottom/surface)** | Bundblæsning / Overfladeblæsning | Kedelteknisk praksis |
