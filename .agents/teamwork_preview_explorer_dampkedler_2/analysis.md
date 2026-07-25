# Revisionsrapport og anbefalinger til indholdsudvidelser for Modul 02 (Dampkedeltyper)

Dette dokument indeholder resultatet af revisionen af `docs/02-dampkedler/index.html` samt de konkrete tekstuelle og strukturelle anbefalinger (skrevet i teknisk dansk) til udvidelse af modulet.

---

## 1. Revisionskontekst og formål
Modul 02 omhandler dampkedeltyper og vandcirkulation. Gennemgangen af den eksisterende kode viser, at de grundlæggende principper er beskrevet fint pædagogisk, men at der mangler dybere tekniske detaljer og lovgivningsmæssige referencer, som er afgørende for en kedelpassers pensum.

Denne revision anbefaler specifikke udvidelser inden for fire områder:
1. **Harmoniserede standarder**: Præcisering af EN 12952 (vandrørskedler) og EN 12953 (røgrørskedler) med reference til relevante delkrav.
2. **Arbejdstilsynets regler (AT-vejledninger)**: Integrering af regler for opstilling, betjening og eftersyn (særligt AT-vejledning B.4.8 og B.4.3 / BEK 498/2024).
3. **Mekaniske spændingsformler**: Definition og beregning af tangentialspænding (hoop stress) og længdespænding (longitudinal stress) i cylindriske beholdersvøb jf. maskintekniske beregningsstandarder.
4. **Uddybende cirkulationsprincipper**: Tekniske detaljer for naturcirkulation, La Mont, Benson og Sulzer-cirkulation.

---

## 2. Placeringsanvisninger i `docs/02-dampkedler/index.html`

- **Udvidelse af Cirkulationsprincipper (Emne 4)**: 
  Erstatter eller udbygger de fire eksisterende kort i sektionen `<h3>Fire vandcirkulationsprincipper</h3>` under afsnit 2.3 (omkring linje 184–231).
- **Mekaniske spændingsformler (Emne 3)**:
  Indsættes i sektion 2.5 (`<!-- ═══════════════════ INGENIØRENS PERSPEKTIV: MEKANIK ═══════════════════ -->`) under kortet `⚙️ Trykbeholderdesign & Spændinger` (omkring linje 316–324).
- **Standarder og AT-vejledninger (Emne 1 og 2)**:
  Indsættes som to nye selvstændige sektioner (2.6 og 2.7) før navigationselementet `<!-- ═══════════════════ NAVIGATION ═══════════════════ -->` (omkring linje 339).

---

## 3. Præcise kodesnips og tekstforslag til implementering

### A. Opdateret cirkulationsafsnit (til erstatning af linje 184–231)
Dette forslag tilføjer detaljerede forklaringer om cirkulationstal, trykbegrænsninger og separator-funktionalitet.

