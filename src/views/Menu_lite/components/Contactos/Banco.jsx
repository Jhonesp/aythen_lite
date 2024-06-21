import React, { useState } from 'react'
import styles from './Banco.module.css'
import { Icon } from '@iconify/react';

const Banco = () => {
  const [bancoDatos, setBancoDatos] = useState(true);
  const [estado, setEstado] = useState(true);
  return (
    <div className={styles.container}>
        {estado ? (
          <div className={styles.contenido}>
          <img src="src/assets/banco.png" alt="" srcset="" />
          <h3>Añade el primer banco para tu contacto</h3>
          <div className={styles.boton_bank} onClick={()=>{setEstado(false)}}>Añadir banco</div>
          </div>
        ) 
        : <>
          <div className={`${styles.selector} ${bancoDatos? '' : styles.active}`} onClick={()=>{setBancoDatos(!bancoDatos)}}>
          <Icon icon="bi:chevron-down" />
        </div>
          {bancoDatos && (
            <div className={`${styles.contenido_bank} ${bancoDatos ? styles.fadeIn : styles.hidden}`}>
            <div className={styles.fila}>
              <div className={styles.campo}>
                <label htmlFor="">Banco</label>
                <input type="text" />
              </div>
              <div className={styles.campo}>
                <label htmlFor="">IBAN</label>
                <input type="text" />
              </div>
              <div className={styles.campo}>
                <label htmlFor="">SWIFT</label>
                <input type="text" />
              </div>
            </div>
            <h5>Remesas SEPA</h5>
            <div className={styles.fila}>
              <div className={styles.campo}>
                <label htmlFor="">Banco</label>
                <input type="text" />
              </div>
              <div className={styles.campo}>
                <label htmlFor="">Banco</label>
                <input type="text" />
              </div>
            </div>
            <div className={styles.right}>
                <div className={styles.botones}>
                  <input type="checkbox" name="" id="" />
                  <p style={{color:"#701BDD"}}>Banco predeterminado</p>
                </div>
                <div className={styles.botones} style={{color:"#B20431"}}>
                <Icon icon="mynaui:trash" />
                  <p>Eliminar</p>
                </div>
            </div>
          </div>
          )}
        </>
        }
        
        
    </div>
  )
}

export default Banco