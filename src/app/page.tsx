import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <div className={styles.headerLine}>
            <p className={styles.tag}>CerviRisk</p>
            <p className={styles.context}>Estudio de estratificación clínica</p>
          </div>
          <h1>Evaluación digital de riesgo cervicouterino con enfoque clínico</h1>
          <p className={styles.lead}>
            Sistema de apoyo para estimar riesgo de lesiones intraepiteliales
            escamosas de alto grado mediante integración de variables
            epidemiológicas, conductuales, virológicas y antropométricas.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/test">
              Iniciar evaluación
            </Link>
            <a className={styles.ghostButton} href="#metodologia">
              Ver metodología
            </a>
          </div>
        </header>

        <section className={styles.metrics} aria-label="Resumen del modelo">
          <article>
            <p className={styles.metricValue}>10</p>
            <p className={styles.metricLabel}>Variables evaluadas</p>
          </article>
          <article>
            <p className={styles.metricValue}>3</p>
            <p className={styles.metricLabel}>Categorías de riesgo</p>
          </article>
          <article>
            <p className={styles.metricValue}>1</p>
            <p className={styles.metricLabel}>Puntaje acumulativo</p>
          </article>
        </section>

        <section id="metodologia" className={styles.flow}>
          <h2>Ruta metodológica de evaluación</h2>
          <ol>
            <li>Registro estructurado de datos clínicos y antecedentes.</li>
            <li>Asignación de pesos según nivel de asociación reportado.</li>
            <li>Cálculo automatizado de puntaje acumulativo de riesgo.</li>
            <li>Clasificación final y orientación para priorización clínica.</li>
          </ol>
        </section>

        <section className={styles.grid}>
          <article className={styles.card}>
            <h2>Objetivo</h2>
            <p>
              Fortalecer el tamizaje cervicouterino con una herramienta
              reproducible para identificar perfiles de mayor probabilidad de
              lesión de alto grado.
            </p>
          </article>
          <article className={styles.card}>
            <h2>Uso previsto</h2>
            <p>
              Asistencia a personal de salud para organizar decisiones de
              seguimiento, derivación y vigilancia en contextos clínicos
              diversos.
            </p>
          </article>
          <article className={styles.card}>
            <h2>Base del modelo</h2>
            <p>
              Score heurístico sustentado en literatura epidemiológica y
              resultados estadísticos preliminares de la cohorte en estudio.
            </p>
          </article>
          <article className={styles.card}>
            <h2>Aplicabilidad</h2>
            <p>
              Diseño portable para instituciones con recursos heterogéneos,
              incluyendo escenarios de primer nivel de atención.
            </p>
          </article>
        </section>

        <section className={styles.block}>
          <h2>Variables incluidas en el puntaje actual</h2>
          <ul className={styles.list}>
            <li>Edad</li>
            <li>Inicio precoz de relaciones sexuales</li>
            <li>Número de parejas</li>
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
          <h2>Consideraciones de validación</h2>
          <p>
            Los pesos asignados son dinámicos y sujetos a recalibración tras
            nuevas rondas de validación clínica, análisis de desempeño y
            evaluación de utilidad operacional.
          </p>
        </section>
      </main>
    </div>
  );
}
