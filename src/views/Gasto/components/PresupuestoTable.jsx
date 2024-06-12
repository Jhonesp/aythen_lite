import React from 'react'
import styles from './PresupuestoTable.module.css'
import Column from './Column';

const PresupuestoTable = () => {
    return (
        <div className={styles.table_container}>
            <div className={styles.table_header}>
                <p>Concepto</p>
                <p>Descripción</p>
                <p>Cantidad</p>
                <p>Precio</p>
                <p>Impuestos</p>
                <p>Total</p>
            </div>
            <div className={styles.table_rows}>
                <Column />
                <Column />
            </div>
        </div>
    )
}

export default PresupuestoTable