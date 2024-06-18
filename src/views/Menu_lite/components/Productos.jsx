import React from 'react'
import styles from './Productos.module.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Productos = () => {
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
            <img src="https://github.com/Jhonesp/aythen_lite/blob/main/src/assets/aythenproductos.png?raw=true" alt="imagen" />
            </div>
            <div className={styles.desc}>
                <h4>Productos</h4>
                <p>Desde  aquí puedes crear y personalizar tu catálogo de productos, gestionar  tus compras y ventas, y controlar el inventario actualizado en tiempo  real gracias a los múltiples informes disponibles.</p>
                <div style={{display:"flex", gap:"10px"}}>
                    <Link to='/NuevoProducto'><div className={styles.boton}>Añade tu primer producto</div></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Productos