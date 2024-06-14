import React from 'react'
import styles from './ImpuestoTopCampo.module.css'

const ImpuestoTopCampo = () => {
  return (
    <div className={styles.container}>
        <p>1 Semestre</p>
        <p>0</p>
        <p>0</p>
        <p>0</p>
        <p id={styles.acept}>Aceptado</p>
        <p id={styles.ver}>Ver</p>
    </div>
  )
}

export default ImpuestoTopCampo