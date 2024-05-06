import React from 'react'
import styles from './Declarante.module.css'

const Declarante = () => {
  return (
    <div className={styles.declarante_container}>
        <h2>1 - Declarante</h2>
        <div className={styles.campos}>
        <div className={styles.sub}>
            <label htmlFor="nif">NIF</label>
            <input type="text" name='nif' required/>
            <p>Este campo es obligatorio</p>
        </div>
        <div className={styles.sub}>
            <label htmlFor="">Apellidos y nombres o razón social</label>
            <input type="text" name='name' required/>
            <p>Este campo es obligatorio</p>
        </div>
        </div>
        <p>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Declarante