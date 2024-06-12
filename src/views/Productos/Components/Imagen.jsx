import React from 'react'
import styles from './Imagen.module.css'

const Imagen = () => {
  return (
    <div className={styles.container}>
        <h4>Imagen del producto</h4>
        <p>Sube una imagen de tu producto. Podrás utilizarla en documentos y en el Catálogo de Aythen.</p>
        <div className={styles.drag}>
            <h4>Selecciona o arrastra aquí tus archivos</h4>
            <p>Hasta 30 MB y 7680 x 4320 píxeles</p>
            <p>(JPEG, JPG, PNG)</p>
        </div>
    </div>
  )
}

export default Imagen