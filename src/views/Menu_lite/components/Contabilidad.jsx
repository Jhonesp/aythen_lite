import React from 'react'
import styles from './Contabilidad.module.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Contabilidad = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.small_boton}>
            <Icon icon="bi:book" />
            </div>
            <div className={styles.small_boton}>
            <Icon icon="pepicons-pencil:dots-y" />
            </div>
            <div className={styles.small_boton} style={{fontSize:"14px", fontWeight:"700"}}>
                Nuevo asiento
            </div>
            <div className={styles.boton}>
                Nueva Cuenta
            </div>
        </div>

        <div className={styles.contenido}>
            <div className={styles.top}>
                <div>
                    <select name="" id="">
                        <option value="">Todos</option>
                    </select>
                </div>
                <div style={{display:"flex", flexDirection:"row", gap:"8px", alignItems:"center"}}>
                    <Icon icon="ion:search-outline" id={styles.icono}/>
                    <input type="text" />
                    <div className={styles.small_boton}>
                    <Icon icon="icons8:download-2" />
                    </div>
                </div>
            </div>
            <div className={styles.imagen}>
            <img src="https://github.com/Jhonesp/aythen_lite/blob/main/src/assets/aythencontabilidad.png?raw=true" alt="imagen" />
            </div>
            <div className={styles.desc}>
                <h4>Todas las cuentas están vacías en este filtro de fechas</h4>
                <div style={{display:"flex", gap:"10px"}}>
                    <div className={styles.boton}> <Link to="/Contabilidad"> Mostrar cuentas sin valor</Link></div>
                </div>
                <div className={styles.botones_end}>
                <p>Año actual</p>
                <p>Último año</p>
                <p>Mes actual</p>
                <p>Último mes</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contabilidad