```html
<div class="grid grid-2">
  <div class="card">
    <div class="card-head">
      <span class="card-num">A</span>
      <span class="card-title">Naturcirkulation</span>
    </div>
    <p>Vandet cirkulerer uden brug af pumper, udelukkende drevet af <strong>densitetsforskellen</strong> (termosifon-effekten) mellem det kolde/uopvarmede vand i nedløbsrørene (downcomers) og vand/damp-blandingen i de opvarmede stigrør (risers) i brændkammeret.</p>
    <p>Det drivende tryk beregnes som:</p>
    <div class="formula" style="font-size:0.9em; padding:8px;">
      Δp<sub>driv</sub> = (ρ<sub>ned</sub> − ρ<sub>stig</sub>) · g · H
    </div>
    <p style="font-size:0.9em; margin-top:5px;">Hvor H er højden, g er tyngdeaccelerationen, og ρ er densiteterne. Da densitetsforskellen mellem mættet vand og damp aftager ved stigende tryk (og bliver 0 ved det kritiske punkt 221,2 bar), stopper denne cirkulationstype i praksis ved ca. <strong>170–180 bar</strong>.</p>
    <p><strong>Anvendelse:</strong> Industrikedler og mindre kraftværkskedler.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">B</span>
      <span class="card-title">La Mont (tvangscirkulation)</span>
    </div>
    <p>En ekstern <strong>tvangscirkulationspumpe</strong> pumper vandet fra dampbeholderen (drum) gennem fordamperrørene. Dyser ved indløbet af hvert rør fordeler vandstrømmen præcist i forhold til varmebelastningen for at undgå udtørring af rørene.</p>
    <p>Tvangscirkulationen defineres ved <strong>cirkulationstallet (n)</strong>, som er forholdet mellem det recirkulerede vandflow og dampydelsen:</p>
    <div class="formula" style="font-size:0.9em; padding:8px;">
      n = ṁ<sub>vand</sub> / ṁ<sub>damp</sub> &nbsp; ≈ &nbsp; <b>8 – 10</b>
    </div>
    <p style="font-size:0.9em; margin-top:5px;">Det betyder, at vandet passerer gennem fordamperrørene 8–10 gange, før det fordamper helt. Dette modvirker lokal overhedning (DNB - Departure from Nucleate Boiling) i komplekse rørgeometrier.</p>
    <p><strong>Anvendelse:</strong> Kedler med kompakt eller vandret rørgeometri, op til ca. 190 bar.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">C</span>
      <span class="card-title">Benson (once-through)</span>
    </div>
    <p>Fødevandspumpen presser vandet <strong>én gang</strong> igennem economiser, fordamper og overheder i en ubrudt strøm. Der anvendes ingen dampbeholder (drum), og fordampningspunktet flytter sig frit i rørsystemet afhængigt af kedlens last.</p>
    <p>Da alt tilført fødevand fordamper fuldstændigt til overhedet damp, vil eventuelle urenheder og salte i vandet aflejres direkte på rørvæggene i fordampningszonen. Dette stiller <strong>ekstremt strenge krav til vandkvaliteten</strong> (ledningsevne &lt; 0,1 µS/cm).</p>
    <p><strong>Anvendelse:</strong> Store kraftværkskedler. Kan operere over det kritiske punkt (op til 300+ bar, 600 °C) med meget høj virkningsgrad.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">D</span>
      <span class="card-title">Sulzer (once-through m. separator)</span>
    </div>
    <p>Sulzer-princippet er en videreudvikling af Benson-kedlen. Der er indskudt en <strong>vandudskiller (separator)</strong> efter fordampningssektionen, som opfanger ufordampet vand under opstart og lavbelastning (typisk under 30–40 % last).</p>
    <p>Det udskilte vand ledes tilbage til fødevandssystemet via en recirkulationspumpe eller blæses af. Ved højere belastninger fungerer anlægget som en ren Benson-kedel med tør separator.</p>
    <p>Dette princip beskytter overhederen mod vandslag og aflejringer under opstart og giver kedlen en betydeligt større <strong>driftsfleksibilitet</strong> og hurtigere reaktionstid ved lastændringer.</p>
    <p><strong>Anvendelse:</strong> Moderne kraftværkskedler med krav om hyppige belastningsskift.</p>
  </div>
</div>
```

---

### B. Tilføjelse af spændingsformler i sektion 2.5 (kort 1)
Indsættes i kortet `⚙️ Trykbeholderdesign & Spændinger` efter punktet om længdespænding (linje 322).

