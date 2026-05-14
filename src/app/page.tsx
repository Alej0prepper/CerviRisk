import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.tag}>CerviRisk | Clinical Risk Engine</p>
          <h1>Motor digital de estratificacion de riesgo cervicouterino</h1>
          <p className={styles.lead}>
            Plataforma para transformar variables clinicas, conductuales,
            virales y antropometricas en un puntaje acumulativo y una categoria
            de riesgo util para decision clinica.
          </p>
          <div className={styles.badges}>
            <span>Triage digital</span>
            <span>Modelo adaptable</span>
            <span>Escenarios de bajos recursos</span>
          </div>
          <Link className={styles.testButton} href="/test">
            Hacer test
          </Link>
        </section>

        <section className={styles.flow}>
          <h2>Flujo de evaluacion</h2>
          <ol>
            <li>Ingreso de variables del paciente</li>
            <li>Suma ponderada automatizada</li>
            <li>Clasificacion de riesgo: bajo, intermedio, alto</li>
            <li>Soporte para decision y priorizacion clinica</li>
          </ol>
        </section>

        <section className={styles.grid}>
          <article className={styles.card}>
            <h2>Que es</h2>
            <p>
              Una herramienta automatizada orientada a detectar riesgo de
              lesiones intraepiteliales escamosas cervicouterinas, con foco en
              LIEAG.
            </p>
          </article>
          <article className={styles.card}>
            <h2>Como funciona</h2>
            <p>
              El usuario carga datos del paciente, el sistema suma puntos
              ponderados y entrega riesgo bajo, intermedio o alto.
            </p>
          </article>
          <article className={styles.card}>
            <h2>Enfoque actual</h2>
            <p>
              Score heuristico basado en evidencia epidemiologica y hallazgos
              estadisticos preliminares.
            </p>
          </article>
          <article className={styles.card}>
            <h2>Escalabilidad</h2>
            <p>
              Disenado para ajustarse a contextos clinicos diversos, incluyendo
              escenarios de bajos recursos.
            </p>
          </article>
        </section>

        <section className={styles.block}>
          <h2>Variables actualmente contempladas</h2>
          <ul className={styles.list}>
            <li>Edad</li>
            <li>Inicio precoz de relaciones sexuales</li>
            <li>Numero de parejas</li>
            <li>Sexo no protegido</li>
            <li>Antecedentes de ITS</li>
            <li>Tabaquismo</li>
            <li>Uso prolongado de anticonceptivos orales</li>
            <li>Paridad</li>
            <li>PVH 16/18</li>
            <li>Exceso de adiposidad</li>
          </ul>
        </section>

        <section className={styles.block}>
          <h2>Estado del modelo</h2>
          <p>
            Los pesos no son definitivos: pueden recalibrarse segun validacion
            clinica, analisis estadisticos adicionales, desempeno predictivo,
            disponibilidad de datos y contexto especifico de implementacion.
          </p>
        </section>
      </main>
    </div>
  );
}
