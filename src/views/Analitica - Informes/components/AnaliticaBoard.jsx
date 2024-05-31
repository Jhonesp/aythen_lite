import React from 'react'
import styles from './AnaliticaBoard.module.css'
import { Icon } from '@iconify/react';

const AnaliticaBoard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.botones}>
            <div id={styles.botonLeft}><Icon icon="ic:outline-graphic-eq" /></div>
            <div id={styles.botonRight}><Icon icon="uil:graph-bar" /></div>
        </div>
        <div className={styles.graph}>
            <div className={styles.num}>
                <p>1,00</p>
                <div className={styles.linea}>
                    <i></i>
                </div>
            </div>
            <div className={styles.num}>
                <p>0,50</p>
                <div className={styles.linea}>
                    <i></i>
                </div>
            </div>
            <div className={styles.num}>
                <p>0,00</p>
                <div className={styles.linea}>
                    <i></i>
                </div>
            </div>
            <div className={styles.num}>
                <p>-0,50</p>
                <div className={styles.linea}>
                    <i></i>
                </div>
            </div>
            <div className={styles.num}>
                <p>-1,00</p>
                <div className={styles.linea}>
                    <i></i>
                </div>
            </div>
            <div className={styles.meses}>
                <p className={styles.mes}>Diciembre 23</p>
                <p className={styles.mes}>Enero 2024</p>
                <p className={styles.mes}>Febrero 2024</p>
                <p className={styles.mes}>Marzo 2024</p>
                <p className={styles.mes}>Abril 2024</p>
                <p className={styles.mes}>Mayo 2024</p>
                <p className={styles.mes}>Junio 2024</p>
            </div>
        </div>
    </div>
  )
}

export default AnaliticaBoard