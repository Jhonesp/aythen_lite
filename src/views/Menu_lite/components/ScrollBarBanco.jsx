import React, {useState} from 'react'
import styles from './ScrollBarBanco.module.css'
import { Icon } from '@iconify/react';

const ScrollBarBanco = ({ actualizarEstado }) => {
    let [active, setActive] = useState();
    const handleChange = (valor) => {
        setActive(valor);
        actualizarEstado(valor); // Llama a la función de actualización del padre con el nuevo valor
      };
  return (
    <div className={styles.scroll_container}>
        <div className={`${styles.boton} ${active==='datos' ? styles.active : ''}`} onClick={()=>{handleChange('datos')}} >
            <div className={styles.seccion}>
            <Icon icon="flowbite:building-solid" />
            <p>Datos de tu negocio</p>
            </div>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active==='facturas' ? styles.active : ''}`}onClick={()=>{handleChange('facturas')}} >
            <div className={styles.seccion}>
            <Icon icon="material-symbols:brush" />
            <p>Facturas</p>
            </div>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active==='bancos' ? styles.active : ''}`}onClick={()=>{handleChange('bancos')}} >
            <div className={styles.seccion}>
            <Icon icon="mingcute:bank-fill" />
            <p>Bancos</p>
            </div>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active==='metodos' ? styles.active : ''}`}onClick={()=>{handleChange('metodos')}} >
            <div className={styles.seccion}>
            <Icon icon="ion:card-sharp" />
            <p>Métodos de pago</p>
            </div>
            <i></i>
        </div>
    </div>
  )
}

export default ScrollBarBanco