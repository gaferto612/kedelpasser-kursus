# Revisions- og ekspansionsrapport for Modul 02: Dampkedeltyper

Denne analyserapport identificerer mangler i det nuværende indhold af `docs/02-dampkedler/index.html` og præsenterer konkrete anbefalinger til udvidelse af materialet i teknisk dansk. Rapportens formål er at give en implementør (Worker) de nøjagtige tekstafsnit og den præcise HTML-struktur, der skal indsættes.

---

## 1. Oversigt over identificerede mangler (Gaps)

Efter auditering af `docs/02-dampkedler/index.html` er følgende fire områder identificeret som mangelfulde eller ikke-eksisterende:
1. **Manglende dækning af standarder**: Der er ingen reference til DS/EN 12952 (vandrørskedler) og DS/EN 12953 (røgrørskedler), som er de harmoniserede europæiske standarder til PED-direktivet.
2. **Manglende dækning af dansk lovgivning**: De lovpligtige rammer under Arbejdstilsynet (AT-vejledninger for kontrolintervaller, periodiske undersøgelser samt krav om kedelpassercertifikat) er ikke beskrevet.
3. **Formler for kedelspændinger mangler**: Afsnit 2.5 ("Ingeniørens Perspektiv: Mekanik & Materialer") nævner *hoop stress* (tangentialspænding) og *longitudinal stress* (længdespænding), men definerer ikke de matematiske formler eller symboler (tryk, diameter, godstykkelse), og forklarer ikke forholdet mellem dem.
4. **Overfladisk beskrivelse af cirkulationstyper**: De fire cirkulationstyper (naturcirkulation, La Mont, Benson, Sulzer) er beskrevet kortfattet uden de dybere tekniske mekanismer (tæthedsforskelle, cirkulationsforhold, overkritisk drift og separatorstyring).

---

## 2. Detaljerede anbefalinger og HTML-ændringer

Nedenfor er de konkrete ændringer opdelt efter de fire punkter. De er klar til at blive kopieret ind af en Worker.

### 2.1 Udvidelse af afsnit 2.3: Vandcirkulationsprincipper

**Placering**: 
Erstat den eksisterende `div` med klassen `grid grid-2`, som strækker sig fra linje 184 til 231 i `docs/02-dampkedler/index.html` (indeholdende kort A, B, C og D under overskriften *“Fire vandcirkulationsprincipper”*).

