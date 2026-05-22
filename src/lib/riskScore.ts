export const riskPointRules = {
  edad30a45: 1,
  inicioSexualMenor15: 1,
  parejasMayores5: 1,
  sexoNoProtegidoSi: 1,
  itsSi: 2,
  tabaquismoSi: 1,
  anticonceptivosOralesMas5AnnosSi: 1,
  partosMayores3: 1,
  pvh1618Positivo: 5,
  excesoAdiposidadSi: 2,
} as const;

export type RiskInput = {
  edad: number;
  inicioPrecoz: "si" | "no" | "";
  numeroParejas: "gt5" | "lte5" | "";
  sexoNoProtegido: "si" | "no" | "";
  its: "si" | "no" | "";
  tabaquismo: "si" | "no" | "";
  acoProlongado: "si" | "no" | "";
  partos: "gt3" | "lte3" | "";
  pvh1618: "positivo" | "negativo" | "";
  adiposidad: "si" | "no" | "";
};

export function calculateRiskScore(input: RiskInput): number {
  let total = 0;

  if (input.edad >= 30 && input.edad <= 45) total += riskPointRules.edad30a45;
  if (input.inicioPrecoz === "si") total += riskPointRules.inicioSexualMenor15;
  if (input.numeroParejas === "gt5") total += riskPointRules.parejasMayores5;
  if (input.sexoNoProtegido === "si") total += riskPointRules.sexoNoProtegidoSi;
  if (input.its === "si") total += riskPointRules.itsSi;
  if (input.tabaquismo === "si") total += riskPointRules.tabaquismoSi;
  if (input.acoProlongado === "si") total += riskPointRules.anticonceptivosOralesMas5AnnosSi;
  if (input.partos === "gt3") total += riskPointRules.partosMayores3;
  if (input.pvh1618 === "positivo") total += riskPointRules.pvh1618Positivo;
  if (input.adiposidad === "si") total += riskPointRules.excesoAdiposidadSi;

  return total;
}
