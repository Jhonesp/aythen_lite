import React from 'react'
import styles from './Presupuesto.module.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Presupuesto = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.small_boton}>
            <Icon icon="cil:drop" />
            </div>
            <div className={styles.small_boton}>
            <Icon icon="bi:book" />
            </div>
            <div className={styles.small_boton}>
            <Icon icon="pepicons-pencil:dots-y" />
            </div>
            <Link to='/Nuevopresupuesto'><div className={styles.boton}>
                Nuevo Presupuesto
            </div></Link>
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
            <img src="src/assets/aythenmenu.png" alt="imagen" />
            </div>
            <div className={styles.desc}>
                <h4>Presupuestos</h4>
                <p>Desde  aquí puedes crear nuevos presupuestos, enviar presupuestos  personalizados y verificar si tus clientes han abierto los emails.  También puedes comprobar el estado de los presupuestos.</p>
                <div style={{display:"flex", gap:"10px"}}>
                    <Link to='/Nuevopresupuesto'><div className={styles.boton}>Nuevo Presupuesto</div></Link>
                    <div className={styles.boton}>Importar Presupuestos</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Presupuesto