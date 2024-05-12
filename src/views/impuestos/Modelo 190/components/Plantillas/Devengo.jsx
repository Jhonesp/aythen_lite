import React from 'react'
import styles from './Devengo.module.css'

const Devengo = () => {
  return (
    <div className={styles.devengo_container}>
        <h2>Ejercicio</h2>
        <div className={styles.campos}>
        <div className={styles.sub}>
            <label htmlFor="nif">Ejercicio</label>
            <input type="text" name='ejercicio' placeholder='2024' required/>
        </div>
        </div>
        <p>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Devengo