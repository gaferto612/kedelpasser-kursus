# Audit Analysis - Module 03: Termodynamik & Damptabel

This analysis details the proposed additions, formulas, and technical explanations to expand the thermodynamic content of Module 03. All additions are designed to match the styling of the existing page.

## 1. Constant $c_p$ and Temperature/Pressure Variation
- **Current state**: Section 3.1 states `h' = T × cp = T × 4.19 kJ/kg` for water under 105 °C.
- **Problem**: Liquid water's specific heat capacity $c_p$ is not constant. It varies with temperature and pressure. For instance, at 0 °C it is $\approx 4.22\text{ kJ/(kg}\cdot\text{K)}$, reaches a minimum of $\approx 4.18\text{ kJ/(kg}\cdot\text{K)}$ around 35-40 °C, and increases to $\approx 4.21\text{ kJ/(kg}\cdot\text{K)}$ at 100 °C. At higher pressures and temperatures (e.g., near critical point), it changes dramatically.
- **Clarification**: We must explain that $c_p = 4.19\text{ kJ/(kg}\cdot\text{K)}$ is a simplified engineering approximation (en forenklet teknisk antagelse) valid for liquid water at low temperatures and pressures.
- **Reference**: IAPWS-IF97 (International Association for the Properties of Water and Steam - Industrial Formulation 1997) is the international standard for calculating thermodynamic properties of water and steam.

## 2. Superheated Steam (Overhedet damp)
- **Concept**: If saturated steam is heated further at constant pressure, its temperature rises above the saturation temperature ($T_{sat}$), and it becomes superheated.
- **Formula**:
  $$h = h'' + c_{p,\text{damp}} \cdot (T - T_{sat})$$
  Where:
  - $h$ is the enthalpy of the superheated steam [kJ/kg].
  - $h''$ is the enthalpy of saturated steam at the given pressure [kJ/kg] (from the steam table).
  - $c_{p,\text{damp}}$ is the average specific heat capacity of superheated steam in the range $[T_{sat}, T]$. For typical boiler conditions, $c_{p,\text{damp}} \approx 1.9 - 2.2\text{ kJ/(kg}\cdot\text{K)}$ depending on pressure and temperature.
  - $T$ is the temperature of the superheated steam [°C].
  - $T_{sat}$ is the saturation temperature at the given pressure [°C] (from the steam table).

## 3. Linear Interpolation in Steam Tables
- **Concept**: Steam tables contain discrete steps (e.g., 2, 4, 6 bar). For intermediate values, linear interpolation (lineær interpolation) is required.
- **Formula**:
  $$y = y_1 + \frac{x - x_1}{x_2 - x_1} \cdot (y_2 - y_1)$$
- **Example**:
  Given a pressure of $5\text{ bar}$. Find $h'$ using the table in Section 3.3.
  - $x_1 = 4\text{ bar} \implies y_1 = 604.7\text{ kJ/kg}$
  - $x_2 = 6\text{ bar} \implies y_2 = 670.4\text{ kJ/kg}$
  - Calculation:
    $$h'(5\text{ bar}) = 604.7 + \frac{5 - 4}{6 - 4} \cdot (670.4 - 604.7) = 637.55\text{ kJ/kg}$$

## 4. Boiler Efficiency: Direct vs. Indirect Method (EN 12953-11 / EN 12952-15)
- **Direct Method (Direkte metode)**:
  $$\eta = \frac{Q_{\text{nyttig}}}{Q_{\text{indfyret}}} \times 100\% = \frac{\dot{m}_{\text{damp}} \cdot (h_{\text{damp}} - h_{\text{fødevand}})}{\dot{m}_{\text{brændsel}} \cdot H_i} \times 100\%$$
- **Indirect Method (Indirekte metode / Tabmetoden)**:
  According to EN 12953-11 (shell boilers) and EN 12952-15 (water-tube boilers), efficiency is:
  $$\eta = 100\% - (q_f + q_s + q_u + q_r)$$
  Where:
  - $q_f$: Røggastab (flue gas loss).
  - $q_s$: Strålings- og konvektionstab (radiation and convection loss).
  - $q_u$: Uforbrændt tab (unburned carbon loss in ash/soot).
  - $q_r$: Resttab/øvrige tab (other losses, e.g., blowdown loss).
- **Siegert's Formula (Siegerts formel) for Flue Gas Loss ($q_f$)**:
  $$q_f = A \cdot \frac{T_{\text{røggas}} - T_{\text{omgivelse}}}{21 - O_2} \quad [\%]$$
  Or based on $CO_2$:
  $$q_f = C \cdot \frac{T_{\text{røggas}} - T_{\text{omgivelse}}}{CO_2} \quad [\%]$$
  Where typical coefficients are:
  - Natural gas: $A = 0.38$, $C = 0.50$
  - Fuel oil (light): $A = 0.48$, $C = 0.57$
  - Fuel oil (heavy): $A = 0.52$, $C = 0.62$
  - Coal: $A = 0.65$, $C = 0.68$

## 5. Turbine Efficiency & Pump NPSH
- **Isentropic Turbine Efficiency ($\eta_s$)**:
  $$\eta_s = \frac{h_1 - h_2}{h_1 - h_{2s}}$$
  Explain that this represents actual enthalpy drop vs. ideal isentropic enthalpy drop.
- **Pump NPSH (Net Positive Suction Head)**:
  - **$NPSH_a$ (Available / Tilgængelig)**:
    $$NPSH_a = \frac{p_{\text{tank, abs}} - p_v}{\rho \cdot g} \pm z_s - h_{\text{tab}}$$
    Where:
    - $p_{\text{tank, abs}}$ is the absolute pressure in the deaerator/feed tank [Pa].
    - $p_v$ is the vapor pressure of water at feed temperature [Pa].
    - $\rho$ is the water density [kg/m³].
    - $g$ is gravity ($9.81\text{ m/s}^2$).
    - $z_s$ is the physical height difference between the tank water level and pump inlet [m] (positive if tank is above pump).
    - $h_{\text{tab}}$ is friction loss in the suction line [m].
  - **$NPSH_r$ (Required / Påkrævet)**:
    Pump-specific value from manufacturer.
  - **Cavitation Condition**:
    $$NPSH_a > NPSH_r + \text{sikkerhedsmargin (typisk 0.5 - 1.0 m)}$$
  - **Cavitation Mechanics**: High velocity at impeller eye creates localized pressure drop. If pressure drops below $p_v$, vapor bubbles form. As they travel to high-pressure areas, they implode, creating micro-jets ($1000\text{ m/s}$) and high local pressures ($10,000\text{ bar}$), causing material erosion (pitting), noise, and vibration.
  - **Mitigation**:
    1. Raise feed tank height (increase $z_s$).
    2. Subcool feed water slightly (decrease $p_v$).
    3. Increase suction pipe diameter and minimize bends (decrease $h_{\text{tab}}$).
    4. Select pump with lower $NPSH_r$.
