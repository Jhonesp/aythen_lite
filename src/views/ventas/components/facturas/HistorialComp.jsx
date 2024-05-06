import React from 'react'
import styles from './HistorialComp.module.css'
import { Icon } from '@iconify/react';

const HistorialComp = () => {
  return (
    <div className={styles.historial_container}>
        <div className={styles.inicio}>
            <Icon icon="ic:baseline-plus" />
            <div className={styles.sub}>
                <h4>Creado</h4>
                <p>Usuario1</p>
            </div>
        </div>
        <div className={styles.sub}>
            <p>11/04/2024</p>
            <p>14:14</p>
        </div>
    </div>
  )
}

export default HistorialComp