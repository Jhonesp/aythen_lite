import React from 'react'
import styles from './CamposLegales.module.css'

const CamposLegales = () => {
  return (
    <div className={styles.legal_container}>
        <div className={styles.legal_content}>
            <h3>Términos y condiciones</h3>
            <p>Agrega la información de los términos y condiciones para que aparezca en tus documentos.</p>
            <select name="" id="">
                <option value="">No quiero poner la información de los términos legales</option>
            </select>
        </div>
      <div className={styles.legal_content} id={styles.last}>
            <h3>Registro Mercantil</h3>
            <p>Agrega la información de los términos y condiciones para que aparezca en tus documentos.</p>
            <select name="" id="">
                <option value="">No quiero poner la información del registro mercantil</option>
            </select>
        </div>
    </div>
  )
}

export default CamposLegales