```html
    <p>For en tyndvægget cylinder (hvor godstykkelsen <em>s</em> er lille i forhold til indvendig diameter <em>D<sub>i</sub></em>) beregnes spændingerne efter de harmoniserede standarder EN 12952-3 og EN 12953-3:</p>
    
    <div class="formula" style="font-size:0.85em; padding:10px; margin: 10px 0;">
      Tangentialspænding (hoop stress):<br>
      <b>σ<sub>t</sub> = (p · D<sub>i</sub>) / (2 · s)</b>
    </div>
    
    <div class="formula" style="font-size:0.85em; padding:10px; margin: 10px 0;">
      Længdespænding (longitudinal stress):<br>
      <b>σ<sub>l</sub> = (p · D<sub>i</sub>) / (4 · s)</b>
    </div>

    <p style="font-size:0.9em; line-height: 1.4;">Hvor:<br>
      • <strong>σ<sub>t</sub> / σ<sub>l</sub></strong>: Spændinger i materialet [N/mm² eller MPa]<br>
      • <strong>p</strong>: Indvendigt overtryk [N/mm²] (Bemærk: 1 bar = 0,1 N/mm²)<br>
      • <strong>D<sub>i</sub></strong>: Indvendig diameter på svøb/rør [mm]<br>
      • <strong>s</strong>: Vægtykkelse (godstykkelse) [mm] (i kedelstandarder bruges symbolet <em>s</em>)<br>
    </p>
    
    <p style="font-size:0.9em; margin-top:8px;">Da <strong>σ<sub>t</sub> = 2 · σ<sub>l</sub></strong>, er tangentialspændingen altid dobbelt så stor som længdespændingen. Dette forklarer, hvorfor revner og brud på rør og kedelsvøb under tryk næsten altid opstår som <strong>længdegående revner</strong>.</p>
```

---

### C. Nye sektioner om standarder (2.6) og AT-regler (2.7) (før navigationen, ca. linje 339)
Dette tilføjer de formelle regulatoriske rammer, som er nødvendige for pensum og eksamensforberedelse.

