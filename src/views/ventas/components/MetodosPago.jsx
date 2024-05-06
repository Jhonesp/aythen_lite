import React from 'react'
import styles from './MetodosPago.module.css'

const MetodosPago = () => {
  return (
    <div className={styles.metodos_container}>
        <h3>Método de pago</h3>
        <label htmlFor="pago">Selecciona una forma de pago</label>
        <select name="pago" id="">
            <option value="">No seleccionada</option>
        </select>
    </div>
  )
}

export default MetodosPago