import React from 'react'
import styles from './Negativa.module.css'

const Negativa = () => {
  return (
    <div className={styles.negativa_container}>
        <h3>4 - Negativa</h3>
        <div className={styles.liquidacion}>
            <h3>Declaración negativa</h3>
            <input type="checkbox" name="negativa" id="" />
        </div>
        <p>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Negativa