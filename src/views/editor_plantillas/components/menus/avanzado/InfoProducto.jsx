import React from 'react'
import styles from './InfoProducto.module.css'

const InfoProducto = () => {
  return (
    <div className={styles.infoproducto_container}>
        <h3>Información del producto</h3>
        <p>Selecciona los datos que se mostrarán de tus productos</p>
        <div className={styles.checks}>
            <div className={styles.check}>
                <input type="checkbox" name="descripcion" id="" />
                <label htmlFor="factura">Mostrar descripción</label>
            </div>
            <div className={styles.check}>
                <input type="checkbox" name="SKU" id="" />
                <label htmlFor="factura">Mostrar código SKU / Lote</label>
            </div>
            <div className={styles.check}>
                <input type="checkbox" name="unidad" id="" />
                <label htmlFor="factura">Mostrar tipo de unidad</label>
            </div>
            <div className={styles.check}>
                <input type="checkbox" name="impuestos" id="" />
                <label htmlFor="factura">Desglosar impuestos</label>
            </div>
            <div className={styles.check}>
                <input type="checkbox" name="producto" id="" />
                <label htmlFor="factura">Mostrar foto de producto</label>
            </div>
        </div>
    </div>
  )
}

export default InfoProducto