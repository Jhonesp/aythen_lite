import React from 'react'
import styles from './EquipoVentaBoard.module.css'
import { Icon } from '@iconify/react';

const EquipoVentaBoard = ({campos}) => {
  return (
    <div className={styles.container}>
        <div className={styles.botones}>
            <select name="" id="">
                <option value="">Todos los embudos</option>
            </select>
            <select name="" id="">
                <option value="">Todos los equipos de ventas</option>
            </select>
        </div>
        <h5>Todos los equipos de ventas</h5>
        <div className={styles.board}>
            <div className={styles.top}>
                <p style={{textAlign:"left"}}>Comercial</p>
                <p>Oportunidades perdidas</p>
                <p>Oportunidades ganadas</p>
                <p>Cantidad (€)</p>
            </div>
            {campos}
        </div>
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

export default EquipoVentaBoard