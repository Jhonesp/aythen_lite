import React from 'react'
import styles from './Liquidacion.module.css'
import Subcampo from './Subcampo'

const Liquidacion = () => {
  return (
    <div className={styles.liquidacion_container}>
        <h2>Resúmen de los datos incluidos en la declaración</h2>
        <div className={styles.categorias}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Número total de percepciones relacionadas (1)</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"01"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Importe total de las percepciones relacionadas</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"02"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Importe total de las retenciones e ingresos a cuenta relacionados</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"03"}/>
            </div>
          </div>
        </div>
        <p className={styles.end}>(1)  Consigne el número total de los apuntes o registros de percepción  incluidos en las hojas interiores de esta declaración o en el soporte.  En caso de que una misma persona o entidad figure más de una vez, en la  misma o en diferentes claves, se computarán tantas percepciones como  veces aparezca relacionada.</p>
        <p className={styles.end}>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Liquidacion