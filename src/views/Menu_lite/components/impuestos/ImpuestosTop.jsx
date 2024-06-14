import React from 'react'
import styles from './ImpuestosTop.module.css'
import ImpuestoTopCampo from './ImpuestoTopCampo'

const ImpuestosTop = () => {
  return (
    <div>
        <div className={styles.top}>
                <div className={styles.seccion}>
                    <div className={styles.insig}>303</div>
                    <h4>303 Trimestral</h4>
                </div>
                <div className={styles.seccion}>
                    <select name="" id="">
                        <option value="">2024</option>
                    </select>
                </div>
            </div>
            <div className={styles.table_top}>
                <p>Periodo</p>
                <p>IVA soportado</p>
                <p>IVA repercutido</p>
                <p>Resultado IVA</p>
                <p>Estado</p>
                <p style={{flex:"0.5"}}></p>
            </div>
            <ImpuestoTopCampo />
            <ImpuestoTopCampo />
    </div>
  )
}

export default ImpuestosTop