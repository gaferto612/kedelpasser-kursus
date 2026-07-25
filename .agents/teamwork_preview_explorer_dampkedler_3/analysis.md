# Anlægs- og Lovgivningsaudit: Dampkedeltyper (Modul 02)
**Dato**: 16. juli 2026  
**Agent**: Explorer 3  

## 1. Indledning & Resumé
Denne rapport indeholder en detaljeret mekanisk, standardiserings- og lovgivningsmæssig audit af `docs/02-dampkedler/index.html`. Formålet er at udbygge det faglige niveau, så det præcist afspejler gældende europæiske harmoniserede standarder for dampkedler, Arbejdstilsynets (AT) vejledninger og de korrekte formler inden for styrkelære (kedelformlerne).

### Hovedkonklusioner:
1. **Vandcirkulationsprincipper (Afsnit 2.3)**: De eksisterende definitioner af *Naturcirkulation, La Mont, Benson* og *Sulzer* er forenklede. Der bør tilføjes beregningsmæssige og fysiske grænser, herunder det kritiske punkt (221,2 bar), drivende trykformel og cirkulationstal.
2. **Kedelspændinger (Afsnit 2.5)**: Formlerne for tangentialspænding (hoop stress) og længdespænding (longitudinal stress) mangler. Disse skal implementeres med klare symboldefinitioner, SI-enheder (samt bar/N/mm²-omregning) samt henvisninger til **EN 12952-3 / EN 12953-3** og styrkelære.
3. **Lovgivning & Standarder (Nyt afsnit 2.6)**: Der mangler en struktureret gennemgang af harmoniserede standarder (**EN 12952** for vandrørskedler og **EN 12953** for røgrørskedler) samt de relevante **AT-vejledninger** (B.4.3 om opstilling, B.4.4 om trykprøvning, B.4.8 om eftersyn og B.4.9 om pasning/ubemandet drift).

---

## 2. Anbefalede ændringer (HTML-struktur)

For at sikre en fejlfri og fuldstændig implementering anbefales det, at implementeringsagenten udfører følgende tre præcise udskiftninger i `docs/02-dampkedler/index.html`.

### Ændring 1: Udvidelse af vandcirkulationsprincipper (Linje 184–231)

**Nuværende kode (Før):**
```html
<div class="grid grid-2">
  <div class="card">
    <div class="card-head">
      <span class="card-num">A</span>
      <span class="card-title">Naturcirkulation</span>
    </div>
    <p>Vandet cirkulerer naturligt på grund af <strong>densitetsforskellen</strong>
    mellem koldt vand i nedløbsrør og dampbobler i opløbsrør. Ingen pumpe nødvendig
    i selve cirkulationen.</p>
    <p><strong>Anvendelse:</strong> Op til ca. 180 bar. Mest udbredt i industrielle
    kraftværker.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">B</span>
      <span class="card-title">La Mont (tvangscirkulation)</span>
    </div>
    <p>En <strong>cirkulationspumpe</strong> tvinger vandet rundt i rørene.
    Dyser ved indløbet sikrer ensartet fordeling. Cirkulationsforholdet er
    typisk 8–10.</p>
    <p><strong>Anvendelse:</strong> Når naturcirkulation er for langsom eller
    ved kompleks rørgeometri.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">C</span>
      <span class="card-title">Benson (once-through)</span>
    </div>
    <p>Vandet pumpes <strong>én gang igennem</strong> hele kedlen og kommer ud
    som overhedet damp. Ingen damp-drum. Kan operere over kritisk punkt
    (221 bar).</p>
    <p><strong>Anvendelse:</strong> Moderne overkritiske kraftværker — op til
    300+ bar.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">D</span>
      <span class="card-title">Sulzer (once-through m. separator)</span>
    </div>
    <p>Variant af Benson med en <strong>separator</strong> efter
    fordampningssektionen — gør kedlen mere tolerant overfor lastvariationer
    og forskellige vandkvaliteter.</p>
    <p><strong>Anvendelse:</strong> Kraftværker med ofte skiftende last.</p>
  </div>
</div>
```

