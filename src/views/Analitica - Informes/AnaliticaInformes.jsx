import React, {useState} from 'react'
import { Icon } from '@iconify/react';
import styles from './AnaliticaInformes.module.css'
import Ventas from './Views/Ventas';
import Presupuestos from './Views/Presupuestos';
import Compras from './Views/Compras';
import Gastos from './Views/Gastos';
import EntradasSalidas from './Views/EntradasSalidas';
import LibroFacturas from './Views/LibroFacturasEmitida';
import LibroFacturasRec from './Views/LibroFacturasRec';
import Empleados from './Views/Empleados';
import NuevasOportunida from './Views/NuevasOportunida';
import RendimientoComercial from './Views/RendimientoComercial';
import RegistroActivida from './Views/RegistroActivida';
import NuevasActividades from './Views/NuevasActividades';
import OportunidadesPerdidas from './Views/OportunidadesPerdidas';
import TareasNuevas from './Views/TareasNuevas';
import NuevosProyectos from './Views/NuevosProyectos';
import MapaContactos from './Views/MapaContactos';

const AnaliticaInformes = () => {
    const [isActive, setIsActive] = useState(false);
    
    const [mostrarOpciones,
        setMostrarOpciones] = useState('');

    const [expandir,
        setExpandir] = useState(true);
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
            case 'Ventas':
                setContenido(<Ventas/>);
                break;
            case 'Presupuesto':
                setContenido(<Presupuestos/>);
                break;
            case 'Compras':
                setContenido(<Compras/>);
                break;
            case 'Gastos':
                setContenido(<Gastos/>);
                break;
            case 'EntradasSalidas':
                setContenido(<EntradasSalidas/>);
                break;
            case 'LibroFactura':
                setContenido(<LibroFacturas/> );
                break;
            case 'LibroFacturasRec':
                setContenido(<LibroFacturasRec/> );
                break;
            case 'Empleados':
                setContenido( <Empleados/> );
                break;
            case 'NuevasOportunidades':
                setContenido(<NuevasOportunida /> );
                break;
            case 'RendimientoComercio':
                setContenido(<RendimientoComercial /> );
                break;
            case 'RegistroActividad':
                setContenido(<RegistroActivida /> );
                break;
            case 'NuevasActividades':
                setContenido(<NuevasActividades /> );
                break;
            case 'OportunidadesPerdidas':
                setContenido(<OportunidadesPerdidas /> );
                break;
            case 'TareasNuevas':
                setContenido(<TareasNuevas /> );
                break;
            case 'NuevosProyectos':
                setContenido(<NuevosProyectos /> );
                break;
            case 'MapaContactos':
                setContenido(<MapaContactos /> );
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
                            <div className={styles.sub} onClick={()=> {handleClick('Ventas')}}>
                                <p>Ventas</p>
                            </div>
                            <div className={styles.sub} onClick={()=> {handleClick('Presupuesto')}}>
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
                            <div className={styles.sub} onClick={()=> {handleClick('LibroFactura')}}>
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
                            <div className={styles.sub} onClick={()=> {handleClick('Compras')}}>
                                <p>Compras</p>
                            </div>
                            <div className={styles.sub} onClick={()=> {handleClick('Gastos')}}>
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
                            <div className={styles.sub} onClick={()=> {handleClick('LibroFacturasRec')}}>
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
                            <div className={styles.sub} onClick={()=> {handleClick('EntradasSalidas')}}>
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
                            <div className={styles.sub} onClick={()=> {handleClick('MapaContactos')}}>
                                <p>Mapa de contactos</p>
                            </div>
                        </div>
                    )}
                    <div className={styles.opcion} onClick={() => setSubMenu('Empleados')}>
                        <div className={styles.titulo} >
                            <p>Empleados</p>
                        </div>
                    </div>
                    {mostrarOpciones === 'Empleados' && (
                        <div className={styles.subopciones}>
                            <div className={styles.sub} onClick={()=> {handleClick('Empleados')}}>
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
                    <div className={styles.opcion} onClick={() => setSubMenu('ControlHorario')}>
                        <div className={styles.titulo} >
                            <p>Control Horario</p>
                        </div>
                    </div>
                    {mostrarOpciones === 'ControlHorario' && (
                        <div className={styles.subopciones}>
                            <div className={styles.sub} onClick={()=> {handleClick('Empleados')}}>
                                <p>Media de horas trabajadas</p>
                            </div>
                            <div className={styles.sub}>
                                <p>Horas trabajadas por empleado</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Horas extras por empleado</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Horas</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Medias de horas extras</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Horas de entrada y salida</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Informe de horas trabajadas</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                        </div>
                    )}
                    <div className={styles.opcion} onClick={() => setSubMenu('CRM')}>
                        <div className={styles.titulo} >
                            <p>CRM</p>
                        </div>
                    </div>
                    {mostrarOpciones === 'CRM' && (
                        <div className={styles.subopciones}>
                            <div className={styles.sub} onClick={()=> {handleClick('NuevasOportunidades')}}>
                                <p>Nuevas oportunidades</p>
                            </div>
                            <div className={styles.sub} onClick={()=> {handleClick('RendimientoComercio')}}>
                                <p>Rendimiento de los comercios</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub} onClick={()=> {handleClick('NuevasActividades')}}>
                                <p>Nuevas actividades</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub} onClick={()=> {handleClick('OportunidadesPerdidas')}}>
                                <p>Oportunidades perdidas por razón</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                        </div>
                    )}
                    <div className={styles.opcion} onClick={() => setSubMenu('Proyectos')}>
                        <div className={styles.titulo}>
                            <p>Proyectos</p>
                        </div>
                    </div>
                    {mostrarOpciones === 'Proyectos' && (
                        <div className={styles.subopciones}>
                            <div className={styles.sub} onClick={()=> {handleClick('NuevosProyectos')}}>
                                <p>Nuevos proyectos</p>
                            </div>
                            <div className={styles.sub} onClick={()=> {handleClick('TareasNuevas')}}>
                                <p>Tareas nuevas y tareas resueltas</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Horas introducidas</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                            <div className={styles.sub}>
                                <p>Respuestas por formulario</p>
                                <Icon icon="heroicons:sparkles-solid" />
                            </div>
                        </div>
                    )}
                    <div className={styles.opcion} onClick={() => setSubMenu('Proyectos2')}>
                        <div className={styles.titulo}>
                            <p>Proyectos</p>
                        </div>
                    </div>
                    {mostrarOpciones === 'Proyectos2' && (
                        <div className={styles.subopciones}>
                            <div className={styles.sub} onClick={()=> {handleClick('RegistroActividad')}}>
                                <p>Registro de actividad</p>
                            </div>
                        </div>
                    )}
                </div>
    
            </div>
            {expandir && (
                <div className={`${styles.panel_expansion}`}>
                    {contenido}
                </div>
            )}
        </div>
        )
}

export default AnaliticaInformes