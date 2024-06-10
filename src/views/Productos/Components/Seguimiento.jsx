import React from 'react'
import styles from './Seguimiento.module.css'

const Seguimiento = () => {
  return (
    <div className={styles.container}>
        <h4>Seguimiento</h4>
        <p>Introduce la información que identifique el producto</p>
        <div className={styles.campos}>
            <div className={styles.campo}>
                <label htmlFor="">SKU</label>
                <input type="text" name="" id="" />
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Código de barras</label>
                <input type="text" name="" id="" />
            </div>
        </div>
        <div className={styles.campos}>
            <div className={styles.campo}>
                <label htmlFor="">Código de fabricación</label>
                <input type="text" name="" id="" />
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Peso</label>
                <input type="text" name="" id="" />
            </div>
        </div>
    </div>
  )
}

export default Seguimiento