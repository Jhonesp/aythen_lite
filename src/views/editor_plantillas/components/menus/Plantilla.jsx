import React from 'react'
import styles from './Plantilla.module.css'

const Plantilla = () => {
  return (
    <div className={styles.plantilla_container}>
        <h3>Plantilla</h3>
        <p>Selecciona una plantilla entre más de 50 disponibles.</p>
        <div className={styles.miniaturas_container}>
            <div className={styles.miniatura}>

            </div>
            <div className={styles.miniatura}>

            </div>
            <div className={styles.miniatura}>

            </div>
        </div>
    </div>
  )
}

export default Plantilla