**Foreslået HTML-blok til indsættelse**:
```html
<div class="grid grid-2">
  <div class="card">
    <div class="card-head">
      <span class="card-num">A</span>
      <span class="card-title">Naturcirkulation</span>
    </div>
    <p>Vandet cirkulerer naturligt på grund af <strong>densitetsforskellen</strong> mellem det koldere, tungere vand i de ubelyste nedløbsrør (downcomers) og den opvarmede vand/damp-blanding i stigrørene (risers) i fyrboksen.</p>
    <p>Den drivende trykforskel kan beskrives ved relationen:
      <br><code class="math" style="display: block; margin: 8px 0; padding: 6px; background: #faf8f5; border-radius: 4px; font-weight: bold; font-family: monospace;">&Delta;P<sub>driv</sub> = g &middot; H &middot; (&rho;<sub>ned</sub> - &rho;<sub>stig</sub>)</code>
      hvor <i>g</i> er tyngdeaccelerationen (9,81 m/s²), <i>H</i> er den effektive højde af kredsløbet (m), og <i>&rho;<sub>ned</sub></i> hhv. <i>&rho;<sub>stig</sub></i> er densiteten (kg/m³) af vandet i henholdsvis nedløbsrørene og stigrørene.
    </p>
    <p><strong>Begrænsning:</strong> Efterhånden som driftstrykket stiger mod det kritiske punkt (221,2 bar), mindskes forskellen i densitet mellem mættet vand og mættet damp. Ved det kritiske tryk er forskellen nul. I praksis er naturcirkulation derfor begrænset til kedler med driftstryk under ca. 170–180 bar.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">B</span>
      <span class="card-title">La Mont (Tvangscirkulation)</span>
    </div>
    <p>En <strong>cirkulationspumpe</strong> pumper vandet fra damptromlen ned i fordelerledninger og videre gennem fordamperrørene. Dette sikrer en stabil strømning uafhængigt af densitetsforskelle.</p>
    <p>For at garantere en ensartet vandfordeling og forhindre, at enkelte parallelle rør overhedes, er der monteret kalibrerede <strong>fordelingsdyser (orifices)</strong> ved indløbet til hvert rør. Cirkulationsforholdet (den cirkulerede vandmasse i forhold til den producerede dampmasse) ligger typisk stabilt på 8 til 10.</p>
    <p><strong>Anvendelse:</strong> Subkritiske anlæg op til ca. 190–200 bar, samt ved komplekse rørgeometrier (f.eks. vandrette eller tætpakkede rørpakker), hvor naturcirkulation ikke er tilstrækkelig til at overvinde det indre trykfald.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">C</span>
      <span class="card-title">Benson (Once-through / Gennemstrømning)</span>
    </div>
    <p>Fødevandspumpen presser vandet <strong>én gang direkte igennem</strong> hele kedelsystemet (economiser, fordamper og overheder) uden recirkulation eller brug af en damptromle. Vandet fordamper helt undervejs.</p>
    <p>Punktet for komplet fordampning (dry-out point) flytter sig frit i rørene afhængigt af belastningen. Benson-kedler kan operere under både subkritiske og <strong>overkritiske tryk (over 221,2 bar)</strong>, typisk op til 300+ bar ved temperaturer på 560–600 °C, hvilket øger anlæggets termiske virkningsgrad betydeligt.</p>
    <p><strong>Særlige krav:</strong> Kræver ekstremt rent fødevand (ledningsevne &lt; 0,1 &mu;S/cm), da urenheder ellers øjeblikkeligt aflejres som kedelsten i fordampningszonen og medfører hurtig rørskade pga. lokal overophedning.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">D</span>
      <span class="card-title">Sulzer (Once-through med separator)</span>
    </div>
    <p>Dette er en variant af Benson-princippet, hvor der er indskudt en <strong>vandseparator</strong> mellem fordamper- og overhedersektionen.</p>
    <p>Ved opstart og lave belastninger (typisk under 30–40% af fuld last), hvor vandet ikke fordamper fuldstændigt i fordamperdelen, udskiller separatoren det overskydende vand. Dette vand ledes enten tilbage til fødevandssystemet via en lille cirkulationssløjfe eller drænes. Dette beskytter overhederne mod vandslag og saltaflejringer.</p>
    <p><strong>Anvendelse:</strong> Kraftværkskedler med hyppige belastningsskift og behov for stabil drift ved lavlast.</p>
  </div>
</div>
```

---

### 2.2 Udvidelse af afsnit 2.5: Spændinger og formler (Beholderformlen)

**Placering**:
Erstat det første kort i afsnit 2.5 (`<div class="card">` indeholdende overskriften *“⚙️ Trykbeholderdesign & Spændinger”*), som strækker sig fra linje 316 til 324 i `docs/02-dampkedler/index.html`. For at give plads til formlerne, gøres kortet bredere ved at tilføje `style="grid-column: span 2;"`.

