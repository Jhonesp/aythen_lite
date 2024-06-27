import React, { useState } from 'react'
import styles from './VincularBanco.module.css'
import { Icon } from '@iconify/react';

const VincularBanco = ({icono, titulo, link}) => {
    const [estado, setEstado] = useState('conexion');
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
                    <div className={`${styles.boton} ${estado === 'conexion' ? styles.activo : ''}`} onClick={()=>{setEstado('conexion')}}>
                    Con conexión
                    </div>
                    <div className={`${styles.boton} ${estado === 'sinconexion' ? styles.activo : ''}`} onClick={()=>{setEstado('sinconexion')}}>
                    Sin conexión
                    </div>
            </div>
        </div>
        {estado === 'conexion' ? (
            <>
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
        <div className={styles.advise}>
            <div className={styles.lock}>
            <Icon icon="teenyicons:lock-outline" />
            </div>
            <div className={styles.desc}>
                <h5>Protegemos la información de tu negocio</h5>
                <p>Utilizamos proveedores regulados y obligados a resguardar tus datos. Holded nunca tendrá acceso a tus credenciales bancarias.</p>
            </div>
        </div>
            </>
        ) : <>
            <div className={styles.contenido}>
            <p>Crea una cuenta sin conexión e importa tus movimientos de forma manual.</p>
            <div className={styles.campo}>
                <label htmlFor="">Nombre de la cuenta*</label>
                <input type="text" placeholder='NIF'/>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">IBAN</label>
                <input type="text" name="" id="" placeholder='Escribe el IBAN de la cuenta'/>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">BIC/SWIFT</label>
                <input type="text" name="" id="" placeholder='BSCHESMM'/>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Moneda</label>
                <select name="" id="">
                    <option value="">Euro (EUR)</option>
                    <option value="">Dolar (USD)</option>
                </select>
            </div>
        </div>
        </>}
        <div className={styles.conectar}>
            <button>Conectar</button>
        </div>
    </div>
  )
}

export default VincularBanco