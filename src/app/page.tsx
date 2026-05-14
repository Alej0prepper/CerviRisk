import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <div className={styles.headerLine}>
            <p className={styles.tag}>CerviRisk</p>
            <p className={styles.context}>Estudio de estratificacion clinica</p>
          </div>
          <h1>Evaluacion digital de riesgo cervicouterino con enfoque clinico</h1>
          <p className={styles.lead}>
            Sistema de apoyo para estimar riesgo de lesiones intraepiteliales
            escamosas de alto grado mediante integracion de variables
            epidemiologicas, conductuales, virologicas y antropometricas.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/test">
              Iniciar evaluacion
            </Link>
            <a className={styles.ghostButton} href="#metodologia">
              Ver metodologia
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
            <p className={styles.metricLabel}>Categorias de riesgo</p>
          </article>
          <article>
            <p className={styles.metricValue}>1</p>
            <p className={styles.metricLabel}>Puntaje acumulativo</p>
          </article>
        </section>

        <section id="metodologia" className={styles.flow}>
          <h2>Ruta metodologica de evaluacion</h2>
          <ol>
            <li>Registro estructurado de datos clinicos y antecedentes.</li>
            <li>Asignacion de pesos segun nivel de asociacion reportado.</li>
            <li>Calculo automatizado de puntaje acumulativo de riesgo.</li>
            <li>Clasificacion final y orientacion para priorizacion clinica.</li>
          </ol>
        </section>

        <section className={styles.grid}>
          <article className={styles.card}>
            <h2>Objetivo</h2>
            <p>
              Fortalecer el tamizaje cervicouterino con una herramienta
              reproducible para identificar perfiles de mayor probabilidad de
              lesion de alto grado.
            </p>
          </article>
          <article className={styles.card}>
            <h2>Uso previsto</h2>
            <p>
              Asistencia a personal de salud para organizar decisiones de
              seguimiento, derivacion y vigilancia en contextos clinicos
              diversos.
            </p>
          </article>
          <article className={styles.card}>
            <h2>Base del modelo</h2>
            <p>
              Score heuristico sustentado en literatura epidemiologica y
              resultados estadisticos preliminares de la cohorte en estudio.
            </p>
          </article>
          <article className={styles.card}>
            <h2>Aplicabilidad</h2>
            <p>
              Diseno portable para instituciones con recursos heterogeneos,
              incluyendo escenarios de primer nivel de atencion.
            </p>
          </article>
        </section>

        <section className={styles.block}>
          <h2>Variables incluidas en el puntaje actual</h2>
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
          <h2>Consideraciones de validacion</h2>
          <p>
            Los pesos asignados son dinamicos y sujetos a recalibracion tras
            nuevas rondas de validacion clinica, analisis de desempeno y
            evaluacion de utilidad operacional.
          </p>
        </section>
      </main>
    </div>
  );
}
