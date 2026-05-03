# 🔥 Kedelpasser Kursus

Et komplet online-kursus til **kedel- og maskinpasser-uddannelsen** —
bygget som statisk website med detaljerede infografikker, SVG-diagrammer
og pædagogiske gennemgange af hele pensum.

> **Målgruppe:** Studerende på Mercantec og lignende erhvervsskoler der
> forbereder sig til kedelpasserprøven, samt aktive kedelpassere der
> ønsker en moderne digital opslagsbog.

---

## 📚 Modulerne

| # | Modul | Indhold |
|---|---|---|
| **01** | [Certifikater & lovgivning](docs/01-certifikater/) | BEK 498/2024 · certifikattyper I/II/III · kontrolklasser A/B/C · eftersynsintervaller |
| **02** | [Dampkedler — typer & opbygning](docs/02-dampkedler/) | Røgrørskedler · vandrørskedler (natur, La Mont, Benson, Sulzer) · elkedler · hedtvandsanlæg |
| **03** | [Termodynamik & damptabel](docs/03-termodynamik/) | Entalpi · absolut tryk · damptabel-opslag · virkningsgrad · komplette beregningseksempler |
| **04** | [Forbrænding & røggastab](docs/04-forbraending/) | Lambda · luftforbrug · brændværdi · røggastab med konstanter 68/70/66 |
| **05** | [Vandbehandling](docs/05-vandbehandling/) | PA/CA-tal · doseringskemikalier · action-diagram · ekstern vs intern vandbehandling |
| **06** | [Armaturer & sikkerhed](docs/06-armaturer-sikkerhed/) | Sikkerhedsventil · vandstandsglas · L-W-L · gasrampe · sikkerhedskæde |
| **07** | [Drift & vedligehold](docs/07-drift-vedligehold/) | Opfyringsprocedure · vagtovertagelse · kedelbog · §29 periodisk overvågning · bundblæsning |
| **08** | [Energi & grøn omstilling](docs/08-energi-groen/) | Virkningsgradsforbedringer · varmepumper · biomasse · elkedler · Carletti & Arla cases |
| **09** | [Formler & tabeller](docs/09-formler-tabeller/) | Komplet formelsamling · damptabel 1–220 bar · vandtabel · brændselsdata · grænseværdier |

---

## 🚀 Sådan kommer du i gang

### Online — GitHub Pages

Hvis repoet er deployed via GitHub Pages, åbn bare:

```
https://<dit-brugernavn>.github.io/kedelpasser-kursus/
```

### Lokalt — bare åbn HTML-filerne

```bash
git clone https://github.com/<dit-brugernavn>/kedelpasser-kursus.git
cd kedelpasser-kursus
open index.html      # macOS
xdg-open index.html  # Linux
start index.html     # Windows
```

Eller server med en hvilken som helst statisk webserver:

```bash
python3 -m http.server 8000
# åbn http://localhost:8000
```

---

## 📂 Repo-struktur

```
kedelpasser-kursus/
├── index.html              # Forside med alle 9 moduler
├── README.md               # Denne fil
├── _config.yml             # GitHub Pages config
├── assets/
│   └── css/
│       └── style.css       # Fælles stylesheet (industrial-blueprint tema)
└── docs/
    ├── 01-certifikater/index.html
    ├── 02-dampkedler/index.html
    ├── 03-termodynamik/index.html
    ├── 04-forbraending/index.html
    ├── 05-vandbehandling/index.html
    ├── 06-armaturer-sikkerhed/index.html
    ├── 07-drift-vedligehold/index.html
    ├── 08-energi-groen/index.html
    └── 09-formler-tabeller/index.html
```

Alle SVG-diagrammer er **inline** — der er ingen eksterne afhængigheder
ud over Google Fonts. Repoet kan deployes som-er på enhver statisk hosting
(GitHub Pages, Netlify, Vercel, Cloudflare Pages).

---

## 🎨 Design

- **Æstetik:** Industrial blueprint — papirhvid baggrund, mørk blæk-tekst,
  brand-røde accenter til advarsler, damp-blå til information
- **Typografi:** Fraunces (display serif), DM Sans (brødtekst), JetBrains Mono (formler/teknisk)
- **Farveskema:** Bevidst valgte farvetoner for damp, ild, vand, gas
  så diagrammer er konsekvente på tværs af moduler
- **Print-venligt:** Alle moduler kan printes som A4-dokumenter

---

## 🌍 Deploy til GitHub Pages

1. Push repoet til GitHub
2. Gå til **Settings → Pages**
3. Vælg branch: `main`, mappe: `/ (root)`
4. Gem — efter ~1 minut er siden live

---

## 📖 Kilder

Indholdet er baseret på:

- **Kedel- og maskinpasser**, Erhvervsskolernes forlag, 5. udgave (2008)
  — Nota bognummer 609678
- **BEK 498/2024** — Bekendtgørelse om indretning, ombygning og reparation
  af trykbærende udstyr (gældende fra 1. juni 2024)
- **IAPWS-IF97** for damptabelværdier
- Cases: Carletti A/S (Skødstrup) og Arla — offentligt tilgængelige
  energistrategier

---

## ⚖ Brug & licens

Kursusindholdet er udarbejdet til **uddannelsesformål**. Ved tvivl om
konkrete drifts- eller sikkerhedsspørgsmål — følg altid producentens
specifikationer, gældende lovgivning, og din egen erhvervsskoles
vejledning.

Kildebogen *Kedel- og maskinpasser* er ophavsretsligt beskyttet
af Erhvervsskolernes forlag. Dette repo er en pædagogisk
sammenfatning til personlig studiebrug — ikke en gengivelse.

---

## 🤝 Bidrag

Fundet en fejl? Mangler der noget? Åbn et issue eller send en pull request.

Forslag til udvidelser:
- [ ] Interaktiv damptabel-opslag med søgefunktion
- [ ] Selvtest med flerevalgs-spørgsmål per modul
- [ ] PDF-eksport af hele kurset
- [ ] Engelsk oversættelse
- [ ] Arabisk version (RTL)

---

*Held og lykke med eksamen! 🔧⚙*
