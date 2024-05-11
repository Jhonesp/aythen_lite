import React from 'react'
import styles from './Liquidacion.module.css'
import Subcampo from './Subcampo'

const Declaracion = () => {
  return (
    <div className={styles.liquidacion_container}>
        <h2>Resúmen declaración</h2>
        <div className={styles.categorias}>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Número total de operadores intracomunitarios</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"01"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Importe de las operaciones intracomunitarias</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"02"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Número total de operadores intercomunitarios con rectificaciones</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"03"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Importe de las rectificaciones</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"04"}/>
            </div>
          </div>
          </div>
        </div>
        <p id={styles.end}>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Declaracion