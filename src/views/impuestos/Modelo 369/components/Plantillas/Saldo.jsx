import React from 'react'
import styles from './Saldo.module.css'

const Saldo = () => {
  return (
    <div className={styles.saldo_container}>
        <h4>Saldo a ingresar en España</h4>
        <div className={styles.campo}>
            <label htmlFor="saldo">Saldo a ingresar en España</label>
            <input type="text" name='saldo' placeholder='0,00'/>
        </div>
        <p>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Saldo