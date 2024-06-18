import React from 'react'
import styles from './Contactos.module.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Contactos = () => {
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
            <Link to='/'><div className={styles.boton}>
               Nuevo Contacto
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
            <img src="src/assets/aythencontactos.png" alt="imagen" />
            </div>
            <div className={styles.desc}>
                <h4>Contactos</h4>
                <p>Aquí puedes gestionar tus clientes y proveedores con toda su información y documentos</p>
                <div style={{display:"flex", gap:"10px"}}>
                    <Link to='/'><div className={styles.boton}>Nuevo contacto</div></Link>
                    <div className={styles.boton}>Importar contactos</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactos