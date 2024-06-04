import React from 'react'
import styles from './FacturasEmitidaBoard.module.css'
import FacturaCampo from './FacturaCampo'
import { Icon } from '@iconify/react';

const FacturasBoard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.seccion} style={{textAlign:"center"}}>
                Num 
            </div>
            <div className={styles.seccion}>
                Ejercicio 
            </div>
            <div className={styles.seccion}>
                Periodo 
            </div>
            <div className={styles.seccion}>
            Código 
            </div>
            <div className={styles.seccion}>
            Tipo 
            </div>
            <div className={styles.seccion} style={{flex:2}}>
            Grupo o Epígrafe del IAE 
            </div>
            <div className={styles.seccion}>
            Fecha de expedición 
            </div>
            <div className={styles.seccion}>
            Fecha operación 
            </div>
            <div className={styles.seccion}>
            Tipo 
            </div>
            <div className={styles.seccion}>
            Serie 
            </div>
            <div className={styles.seccion}>
            Número 
            </div>
            <div className={styles.seccion}>
            Cuenta 
            </div>
            <div className={styles.seccion}>
            Contacto 
            </div>
        </div>
        <FacturaCampo />
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

export default FacturasBoard