**Foreslået HTML-blok til indsættelse**:
```html
<div class="card" style="grid-column: span 2;">
  <h3>⚙️ Trykbeholderdesign &amp; Spændinger (Beholderformlen)</h3>
  <p>Kedelsvøb, damptromler og kedelrør er cylindriske trykbærende elementer. Når de udsættes for et indvendigt overtryk, opstår der to dominerende mekaniske spændinger i materialevæggen:</p>
  
  <div style="margin: 15px 0; padding: 15px; background: #faf8f5; border-left: 4px solid #1a1814; border-radius: 4px;">
    <p style="margin: 0 0 12px 0;"><strong>1. Tangentialspænding (Hoop stress / radialspænding), <i>&sigma;<sub>t</sub></i>:</strong> 
      Søger at flække cylinderen på langs. Dette er den største spænding og dermed den dimensionerende faktor:
      <br><code style="font-size: 15px; font-weight: bold; display: block; margin: 8px 0; font-family: monospace;">&sigma;<sub>t</sub> = (p &middot; d) / (2 &middot; s)</code>
    </p>
    <p style="margin: 0;"><strong>2. Længdespænding (Longitudinal stress), <i>&sigma;<sub>l</sub></i>:</strong> 
      Søger at trække cylinderen fra hinanden i enderne (axialt tryk mod endebunde):
      <br><code style="font-size: 15px; font-weight: bold; display: block; margin: 8px 0; font-family: monospace;">&sigma;<sub>l</sub> = (p &middot; d) / (4 &middot; s)</code>
    </p>
  </div>

  <p><strong>Definition af symboler:</strong></p>
  <ul>
    <li><code>p</code>: Indvendigt overtryk i MPa (eller N/mm²). Bemærk: 1 bar = 0,1 N/mm².</li>
    <li><code>d</code>: Beholderens eller rørets indvendige diameter i mm.</li>
    <li><code>s</code>: Godstykkelse af plade eller rørvæg i mm.</li>
    <li><code>&sigma;<sub>t</sub>, &sigma;<sub>l</sub></code>: Mekanisk spænding i materialet i MPa (eller N/mm²).</li>
  </ul>

  <p><strong>Forhold og konsekvens:</strong> Da <code>&sigma;<sub>t</sub> = 2 &middot; &sigma;<sub>l</sub></code>, er tangentialspændingen præcis <strong>dobbelt så stor</strong> som længdespændingen. Dette forklarer, hvorfor et rør eller svøb næsten altid revner på langs (parallelt med aksen) ved overbelastning.</p>

  <p><strong>Beregning efter standarder (DS/EN 13445-3 / EN 12952-3 / EN 12953-3):</strong> 
    I praksis modificeres den teoretiske formel til design af vægtykkelser for at inkludere en tilladelig spænding for stålmaterialet ved driftstemperatur (<i>f</i>), svejsesømmens effektivitet (<i>z</i>, typisk 0,85–1,0), samt et tillæg for korrosion og tolerance (<i>c</i>):
    <br><code style="font-weight: bold; display: block; margin-top: 8px; font-family: monospace;">s = (p &middot; d) / (2 &middot; f &middot; z - p) + c</code>
    Denne beregning sikrer, at materialets flydegrænse ikke overskrides under drift.
  </p>
</div>
```

---

### 2.3 Tilføjelse af afsnit 2.6: Regler, standarder og godkendelser

**Placering**:
Indsæt denne helt nye sektion før navigationsblokken (linje 340: `<div class="pagenav">` i den nuværende `docs/02-dampkedler/index.html`).

