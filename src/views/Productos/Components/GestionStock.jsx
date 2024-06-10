import React from 'react'
import styles from './GestionStock.module.css'

const GestionStock = () => {
  return (
    <div className={styles.container}>
        <h4>Gestion de Stock</h4>
        <p>Elige si deseas hacer seguimiento del stock y define tu almacén predeterminado.</p>
        <div className={styles.check}>
            <input type="checkbox" name="" id="" />
            <p>Gestionar stock</p>
        </div>
        <div className={styles.campos}>
            <div className={styles.campo}>
                <label htmlFor="">Almacén predeterminado</label>
                <select name="" id="">
                    <option value="">Seleccionar un almacén</option>
                </select>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Cantidad</label>
                <input type="text" placeholder='0'/>
            </div>
        </div>
    </div>
  )
}

export default GestionStock