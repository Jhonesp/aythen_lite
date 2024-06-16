import React from 'react'
import styles from './ResumenCampo.module.css'

const ResumenCampo = () => {
  return (
    <div className={styles.campo}>
        <p style={{textAlign:"left"}}>No hay datos disponibles</p>        
        <p>0</p>
        <p>0</p>
    </div>
  )
}

export default ResumenCampo