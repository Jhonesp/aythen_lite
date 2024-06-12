import React from 'react'
import styles from './Column.module.css'
import { Icon } from '@iconify/react';

const Column = () => {
    return (
        <div className={styles.column}>
            <Icon icon="ph:dots-six-vertical"/>
            <div className={styles.row}>
                <p>Escribe el concepto o usa @ para buscar</p>
            </div>
            <div className={styles.row}>
                <p>Desc</p>
            </div>
            <div className={`${styles.row} ${styles.right}`}>
                <p>1</p>
            </div>
            <div className={`${styles.row} ${styles.right}`}>
                <p>1</p>
            </div>
            <div className={styles.row}>
                <div className={styles.impuesto}>
                    <p>IVA 21%</p>
                </div>
            </div>
            <div className={`${styles.row} ${styles.right}`}>
                <p>2</p>
            </div>
            <Icon icon="tabler:trash"/>
        </div>
    )
}

export default Column