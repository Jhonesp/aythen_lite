import React from 'react'
import styles from './Ventas.module.css'

const Ventas = () => {
  return (
    <div className={styles.container}>
        <h4>Ventas</h4>
        <p>Indica el subtotal y el impuesto aplicable. El importe total se calculará de forma automática.</p>
        <h4 style={{margin:"10px 0"}}>TARIFA PRINCIPAL</h4>
        
        <div className={styles.campos}>
            <div className={styles.campo}>
                <label htmlFor="">Subtotal</label>
                <select name="" id="">
                    <option value="">0</option>
                </select>
            </div>
            <div className={styles.campo}>
            <label htmlFor="">Impuestos</label>
                <select name="" id="">
                    <option value="">0</option>
                </select>
            </div>
            <div className={styles.campo}>
            <label htmlFor="">Total</label>
                <select name="" id="">
                    <option value="">0</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Ventas