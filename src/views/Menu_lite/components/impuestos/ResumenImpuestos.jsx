import React from 'react'
import styles from './ResumenImpuestos.module.css'
import ResumenCampo from './ResumenCampo'
import CustomSelect from '../../../../components/CustomSelect'

const ResumenImpuestos = () => {
  return (
    <div className={styles.contenido}>
        <div className={styles.top}>
                <div className={styles.seccion}>
                    <h4>Resumen de impuestos</h4>
                </div>
                <div className={styles.seccion}>
                    <CustomSelect options={[{label:'Año actual', value: 'Año actual'}]} />
                </div>
        </div>
            <div className={styles.categoria}>
                <div className={styles.table_top}>
                    <p style={{flex:"2"}}>Ventas</p>
                    <p>Subtotal</p>
                    <p>Importe</p>
                </div>
                <ResumenCampo />
            </div>
            <div className={styles.categoria}>
                <div className={styles.table_top}>
                    <p style={{flex:"2"}}>Compras</p>
                    <p>Subtotal</p>
                    <p>Importe</p>
                </div>
                <ResumenCampo />
            </div>
    </div>
  )
}

export default ResumenImpuestos