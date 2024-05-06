import React from 'react'
import styles from './Metricas.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Metricas = () => {
  return (
    <div className={styles.metricas_container}>
        <div className={styles.metricas_header}>
        <h2>Tus métricas</h2>
        <div className={styles.header_end}>
            <h2>Ir a boards</h2>
            <MoreVertIcon />
        </div>        
        </div>
        <div className={styles.metricas_body}>
            <div className={styles.body_group}>
            <h4>Ventas</h4>
            <p>Últimos 12 meses</p>
            <h3>0,00€</h3>
            </div>
            <div className={styles.body_group} id={styles.right_group}>
            <h4>Compras</h4>
            <p>Últimos 12 meses</p>
            <h3>0,00€</h3>
            </div>
        </div>
    </div>
  )
}

export default Metricas