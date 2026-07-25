# Synthesized Content Recommendations for Milestone 2 (Revision 2)

These are the exact HTML blocks and modifications to apply to `docs/02-dampkedler/index.html`.

## Part 1: Section 2.1 - Figur 2.1 (Danish translation and grammar fixes)

**Action**: Modify the SVG text in Figure 2.1 (lines 57-58) to change "DAMPDRUM" to "DAMPTROMLE" in Danish, and correct grammatical errors in the comparison row (lines 89-91).

**Target Content 1 (lines 57-58)**:
```html
    <rect x="20" y="10" width="160" height="22" rx="11" fill="#0891b2" opacity="0.3" stroke="#0891b2"/>
    <text x="100" y="25" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#0891b2" font-weight="700">DAMPDRUM</text>
```

**Replacement Content 1**:
```html
    <rect x="20" y="10" width="160" height="22" rx="11" fill="#0891b2" opacity="0.3" stroke="#0891b2"/>
    <text x="100" y="25" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#0891b2" font-weight="700">DAMPTROMLE</text>
```

**Target Content 2 (lines 89-91)**:
```html
    <text x="120" y="20" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c">Træg opstart</text>
    <text x="120" y="38" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c">Stor energilager</text>
    <text x="120" y="56" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c">Lav vedligehold</text>
```

**Replacement Content 2**:
```html
    <text x="120" y="20" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c">Træg opstart</text>
    <text x="120" y="38" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c">Stort energilager</text>
    <text x="120" y="56" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c">Lavt vedligehold</text>
```

---

## Part 2: Section 2.2 - Figur 2.2 (SVG Syntax and Marker bugs)

**Action**: Add the missing marker definition to the SVG, and fix the burner text color typo (line 136).

**Target Content (lines 114-116)**:
```html
<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
  <!-- Boiler outline -->
  <rect x="50" y="40" width="600" height="160" rx="80" fill="#f0f9ff" stroke="#1a1814" stroke-width="2"/>
```

**Replacement Content**:
```html
<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="exhaust" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#1a1814"/>
    </marker>
  </defs>
  <!-- Boiler outline -->
  <rect x="50" y="40" width="600" height="160" rx="80" fill="#f0f9ff" stroke="#1a1814" stroke-width="2"/>
```

**Target Content (line 136)**:
```html
  <text x="37" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#hot">BR</text>
```

**Replacement Content**:
```html
  <text x="37" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#f59e0b">BR</text>
```

---

## Part 3: Section 2.2 - Grammatical Error in Shell Boiler Limitations

**Action**: Correct "stor skadepotentiale" to "stort skadepotentiale" in Shell Boiler card (lines 167-173).

**Target Content (lines 167-173)**:
```html
      <li>Maks. ~25 bar pga. trykbeholderens størrelse</li>
      <li>Lang opstartstid (1+ time fra kold)</li>
      <li>Stort krav om plads</li>
      <li>Ved sprængning: stort energiindhold = stor skadepotentiale</li>
    </ul>
```

**Replacement Content**:
```html
      <li>Maks. ~25 bar pga. trykbeholderens størrelse</li>
      <li>Lang opstartstid (1+ time fra kold)</li>
      <li>Stort krav om plads</li>
      <li>Ved sprængning: stort energiindhold = stort skadepotentiale</li>
    </ul>
```

---

## Part 4: Section 2.3 - Vandcirkulationsprincipper

**Action**: Replace the cards A, B, C, D in section 2.3 with the following content (containing detailed descriptions, formulas, and Danish engineering terminology).

**Target Content (lines 184-231)**:
```html
<div class="grid grid-2">
  <div class="card">
    <div class="card-head">
      <span class="card-num">A</span>
      <span class="card-title">Naturcirkulation</span>
    </div>
    ...
  </div>
</div>
```

