"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { calculateRiskScore, hasExcesoAdiposidad } from "@/lib/riskScore";
import styles from "./test.module.css";

export default function TestPage() {
  const [score, setScore] = useState<number | null>(null);
  const [adiposidadDetected, setAdiposidadDetected] = useState<boolean | null>(null);
  const [hasFacilidades, setHasFacilidades] = useState(false);
  const baseMaxScore = 20;
  const highResourceExtraMaxScore = 6;

  function getRiskLevel(points: number, useHighResourceScale: boolean): string {
    const scaleShift = useHighResourceScale ? highResourceExtraMaxScore : 0;
    if (points <= 10 + scaleShift) return "bajo riesgo";
    if (points <= 15 + scaleShift) return "riesgo medio";
    return "alto riesgo";
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const total = calculateRiskScore({
      edad: Number(form.get("edad") ?? 0),
      inicioPrecoz: (form.get("inicioPrecoz") as "si" | "no" | "") ?? "",
      numeroParejas: (form.get("numeroParejas") as "gt5" | "lte5" | "") ?? "",
      sexoNoProtegido: (form.get("sexoNoProtegido") as "si" | "no" | "") ?? "",
      its: (form.get("its") as "si" | "no" | "") ?? "",
      itsExposicionOLab: (form.get("itsExposicionOLab") as "si" | "no" | "") ?? "",
      tabaquismo: (form.get("tabaquismo") as "si" | "no" | "") ?? "",
      acoProlongado: (form.get("acoProlongado") as "si" | "no" | "") ?? "",
      partos: (form.get("partos") as "gt3" | "lte3" | "") ?? "",
      pvh1618: (form.get("pvh1618") as "positivo" | "negativo" | "") ?? "",
      imc: Number(form.get("imc") ?? 0),
      cinturaCm: Number(form.get("cinturaCm") ?? 0),
      icc: Number(form.get("icc") ?? 0),
      ict: Number(form.get("ict") ?? 0),
      resistenciaInsulina: (form.get("resistenciaInsulina") as "si" | "no" | "") ?? "",
      dislipidemia: (form.get("dislipidemia") as "si" | "no" | "") ?? "",
      useHighResourceVariables: hasFacilidades,
    });

    setScore(total);
    setAdiposidadDetected(
      hasExcesoAdiposidad({
        imc: Number(form.get("imc") ?? 0),
        cinturaCm: Number(form.get("cinturaCm") ?? 0),
        icc: Number(form.get("icc") ?? 0),
        ict: Number(form.get("ict") ?? 0),
      }),
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.tag}>CerviRisk | Evaluación</p>
          <h1>Formulario de selección de criterios</h1>
          <p>
            Esta pantalla captura variables para el score preliminar de riesgo.
          </p>
        </header>

        <form className={styles.form} onSubmit={onSubmit}>
          <section className={styles.section}>
            <h2>Datos generales</h2>
            <label>
              Edad
              <input type="number" min={10} max={100} name="edad" placeholder="Ej. 34" />
            </label>
          </section>

          <section className={styles.section}>
            <h2>Factores conductuales y antecedentes</h2>
            <label>
              Edad de inicio de relaciones sexuales &lt; 15
              <span className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input type="radio" name="inicioPrecoz" value="si" />
                  Sí
                </label>
                <label className={styles.radioOption}>
                  <input type="radio" name="inicioPrecoz" value="no" />
                  No
                </label>
              </span>
            </label>

            <label>
              Número de parejas sexuales &gt; 5
              <span className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input type="radio" name="numeroParejas" value="gt5" />
                  Sí
                </label>
                <label className={styles.radioOption}>
                  <input type="radio" name="numeroParejas" value="lte5" />
                  No
                </label>
              </span>
            </label>

            <label>
              Sexo no protegido frecuente
              <span className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input type="radio" name="sexoNoProtegido" value="si" />
                  Sí
                </label>
                <label className={styles.radioOption}>
                  <input type="radio" name="sexoNoProtegido" value="no" />
                  No
                </label>
              </span>
            </label>

            <label>
              Antecedentes de ITS (infecciones de transmisión sexual)
              <span className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input type="radio" name="its" value="si" />
                  Sí
                </label>
                <label className={styles.radioOption}>
                  <input type="radio" name="its" value="no" />
                  No
                </label>
              </span>
            </label>

            <label>
              Tabaquismo actual o previo
              <span className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input type="radio" name="tabaquismo" value="si" />
                  Sí
                </label>
                <label className={styles.radioOption}>
                  <input type="radio" name="tabaquismo" value="no" />
                  No
                </label>
              </span>
            </label>

            <label>
              Uso de anticonceptivos orales &gt; 5 años
              <span className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input type="radio" name="acoProlongado" value="si" />
                  Sí
                </label>
                <label className={styles.radioOption}>
                  <input type="radio" name="acoProlongado" value="no" />
                  No
                </label>
              </span>
            </label>
          </section>

          <section className={styles.section}>
            <h2>Factores clínicos y biológicos</h2>
            <label>
              Número de partos &gt; 3
              <span className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input type="radio" name="partos" value="gt3" />
                  Sí
                </label>
                <label className={styles.radioOption}>
                  <input type="radio" name="partos" value="lte3" />
                  No
                </label>
              </span>
            </label>

            <label>
              Estado PVH 16/18 (virus del papiloma humano, genotipos 16 y 18)
              <span className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input type="radio" name="pvh1618" value="positivo" />
                  Positivo
                </label>
                <label className={styles.radioOption}>
                  <input type="radio" name="pvh1618" value="negativo" />
                  Negativo
                </label>
              </span>
            </label>
          </section>

          <section className={styles.section}>
            <h2>Cálculo de exceso de adiposidad</h2>
            <p className={styles.criteriaText}>
              Se suma +2 si IMC (índice de masa corporal) &gt; 40, o si IMC
              &gt;= 30 y además cumple al menos uno: cintura &gt;= 80 cm, ICC
              (índice cintura-cadera) &gt;= 0.85, ICT (índice
              cintura-talla) &gt;= 0.5.
            </p>
            <label>
              IMC (índice de masa corporal, kg/m²)
              <input type="number" step="0.1" min={0} name="imc" placeholder="Ej. 31.4" />
            </label>

            <label>
              Perímetro de cintura (cm)
              <input type="number" step="0.1" min={0} name="cinturaCm" placeholder="Ej. 84" />
            </label>

            <label>
              ICC (índice cintura-cadera)
              <input type="number" step="0.01" min={0} name="icc" placeholder="Ej. 0.87" />
            </label>

            <label>
              ICT (índice cintura-talla)
              <input type="number" step="0.01" min={0} name="ict" placeholder="Ej. 0.52" />
            </label>
          </section>

          <section className={styles.section}>
            <h2>Facilidades de acceso</h2>
            <div className={styles.switchRow}>
              <p>
                ¿Tienes acceso a las siguientes facilidades? En caso de no
                tener acceso, no se activan estos campos y el resultado será
                menos certero.
              </p>
              <label className={styles.switch} aria-label="Acceso a facilidades">
                <input
                  type="checkbox"
                  name="accesoFacilidades"
                  checked={hasFacilidades}
                  onChange={(event) => setHasFacilidades(event.target.checked)}
                />
                <span className={styles.slider} />
              </label>
            </div>
          </section>

          <section
            className={`${styles.section} ${hasFacilidades ? styles.unlockedSection : styles.lockedSection}`}
          >
            <h2>Variables de entornos de altos recursos</h2>
            <p className={styles.criteriaText}>
              Estas variables amplían el cálculo cuando hay mayor capacidad
              diagnóstica, sin crear una calculadora aparte.
            </p>
            <label>
              Diagnóstico de laboratorio por infección de Chlamydia, Herpes
              simple o Virus de inmunodeficiencia humana
              <span className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="itsExposicionOLab"
                    value="si"
                    disabled={!hasFacilidades}
                  />
                  Sí
                </label>
                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="itsExposicionOLab"
                    value="no"
                    disabled={!hasFacilidades}
                  />
                  No
                </label>
              </span>
            </label>
            <label>
              Presencia de resistencia a la insulina
              <span className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="resistenciaInsulina"
                    value="si"
                    disabled={!hasFacilidades}
                  />
                  Sí
                </label>
                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="resistenciaInsulina"
                    value="no"
                    disabled={!hasFacilidades}
                  />
                  No
                </label>
              </span>
            </label>
            <label>
              Presencia de dislipidemia
              <span className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input type="radio" name="dislipidemia" value="si" disabled={!hasFacilidades} />
                  Sí
                </label>
                <label className={styles.radioOption}>
                  <input type="radio" name="dislipidemia" value="no" disabled={!hasFacilidades} />
                  No
                </label>
              </span>
            </label>
          </section>

          <div className={styles.actions}>
            <button type="submit">Calcular riesgo</button>
            <Link href="/">Volver al overview</Link>
          </div>
        </form>

        {score !== null ? (
          <p className={styles.result}>
            Resultado {score} / {hasFacilidades ? baseMaxScore + highResourceExtraMaxScore : baseMaxScore} puntos{" "}
            {getRiskLevel(score, hasFacilidades)}
          </p>
        ) : null}
      </main>
    </div>
  );
}
