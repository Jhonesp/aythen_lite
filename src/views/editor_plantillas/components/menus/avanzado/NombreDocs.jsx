import React from 'react'
import styles from './NombreDocs.module.css'

const NombreDocs = () => {
  return (
    <div className={styles.nombredocs_container}>
        <h3>Personalizar nombres de los documentos</h3>
        <p>Personaliza el nombre de los documentos. Este cambiará en el PDF y en la barra lateral.</p>
        <div className={styles.checks}>
            <div className={styles.check}>
                <input type="checkbox" name="factura" id="" />
                <label htmlFor="factura">Factura</label>
            </div>
            <div className={styles.check}>
                <input type="checkbox" name="tventa" id="" />
                <label htmlFor="factura">Ticket de venta</label>
            </div>
            <div className={styles.check}>
                <input type="checkbox" name="ventaRec" id="" />
                <label htmlFor="factura">Venta rectificativa</label>
            </div>
            <div className={styles.check}>
                <input type="checkbox" name="proforma" id="" />
                <label htmlFor="factura">Proforma</label>
            </div>
            <div className={styles.check}>
                <input type="checkbox" name="presupuesto" id="" />
                <label htmlFor="factura">Presupuesto</label>
            </div>
            <div className={styles.check}>
                <input type="checkbox" name="pedidoVenta" id="" />
                <label htmlFor="factura">Pedido de venta</label>
            </div>
            <div className={styles.check}>
                <input type="checkbox" name="pedidoCompra" id="" />
                <label htmlFor="factura">Pedido de compra</label>
            </div>
            <div className={styles.check}>
                <input type="checkbox" name="albaran" id="" />
                <label htmlFor="factura">Albarán</label>
            </div>
        </div>
    </div>
  )
}

export default NombreDocs