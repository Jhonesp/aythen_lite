import React from 'react'
import styles from './PresupuestoInfo.module.css'

const PresupuestoInfo = () => {
  return (
    <div className={styles.info_container}>
        <div className={styles.campo}>
            <label htmlFor="contacto">Contacto</label>
            <select name="contacto" id="">Seleccionar contacto</select>
        </div>
        <div className={styles.campo}>
            <label htmlFor="numero">Número de documento</label>
            <select name="numero" id="">Seleccionar contacto</select>
        </div>
        <div className={styles.campo}>
            <label htmlFor="fecha">Fecha</label>
            <select name="fecha" id="">Seleccionar contacto</select>
        </div>
        <div className={styles.campo}>
            <label htmlFor="vencimiento">Vencimiento</label>
            <select name="vencimiento" id="">Seleccionar contacto</select>
        </div>
    </div>
  )
}

export default PresupuestoInfo