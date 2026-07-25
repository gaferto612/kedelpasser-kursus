// Programmatic math verification for Module 3 Thermodynamics

// 1. Interpolation Examples
function interpolate(x, x1, x2, y1, y2) {
    return y1 + ((x - x1) / (x2 - x1)) * (y2 - y1);
}

const h_5bar = interpolate(5, 4, 6, 604.7, 670.4);
const expected_5bar = 637.55;
console.log(`Interpolation 5 bar: calculated = ${h_5bar.toFixed(4)}, expected = ${expected_5bar}`);

const h_15bar = interpolate(15, 13, 18, 814.7, 884.5);
const expected_15bar = 842.62;
console.log(`Interpolation 15 bar: calculated = ${h_15bar.toFixed(4)}, expected = ${expected_15bar}`);

// 2. Siegert Constants & Formulas
// Simple Siegert: q_A = K * (T_røg - T_luft) / (CO2_% * 100)
// Or is it: q_A = K * (T_røg - T_luft) / CO2_% ?
// Wait, the formula in the HTML is: q_røggas ≈ K × (T_røggas − T_luft) ÷ (CO2,% × 100)
// Let's verify with Modul 09 constants and formulas.
// In Modul 09: q_A = K * (t_røg - t_luft) / CO2
// If K is defined such that it does not divide by 100 in the formula itself, e.g. q_A = 0.68 * (t_røg - t_luft) / CO2,
// then K is 0.68. But Modul 09 uses K = 68, so the formula is: q_A = K * (t_røg - t_luft) / (CO2 * 100) or K / 100 * (t_røg - t_luft) / CO2.
// Let's check Modul 09 constants and formulas. We can read docs/09-formler-tabeller/index.html to be absolutely sure.

// 3. Complete Calculation Example in Section 3.5
// data: P_arb = 9 bar -> P_abs = 10 bar.
// h'' at 10 bar: 2778.1 kJ/kg (rounded to 2778 in the example steps, let's verify)
// Fødevand: 98 °C -> h' = 98 * 4.19 = 410.62 kJ/kg (rounded to 410.6 kJ/kg in example)
// Delta_h = 2778 - 410.6 = 2367.4 kJ/kg
// m_damp = 6500 kg/h
// Q_prod = 6500 * 2367.4 = 15388100 kJ/h = 15388.1 MJ/h (rounded to 15.388 MJ/h)
// Fuel oil: 475 l/h, density = 0.927 kg/l, h_i = 40.1 MJ/kg
// m_fuel = 475 * 0.927 = 440.325 kg/h (rounded to 440.3 kg/h)
// Q_indfyr = 440.325 * 40.1 = 17657.0325 MJ/h (using 440.3 * 40.1 = 17656.03 -> rounded to 17.656 MJ/h)
// eta = 15388 / 17656 = 0.871545... -> 87.2%
console.log("Complete calculation example:");
console.log(`  Delta h = ${2778 - 410.6} kJ/kg`);
console.log(`  Q_prod (raw) = ${(6500 * (2778 - 410.6) / 1000).toFixed(4)} MJ/h`);
console.log(`  m_oil (raw) = ${(475 * 0.927).toFixed(4)} kg/h`);
console.log(`  Q_indfyr (raw) = ${(475 * 0.927 * 40.1).toFixed(4)} MJ/h`);
console.log(`  Q_indfyr (from 440.3) = ${(440.3 * 40.1).toFixed(4)} MJ/h`);
console.log(`  eta (raw) = ${( (6500 * (2778 - 410.6) / 1000) / (475 * 0.927 * 40.1) * 100 ).toFixed(4)} %`);
console.log(`  eta (from steps) = ${(15388 / 17656 * 100).toFixed(4)} %`);