**Replacement Content**:
```html
<div class="grid grid-2">
  <div class="card">
    <div class="card-head">
      <span class="card-num">A</span>
      <span class="card-title">Naturcirkulation</span>
    </div>
    <p>Drives udelukkende af <strong>densitetsforskellen</strong> (termosifon-effekten) mellem det kolde, ubelyste vand i nedløbsrørene (downcomers) og den varme damp/vand-blanding i de opvarmede stigrør (risers) i brændkammeret.</p>
    <p>Den drivende trykforskel beregnes som:</p>
    <div class="formula">
      Δp<sub>driv</sub> = g · H · (ρ<sub>ned</sub> − ρ<sub>stig</sub>) &nbsp; [Pa]
    </div>
    <p style="font-size:0.92em;">Hvor <i>H</i> is den effektive kredsløbshøjde (m), <i>g</i> er tyngdeaccelerationen (9,81 m/s²), og <i>ρ</i> er densiteten (kg/m³) af henholdsvis det kolde og varme medie. Da densitetsforskellen falder ved stigende tryk og forsvinder helt ved det kritiske tryk (221,2 bar / 374 °C), stopper naturcirkulationen i praksis ved ca. <strong>170–180 bar</strong>. Cirkulationstallet (forholdet mellem det cirkulerede vand og den dannede damp) er højt, typisk 5–30.</p>
    <p><strong>Anvendelse:</strong> Subkritiske kedler op til ca. 160–180 bar. Meget udbredt i industrianlæg.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">B</span>
      <span class="card-title">La Mont (tvangscirkulation)</span>
    </div>
    <p>En ekstern <strong>tvangscirkulationspumpe</strong> pumper vandet aktivt fra damptromlen gennem fordamperrørene. Kalibrerede <strong>fordelingsdyser (orifices)</strong> ved indløbet til hvert enkelt fordamperrør sikrer en kontrolleret og ensartet vandfordeling tilpasset den lokale varmebelastning.</p>
    <p style="font-size:0.92em;">Dette forhindrer lokal udtørring (DNB - Departure from Nucleate Boiling). Cirkulationstallet (<i>n</i>) defineres som:</p>
    <div class="formula">
      n = ṁ<sub>vand</sub> / ṁ<sub>damp</sub> &nbsp; ≈ &nbsp; 8 – 10
    </div>
    <p style="font-size:0.92em;">Det betyder, at vandet cirkulerer 8–10 gange gennem systemet, før det fordamper helt, hvilket beskytter rørene mod overhedning ved komplekse rørgeometrier.</p>
    <p><strong>Anvendelse:</strong> Subkritiske anlæg med kompleks eller kompakt rørgeometri op til ca. 190–200 bar.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">C</span>
      <span class="card-title">Benson (once-through / gennemstrømning)</span>
    </div>
    <p>Fødevandspumpen presser vandet <strong>én enkelt gang</strong> igennem economiser, fordamper og overheder i en kontinuerlig streng uden recirkulation eller brug af en damptromle. Cirkulationstallet er nøjagtigt 1,0.</p>
    <p style="font-size:0.92em;">Benson-kedler kan operere under både subkritiske og <strong>overkritiske tryk (over 221,2 bar / 374 °C)</strong>, typisk op til 300+ bar ved temperaturer på 560–600 °C. Ved det kritiske tryk overgår vandet øjeblikkeligt til damp uden bobledannelse. Fordampningspunktet (dry-out point) flytter sig frit efter belastningen. Dette stiller <strong>ekstremt strenge krav til fødevandets kemiske renhed</strong> (ledningsevne &lt; 0,1 µS/cm), da alle urenheder aflejres direkte i rørene.</p>
    <p><strong>Anvendelse:</strong> Store, højeffektive kraftværksblokke med høje tryk og temperaturer.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">D</span>
      <span class="card-title">Sulzer (once-through m. separator)</span>
    </div>
    <p>En videreudvikling af Benson-gennemstrømningskedlen, hvor der er monteret en <strong>vandseparator</strong> ved afgangen af fordamperen. Ved opstart og under lavlast (typisk under 30–40 % last), hvor vandet ikke fordamper fuldstændigt, opsamler separatoren det overskydende vand.</p>
    <p style="font-size:0.92em;">Dette vand ledes tilbage til fødevandssystemet via en recirkulationspumpe eller blæses af, hvilket beskytter overhederrørene mod vandslag og saltaflejringer. Ved højere belastninger fordamper alt vandet i fordamperen, og kedlen fungerer som en ren Benson-kedel med tør separator. Dette giver kedlen stor <strong>driftsfleksibilitet</strong> og hurtigere reaktionstid ved lastændringer.</p>
    <p><strong>Anvendelse:</strong> Moderne kraftværkskedler med krav om hyppige belastningsskift og lav minimumslast (ned til 15–20 % last).</p>
  </div>
</div>
```

