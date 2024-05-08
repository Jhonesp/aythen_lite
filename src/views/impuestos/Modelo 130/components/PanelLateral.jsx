import React, { useState } from 'react'
import styles from './PanelLateral.module.css'
import Declarante from './Plantillas/Declarante';
import Devengo from './Plantillas/Devengo';
import Liquidacion from './Plantillas/Liquidacion';
import Negativa from './Plantillas/Negativa';
import Complementaria from './Plantillas/Complementaria';
import Deducir from './Plantillas/Deducir';

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
          <p>1- Declarante</p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className={ `${styles.seccion} ${active === 2 ? styles.activo : ''}` } onClick={()=>{setActive(2)}}>
          <p>2- Devengo</p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className={ `${styles.seccion} ${active === 3 ? styles.activo : ''}` } onClick={()=>{setActive(3)}}>
          <p>3- Liquidación</p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className={ `${styles.seccion} ${active === 4 ? styles.activo : ''}` } onClick={()=>{setActive(4)}}>
          <p>4- A deducir</p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className={ `${styles.seccion} ${active === 5 ? styles.activo : ''}` } onClick={()=>{setActive(5)}}>
          <p>5- Negativa</p>
          <input type="checkbox" name="" id="" />
        </div>
        <div className={ `${styles.seccion} ${active === 6 ? styles.activo : ''}` } onClick={()=>{setActive(6)}}>
          <p>6- Complementaria</p>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
    </div>
    <div className={styles.ventana}>
      {active === 1 && (
        <Declarante />
      )}
      {active === 2 && (
        <Devengo />
      )}
      {active === 3 && (
        <Liquidacion />
      )}
      {active === 4 && (
        <Deducir />
      )}
      {active === 5 && (
        <Negativa />
      )}
      {active === 6 && (
        <Complementaria />
      )}
    </div>
    </div>
  )
}

export default PanelLateral