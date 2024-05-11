import React, { useState } from 'react'
import styles from './PanelLateral.module.css'
import Devengo from './Plantillas/Devengo';
import Identificacion from './Plantillas/Declarante';
import Declaracion from './Plantillas/Liquidacion';
import Complementaria from './Plantillas/Complementaria';

const PanelLateral = () => {
  const [active, setActive] = useState();
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
        <div className={ `${styles.seccion} ${active === 1 ? styles.activo : ''}` } onClick={()=>{setActive(1)}}>
          <p>Ejercicio y devengo</p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className={ `${styles.seccion} ${active === 2 ? styles.activo : ''}` } onClick={()=>{setActive(2)}}>
          <p>Identificación</p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className={ `${styles.seccion} ${active === 3 ? styles.activo : ''}` } onClick={()=>{setActive(3)}}>
          <p>Resúmen declaración</p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className={ `${styles.seccion} ${active === 4 ? styles.activo : ''}` } onClick={()=>{setActive(4)}}>
          <p>Declaración complementaria o sustitutiva</p>
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
      {active === 3 && (
        <Declaracion />
      )}
      {active === 4 && (
        <Complementaria />
      )}
    </div>
    </div>
  )
}

export default PanelLateral