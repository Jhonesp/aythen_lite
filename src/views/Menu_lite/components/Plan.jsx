import React from 'react'
import styles from './Plan.module.css'
import LockIcon from '@mui/icons-material/Lock';

const Plan = () => {
  return (
    <div className={styles.plan_container}>
        <div className={styles.plan_left}>
            <div className={styles.boton_period}>
            Periodo de prueba
            </div>
            <h2>
            Activa tu plan y obtén un 50% de descuento
            </h2>
            <p>
            Sabemos que conocernos lleva tiempo. Disfruta de un descuento especial y descubre todo nuestro potencial.
            </p>
            <div className={styles.botones}>
                <div className={styles.plan_boton}>
                <LockIcon />
                <h5>Facturación y gastos</h5>
                </div>
                <div className={styles.plan_boton}>
                <LockIcon />
                <h5>Contabilidad</h5>
                </div>
                <div className={styles.plan_boton}>
                <LockIcon />
                <h5>Bancos</h5>
                </div>
                <div className={styles.plan_boton}>
                <LockIcon />
                <h5>Inventario</h5>
                </div>
            </div>
            <button>Elige tu plan</button>
        </div>
        <div className={styles.plan_right}>
            <div className={styles.rectangle}>

            </div>
        </div>
    </div>
  )
}

export default Plan