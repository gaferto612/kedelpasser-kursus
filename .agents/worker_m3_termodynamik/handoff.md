# Handoff Report - Module 3 Thermodynamics Content Expansion

This report outlines the implementation of the expanded thermodynamic content in `docs/03-termodynamik/index.html`.

## 1. Observation
1. **Initial HTML File (`docs/03-termodynamik/index.html`)**:
   - Analyzed lines 1-283 of the initial HTML file.
   - Specific heat capacity was defined as a constant with the wrong unit `kJ/kg` in line 57:
     ```html
     57: <b>Vand under 105 °C:</b>  h' = T × c<sub>p</sub> = T × <em>4,19</em> kJ/kg<br>
     ```
   - Superheated steam and wet steam (damp quality $x$) were not explained or mathematically defined in Section 3.1.
   - Linear interpolation, the critical point of water, and Mollier (h-s) diagrams were completely missing.
   - Boiler efficiency was represented solely by the direct method (lines 206-211) without the indirect (loss-based) method or references to standard EN 12953-11/EN 12952-15.
   - Turbine efficiency and pump NPSH/cavitation were described only qualitatively in Section 3.6 without formulas.
   - No bibliography or references existed at the bottom.

2. **Formnelsamling (`docs/09-formler-tabeller/index.html`)**:
   - Observed that Modul 09 defines simple Siegert constants $K$: Fyringsgasolie (68), Fuelolie (70), Naturgas (66), and Træ/biomasse (~74) using the formula:
     ```html
     q_A ≈ K · (t_røg − t_luft) / CO_2,%  [%]
     ```

3. **High-Priority Input Messages**:
   - Received additional instructions regarding the c_p unit (change to `kJ/(kg·K)`), interpolation (include a 15 bar step-by-step example), alignment of Siegert constants, and standardization of NPSHa variables (include $z_{statisk}$, $h_{f,sug}$, and $p_v(T)$).

## 2. Logic Chain
1. **Physical Precision**:
   - The unit of specific heat capacity $c_p$ must be $kJ/(kg\cdot K)$ (or $kJ/(kg\cdot^\circ C)$). Multiplied by temperature in $^\circ C$ (relative to $0^\circ C$), it yields specific enthalpy in $kJ/kg$.
   - This was corrected in Section 3.1: `h' ≈ T × cp = T × 4,19 kJ/(kg·K)` and the example `h' ≈ 80 × 4,19 = 335,2 kJ/kg`.

2. **Interpolation Synthesis**:
   - To fulfill both the initial 5 bar step-by-step example request and the subsequent 15 bar example request, both examples were implemented side by side in a two-column grid inside Section 3.3.1. This maintains complete rigor and satisfies all requirements.
   - Example 1 (5 bar): $h'_5 = 604,7 + \frac{5 - 4}{6 - 4} \cdot (670,4 - 604,7) = 637,55\text{ kJ/kg}$
   - Example 2 (15 bar): $h'_{15} = 814,7 + \frac{15 - 13}{18 - 13} \cdot (884,5 - 814,7) = 842,62\text{ kJ/kg}$

3. **Alignment of Siegert Constants**:
   - Modul 09 constants are integers (e.g. 68 for gasoil). To use them correctly when $CO_2$ is entered as a percentage (e.g., 12), the formula must divide by 100:
     $q_{røggas} \approx \frac{K}{100} \cdot \frac{T_{røggas} - T_{luft}}{CO_{2,\%}}$.
   - Both the simple Siegert formula (CO2-based) and the standard oxygen-based formula ($q_{røggas} = (T_{røggas} - T_{luft}) \cdot [A_1 / (21 - O_{2,\%}) + B]$) were implemented with a combined table containing $K$, $A_1$, and $B$ values matching Modul 09.

4. **Standards & Pump Mechanics**:
   - Added direct vs. indirect efficiency methods (citing EN 12953-11 and EN 12952-15) and equivalent evaporation ($f_{norm}$).
   - Expanded Section 3.6 with the mathematical definition of isentropic turbine efficiency ($\eta_{is,turbine} = \frac{h_1 - h_{2,faktisk}}{h_1 - h_{2,isentropisk}}$), pump $NPSHa$ formulas, cavitation mechanics (bubble implosion and pitting), and 4 operational mitigation strategies (raising tank, lowering temperature, minimizing suction resistance, speeds/valves).
   - Variables in the $NPSHa$ formula were standardized to $z_{statisk}$ (geodetic height difference), $h_{f,sug}$ (suction friction loss), and $p_v(T)$ (vapor pressure).

5. **Visual Styling**:
   - Used existing design patterns (classes `.card`, `.formula`, `.diagram`, `.grid.grid-2`, `.alert.info`, `.num`, `.badge`) to ensure seamless integration and compatibility with `style.css`.

## 3. Caveats
- No automated regression test suite exists in the workspace. All verifications were done via manual structure analysis and git diff inspections.
- Constants for Siegert's formula are empirical approximations; more precise calculations require flue-gas specific heat capacities and EN-standardized stoichiometric combustion equations.

## 4. Conclusion
- All requested expansions (c_p variation, superheated steam, wet steam, linear interpolation with 5/15 bar examples, direct/indirect efficiency methods, Siegert's formula, turbine efficiency, NPSHa vs NPSHr, cavitation, and standard references) have been successfully integrated into `docs/03-termodynamik/index.html`.
- No other codebase files were modified. All additions are written in technical Danish.

## 5. Verification Method
To verify the correctness of the changes:
1. **Inspect Tag Nesting**: Open `docs/03-termodynamik/index.html` and verify that all `<div>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<tr>`, `<td>` tags are properly nested and closed.
2. **Review Formulas**:
   - Check that specific heat capacity has the unit `kJ/(kg·K)` for $c_p$ and `kJ/kg` for entalpi.
   - Verify that the interpolation examples calculate:
     - 5 bar: `637,55 kJ/kg`
     - 15 bar: `842,62 kJ/kg`
   - Check that the Siegert constants table lists $K = 66$, $A_1 = 0,38$, $B = 0,009$ for Naturgas, and $K = 68$, $A_1 = 0,48$, $B = 0,007$ for Fyringsgasolie.
3. **Verify Links**: Ensure topbar navigation and footer pagenav relative links (`../02-dampkedler/` and `../04-forbraending/`) are valid and unchanged.
