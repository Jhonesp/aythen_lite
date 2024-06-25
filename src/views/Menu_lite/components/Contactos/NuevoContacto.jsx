import React, { useState } from 'react'
import styles from './NuevoContacto.module.css'
import { Icon } from '@iconify/react';
import ScrollBar from './ScrollBar';
import Basico from './Basico';
import Banco from './Banco';
import Preferencias from './Preferencias';
import Contabilidad from './Contabilidad';

const NuevoContacto = ({closeModal}) => {
  const [active, setActive] = useState(1);
  return (
    <div className={styles.modal_overlay}>
    <div className={`${styles.container} ${styles.scaleIn}`}>
        <div className={styles.distancia}>
        <h4>Nuevo Contacto</h4>
        <Icon icon="gridicons:cross" onClick={()=>{closeModal(false)}}/>
        </div>
        <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
            <div className={styles.campo}>
            <label htmlFor="">Nombre completo</label>
            <input type="text" />
            </div>
            <div className={styles.campo}>
            <label htmlFor="">NIF de contacto</label>
            <input type="text" />
            </div>
            <div className={styles.botones}>
                <div className={styles.boton_left}>Empresa</div>
                <div className={styles.boton_right}>Persona</div>
            </div>
        </div>
        <ScrollBar actualizarEstado={setActive}/>
        {active === 1 && (
          <Basico />
        )}
        {active === 2 && (
          <Banco />
        )}
        {active === 3 && (
          <Preferencias />
        )}
        {active === 4 && (
          <Contabilidad />
        )}
        <div className={styles.boton}>
            <button>Crear</button>
        </div>
    </div>
    </div>
  )
}

export default NuevoContacto