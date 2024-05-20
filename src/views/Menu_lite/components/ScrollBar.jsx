import React, { useState } from 'react'
import styles from './ScrollBar.module.css'

const ScrollBar = ({ actualizarEstado }) => {
    let [active, setActive] = useState();
    const handleChange = (valor) => {
        setActive(valor);
        actualizarEstado(valor); // Llama a la función de actualización del padre con el nuevo valor
      };
  return (
    <div className={styles.scroll_container}>
        <div className={`${styles.boton} ${active===1 ? styles.active : ''}`} onClick={()=>{handleChange(1)}} >
            <p>All</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===2 ? styles.active : ''}`}onClick={()=>{handleChange(2)}} >
            <p>Datos</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===3 ? styles.active : ''}`}onClick={()=>{handleChange(3)}} >
            <p>Banco</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===4 ? styles.active : ''}`}onClick={()=>{handleChange(4)}} >
            <p>Contabilidad</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===5 ? styles.active : ''}`}onClick={()=>{handleChange(5)}} >
            <p>Contactos</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===6 ? styles.active : ''}`}onClick={()=>{handleChange(6)}} >
            <p>Presupuesto</p>
            <i></i>
        </div>
    </div>
  )
}

export default ScrollBar