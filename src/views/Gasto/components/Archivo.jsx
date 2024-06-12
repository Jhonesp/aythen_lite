import React from 'react'
import styles from './Archivo.module.css'
import { Icon } from '@iconify/react';

const Archivo = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <h4>Archivo</h4>
            <div className={styles.boton}>
                <Icon icon="pepicons-pencil:dots-x" />
            </div>
        </div>
        <div className={styles.drop}>
        <Icon icon="material-symbols:upload-file-outline" />
        <p>Selecciona o arrastra un documento</p>
        </div>
    </div>
  )
}

export default Archivo