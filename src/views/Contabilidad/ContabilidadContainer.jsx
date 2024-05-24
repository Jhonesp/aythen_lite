import React from 'react'
import styles from './ContabilidadContainer.module.css'
import Header from './components/Header'
import { Icon } from '@iconify/react';
import LibroCuentas from './LibroCuentas';

const ContabilidadContainer = () => {
  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.topbar}>
            <div className={styles.mostrar}>
                <p>Mostrar todas</p>
            </div>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <div className={styles.search}>
                    <Icon icon="ion:search-outline" />
                    <input type="text" />
                </div>
                <div className={styles.fecha}>
                    <Icon icon="mdi:calendar" />
                    <select name="" id="">
                        <option value="">31/12/2023 - 30/12/2024</option>
                    </select>
                </div>
                <div className={styles.download}>
                    <Icon icon="icons8:download-2" />
                </div>
            </div>
        </div>
        <div className={styles.libro}>
            <LibroCuentas />
        </div>
    </div>
  )
}

export default ContabilidadContainer