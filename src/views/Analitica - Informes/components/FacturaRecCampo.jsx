import React from 'react'
import styles from './FacturaRecCampo.module.css'

const FacturaRecCampo = () => {
  return (
    <div className={styles.container}>
        <div className={styles.campo} style={{justifyContent:"center"}}>
        1
        </div>
        <div className={styles.campo}>
        -
        </div>
        <div className={styles.campo}>
        -
        </div>
        <div className={styles.campo}>
        2024
        </div>
        <div className={styles.campo}>
        2T
        </div>
        <div className={styles.campo} >
        -
        </div>
        <div className={styles.campo}>
        -
        </div>
        <div className={styles.campo}>
        -
        </div>
        <div className={styles.campo}>
        11/04/2024
        </div>
        <div className={styles.campo}>
        11/04/2024
        </div>
        <div className={styles.campo}>
        11/04/2024
        </div>
    </div>
  )
}

export default FacturaRecCampo