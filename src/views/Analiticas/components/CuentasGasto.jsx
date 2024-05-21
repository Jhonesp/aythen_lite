import React from 'react'
import styles from './CuentasGasto.module.css'

const CuentasGasto = () => {
  return (
    <div className={styles.cuentas}>
        <div className={styles.seccion}>
            <div className={styles.distancia}>
                <h6>Gastos excepcionales</h6>
                <p>0,00€  - 0,00€ (0%)</p>
            </div>
            <i></i>
        </div>
        <div className={styles.seccion}>
            <div className={styles.distancia}>
                <h6>Otras pérdidas en gestión corriente</h6>
                <p>0,00€  - 0,00€ (0%)</p>
            </div>
            <i></i>
        </div>
        <div className={styles.seccion}>
            <div className={styles.distancia}>
                <h6>Seguridad Social a cargo de la empresa</h6>
                <p>0,00€  - 0,00€ (0%)</p>
            </div>
            <i></i>
        </div>
        <div className={styles.seccion}>
            <div className={styles.distancia}>
                <h6>Indemnizaciones</h6>
                <p>0,00€  - 0,00€ (0%)</p>
            </div>
            <i></i>
        </div>
        <div className={styles.seccion}>
            <div className={styles.distancia}>
                <h6>Sueldos y salarios</h6>
                <p>0,00€  - 0,00€ (0%)</p>
            </div>
            <i></i>
        </div>
        <div className={styles.seccion}>
            <div className={styles.distancia}>
                <h6>Otros servicios</h6>
                <p>0,00€  - 0,00€ (0%)</p>
            </div>
            <i></i>
        </div>
        <div className={styles.seccion}>
            <div className={styles.distancia}>
                <h6>Suministros</h6>
                <p>0,00€  - 0,00€ (0%)</p>
            </div>
            <i></i>
        </div>
        <div className={styles.seccion}>
            <div className={styles.distancia}>
                <h6>Publicidad, propaganda y relaciones públicas</h6>
                <p>0,00€  - 0,00€ (0%)</p>
            </div>
            <i></i>
        </div>
        <div className={styles.seccion}>
            <div className={styles.distancia}>
                <h6>Servicios bancarios y similares</h6>
                <p>0,00€  - 0,00€ (0%)</p>
            </div>
            <i></i>
        </div>
    </div>
  )
}

export default CuentasGasto