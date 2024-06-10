import React from 'react'
import styles from './Compras.module.css'

const Compras = () => {
  return (
    <div className={styles.container}>
        <h4>Compras</h4>
        <p>Establece el coste medio para informes y el precio de compra para documentos de compra.</p>
        <div className={styles.campos}>
            <div className={styles.campo}>
                <label htmlFor="">Coste medio</label>
                <select name="" id="">
                    <option value="">0</option>
                </select>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Proveedor por defecto</label>
                <select name="" id="">
                    <option value="">Busca y selecciona proveedores</option>
                </select>
            </div>
        </div>
        <h4 style={{margin:"10px 0"}}>PRECIO COMPRA</h4>
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
                    <option value="">IVA 21%</option>
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

export default Compras