---

## Part 5: Section 2.4 - Figur 2.3 (Hedtvand diagram box text fix)

**Action**: Change label text inside Figure 2.3's diagram (lines 264-266) from "VARMTVANDS-KEDEL" to "HEDTVANDS-KEDEL".

**Target Content**:
```html
  <text x="100" y="135" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#dc2626" font-weight="700">VARMTVANDS-</text>
  <text x="100" y="150" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#dc2626" font-weight="700">KEDEL</text>
```

**Replacement Content**:
```html
  <text x="100" y="135" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#dc2626" font-weight="700">HEDTVANDS-</text>
  <text x="100" y="150" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#dc2626" font-weight="700">KEDEL</text>
```

---

## Part 6: Section 2.5 - Spændinger og Beholderformler (Danish terms and spelling corrections)

**Action**: Replace the first card in Section 2.5 (lines 316–324) with the corrected card detailing hoop stress (tangentialspænding / ringspænding) and longitudinal stress (længdespænding), correct spelling ("aksialt" instead of "axialt"), and correct terminology (removing radialspænding for hoop stress).

**Target Content (lines 316-324)**:
```html
  <div class="card">
    <h3>⚙️ Trykbeholderdesign &amp; Spændinger</h3>
    <p>Kedelsvøbet er oftest cylindrisk eller sfærisk. I en cylindrisk beholder opstår der to primære spændinger:</p>
    <ul class="checklist">
      <li><strong>Hoop stress (Tangentialspænding):</strong> Den kraft der prøver at sprænge cylinderen på langs. Dette er altid den største spænding (dobbelt så stor som længdespændingen).</li>
      <li><strong>Longitudinal stress (Længdespænding):</strong> Kraften der trækker i beholderens endebunde.</li>
    </ul>
    <p>Af denne grund sprækker et rør næsten altid på langs ved overtryk.</p>
  </div>
```

**Replacement Content**:
```html
<div class="card" style="grid-column: span 2;">
  <h3>⚙️ Trykbeholderdesign &amp; Spændinger (Beholderformlen)</h3>
  <p>Kedelsvøb, damptromler og kedelrør er cylindriske trykbærende elementer. Når de udsættes for et indvendigt overtryk, opstår der to dominerende mekaniske spændinger i materialevæggen:</p>
  
  <div style="margin: 12px 0; padding: 12px; background: #faf8f5; border-left: 4px solid #1a1814; border-radius: 4px;">
    <p style="margin: 0 0 10px 0;"><strong>1. Tangentialspænding (Hoop stress / ringspænding), σ<sub>t</sub>:</strong> 
      Søger at flække cylinderen på langs. Dette er den største spænding og dermed den dimensionerende faktor:
      <br><code class="math" style="font-size: 14px; font-weight: bold; display: block; margin: 6px 0; font-family: monospace;">σ<sub>t</sub> = (p · d<sub>i</sub>) / (2 · s) &nbsp; [N/mm²]</code>
    </p>
    <p style="margin: 0;"><strong>2. Længdespænding (Longitudinal stress), σ<sub>l</sub>:</strong> 
      Søger at trække cylinderen fra hinanden i enderne (aksialt tryk mod endebunde):
      <br><code class="math" style="font-size: 14px; font-weight: bold; display: block; margin: 6px 0; font-family: monospace;">σ<sub>l</sub> = (p · d<sub>i</sub>) / (4 · s) &nbsp; [N/mm²]</code>
    </p>
  </div>

  <p><strong>Definition af symboler:</strong></p>
  <ul>
    <li><code>p</code>: Indvendigt designovertryk i N/mm² (MPa). Bemærk: 1 bar = 0,1 N/mm².</li>
    <li><code>d<sub>i</sub></code>: Beholderens eller rørets indvendige diameter i mm.</li>
    <li><code>s</code>: Godstykkelse af plade eller rørvæg i mm.</li>
    <li><code>σ<sub>t</sub>, σ<sub>l</sub></code>: Mekanisk spænding i materialet i N/mm² (MPa).</li>
  </ul>

  <p><strong>Forhold og konsekvens:</strong> Da <code>σ<sub>t</sub> = 2 · σ<sub>l</sub></code>, er tangentialspændingen præcis <strong>dobbelt så stor</strong> som længdespændingen. Dette forklarer, hvorfor et rør eller svøb næsten altid revner på langs (parallelt med aksen) ved overbelastning.</p>

  <p><strong>Design efter standarder (DS/EN 13445-3 / EN 12952-3 / EN 12953-3):</strong> 
    I praksis modificeres formlen til design af vægtykkelser for at inkludere en tilladelig spænding for stålmaterialet ved driftstemperatur (<i>f</i>), svejsesømmens effektivitet (<i>z</i>, typisk 0,85–1,0), samt et tillæg for korrosion og tolerance (<i>c</i>):
    <br><code style="font-weight: bold; display: block; margin-top: 6px; font-family: monospace;">s = (p · d<sub>i</sub>) / (2 · f · z - p) + c</code>
  </p>
</div>
```

