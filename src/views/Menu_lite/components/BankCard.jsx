import React from 'react'
import styles from './BankCard.module.css'

const BankCard = ({titulo, nombre}) => {
  return (
    <div className={styles.container}>
        <h4>{titulo}</h4>
        <div className={styles.desc}>
        <p>Nombre de la cuenta:</p>
        <p>{nombre}</p>
        </div>
    </div>
  )
}

export default BankCard