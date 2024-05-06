import React, { useState } from 'react'
import styles from './Personalizar.module.css'

const Personalizar = () => {
  const [color, setColor] = useState("");

  return (
    <div className={styles.personalizar_container}>
        <h3>Personaliza tu plantilla</h3>
        <p>Personaliza el diseño de la plantilla que  tienes seleccionada. Pon tus colores corporativos, cambia el formato del  documento o agrega marcas de agua a cada tipo de documento.</p>
        <div className={styles.personalizar_select}>
            <label htmlFor="tipografia">Tipografia</label>
            <select name="tipografia" id=""></select>
            <label htmlFor="color">Color</label>
            <div className={styles.personalizar_color}>
              <input type="color" name="color" value={color} onChange={e => setColor(e.target.value)}/>
              <input type="text" placeholder={color} />
            </div>
            <label htmlFor="doc">Documento</label>
            <select name="doc" id=""></select>
        </div>
        <h3>Marcas de agua</h3>
        <p>Una marca de agua es un texto sobrepuesto al documento</p>
        <div className={styles.checks}>
            <div className={styles.check}>
            <input type="checkbox" name="factura" id="" />
            <label htmlFor="factura">Factura</label>
            </div>
            <div className={styles.check}>
            <input type="checkbox" name="ticket" id="" />
            <label htmlFor="ticket">Ticket de venta</label>
            </div>
            <div className={styles.check}>
            <input type="checkbox" name="venta" id="" />
            <label htmlFor="venta">Venta rectificativa</label>
            </div>
            <div className={styles.check}>
            <input type="checkbox" name="proforma" id="" />
            <label htmlFor="proforma">Proforma</label>
            </div>
            <div className={styles.check}>
            <input type="checkbox" name="presupuesto" id="" />
            <label htmlFor="presupuesto">Presupuesto</label>
            </div>
            <div className={styles.check}>
            <input type="checkbox" name="pedidoCompra" id="" />
            <label htmlFor="pedidoCompra">Pedido de compra</label>
            </div>
            <div className={styles.check}>
            <input type="checkbox" name="pedidoVenta" id="" />
            <label htmlFor="pedidoVenta">Pedido de venta</label>
            </div>
            <div className={styles.check}>
            <input type="checkbox" name="albaran" id="" />
            <label htmlFor="albaran">Albarán</label>
            </div>
        </div>
    </div>
  )
}

export default Personalizar