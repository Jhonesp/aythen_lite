import React from 'react'
import styles from './Contabilidad.module.css'

const Contabilidad = () => {
  return (
    <div className={`${styles.container} ${styles.slideIn}`}>
        <h4>Impuestos</h4>
        <div className={styles.fila}>
            <div className={styles.campo}>
                <label htmlFor="">Impuestos de venta</label>
                <input type="text" placeholder='Impuestos por defecto'/>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Impuestos de compra</label>
                <input type="text" placeholder='Impuestos por defecto'/>
            </div>
        </div>
        <h4>ID número</h4>
        <div className={styles.fila}>
            <div className={styles.campo}>
                <label htmlFor="">Cuenta cliente/deudor</label>
                <select name="" id="">
                    <option value="">Seleccionar cuenta</option>
                </select>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Cuenta proveedor/acreedor</label>
                <select name="" id="">
                    <option value="">Seleccionar cuenta</option>
                </select>
            </div>
        </div>
        <h4>Otros</h4>
        <div className={styles.fila}>
            <div className={styles.campo}>
                <label htmlFor="">Operación</label>
                <select name="" id="">
                    <option value="">General</option>
                </select>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Acumula en modelo 347</label>
                <select name="" id="">
                    <option value="">Si</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Contabilidad