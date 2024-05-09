import React from 'react'
import styles from './Declarante.module.css'

const Declarante = () => {
  return (
    <div className={styles.declarante_container}>
        <h2>1 - Identificación</h2>
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
        <div className={styles.categorias}>
          <div className={styles.division}>
            <p>Sujeto pasivo inscrito en el Registro de devolución mensual (art. 30 RIVA)</p>
          </div>
          <div className={styles.division}>
            <p>Sujeto pasivo que tributa exclusivamente en régimen simplificado</p>
          </div>
          <div className={styles.division}>
            <p>Autoliquidación conjunta</p>
          </div>
          <div className={styles.division}>
            <p>Sujeto pasivo acogido al régimen especial del criterio de Caja (art. 163 undecies LIVA)</p>
          </div>
          <div className={styles.division}>
            <p>Sujeto pasivo destinatario de operaciones acogidas al régimen especial del criterio de caja</p>
          </div>
          <div className={styles.division}>
            <p>Opción por la aplicación de la prorrata especial (art. 103.Dos.1º LIVA)</p>
          </div>
          <div className={styles.division}>
            <p>Revocación de la opción por la aplicación de la prorrata especial (art. 103.Dos.1º LIVA)</p>
          </div>
          <div className={styles.division}>
            <p>Sujeto pasivo declarado en concurso de acreedores en el presente período de liquidación</p>
          </div>
          <div className={styles.division}>
            <p>Sujeto pasivo acogido voluntariamente al SII</p>
          </div>
          <div className={styles.division}>
            <p>Sujeto pasivo con volumen anual de operaciones distinto de cero (art. 121 LIVA)</p>
          </div>
        </div>
        <p>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Declarante