import React from 'react'
import styles from './Personaliza.module.css'

const Personaliza = () => {
  return (
    <div className={styles.personaliza_container}>
        <img src="src/assets/rectangle.png" alt="cuadro"  />
        <h2>Personaliza el código HTML</h2>
        <p>Personaliza tus plantillas directamente en HTML</p>
        <button>Mejora tu plan</button>
    </div>
  )
}

export default Personaliza