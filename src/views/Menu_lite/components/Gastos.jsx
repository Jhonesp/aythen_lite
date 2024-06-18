import React from 'react'
import styles from './Gastos.module.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Gastos = () => {
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
            <div className={styles.boton}>
                Nuevo Presupuesto
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
            <img src="https://github.com/Jhonesp/aythen_lite/blob/main/src/assets/aythengastos.png?raw=true" alt="imagen" />
            </div>
            <div className={styles.desc}>
                <h4>Facturas de compra</h4>
                <p>Empieza a contabilizar tus facturas de compra o tickets, los vencimientos y tus pagos pendientes.</p>
                <div style={{display:"flex", gap:"10px"}}>
                    <Link to='/Nuevacompra'><div className={styles.boton}>Nueva Compra</div></Link>
                    <div className={styles.boton}>Importar Compras</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gastos