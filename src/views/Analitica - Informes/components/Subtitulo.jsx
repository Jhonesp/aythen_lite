import React from 'react'
import styles from './Subtitulo.module.css'

const Subtitulo = ({titulo, monto}) => {
  return (
    <div className={styles.container}>
        <h3 id={styles.titulo}>{titulo}</h3>
        <h3 id={styles.monto}>{monto}</h3>
    </div>
  )
}

export default Subtitulo