```html
<!-- ═══════════════════ EUROPA-STANDARDER (EN) ═══════════════════ -->
<h2>2.6 Normer &amp; Standarder — EN 12952 og EN 12953</h2>
<p>Projektering, fremstilling, dokumentation og udrustning af dampkedler i EU skal overholde de harmoniserede standarder under PED (Trykbærende Udstyr Direktivet). De to primære regelsæt er:</p>

<div class="grid grid-2">
  <div class="card">
    <h3>💧 EN 12952 — Vandrørskedler</h3>
    <p>Standardserien dækker kedler med vand/damp i rørene og hede røggasser udenom. Vigtige dele omfatter:</p>
    <ul>
      <li><strong>EN 12952-3 (Konstruktion):</strong> Fastlægger formler til beregning af vægtykkelser for tromler, rør, bøjninger og samlekasser (headers).</li>
      <li><strong>EN 12952-7 (Krav til udrustning):</strong> Specificerer sikkerhedssystemet. Kræver mindst to uafhængige vandstandsindikatorer (hvoraf mindst én skal være et direkte aflæseligt glas), samt fejlsikre begrænsere (lavvands- og højtrykssensorer) tilsluttet en sikkerhedskæde med manuel reset (lock-out).</li>
      <li><strong>EN 12952-12 (Vandkvalitet):</strong> Definerer strenge kemiske grænseværdier for fødevand og kedelvand for at forhindre aflejringer og korrosion.</li>
    </ul>
  </div>

  <div class="card">
    <h3>🔥 EN 12953 — Røgrørskedler (Shell Boilers)</h3>
    <p>Standardserien dækker cylindriske kedler med røggasrør omgivet af vand. Vigtige dele omfatter:</p>
    <ul>
      <li><strong>EN 12953-3 (Konstruktion):</strong> Vigtig for dimensionering af flammerør mod indbøjning (kollaps under udvendigt tryk) samt afstivning af flade endebunde.</li>
      <li><strong>EN 12953-6 (Krav til udrustning):</strong> Fastlægger udrustningskrav. Sikkerhedsventiler skal dimensioneres således, at de kan afblæse den maksimale dampydelse uden at trykket stiger mere end 10 % over det maksimalt tilladte tryk (PS).</li>
      <li><strong>EN 12953-9 (Begrænsere og sikkerhedskredsløb):</strong> Definerer krav til sikkerhedsrelaterede begrænsningsanordninger (f.eks. SIL-niveauer) og er fundamentet for ubemandet 24/72-timers drift.</li>
    </ul>
  </div>
</div>

<!-- ═══════════════════ ARBEJDSTILSYNETS REGLER (AT) ═══════════════════ -->
<h2>2.7 Arbejdstilsynets regler &amp; eftersyn</h2>
<p>Arbejdstilsynets regler (AT-vejledninger) fastsætter rammerne for sikker opstilling, drift, pasning og kontrol af dampkedler i Danmark. De centrale vejledninger dækker:</p>

<div class="grid grid-2">
  <div class="card">
    <h3>🔍 Opstilling og eftersyn (AT-vejledning B.4.8)</h3>
    <p>Trykbærende anlæg skal registreres og efterses af et bemyndiget organ (inspektionsorgan) med faste intervaller baseret på kontrolklassen (Klasse A, B eller C, afhængigt af produkttallet PS × V):</p>
    <ul>
      <li><strong>Ydre eftersyn (Årligt for klasse A):</strong> Kontrol af kedlen i drift. Her testes sikkerhedsudstyret (afblæsning af sikkerhedsventiler, test af lavvandsbegrænser og højtryksbegrænser), og anlægget inspiceres for tæthed og eksterne skader.</li>
      <li><strong>Indre eftersyn (Hvert 5. år for klasse A):</strong> Kedlen tages ud af drift, tømmes, renses og inspiceres indvendigt for korrosion, tæring, revnedannelser (termisk fatigue i svejsninger) og kedelsten.</li>
      <li><strong>Trykprøvning:</strong> Udføres ved tvivl om konstruktionens styrke, f.eks. efter væsentlige svejsereparationer eller tæringsskader. Sker typisk hydraulisk ved 1,43 × arbejdstrykket.</li>
    </ul>
  </div>

  <div class="card">
    <h3>⚙️ Drift og daglig pasning (AT-vejledning B.4.3 &amp; BEK 498/2024)</h3>
    <p>Regler for den daglige drift og kedelpasserens pligter:</p>
    <ul>
      <li><strong>Certifikatkrav:</strong> Jf. BEK 498/2024 § 29 skal kedelpasseren have et gyldigt certifikat (Type I, II eller III), hvis kedlen har et tryk over 10 bar (hedtvand &gt; 110 °C) OG volumenet er over 1000 liter.</li>
      <li><strong>Ubemandet drift (BOWCS):</strong> Kedlen kan godkendes til drift uden konstant opsyn (24-timers eller 72-timers intervaller jf. EN 12953-6 / EN 12952-7), såfremt sikkerhedssystemerne automatisk afbryder brændstoffet og blokerer ved fejl, og der foreligger udførlige skriftlige instruktioner på dansk (BEK 498/2024 § 23).</li>
      <li><strong>Kedelbog:</strong> Det er et lovkrav at føre en autoriseret kedelbog. Alle funktionstest af sikkerhedsudstyr, vandanalyser, driftsforstyrrelser og bundblæsninger skal registreres heri med dato og underskrift.</li>
    </ul>
  </div>
</div>
```

---

## 4. Kvalitetssikring og overensstemmelse
De anbefalede udvidelser anvender det eksisterende CSS-designsystem (`.grid`, `.card`, `.formula`, `.card-head`, `.card-title`, `.card-num` og punktlister), hvilket sikrer, at siden bevarer sit visuelle udtryk og layout. Formlerne er opsat i overensstemmelse med de formelsymboler og trykenheder, der anvendes i Modul 09 (`docs/09-formler-tabeller/index.html`), hvilket sikrer intern konsistens i undervisningsmaterialet.
