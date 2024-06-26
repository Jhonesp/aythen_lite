import React from 'react'
import styles from './TipoCuenta.module.css'
import { Icon } from '@iconify/react';

const TipoCuenta = ({icono, titulo, desc, link, arg}) => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.icono}>
            {icono}
            </div>
            <div className={styles.desc}>
                <h5>{titulo}</h5>
                <p>{desc}</p>
            </div>
        </div>
        <Icon icon="ic:round-chevron-right" onClick={()=>{link(arg)}}/>
    </div>
  )
}

export default TipoCuenta