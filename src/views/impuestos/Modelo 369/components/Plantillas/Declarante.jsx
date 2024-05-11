import React from 'react'
import styles from './Declarante.module.css'

const Identificacion = () => {
  return (
    <div className={styles.declarante_container}>
        <h2>Identificación</h2>
        <div className={styles.sub}>
          <div className={styles.campos}>
          <div className={styles.sub}>
              <label htmlFor="nif">NIF</label>
              <input type="text" name='nif' required/>
              <p>Este campo es obligatorio</p>
          </div>
          <div className={styles.sub} style={{flex: 1}}>
              <label htmlFor="">Apellidos y nombres o razón social</label>
              <input type="text" name='name' required/>
              <p>Este campo es obligatorio</p>
          </div>
          </div>
          <div className={styles.campos}>
            <div className={styles.sub}>
              <label htmlFor="">Calle/Plaza/Avda.</label>
              <input type="text" name='name' required style={{width: "500px"}}/>
            </div>
            <div className={styles.sub}>
              <label htmlFor="nif">Número</label>
              <input className={styles.small} type="text" name='nif' required/>
            </div>
            <div className={styles.sub}>
              <label htmlFor="nif">Esc</label>
              <input className={styles.small} type="text" name='nif' required/>
            </div>
            <div className={styles.sub}>
              <label htmlFor="nif">Piso</label>
              <input className={styles.small} type="text" name='nif' required/>
            </div>
            <div className={styles.sub}>
              <label htmlFor="nif">Prta</label>
              <input className={styles.small} type="text" name='nif' required/>
            </div>
          </div>
          <div className={styles.campos}>
            <div className={styles.sub}>
              <label htmlFor="nif">Código Postal</label>
              <input className={styles.small} type="text" name='nif' required/>
            </div>
            <div className={styles.sub}  style={{flex:1}}>
              <label htmlFor="nif">Municipal</label>
              <input type="text" name='nif' required/>
            </div>
            <div className={styles.sub}  style={{flex:1}}>
              <label htmlFor="nif">Provincia</label>
              <input type="text" name='nif' required/>
            </div>
          </div>
        </div>
        <p>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Identificacion