import React from 'react'
import styles from './Deducir.module.css'

const Deducir = () => {
  return (
    <div className={styles.deducir_container}>
        <h3>4 - A deducir</h3>
        <div className={styles.liquidacion}>
            <h3>Declaración con resultado a deducir en los siguientes pagos fraccionados del mismo ejercicio</h3>
            <input type="checkbox" name="deducir" id="" />
        </div>
        <p>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Deducir