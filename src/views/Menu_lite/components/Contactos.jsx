import React, { useState } from 'react'
import styles from './Contactos.module.css'
import { Icon } from '@iconify/react';
import NuevoContacto from './Contactos/NuevoContacto';
import CustomSelect from '../../../components/CustomSelect';

const Contactos = () => {
    const [showModal, setShowModal] = useState(false);
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
            <div className={styles.boton} onClick={()=>{setShowModal(true)}}>
               Nuevo Contacto
            </div>
        </div>

        <div className={styles.contenido}>
            <div className={styles.top}>
                <div>
                    <CustomSelect options={[{label: 'Todos', value:'Todos'}]} />
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
            <img src="https://github.com/Jhonesp/aythen_lite/blob/main/src/assets/aythencontactos.png?raw=true" alt="imagen" />
            </div>
            <div className={styles.desc}>
                <h4>Contactos</h4>
                <p>Aquí puedes gestionar tus clientes y proveedores con toda su información y documentos</p>
                <div style={{display:"flex", gap:"10px"}}>
                    <div className={styles.boton} onClick={()=>{setShowModal(true)}}>Nuevo contacto</div>
                    <div className={styles.boton}>Importar contactos</div>
                </div>
            </div>
        </div>
        {showModal && <NuevoContacto closeModal={setShowModal}/>}
    </div>
  )
}

export default Contactos