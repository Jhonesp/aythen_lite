import React, { useState } from 'react'
import styles from './Preferencias.module.css'
import { Icon } from '@iconify/react';

const Preferencias = () => {
    const [estado, setEstado] = useState('preferencias');
  return (
    <div className={styles.container}>
        {estado === 'preferencias' && (
        <div className={styles.slideRight}>
        <div className={styles.fila}>
            <div className={styles.campo}>
                <label htmlFor="">Idioma</label>
                <select name="" id="">
                    <option value="">Español</option>
                </select>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Moneda</label>
                <select name="" id="">
                    <option value="">Euro (eur)</option>
                </select>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Forma de pago</label>
                <select name="" id="">
                    <option value="">Sin seleccionar</option>
                </select>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Vencimiento</label>
                <select name="" id="">
                    <option value="">Sin vencimiento</option>
                </select>
            </div>
        </div>
        <div className={styles.fila}>
            <div className={styles.campo}>
                <label htmlFor="">Cuenta de ventas</label>
                <select name="" id="">
                    <option value="">Seleccionar cuenta</option>
                </select>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Cuenta de compras</label>
                <select name="" id="">
                    <option value="">Seleccionar cuenta</option>
                </select>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Descuento %</label>
                <select name="" id="">
                    <option value="">Sin descuento</option>
                </select>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Tarifa</label>
                <select name="" id="">
                    <option value="">Predeterminada</option>
                </select>
            </div>
        </div>
        <div className={styles.fila}>
            <div className={styles.campo} style={{maxWidth:'50%'}}>
                <label htmlFor="">Referencia</label>
                <input type="text" name="" id="" placeholder='Referencia interna'/>
            </div>
            <div className={styles.campo} style={{maxWidth:'150px'}}>
                <label htmlFor="">Día de pago</label>
                <select name="" id="">
                    <option value="">Sin seleccionar</option>
                </select>

                <div style={{display:"flex", flexDirection:"row",gap:"4px",alignItems:"center"}}>
                    <input type="checkbox" name="" id="" />
                    <p>Mostrar nombre comercial en facturas</p>
                </div>
                <div style={{display:"flex", flexDirection:"row",gap:"4px",alignItems:"center"}}>
                    <input type="checkbox" name="" id="" />
                    <p>Mostrar país en facturas</p>
                </div>
                <p style={{color:"#5200BC", fontWeight:"700", cursor:"pointer"}} onClick={()=>{setEstado('lineas')}}>Asignar lineas de numeración</p>
                <p style={{color:"#5200BC", fontWeight:"700", cursor:"pointer"}} onClick={()=>{setEstado('efacturas')}}>Campos Factura-e</p>
            </div>
        </div>
        </div>
        )}
        {estado === 'lineas' && (
            <div className={styles.slideIn}>
            <div style={{display:"flex", flexDirection:"row",gap:"4px",alignItems:"center",cursor:"pointer"}} onClick={()=>{setEstado('preferencias')}}>
                    <Icon icon="tabler:arrow-left" style={{color:"#5200BC"}}/>
                    <p style={{color:"#5200BC", fontWeight:"700", fontSize:"12px"}}>Volver (Preferencias)</p>
            </div>
            <div className={styles.fila}>
                <div className={styles.campo} style={{maxWidth:'100%'}}>
                    <label htmlFor="">Facturas</label>
                    <select name="" id="">
                        <option value="">Predeterminadas</option>
                    </select>
                </div>
                <div className={styles.campo} style={{maxWidth:'100%'}}>
                    <label htmlFor="">Tickets de venta</label>
                    <select name="" id="">
                        <option value="">Predeterminadas</option>
                    </select>
                </div>
                <div className={styles.campo} style={{maxWidth:'100%'}}>
                    <label htmlFor="">Pedidos de venta</label>
                    <select name="" id="">
                        <option value="">Predeterminadas</option>
                    </select>
                </div>
            </div>
            <div className={styles.fila}>
                <div className={styles.campo} style={{maxWidth:'100%'}}>
                    <label htmlFor="">Presupuestos</label>
                    <select name="" id="">
                        <option value="">Predeterminadas</option>
                    </select>
                </div>
                <div className={styles.campo} style={{maxWidth:'100%'}}>
                    <label htmlFor="">Pedidos de compra</label>
                    <select name="" id="">
                        <option value="">Predeterminadas</option>
                    </select>
                </div>
                <div className={styles.campo} style={{maxWidth:'100%'}}>
                    <label htmlFor="">Albaranes</label>
                    <select name="" id="">
                        <option value="">Predeterminadas</option>
                    </select>
                </div>
            </div>
            <div className={styles.fila}>
                <div className={styles.campo} style={{maxWidth:'32%'}}>
                <label htmlFor="">Proformas</label>
                    <select name="" id="">
                        <option value="">Predeterminadas</option>
                    </select>
                </div>
            </div>
            </div>
        )}
        {estado==='efacturas' && (
            <div className={styles.slideIn}>
                <div style={{display:"flex", flexDirection:"row",gap:"4px",alignItems:"center",cursor:"pointer"}} onClick={()=>{setEstado('preferencias')}}>
                    <Icon icon="tabler:arrow-left" style={{color:"#5200BC"}}/>
                    <p style={{color:"#5200BC", fontWeight:"700", fontSize:"12px"}}>Volver (Preferencias)</p>
                </div>
                <div className={styles.fila} style={{marginBottom:'10px'}}>
                <div className={styles.campo} style={{maxWidth:'100%'}}>
                    <label htmlFor="">Oficina contable</label>
                    <select name="" id="">
                        <option value="">Predeterminadas</option>
                    </select>
                    <p style={{margin:0, color:"#828282"}}>Oficina de registro o tramitación de las administraciones públicas</p>
                </div>
                <div className={styles.campo} style={{maxWidth:'100%'}}>
                    <label htmlFor="">Órgano gestor</label>
                    <select name="" id="">
                        <option value="">Predeterminadas</option>
                    </select>
                    <p style={{margin:0, color:"#828282"}}>Delegación u organismo de la administración competente</p>
                </div>
                </div>
                <div className={styles.fila}>
                <div className={styles.campo} style={{maxWidth:'100%'}}>
                    <label htmlFor="">Unidad tramitadora</label>
                    <select name="" id="">
                        <option value="">Predeterminadas</option>
                    </select>
                    <p style={{margin:0, color:"#828282"}}>Órgano encargado de la tramitación del expediente</p>
                </div>
                <div className={styles.campo} style={{maxWidth:'100%'}}>
                    <label htmlFor="">Órgano Proponente</label>
                    <select name="" id="">
                        <option value="">Predeterminadas</option>
                    </select>
                    <p style={{margin:0, color:"#828282"}}>Identifica a quien encarga el gasto</p>
                </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Preferencias