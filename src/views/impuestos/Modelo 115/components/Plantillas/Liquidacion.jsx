import React from 'react'
import styles from './Liquidacion.module.css'
import Subcampo from './Subcampo'

const Liquidacion = () => {
  return (
    <div className={styles.liquidacion_container}>
        <h2>3 - Liquidacion</h2>
        <div className={styles.categorias}>
          <div className={styles.top}>
            <p>Retenciones e ingresos a cuenta</p>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>N° de perceptores</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"01"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Base de las retenciones e ingresos a cuenta</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"02"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Retenciones e ingresos a cuenta</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"03"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>A deducir (exclusivamente en caso de declaración complementaria):
Resultado a ingresar de la anterior o anteriores declaraciones del mismo concepto, ejercicio y período</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"04"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Resultado a ingresar ( [3] - [4] )</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"05"}/>
            </div>
          </div>       
        </div>
        <p id={styles.end}>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Liquidacion