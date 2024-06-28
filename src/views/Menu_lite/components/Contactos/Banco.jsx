import React, { useState } from 'react'
import styles from './Banco.module.css'
import { Icon } from '@iconify/react';
import AnadirBanco from './AnadirBanco';

const Banco = () => {
  const [estado, setEstado] = useState(true);
  return (
    <div className={styles.container}>
        {estado ? (
          <div className={styles.contenido}>
          <img src="src/assets/banco.png" alt="" />
          <h3>Añade el primer banco para tu contacto</h3>
          <div className={styles.boton_bank} onClick={()=>{setEstado(false)}}>Añadir banco</div>
          </div>
        ) 
        : <>
          <AnadirBanco />
          <p className={styles.anadir}>Añadir banco</p>
        </>
        }
        
        
    </div>
  )
}

export default Banco