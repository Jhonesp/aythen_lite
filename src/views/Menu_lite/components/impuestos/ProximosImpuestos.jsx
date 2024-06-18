import React from 'react'
import styles from './ProximosImpuestos.module.css'
import { Icon } from '@iconify/react';
import ProximoImpuestoCampo from './ProximoImpuestoCampo';

const ProximosImpuestos = () => {
  return (
    <div className={styles.contenido}>
        <div className={styles.top}>
                <div className={styles.seccion}>
                    <h4>Próximos impuestos</h4>
                </div>
                <div className={styles.seccion}>
                    <div className={styles.small_boton}>
                    <Icon icon="pepicons-pencil:dots-y" />
                    </div>
                </div>
        </div>
        <div className={styles.categoria}>
                <div className={styles.table_top}>
                  <p>22 Abril</p>
                </div>
                <ProximoImpuestoCampo numero={"111"} link={'/Modelo111'}/>
                <ProximoImpuestoCampo numero={"115"} link={'/Modelo115'}/>
                <ProximoImpuestoCampo numero={"123"} link={'/Modelo123'}/>
                <ProximoImpuestoCampo numero={"130"} link={'/Modelo130'}/>
                <ProximoImpuestoCampo numero={"303"} link={'/Modelo303'}/>
                <ProximoImpuestoCampo numero={"349"} link={'/Modelo349'}/>
        </div>
    </div>
  )
}

export default ProximosImpuestos