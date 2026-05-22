"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { calculateRiskScore } from "@/lib/riskScore";
import styles from "./test.module.css";

export default function TestPage() {
  const [score, setScore] = useState<number | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const total = calculateRiskScore({
      edad: Number(form.get("edad") ?? 0),
      inicioPrecoz: (form.get("inicioPrecoz") as "si" | "no" | "") ?? "",
      numeroParejas: (form.get("numeroParejas") as "gt5" | "lte5" | "") ?? "",
      sexoNoProtegido: (form.get("sexoNoProtegido") as "si" | "no" | "") ?? "",
      its: (form.get("its") as "si" | "no" | "") ?? "",
      tabaquismo: (form.get("tabaquismo") as "si" | "no" | "") ?? "",
      acoProlongado: (form.get("acoProlongado") as "si" | "no" | "") ?? "",
      partos: (form.get("partos") as "gt3" | "lte3" | "") ?? "",
      pvh1618: (form.get("pvh1618") as "positivo" | "negativo" | "") ?? "",
      adiposidad: (form.get("adiposidad") as "si" | "no" | "") ?? "",
    });

    setScore(total);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.tag}>CerviRisk | Evaluacion</p>
          <h1>Formulario de seleccion de criterios</h1>
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
              <select name="inicioPrecoz">
                <option value="">Seleccionar</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </label>

            <label>
              Numero de parejas sexuales &gt; 5
              <select name="numeroParejas">
                <option value="">Seleccionar</option>
                <option value="gt5">Si</option>
                <option value="lte5">No</option>
              </select>
            </label>

            <label>
              Sexo no protegido frecuente
              <select name="sexoNoProtegido">
                <option value="">Seleccionar</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </label>

            <label>
              Antecedentes de ITS
              <select name="its">
                <option value="">Seleccionar</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </label>

            <label>
              Tabaquismo actual o previo
              <select name="tabaquismo">
                <option value="">Seleccionar</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </label>

            <label>
              Uso de anticonceptivos orales &gt; 5 annos
              <select name="acoProlongado">
                <option value="">Seleccionar</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </label>
          </section>

          <section className={styles.section}>
            <h2>Factores clinicos y biologicos</h2>
            <label>
              Numero de partos &gt; 3
              <select name="partos">
                <option value="">Seleccionar</option>
                <option value="gt3">Si</option>
                <option value="lte3">No</option>
              </select>
            </label>

            <label>
              Estado PVH 16/18
              <select name="pvh1618">
                <option value="">Seleccionar</option>
                <option value="positivo">Positivo</option>
                <option value="negativo">Negativo</option>
              </select>
            </label>

            <label>
              Exceso de adiposidad
              <select name="adiposidad">
                <option value="">Seleccionar</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </label>
          </section>

          <div className={styles.actions}>
            <button type="submit">Calcular riesgo</button>
            <Link href="/">Volver al overview</Link>
          </div>
        </form>

        {score !== null ? (
          <p className={styles.result}>Tienes {score} puntos.</p>
        ) : null}
      </main>
    </div>
  );
}
