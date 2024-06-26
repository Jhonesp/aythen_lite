import React from 'react'
import styles from './VincularBanco.module.css'
import { Icon } from '@iconify/react';

const VincularBanco = ({icono, titulo, link}) => {
  return (
    <div className={styles.container}>
        <div style={{display:'flex', flexDirection:'row', gap:'10px', alignItems:'center'}}>
            <div className={styles.back} onClick={()=>{link(null)}}>
            <Icon icon="formkit:arrowleft" />
            </div>
            <h4>Vincula a tu banco a Aythen</h4>
        </div>
        <div className={styles.head}>
            <div style={{display:'flex', flexDirection:'row', gap:'10px', alignItems:'center'}}>
                <img src={icono} alt="" />
                <h5>{titulo}</h5>
            </div>
            <div className={styles.botones}>
                    <div className={styles.boton}>
                    Con conexión
                    </div>
                    <div className={styles.boton}>
                    Sin conexión
                    </div>
            </div>
        </div>
        <div className={styles.contenido}>
            <p>Al conectar tu cuenta con Aythen puedes sincronizar movimientos automáticamente</p>
            <div className={styles.campo}>
                <label htmlFor="">NIF|CIF|NIE|Pasaporte|Usuario*</label>
                <input type="text" placeholder='NIF'/>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">N° Documento</label>
                <input type="text" name="" id="" placeholder='Introduce tu número de identificación'/>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Clave de acceso</label>
                <input type="text" name="" id="" placeholder='Introduce tu contraseña'/>
            </div>
        </div>
    </div>
  )
}

export default VincularBanco