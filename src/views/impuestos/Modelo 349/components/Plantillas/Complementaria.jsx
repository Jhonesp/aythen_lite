import React from 'react'
import styles from './Complementaria.module.css'

const Complementaria = () => {
  return (
    <div className={styles.complementaria_container}>
        <h3>6 - Complementaria</h3>
        <div className={styles.categoria}>
            
            <div className={styles.sub}>
            <p>Si esta declaración es complementaria de otra declaración anterior correspondiente al mismo concepto, ejercicio y período, indíquelo con una "X" esta casilla.</p>
                <input type="checkbox" name="autoliquidacion" id="" />
            </div>
        </div>
        <div className={styles.categoria}>
            <p>En este caso, consigne a continuación el número de justificante identificativo de la declaración anterior.</p>
            <div className={styles.sub}>
                <h4>Número de justificante</h4>
                <input type="text" />
            </div>
        </div>
        <p id={styles.end}>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Complementaria