import React from 'react'
import styles from './Categorizacion.module.css'

const Categorizacion = () => {
  return (
    <div className={styles.container}>
        <h4>Categorización</h4>
        <p>Incluye información adicional para completar tu ficha de producto.</p>
        <div className={styles.campo}>
            <label htmlFor="">Tags</label>
            <select name="" id="">
                <option value="">Busca o crea tags</option>
            </select>
        </div>
    </div>
  )
}

export default Categorizacion