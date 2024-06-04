import React from 'react'
import styles from './FacturaCampo.module.css'

const FacturaCampo = () => {
  return (
    <div className={styles.container}>
        <div className={styles.campo} style={{flex:0.7}}>
        1
        </div>
        <div className={styles.campo}>
        0,00
        </div>
        <div className={styles.campo}>
        0,00
        </div>
        <div className={styles.campo}>
        0,00
        </div>
        <div className={styles.campo}>
        0,00
        </div>
        <div className={styles.campo} style={{flex:1.6}}>
        0,00
        </div>
        <div className={styles.campo}>
        11/04/2024
        </div>
        <div className={styles.campo}>
        11
        </div>
        <div className={styles.campo}>
        F1
        </div>
        <div className={styles.campo}>
        F24
        </div>
        <div className={styles.campo}>
        0001
        </div>
        <div className={styles.campo}>
        430000001
        </div>
        <div className={styles.campo}>
        contacto
        </div>
    </div>
  )
}

export default FacturaCampo