**Foreslået HTML-blok til indsættelse**:
```html
<!-- ═══════════════════ REGULERING & STANDARDER ═══════════════════ -->
<h2>2.6 Lovgivning, standarder &amp; godkendelser</h2>

<p>Design, fremstilling, opstilling og drift af dampkedelanlæg er underlagt streng international standardisering og national lovgivning for at forebygge ulykker og sikre anlæggets mekaniske integritet.</p>

<div class="grid grid-2">
  <div class="card">
    <h3>📋 Europæiske Standarder: EN 12952 &amp; EN 12953</h3>
    <p>Europæiske dampkedler skal designes og fremstilles efter de harmoniserede standarder, som sikrer overensstemmelse med PED (Trykudstyrsdirektivet):</p>
    <ul>
      <li><strong>EN 12952 — Vandrørskedler (Water-tube boilers):</strong>
        <ul>
          <li><strong>EN 12952-3 (Design &amp; beregning):</strong> Fastlægger dimensionering af trykbærende dele ud fra spændingsanalyser.</li>
          <li><strong>EN 12952-7 (Kedeludstyr):</strong> Definerer krav til sikkerhedsudstyr, herunder krav om mindst to uafhængige og fejlsikre niveaubegrænsere for at forhindre tørkogning.</li>
          <li><strong>EN 12952-11 (Begrænsningsanordninger):</strong> Krav til sikkerhedskædens komponenter (sikkerhedstrykbegrænsere SDB, sikkerhedstemperaturbegrænsere STB).</li>
          <li><strong>EN 12952-12 (Vandkvalitet):</strong> Specificerer ekstremt strenge grænseværdier for fødevand og kedelvand, især for gennemstrømningskedler, for at undgå korrosion og aflejringer.</li>
        </ul>
      </li>
      <li><strong>EN 12953 — Røgrørskedler (Shell boilers):</strong>
        <ul>
          <li><strong>EN 12953-3 (Design &amp; beregning):</strong> Regulerer dimensionering af kedelsvøb, flammerør og rørplader.</li>
          <li><strong>EN 12953-6 (Kedeludstyr):</strong> Krav til instrumentering (manometer, sikkerhedsventiler og niveaumålere).</li>
          <li><strong>EN 12953-9 (Begrænsere):</strong> Krav til beskyttelsessystemer. Ved aktivering af lavvandsbegrænseren skal brænderen afbrydes øjeblikkeligt, og manuel genindkobling (lock-out) er påkrævet.</li>
          <li><strong>EN 12953-10 (Vandkvalitet):</strong> Grænseværdier for føde- og kedelvand i røgrørskedler, som generelt er mere tolerante end vandrørskedler.</li>
        </ul>
      </li>
    </ul>
    <p><strong>72-timers ubemandet drift:</strong> I henhold til EN 12952-7 og EN 12953-6/9 kan kedler godkendes til 72 timers kontinuerlig drift uden manuelt opsyn, forudsat at alt sikkerhedsudstyr er redundant, selvovervågende og SIL-klassificeret.</p>
  </div>

  <div class="card">
    <h3>🇩🇰 Danske Regler (Arbejdstilsynets AT-vejledninger)</h3>
    <p>I Danmark reguleres brug, kontrol og pasning af dampkedler under Arbejdstilsynet:</p>
    <ul>
      <li><strong>Bekendtgørelse om anvendelse af trykbærende udstyr (BEK nr. 99 af 24/01/2022):</strong>
        Fastlægger krav til ibrugtagning og drift. Kedler over 0,5 bar er omfattet af krav om <strong>kedelpassercertifikat</strong> (Type A for store anlæg med høj temperatur/tryk, Type B for mindre eller lavtryksanlæg).
      </li>
      <li><strong>AT-vejledning B.4.8 — Kontrol og periodisk undersøgelse:</strong>
        Beskriver de lovpligtige tidsintervaller for inspektion udført af et bemyndiget organ (f.eks. Force Technology, TÜV):
        <ul>
          <li><strong>Driftskontrol (Hver 12. måned):</strong> Gennemgang af kedlens sikkerhedsudstyr, afprøvning af begrænsere (nødstop, vandstand, tryk) under drift samt kontrol af driftsjournaler og vandkvalitet.</li>
          <li><strong>Indvendig undersøgelse (Hver 24. måned):</strong> Kedlen tages ud af drift, renses og inspiceres indvendigt for tæring, revner, deformationer og kedelsten. (For visse vandrørskedler med høj vandkvalitet kan intervallet forlænges op til 48 måneder).</li>
          <li><strong>Styrkeprøve / Trykprøvning (Hvert 8. år for røgrørskedler / 10. år for vandrørskedler):</strong> Kedlen fyldes med vand og trykprøves med et prøvetryk (normalt 1,3–1,43 gange driftstrykket PS) for at kontrollere styrke og tæthed.</li>
        </ul>
      </li>
      <li><strong>AT-vejledning B.4.4 — Opstilling og ibrugtagning:</strong>
        Opstillingskontrol skal udføres af et bemyndiget organ, før en ny eller flyttet kedel må tages i brug. Dette sikrer korrekte ventilationsforhold, flugtveje, og sikre udblæsningsforhold for sikkerhedsventiler.
      </li>
    </ul>
  </div>
</div>
```

---

## 3. Kilder og referencer

* **Europæiske standarder**:
  - DS/EN 12952-1 til 18: *Water-tube boilers and auxiliary installations*.
  - DS/EN 12953-1 til 13: *Shell boilers*.
  - DS/EN 13445-3: *Unfired pressure vessels - Part 3: Design*.
* **Dansk lovgivning & regler**:
  - Beskæftigelsesministeriet: *Bekendtgørelse om anvendelse af trykbærende udstyr* (BEK nr. 99 af 24/01/2022).
  - Arbejdstilsynet: *AT-vejledning B.4.8 — Kontrol og periodisk undersøgelse af trykbærende udstyr*.
  - Arbejdstilsynet: *AT-vejledning B.4.4 — Trykbærende udstyr - Opstilling, opstart og brug*.
* **Maskinteknisk litteratur**:
  - Erik L. W. Hansen: *Styrkelære* (klassisk dansk lærebog om mekaniske spændinger og beholderformlen).
