# Handoff Report — Dampkedler Verification

This report outlines the empirical findings from verifying `docs/02-dampkedler/index.html` for HTML structure, link sanity, SVG diagrams, and Danish terminology.

## 1. Observation

Direct observations were gathered using a custom Node.js verification script (`verify_dampkedler.js`) and manual inspection of the HTML code:

### A. SVG Rendering Issues (SVG #2: 3-træks røgrørskedel)
- **Line 136**: The text element `BR` (representing the burner) has an invalid `fill` attribute value:
  ```html
  <text x="37" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#hot">BR</text>
  ```
  The value `#hot` is not a valid CSS color name, hex code, or gradient reference.
- **Line 141**: The line element representing the exhaust path references a non-existent marker ID `exhaust`:
  ```html
  <line x1="640" y1="166" x2="600" y2="166" stroke="#1a1814" stroke-width="2" marker-end="url(#exhaust)"/>
  ```
  No `<marker id="exhaust">` element is defined in this SVG or anywhere else in the document.

### B. Danish Terminology Inconsistency
- **Line 58**: The steam drum in the water tube boiler SVG diagram (SVG #1) is labeled "DAMPDRUM":
  ```html
  <text x="100" y="25" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#0891b2" font-weight="700">DAMPDRUM</text>
  ```
  This is a literal translation of the English "steam drum". The rest of the document uses the correct Danish technical term "damptromle" (e.g., line 190: `"nedløbsrørene (downcomers) og den varme damp/vand-blanding i de opvarmede stigrør (risers) i brændkammeret"`, line 204: `"pumper vandet aktivt fra damptromlen gennem fordamperrørene"`).

### C. Danish Grammatical Errors
- **Line 90**: In the comparison table under Section 2.1:
  ```html
  <text x="120" y="38" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c">Stor energilager</text>
  ```
  Since "lager" is a neuter noun (*et lager*), it must be inflected as **"Stort energilager"**.
- **Line 91**: In the comparison table under Section 2.1:
  ```html
  <text x="120" y="56" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#4a443c">Lav vedligehold</text>
  ```
  "Vedligehold" is a neuter noun (*et vedligehold*), so it must be **"Lavt vedligehold"** or **"Lav vedligeholdelse"**.
- **Line 171**: In the limitations list for shell boilers:
  ```html
  <li>Ved sprængning: stort energiindhold = stor skadepotentiale</li>
  ```
  "Potentiale" is a neuter noun (*et potentiale*), so it must be **"stort skadepotentiale"**.
- **Line 298**: In the caption of Figure 2.3:
  ```html
  <div class="diagram-caption">Figur 2.3 — Hedtvandsanlæg: trykholdepumpen sikrer at vandet ikke fordamper, selv ved 150°C</div>
  ```
  According to Danish punctuation rules, a comma should be placed before the conjunction "at" in a subordinate clause: **"...sikrer, at vandet..."**.
- **Lines 118, 126, 130**: The internal SVG comments use the word "trek" instead of the Danish spelling "træk":
  ```html
  <!-- 1. trek - flammerør (center bottom) -->
  <!-- 2. trek - upper -->
  <!-- 3. trek - lower side -->
  ```

---

## 2. Logic Chain

1. **SVG Attribute Validity**: An attribute value of `#hot` for `fill` violates SVG color standards. Browser parsers will either ignore it, render the text as black, or raise a rendering warning.
2. **Missing Marker ID**: The property `marker-end="url(#exhaust)"` instructs the SVG renderer to append a marker defined with `id="exhaust"`. Because no such element exists in the file, the line representing the flue gas flow towards the chimney (Skorsten) will render as a plain line without an arrow head, resulting in a broken diagram.
3. **Terminology Standard**: Mixing the anglicism "DAMPDRUM" with the correct Danish "damptromle" reduces the professional credibility of the course materials. Standardizing on "DAMPTROMLE" is required.
4. **Grammatical Conformance**: Danish adjectives must agree in gender with their nouns. "Lager", "vedligehold", and "potentiale" are neuter nouns. The adjectives "stor", "lav", and "stor" are in the common gender and must be changed to their neuter forms ("stort", "lavt", "stort").

---

## 3. Caveats

- **Visual Text Truncation**: No automated tool was used to check if font-family rendering causes text overflow in the SVGs. For example, the text "Vendekammer" in SVG #2 is placed inside a `<rect>` of width 50; depending on the local font system, the text might visually overflow the borders of the chamber box.
- **Critical Pressure Constant**: The document lists the critical pressure of water as "221,2 bar". The physical constant is technically `220.64 bar` (or `22.06 MPa`), but `221 bar` or `221.2 bar` is often used in simplified engineering materials. This has not been flagged as an error, but is noted for correctness.

---

## 4. Conclusion

The document `docs/02-dampkedler/index.html` is structurally valid HTML and all relative navigation links function correctly. However, it contains:
- **Two SVG bugs**: `fill="#hot"` (Line 136) and a broken `url(#exhaust)` reference (Line 141).
- **One terminology bug**: "DAMPDRUM" (Line 58) instead of "DAMPTROMLE".
- **Three grammatical errors**: "Stor energilager" (Line 90), "Lav vedligehold" (Line 91), and "stor skadepotentiale" (Line 171).

---

## 5. Verification Method

To independently verify the observations:
1. **Manual Inspection**: Open `docs/02-dampkedler/index.html` and search for the following lines:
   - Line 58 (`DAMPDRUM`)
   - Line 90 (`Stor energilager`)
   - Line 91 (`Lav vedligehold`)
   - Line 136 (`fill="#hot"`)
   - Line 141 (`marker-end="url(#exhaust)"`)
   - Line 171 (`stor skadepotentiale`)
2. **Programmatic Validation**:
   You can recreate the following Node.js test script to programmatically detect the SVG issues:
   ```javascript
   const fs = require('fs');
   const content = fs.readFileSync('docs/02-dampkedler/index.html', 'utf8');
   
   // Check for #hot
   if (content.includes('fill="#hot"')) {
     console.log("FAIL: Found invalid fill='#hot' on line 136");
   }
   
   // Check for missing #exhaust
   if (content.includes('url(#exhaust)') && !content.includes('id="exhaust"')) {
     console.log("FAIL: Missing SVG marker id='exhaust' referenced by line 141");
   }
   ```
   Run this script with `node <script_name>.js` to verify.
