import React,{ useState } from 'react'
import styles from './FacturaGeneral.module.css'
import { Icon } from '@iconify/react';
import HistorialComp from './HistorialComp';

const FacturaGeneral = () => {

  const [botonActivo, setBotonActivo] = useState(1);

  const activarBoton = (id) => {
    setBotonActivo(id);
  };

  return (
    <div className={styles.factura_container}>
        <div className={styles.botones}>
          <button onClick={() => activarBoton(1)} className={botonActivo === 1 ? styles.activo : ''}>General</button>
          <button onClick={() => activarBoton(2)} className={botonActivo === 2 ? styles.activo : ''}>Mensajes</button>
          <button onClick={() => activarBoton(3)} className={botonActivo === 3 ? styles.activo : ''}>Historial</button>
        </div>
        {botonActivo === 1 && (
          <div>
            <div className={styles.categoria}>
          <div className={styles.subtotal}>
            <h5>Total</h5>
            <h5>0,00€</h5>
          </div>
          <div className={styles.subtotal}>
            <p>Estado</p>
            <select name="estado" id="">
              <option value="Pendiente">Pendiente</option>
            </select>
          </div>
          <div className={styles.subtotal}>
            <p>Número de documento</p>
            <h5>E240002</h5>
          </div>
          <div className={styles.subtotal}>
            <p>Contacto</p>
            <h5 className={styles.morado}>Usuario</h5>
          </div>
          <div className={styles.subtotal}>
            <p>Fecha</p>
            <p>08/04/2024</p>
          </div>
          <div className={styles.subtotal}>
            <p>Vencimiento</p>
            <p>09/04/2024</p>
          </div>
          <div className={styles.subtotal}>
            <p>Total unidades</p>
            <h5>2</h5>
          </div>
        </div>
        <div className={styles.categoria}>
          <div className={styles.subtotal}>
            <h5>Pagos a cuenta</h5>
            <h5 className={styles.morado}>Añadir pago</h5>
          </div>
          <div className={`${styles.subtotal} ${styles.total}`}>
            <h5>Total</h5>
            <h5>0,00€</h5>
          </div>
        </div>
        <div className={styles.categoria}>
          <div className={styles.subtotal}>
          <h5>Pagos a cuenta</h5>
          <h5 className={styles.morado}>Añadir pago</h5>
          </div>
        </div>
        <div className={styles.categoria}>
          <div className={styles.subtotal}>
          <h5>Emails</h5>
          <h5 className={styles.morado}>Enviar vía email</h5>
          </div>
        </div>
        <div className={styles.categoria}>
          <div className={styles.subtotal}>
          <div className={styles.factura}>
            <h5>Facturas</h5>
            <p>Pendiente</p>
          </div>
          <h5 className={styles.morado}>Nueva factura</h5>
          </div>
        </div>
        <div className={styles.categoria}>
          <div className={styles.subtotal}>
            <div className={styles.factura}>
            <h5>Previsión de facturación</h5>
            <Icon icon="bitcoin-icons:lock-filled" />
            </div>
            <h5 className={styles.morado}>Mejora tu plan</h5>
          </div>
          <div className={styles.subtotal}>
            <p id={styles.funcionalidad}>Funcionalidad no disponible en tu plan</p>
          </div>
        </div>
        <div className={styles.categoria}>
          <div className={styles.subtotal}>
            <h5>Categorización</h5>
            <h5 className={styles.morado}>Editar</h5>
          </div>
          <div className={styles.subtotal}>
            <h6>Cuenta contable</h6>
            <p id={styles.cuenta_contable}>Ventas de mercadería</p>
          </div>
        </div>
        <div className={styles.categoria}>
          <div className={styles.subtotal}>
            <h5>Archivo</h5>
            <h5 className={styles.morado}>Subir Archivo</h5>
          </div>
          <div className={styles.archivo}>
            Haz click o arrastra un archivo
          </div>
        </div>
          </div>
        )}
        {botonActivo === 2 && (
          <div>
            <div className={styles.categoria}>
              <div className={styles.imagen}>
                  <img src="src/assets/circulo.png" alt="" />
                  <h4>Enviar mensaje a Usuario</h4>
                  <p>O añade una nota privada solo visible para tu equipo</p>
              </div>
            </div>
            <div className={styles.categoria}>
              <div className={styles.mensaje}>
                <textarea name="" id="" cols="6" rows="3" placeholder='Escribe un mensaje...'></textarea>
                <div className={styles.subtotal}>
                  <div className={styles.nota_interna}>
                    <p>Nota Interna</p>
                    <label className={styles.switch}>
                      <input type="checkbox" />
                      <span className={`${styles.slider} ${styles.round}`}></span>
                    </label>
                  </div>
                
                <button>Enviar</button>
                </div>
              </div>
              <p id={styles.noti}>Se enviará una notificación por correo.</p>
            </div>
          </div>
        )}
        {botonActivo === 3 && (
          <div>
            <div className={styles.categoria}>
              <HistorialComp />
            </div>
          </div>
        )}
        
    </div>
  )
}

export default FacturaGeneral