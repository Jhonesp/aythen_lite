import React from 'react'
import styles from './FacturasRecibidas.module.css'
import FacturaCampo from './FacturaCampo'
import { Icon } from '@iconify/react';
import FacturaRecCampo from './FacturaRecCampo';

const FacturasRecibidas = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.seccion} style={{textAlign:"center"}}>
                Num 
            </div>
            <div className={styles.seccion}>
            Número de recepción 
            </div>
            <div className={styles.seccion}>
            Número de recepción final 
            </div>
            <div className={styles.seccion}>
            Ejercicio 
            </div>
            <div className={styles.seccion}>
            Período 
            </div>
            <div className={styles.seccion} >
            Código
            </div>
            <div className={styles.seccion}>
            Tipo
            </div>
            <div className={styles.seccion}>
            Grupo o Epígrafe del IAE
            </div>
            <div className={styles.seccion}>
            Fecha emisión
            </div>
            <div className={styles.seccion}>
            Fecha operación
            </div>
            <div className={styles.seccion}>
            Fecha contable 
            </div>
        </div>
        <FacturaRecCampo />
        <div className={styles.bottom}>
            <div>
                <p>Showing 1 to 1 of entries</p>
            </div>
            <div style={{display:"flex", flexDirection:"row", gap:"150px"}}>
                <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                Show <select name="" id=""> 
                    <option value="">10</option>
                </select>
                Entries
                </div>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <Icon icon="lucide:chevron-left"  style={{fontSize:"20px",cursor:"pointer"}}/>
                1
                <Icon icon="lucide:chevron-right" style={{fontSize:"20px",cursor:"pointer"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FacturasRecibidas