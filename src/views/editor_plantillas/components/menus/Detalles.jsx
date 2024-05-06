import React from 'react'
import styles from './Detalles.module.css'

const Detalles = () => {
  return (
    <div className={styles.detalles_container}>
        <h3>Detalles</h3>
        <p>Pon un nombre y una descripción a tu  plantilla, te servirá para poder localizarla cuando quieras cambiar la  plantilla al crear un documento.</p>
        <div className={styles.campos}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name='nombre'/>
            <label htmlFor="descripcion">Descripción</label>
            <input type="text" name='descripcion'/>
        </div>
    </div>
  )
}

export default Detalles