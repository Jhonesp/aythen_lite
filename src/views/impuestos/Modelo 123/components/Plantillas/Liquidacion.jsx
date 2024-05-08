import React from 'react'
import styles from './Liquidacion.module.css'
import Subcampo from './Subcampo'

const Liquidacion = () => {
  return (
    <div className={styles.liquidacion_container}>
        <h2>3 - Liquidacion</h2>
        <div className={styles.categorias}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Número de rentas</p>
            <div className={styles.subcampos}>
              <Subcampo titulo={"Dividendos y otras rentas de participación"} numero={"01"}/>
              <Subcampo titulo={"Importe de las percepciones"} numero={"02"}/>
              <Subcampo titulo={"Importe de las retenciones"} numero={"03"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Base de retenciones e ingreso a cuenta</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"04"}/>
              <Subcampo numero={"05"}/>
              <Subcampo numero={"06"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Retenciones e ingresos a cuenta</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
              <Subcampo numero={"08"}/>
              <Subcampo numero={"09"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Periodificación</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"10"}/>
              <Subcampo numero={"11"}/>
            </div>
          </div>
          <div className={styles.top}>
            <p>I. Rendimientos del trabajo</p>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Suma de retenciones e ingresos a cuenta y regularización, en su caso ( [09] + [11] )</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"12"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>A deducir (exclusivamente en caso de declaración complementaria):
Resultados a ingresar de anteriores declaraciones por el mismo concepto, ejercicio y período</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"13"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Resultado a ingresar ( [12] - [13] )</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"14"}/>
            </div>
          </div>
        </div>
        <p id={styles.end}>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Liquidacion