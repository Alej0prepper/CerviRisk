import Link from "next/link";
import styles from "./test.module.css";

export default function TestPage() {
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

        <form className={styles.form}>
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
              Inicio precoz de relaciones sexuales
              <select name="inicioPrecoz">
                <option value="">Seleccionar</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </label>

            <label>
              Numero de parejas sexuales
              <select name="numeroParejas">
                <option value="">Seleccionar</option>
                <option value="1">1</option>
                <option value="2-3">2-3</option>
                <option value=">=4">4 o mas</option>
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
              Uso prolongado de anticonceptivos orales
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
              Paridad
              <select name="paridad">
                <option value="">Seleccionar</option>
                <option value="0">0</option>
                <option value="1-2">1-2</option>
                <option value=">=3">3 o mas</option>
              </select>
            </label>

            <label>
              Estado PVH 16/18
              <select name="pvh1618">
                <option value="">Seleccionar</option>
                <option value="positivo">Positivo</option>
                <option value="negativo">Negativo</option>
                <option value="desconocido">Desconocido</option>
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
      </main>
    </div>
  );
}
