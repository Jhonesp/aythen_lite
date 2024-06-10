import React from 'react'
import styles from './Contabilidad.module.css'

const Contabilidad = () => {
  return (
    <div className={styles.container}>
        <h4>Contabilidad</h4>
        <p>Define la cuenta contable predeterminada de ventas y compras para este producto.</p>
        <div className={styles.campo}>
            <label htmlFor="">Cuenta de ventas</label>
            <select name="" id="">
                <option value="">Selecciona una cuenta contable</option>
            </select>
        </div>
        <div className={styles.campo}>
            <label htmlFor="">Cuenta de compras</label>
            <select name="" id="">
                <option value="">Selecciona una cuenta contable</option>
            </select>
        </div>
    </div>
  )
}

export default Contabilidad