import React from 'react'
import styles from './InfoBasica.module.css'

const InfoBasica = () => {
  return (
    <div className={styles.container}>
        <h4>Información básica</h4>
        <p>Describe tu producto. Puedes utilizar esta información en los documentos que generes en Holded.</p>
        <div className={styles.campo}>
            <label htmlFor="nombre">Nombre del producto*</label>
            <input type="text" name='nombre' placeholder='Añade un nombre a tu producto'/>
        </div>
        <div className={styles.campo}>
            <label htmlFor="desc">Descripción</label>
            <textarea name="desc" id="" placeholder='Especifica las características del artículo'></textarea>
        </div>
    </div>
  )
}

export default InfoBasica