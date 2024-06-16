import React from 'react'
import styles from './Impuestos.module.css'
import { Icon } from '@iconify/react';
import ImpuestosTop from './ImpuestosTop';
import ResumenImpuestos from './ResumenImpuestos';
import ProximosImpuestos from './ProximosImpuestos';

const Impuestos = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.small_boton}>
            <Icon icon="bi:book" />
            </div>
            <div className={styles.boton}>
                Calendario fiscal
            </div>
            <div className={styles.small_boton} style={{fontSize:"14px", fontWeight:"700"}}>
                + Configurar modelos
            </div>
        </div>

        <div className={styles.contenido}>
            <ImpuestosTop />
            <ResumenImpuestos />
            <ProximosImpuestos />
        </div>
    </div>
  )
}

export default Impuestos