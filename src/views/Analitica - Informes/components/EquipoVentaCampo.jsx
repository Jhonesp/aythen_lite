import React from 'react'
import styles from './EquipoVentaCampo.module.css'

const EquipoVentaCampo = ({comercial, perdidas, ganadas, cantidad}) => {
  return (
    <div className={styles.campo}>
        <div className={styles.sub} style={{textAlign:"left"}}>
        {comercial}
        </div>
        <div className={styles.sub}>
        {perdidas}
        </div>
        <div className={styles.sub}>
        {ganadas}
        </div>
        <div className={styles.sub} style={{fontWeight:"800"}}>
        {cantidad}
        </div>
    </div>
  )
}

export default EquipoVentaCampo