import React from 'react'
import styles from './ActividadCampo.module.css'

const ActividadCampo = ({fecha, color, evento1, evento2, evento3}) => {
  return (
    <div className={styles.campo}>
        <div className={styles.sub} style={{paddingLeft: "20px"}}>
        {fecha}
        </div>
        <div className={`${styles.sub}`}>
            <div className={styles.color} style={{backgroundColor:color}}></div>
            Usuario
        </div>
        <div className={styles.sub}>
        <div>
        {evento1}
        </div>
        <div>
        {evento2}
        </div>        
        <div id={styles.evento}>
            {evento3}
        </div>
        </div>
    </div>
  )
}

export default ActividadCampo