**Anbefalet ny kode (Efter):**
```html
<div class="grid grid-2">
  <div class="card">
    <div class="card-head">
      <span class="card-num">A</span>
      <span class="card-title">Naturcirkulation</span>
    </div>
    <p>Drives af <strong>densitetsforskellen</strong> mellem det kolde vand i de ubelyste nedløbsrør og den varme damp/vand-blanding i de opvarmede stigrør. Det drivende tryk beregnes som:</p>
    <div class="formula">
      Δp<sub>driv</sub> = g · H · (ρ<sub>ned</sub> − ρ<sub>stig</sub>) &nbsp; [Pa]
    </div>
    <p style="font-size:0.92em;">Hvor H er kedlens højde, g er tyngdeaccelerationen, og ρ er densiteterne. Da densitetsforskellen falder ved stigende tryk og forsvinder helt ved det kritiske tryk (221,2 bar), stopper naturcirkulationen her. Cirkulationstallet (forholdet mellem recirkuleret vand og produceret damp) er typisk 5–30.</p>
    <p><strong>Anvendelse:</strong> Subkritiske kedler op til ca. 160–180 bar. Meget udbredt i industrien.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">B</span>
      <span class="card-title">La Mont (tvangscirkulation)</span>
    </div>
    <p>En <strong>cirkulationspumpe</strong> pumper vandet aktivt igennem kedlens rør. Specielle dyser ved indløbet til hvert rør sikrer en kontrolleret og ensartet fordeling af vandet i forhold til varmebelastningen for at forhindre lokal overhedning.</p>
    <p style="font-size:0.92em;">Cirkulationstallet er typisk 3–10 (ofte 8–10), hvilket reducerer det nødvendige pumpearbejde sammenlignet med ren recirkulation, mens dysernes tryktab sikrer stabil strømning i parallelle rør.</p>
    <p><strong>Anvendelse:</strong> Subkritiske kedler med komplekse eller kompakte rørforløb, hvor naturcirkulationen er utilstrækkelig.</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">C</span>
      <span class="card-title">Benson (once-through)</span>
    </div>
    <p>Fødevandet pumpes <strong>én enkelt gang</strong> igennem economizer, fordamper og overheder i en kontinuerlig streng. Der anvendes ingen damptromle. Cirkulationstallet er præcis 1,0.</p>
    <p style="font-size:0.92em;">Da der ikke kræves densitetsforskel til cirkulationen, kan Benson-kedler arbejde over det kritiske punkt (221,2 bar / 374 °C), hvor vand øjeblikkeligt overgår til damp uden bobledannelse. Dette stiller ekstreme krav til fødevandets renhed (fuldafsaltet vand), da urenheder ellers aflejres direkte i rørene.</p>
    <p><strong>Anvendelse:</strong> Store, højeffektive kraftværksblokke med overkritiske tryk (op til 300+ bar og overhedning til 600 °C).</p>
  </div>

  <div class="card">
    <div class="card-head">
      <span class="card-num">D</span>
      <span class="card-title">Sulzer (once-through m. separator)</span>
    </div>
    <p>En videreudvikling af Benson-princippet, hvor der er monteret en <strong>vandseparator</strong> ved afgangen af fordamperen. Ved opstart og under lavlast opsamler separatoren ufordampet vand.</p>
    <p style="font-size:0.92em;">Dette vand ledes væk eller recirkuleres, hvilket beskytter overhederrørene mod vandslag og saltaflejringer. Ved højere belastning (typisk over 30–40 %) fordamper alt vandet i fordamperen, og kedlen fungerer som en ren Benson-kedel. Dette muliggør hurtigere opstart og lavere minimumslast (helt ned til 15–20 % last).</p>
    <p><strong>Anvendelse:</strong> Moderne kraftværkskedler med krav om stor fleksibilitet og hyppige lastændringer.</p>
  </div>
</div>
```

---

### Ændring 2: Matematiske formler for kedelspændinger i afsnit 2.5 (Linje 316–324)

**Nuværende kode (Før):**
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

**Anbefalet ny kode (Efter):**
```html
  <div class="card">
    <h3>⚙️ Trykbeholderdesign &amp; Spændinger</h3>
    <p>Kedelsvøbet er oftest cylindrisk. Under indvendigt tryk opstår der to primære mekaniske spændinger i cylindervæggen, som beregnes ud fra cylinderformlerne (kedelformlerne):</p>
    
    <p><strong>Tangentialspænding (Hoop stress, σ<sub>t</sub>):</strong> Den spænding, der forsøger at flække cylinderen på langs. Det er den dimensionerende spænding:</p>
    <div class="formula">
      σ<sub>t</sub> = (p · d<sub>i</sub>) / (2 · s) &nbsp; [N/mm²]
    </div>
    
    <p><strong>Længdespænding (Longitudinal stress, σ<sub>l</sub>):</strong> Den spænding, der forsøger at trække cylinderen fra hinanden i længderetningen (mod endebundene):</p>
    <div class="formula">
      σ<sub>l</sub> = (p · d<sub>i</sub>) / (4 · s) &nbsp; [N/mm²]
    </div>
    
    <p style="font-size:0.92em; margin-top: 10px;"><strong>Symbolforklaring:</strong><br>
      • <b>σ<sub>t</sub>, σ<sub>l</sub></b> = mekanisk spænding i materialet [N/mm²]<br>
      • <b>p</b> = indvendigt overtryk [N/mm²] (bemærk: 1 bar = 0,1 N/mm²)<br>
      • <b>d<sub>i</sub></b> = indvendig cylinderdiameter [mm]<br>
      • <b>s</b> = vægtykkelse / godstykkelse [mm]
    </p>
    
    <p style="font-size:0.92em; margin-top: 10px;">Da tangentialspændingen er <strong>præcis dobbelt så stor</strong> som længdespændingen (σ<sub>t</sub> = 2 · σ<sub>l</sub>), vil en cylindrisk trykbeholder eller et rør under overtryk næsten altid revne på langs frem for på tværs. Disse formler danner grundlaget for beregningsreglerne i de europæiske standarder <strong>EN 12953-3</strong> (røgrørskedler) og <strong>EN 12952-3</strong> (vandrørskedler).</p>
  </div>
```

