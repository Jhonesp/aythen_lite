import React from 'react'
import styles from './Declarante.module.css'

const Declarante = () => {
  return (
    <div className={styles.declarante_container}>
        <h2>Declarante</h2>
        <div className={styles.campos}>
        <div className={styles.sub}>
            <label htmlFor="nif">N.° de identificación fisical (N.I.F)</label>
            <input type="text" name='nif' required/>
            <p>Este campo es obligatorio</p>
        </div>
        <div className={styles.sub}>
            <label htmlFor="">Teléfono de contacto</label>
            <input type="text" name='tlf' required/>
            <p>Este campo es obligatorio</p>
        </div>
        </div>
        <div className={styles.sub}>
            <label htmlFor="">Apellidos y nombre (por este orden) o razón social</label>
            <input type="text" name='tlf' required/>
            <p>Este campo es obligatorio</p>
        </div>
        <div className={styles.sub}>
            <label htmlFor="">Persona de contacto</label>
            <input type="text" name='tlf' required/>
            <p>Este campo es obligatorio</p>
        </div>
        <div className={styles.sub}>
            <label htmlFor="">Correo electrónico persona de contacto</label>
            <input type="text" name='tlf' required/>
            <p>Este campo es obligatorio</p>
        </div>
        <p>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Declarante