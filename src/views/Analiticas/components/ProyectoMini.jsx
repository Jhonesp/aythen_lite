import React from 'react'
import styles from './ProyectoMini.module.css'
import { Icon } from '@iconify/react';

const ProyectoMini = () => {
  return (
    <div className={styles.container}>
        <div className={styles.miniatura}>
            <Icon icon="mingcute:brackets-line" />
        </div>
        <div className={styles.descripcion}>
            <h5>Proyecto</h5>
            <p>Proyecto en blanco</p>
            <div style={{display:"flex", flexDirection:"row"}}>
                <Icon icon="ant-design:reload-time-outline" />
                <p>Hace 2 horas</p>
            </div>
        </div>
    </div>
  )
}

export default ProyectoMini