---

## Part 7: Section 2.6 - Regler, Lovgivning & Standarder (Correct inspection intervals)

**Action**: Insert the following HTML block immediately before the navigation block (line 340: `<div class="pagenav">`), ensuring the AT B.4.8 inspection intervals are correctly listed as "hver 26. måned" for internal inspection and other intervals are correct.

**Target Content**:
```html
<!-- ═══════════════════ NAVIGATION ═══════════════════ -->
```

**Replacement Content**:
```html
<!-- ═══════════════════ REGLER, STANDARDER & VEJLEDNINGER ═══════════════════ -->
<h2>2.6 Lovgivning, standarder &amp; godkendelser</h2>
<p>Design, fremstilling, opstilling, drift og eftersyn af dampkedelanlæg er underlagt streng international standardisering og national lovgivning for at forebygge ulykker og sikre anlæggets mekaniske integritet.</p>

<div class="grid grid-2">
  <div class="card">
    <h3>📋 Europæiske Standarder: EN 12952 &amp; EN 12953</h3>
    <p>Europæiske dampkedler skal overholde de harmoniserede standarder under PED (Trykudstyrsdirektivet):</p>
    <ul>
      <li><strong>EN 12952 — Vandrørskedler (Water-tube boilers):</strong>
        <ul>
          <li><strong>EN 12952-3 (Design &amp; beregning):</strong> Dimensionering af trykbærende dele ud fra spændingsanalyser.</li>
          <li><strong>EN 12952-7 (Kedeludstyr):</strong> Sikkerhedskrav til instrumentering. Kræver redundant, fejlsikkert sikkerhedsudstyr, herunder mindst to uafhængige lavvandsbegrænsere for at forhindre tørkogning.</li>
          <li><strong>EN 12952-11 (Begrænsere):</strong> Krav til sikkerhedskædens komponenter (sikkerhedstrykbegrænsere SDB, sikkerhedstemperaturbegrænsere STB). Begrænsere skal udløse sikkerhedskæden, afbryde brændstoffet og kræve <strong>manuel genindkobling (reset)</strong>.</li>
          <li><strong>EN 12952-12 (Vandkvalitet):</strong> Specificerer kemiske grænseværdier for fødevand og kedelvand for at undgå korrosion og aflejringer.</li>
        </ul>
      </li>
      <li><strong>EN 12953 — Røgrørskedler (Shell boilers):</strong>
        <ul>
          <li><strong>EN 12953-3 (Design &amp; beregning):</strong> Regulerer dimensionering af kedelsvøb, flammerør (mod udbøjning/kollaps under udvendigt tryk) og rørplader.</li>
          <li><strong>EN 12953-6 (Kedeludstyr):</strong> Krav til instrumentering (manometre, sikkerhedsventiler og niveaumålere).</li>
          <li><strong>EN 12953-9 (Begrænsere og sikkerhedskredsløb):</strong> Definerer krav til beskyttelsessystemer og danner basis for 24/72 timers ubemandet drift.</li>
          <li><strong>EN 12953-10 (Vandkvalitet):</strong> Grænseværdier for føde- og kedelvand i røgrørskedler.</li>
        </ul>
      </li>
    </ul>
    <p><strong>72-timers ubemandet drift:</strong> In henhold til EN 12952-7 og EN 12953-6/9 kan kedelanlæg godkendes til op til 72 timers kontinuerlig drift uden manuelt opsyn, hvis sikkerhedsudstyret er redundant, selvovervågende og SIL-klassificeret.</p>
  </div>

  <div class="card">
    <h3>🇩🇰 Danske Regler (Arbejdstilsynets AT-vejledninger)</h3>
    <p>I Danmark reguleres opstilling, pasning og kontrol af dampkedler under Arbejdstilsynet jf. BEK nr. 99 af 24/01/2022 og BEK nr. 498 af 17/05/2024:</p>
    <ul>
      <li><strong>AT-vejledning B.4.8 — Kontrol og periodisk undersøgelse:</strong>
        Beskriver lovpligtige eftersynsintervaller for dampkedler i klasse A (hvor produkttallet PS × V &gt; 200 bar·L) udført af et bemyndiget organ:
        <ul>
          <li><strong>Ydre eftersyn (Driftskontrol - hver 12. måned):</strong> Test under drift af sikkerhedsudstyr (afblæsning af sikkerhedsventiler, test af lavvandsbegrænsere og højtryksbegrænsere) samt kontrol af driftsjournaler og vandkvalitet.</li>
          <li><strong>Indvendigt eftersyn (Hver 26. måned):</strong> Kedlen tages ud af drift, tømmes, renses og inspiceres indvendigt for korrosion, tæring, revnedannelser (termisk fatigue i svejsninger), kedelsten og andre deformationer. (For visse vandrørskedler med høj vandkvalitet kan intervallet forlænges til 48 måneder).</li>
          <li><strong>Styrkeprøve / Trykprøvning:</strong> Udføres ved tvivl om konstruktionens styrke, f.eks. efter væsentlige svejsereparationer eller store tæringsskader. Sker hydraulisk (vandtemperatur 5–50 °C) ved 1,43 × arbejdstrykket (PS). Standardintervallet for styrkeprøve er hvert 8. år for røgrørskedler og hvert 10. år for vandrørskedler.</li>
        </ul>
      </li>
      <li><strong>AT-vejledning B.4.3 — Indretning af opstillingssted:</strong>
        Regulerer indretning af kedelrummet. Dette omfatter tilstrækkelig forbrændingsluft (ventilation), flugtveje, friplads omkring kedlen (mindst 0,8–1,0 meter clearance til vægge) og sikre udblæsningsforhold for sikkerhedsventiler.
      </li>
      <li><strong>AT-vejledning B.4.4 — Trykbærende udstyr - Opstilling, opstart og brug:</strong>
        Opstillingskontrol skal foretages af et bemyndiget organ, før anlægget må tages i brug efter nyopstilling eller flytning.
      </li>
      <li><strong>Krav om kedelpassercertifikat:</strong> Jf. gældende regler skal kedler med et tryk over 0,5 bar passes af en person med gyldigt kedelpassercertifikat (Type A/I for store anlæg, Type B/II for mindre anlæg).</li>
      <li><strong>Kedelbog:</strong> Det er et lovkrav at føre en autoriseret kedelbog. Alle funktionstest af sikkerhedsudstyr, vandanalyser, driftsforstyrrelser og bundblæsninger skal registreres heri med dato og signatur.</li>
    </ul>
  </div>
</div>
<!-- ═══════════════════ NAVIGATION ═══════════════════ -->
```