---

### Ændring 3: Tilføjelse af afsnit 2.6 om standarder og lovgivning (Indsættes før linje 339)

**Indsættes lige før denne linje:**
```html
<!-- ═══════════════════ NAVIGATION ═══════════════════ -->
```

**Kode der skal indsættes:**
```html
<!-- ═══════════════════ REGLER, STANDARDER & VEJLEDNINGER ═══════════════════ -->
<h2>2.6 Standarder og lovgivning (EN &amp; AT-vejledninger)</h2>

<p>Design, opstilling, drift og eftersyn af dampkedelanlæg i Danmark er underlagt streng regulering via europæiske standarder og nationale regler fra Arbejdstilsynet. Dette sikrer mod eksplosioner og personulykker.</p>

<div class="grid grid-2">
  <div class="card">
    <h3>Standarderne EN 12952 &amp; EN 12953</h3>
    <p>Disse europæiske standarder fastlægger kravene til henholdsvis vandrørskedler (EN 12952) og røgrørskedler (EN 12953). De vigtigste dele omfatter:</p>
    <ul>
      <li><strong>Del 3 (Design &amp; beregning):</strong> Formler for dimensionering af svøb, rør og endebunde (herunder beregning af spændinger).</li>
      <li><strong>EN 12952-7 / EN 12953-6 (Kedeludstyr):</strong> Krav til armaturer, herunder afspærringsventiler, fødevandsventiler og tømmeventiler.</li>
      <li><strong>EN 12952-10 / EN 12953-8 (Sikring mod overtryk):</strong> Regler for dimensionering og placering af godkendte sikkerhedsventiler.</li>
      <li><strong>EN 12952-11 / EN 12953-9 (Sikkerhedsbegrænsere):</strong> Krav til elektroniske fejlsikre (fail-safe) sensorer (begrænsere for tryk, temperatur og vandstand). Begrænsere skal udløse sikkerhedskæden, afbryde brændselstilførslen og kræve <strong>manuel genindkobling (reset)</strong>. Ved ubemandet drift (24/72 timer) kræves der to uafhængige lavvandssikringer.</li>
    </ul>
  </div>

  <div class="card">
    <h3>Arbejdstilsynets AT-vejledninger</h3>
    <p>Arbejdstilsynet (AT) udgiver vejledninger, der uddyber kravene i bekendtgørelserne (særligt BEK 498/2024 om anvendelse af trykbærende udstyr):</p>
    <ul>
      <li><strong>AT-vejledning B.4.3 (Opstilling):</strong> Regulerer indretning af kedelrum, herunder krav til ventilation (forbrændingsluft), flugtveje, friplads omkring kedlen (min. 0,8–1,0 meter til vægge), samt sikker udledning fra sikkerhedsventiler og bundblæsningsbeholdere.</li>
      <li><strong>AT-vejledning B.4.4 (Trykprøvning):</strong> Fastlægger retningslinjer for den hydrauliske trykprøvning. Vandets temperatur skal typisk ligge mellem 5 °C og 50 °C for at undgå sprødt brud under testen. Luften skal udluftes fuldstændigt, trykket skal øges gradvist, og der skal etableres en sikkerhedsafstand under trykprøvning.</li>
      <li><strong>AT-vejledning B.4.8 (Eftersyn):</strong> Beskriver de praktiske krav til ydre og indre eftersyn udført af et bemyndiget organ (inspektionsorgan). Ved indre eftersyn skal kedlen renses fuldstændigt for kedelsten og sod, så metalsiderne er synlige.</li>
      <li><strong>AT-vejledning B.4.9 (Pasning):</strong> Beskriver kravene til kedelpasserens kvalifikationer samt de tekniske og organisatoriske betingelser for at køre med <em>ubemandet drift</em> (hvor kedlen overvåges periodisk i stedet for konstant).</li>
    </ul>
  </div>
</div>
