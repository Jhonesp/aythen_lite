import React from 'react'
import styles from './TipoCuenta.module.css'
import { Icon } from '@iconify/react';

const TipoCuenta = ({icono, titulo, desc, link, arg, descripcion, borde, conexion}) => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            {!borde ? 
            <>
            <div className={styles.icono}>
            {icono}
            </div>
            </>:
            <>
            {icono}
            </>
            }
            <div className={styles.desc}>
              <h5>{titulo}</h5>
            {!descripcion && (
              <p>{desc}</p>
            )}
            </div>
        </div>
        {!conexion ?
         <Icon icon="ic:round-chevron-right" onClick={()=>{link(arg)}}/>
        :
        <div className={styles.left}>
        <div className={styles.sinconexion}>Sin conexión</div>
        <Icon icon="ic:round-chevron-right" onClick={()=>{link(arg)}}/>
        </div> 
        }
    </div>
  )
}

export default TipoCuenta