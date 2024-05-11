import React, { useState } from 'react'
import styles from './PanelLateral.module.css'
import Devengo from './Plantillas/Devengo';
import Identificacion from './Plantillas/Declarante';
import Declaracion from './Plantillas/Liquidacion';
import Saldo from './Plantillas/Saldo';
import { Icon } from '@iconify/react';

const PanelLateral = () => {
  const [active, setActive] = useState();
  const [subMenu, setSubMenu] = useState();
  const [menu, setMenu] = useState(false);
  const [boton, setBoton] = useState("formulario")
  return (
    <div className={styles.panel_lateral}>
      <div className={styles.panel_container}>
      <div className={styles.botones}>
        <button className={boton === "formulario" ? styles.boton_activo : ''}>Formulario</button>
        <button>Justificante</button>
      </div>
      <div className={styles.secciones}>
        <h3>Estado</h3>
        <select name="" id="">
          <option value="">Borrador</option>
        </select>
        <h3>Secciones</h3>
        <div className={ `${styles.seccion} ${active === 1 ? styles.activo : ''}` } onClick={()=>{setActive(1); setMenu(false); setSubMenu(null)}}>
          <p>Identificación</p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className={ `${styles.seccion} ${active === 2 ? styles.activo : ''}` } onClick={()=>{setActive(2); setMenu(false); setSubMenu(null)}}>
          <p>Ejercicio y devengo</p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className={ `${styles.seccion} ${active === 3 ? styles.activo : ''}` } onClick={()=>{setActive(3); setMenu(!menu)}}>
          <p>Resúmen</p>
        </div>
        {menu === true && (
          <div className={styles.submenu}>
            <div className={`${styles.seccion} ${subMenu === 1 ? styles.activo : ''}`} onClick={()=>{setSubMenu(1)}}>
            <p>Prestaciones de servicios desde establecimientos en otros EM distintos de España</p>
            <Icon icon="icon-park-solid:info" />
          </div>
          <div className={`${styles.seccion} ${subMenu === 2 ? styles.activo : ''}`} onClick={()=>{setSubMenu(2)}}>
            <p>Entregas de bienes expedidos o transportados desde otros EM distintos de España</p>
            <Icon icon="icon-park-solid:info" />
          </div>
          </div>
        )}
        <div className={ `${styles.seccion} ${active === 4 ? styles.activo : ''}` } onClick={()=>{setActive(4); setMenu(false); setSubMenu(null)}}>
          <p>Saldo a ingresar en España</p>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
    </div>
    <div className={styles.ventana}>
      {active === 1 && (
        <Devengo />
      )}
      {active === 2 && (
        <Identificacion />
      )}
      {subMenu === 1 && (
        <Declaracion />
      )}
      {subMenu === 2 && (
        <Declaracion />
      )}
      {active === 4 && (
        <Saldo />
      )}
    </div>
    </div>
  )
}

export default PanelLateral