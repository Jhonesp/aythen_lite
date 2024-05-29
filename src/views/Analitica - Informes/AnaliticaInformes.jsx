import React, {useState} from 'react'
import { Icon } from '@iconify/react';
import styles from './AnaliticaInformes.module.css'

const AnaliticaInformes = () => {
    const [isActive, setIsActive] = useState(false);
    
    const [mostrarOpciones,
        setMostrarOpciones] = useState('');

    const [expandir,
        setExpandir] = useState(false);
    const toggleExpand = () => {
        setExpandir(!expandir);
    }
    const [contenido,
        setContenido] = useState(null);
    const [activo,
        setActivo] = useState(null);
    
    function setSubMenu(submenu){
        if(submenu === mostrarOpciones){
            setMostrarOpciones('')
        }else{
            setMostrarOpciones(submenu)
        }
    }

    const handleClick = (componente) => {
        if (expandir === false || componente === activo) 
            toggleExpand();
        
        setActivo(componente);
        setIsActive(false);

        switch (componente) {
            case 'Plantilla':
                setContenido(<Plantilla/>);
                break;
            case 'Logo':
                setContenido(<Logo/>);
                break;
            case 'Personalizar':
                setContenido(<Personalizar/>);
                break;
            case 'Campos':
                setContenido(<Campos/>);
                break;
            case 'Detalles':
                setContenido(<Detalles/>);
                break;
            case 'Tabla':
                setContenido(<Tabla/> );
                break;
            case 'Campos legales':
                setContenido(<CamposLegales/> );
                break;
            case 'Info Empresa':
                setContenido(<InfoEmpresa /> );
                break;
            case 'Info producto':
                setContenido(<InfoProducto /> );
                break;
            case 'Nombre Docs':
                setContenido(<NombreDocs /> );
                break;
            case 'Personaliza HTML':
                setContenido(<Personaliza /> );
                setIsActive(true);
                console.log("hola");
                break;
            default:
                setContenido(null);
        }
    }

    return (
        <div className={styles.panel_lateral}>
            <div className={styles.panel_container}>
                <h3 style={{margin:0,color:"#fff",fontWeight:"600"}}>Informes</h3>
                <div style={{display:"flex", flexDirection:"column", marginTop:"20px",gap:"5px"}}>
                    <h4 style={{margin:0, color:"#1E0045", fontSize:"14px"}}>Favoritos</h4>
                    <div style={{display:"flex", flexDirection:"row",alignItems:"center"}}>
                        <Icon style={{fontSize:"12px"}} icon="ph:star" />
                        <p style={{margin:0, fontSize:"11px"}}>Marca favoritos para acceder rapidamente</p>
                    </div>
                </div>
                <div className={styles.opciones_container}>
                    <div className={styles.opcion} onClick={() => setSubMenu('Ventas')}>
                        <div className={styles.titulo}>
                            <p>Ventas</p>
                        </div>
                    </div>
                    {mostrarOpciones === 'Ventas' && (
                        <div className={styles.subopciones}>
                            <div className={styles.sub}>
                                <p>Ventas</p>
                            </div>
                            <div className={styles.sub}>
                                <p>Presupuestos</p>
                            </div>
                            <div className={styles.sub}>
                                <p>Proformas</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Pedidos de venta</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Libro Facturas emitidas</p>
                            </div>
                        </div>
                    )}
                    <div className={styles.opcion} onClick={() => setSubMenu('Compras')}>
                        <div className={styles.titulo}>
                            <p>Compras</p>
                        </div>
                    </div>
                    {mostrarOpciones === 'Compras' && (
                        <div className={styles.subopciones}>
                            <div className={styles.sub}>
                                <p>Compras</p>
                            </div>
                            <div className={styles.sub}>
                                <p>Gastos</p>
                            </div>
                            <div className={styles.sub}>
                                <p>Activos</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Pedidos de compra</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Libro Facturas recibidas</p>
                            </div>
                        </div>
                    )}
                    <div className={styles.opcion} onClick={() => setSubMenu('Finanzas')}>
                        <div className={styles.titulo}>
                            <p>Finanzas</p>
                        </div>
                    </div>
                    {mostrarOpciones === 'Finanzas' && (
                        <div className={styles.subopciones}>
                            <div className={styles.sub}>
                                <p>Pérdidas y ganancias</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Balance de situación</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Sumas y saldos</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Entradas y salidas de banco</p>
                            </div>
                            <div className={styles.sub}>
                                <p>Libro Mayor</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                        </div>
                    )}
                    <div className={styles.opcion} onClick={ () => setSubMenu('Inventario')}>
                        <div className={styles.titulo}>
                            <p>Inventario</p>
                        </div>
                    </div>
                    {mostrarOpciones === 'Inventario' && (
                        <div className={styles.subopciones}>
                            <div className={styles.sub}>
                                <p>Análisis de inventario</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Stock</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Stock en curso</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Alarma de stock</p>
                            </div>
                            <div className={styles.sub}>
                                <p>Valor del material en camino</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Coste de ventas</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Última compra por producto</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Trazabilidad</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                        </div>
                    )}
                    <div className={styles.opcion} onClick={() => setSubMenu('Contactos')}>
                        <div className={styles.titulo}>
                            <p>Contactos</p>
                        </div>
                    </div>
                    {mostrarOpciones === 'Contactos' && (
                        <div className={styles.subopciones}>
                            <div className={styles.sub}>
                                <p>Mapa de contactos</p>
                            </div>
                        </div>
                    )}
                    <div className={styles.opcion} onClick={() => setSubMenu('Empleados')}>
                        <div className={styles.titulo}>
                            <p>Empleados</p>
                        </div>
                    </div>
                    {mostrarOpciones === 'Empleados' && (
                        <div className={styles.subopciones}>
                            <div className={styles.sub}>
                                <p>Empleados</p>
                            </div>
                            <div className={styles.sub}>
                                <p>Incorporaciones</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Ceses de contrato</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                        </div>
                    )}
                </div>
    
            </div>
            {expandir && (
                <div className={`${styles.panel_expansion} ${isActive ? styles.active : ''}`}>
                    {contenido}
                </div>
            )}
        </div>
        )
}

export default AnaliticaInformes