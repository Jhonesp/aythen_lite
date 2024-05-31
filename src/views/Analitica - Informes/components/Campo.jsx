import React from 'react'
import styles from './Campo.module.css'

const Campo = ({titulo, color}) => {
  return (
    <div className={styles.campo}>
        <div className={styles.titulo}>
            <p>{titulo}</p>
        </div>
        <div className={styles.sub}>
            0,00
        </div>
        <div className={styles.sub}>
            0,00
        </div>
        <div className={styles.sub}>
            0,00
        </div>
        <div className={styles.sub}>
            0,00
        </div>
        <div className={styles.sub}>
            0,00
        </div>
        <div className={styles.sub}>
            0,00
        </div>
        <div className={styles.sub}>
            0,00
        </div>
        <div className={styles.sub}>
            0,00
        </div>
        <div className={styles.sub}>
            0,00
        </div>
        <div className={styles.sub}>
            0,00
        </div>
        <div className={styles.sub}>
            0,00
        </div>
        
    </div>
  )
}

export default Campo