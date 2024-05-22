import React from 'react'
import styles from './Proyectos.module.css'
import { Icon } from '@iconify/react';
import ProyectoMini from './components/ProyectoMini';

const Proyectos = () => {
  return (
    <div className={styles.container}>
        <div className={styles.sub}>
            <div className={styles.distancia}>
                <h5>Proyectos</h5>
                <Icon icon="mingcute:more-2-fill" />
            </div>
            <p>1 PROYECTOS</p>
            <ProyectoMini />
        </div>
        <div className={styles.sub}>
            <div className={styles.distancia}>
                <h5>Mis menciones</h5>
                <Icon icon="mingcute:more-2-fill" />
            </div>
            <p>TODOS LOS PROYECTOS</p>
            <div id={styles.menciones}>
                <Icon icon="fluent:chat-16-regular" />
                <p>No tienes menciones</p>
            </div>
        </div>
        <div className={styles.sub}>
            <div className={styles.distancia}>
                <h5>Tareas por etapa</h5>
                <Icon icon="mingcute:more-2-fill" />
            </div>
            <p>TODOS LOS PROYECTOS | TODOS</p>
                <div className={styles.tareas}>
                    <div className={styles.tarea}>
                        <p>Por hacer</p>
                        <p style={{fontSize:"30px",fontWeight:"600"}}>2</p>
                        <p>100%</p>
                    </div>
                    <div className={styles.tarea}>
                        <p>Progreso</p>
                        <p style={{fontSize:"30px",fontWeight:"600"}}>0</p>
                        <p>0%</p>
                    </div>
                    <div className={styles.tarea}>
                        <p>Finalizado</p>
                        <p style={{fontSize:"30px",fontWeight:"600"}}>0</p>
                        <p>0%</p>
                    </div>
                </div>
        </div>
        <div className={styles.sub}>
            <div className={styles.distancia}>
                <h5>Registro horario</h5>
                <Icon icon="mingcute:more-2-fill" />
            </div>
            <p>ÚLTIMA SEMANA</p>
            <div id={styles.menciones}>
                <Icon icon="bxs:calendar" />
                <p>No tienes controles horarios asignados a esta semana</p>
                <p style={{color:"#36007A",cursor:"pointer"}}>Ir a Registro horario</p>
            </div>
        </div>
        <div className={styles.sub}>
            <div className={styles.distancia}>
                <h5>Documentos</h5>
                <Icon icon="mingcute:more-2-fill" />
            </div>
            <p>TODOS LOS PROYECTOS</p>
            <div style={{marginTop:"20px",display:"flex",flexDirection:"column",gap:"10px"}}>
                <div className={styles.distancia}>
                    <h5>Ventas</h5>
                    <h5 style={{color:"#17D13C"}}>0,00£</h5>
                </div>
                <div className={styles.distancia}>
                    <h5>Gastos</h5>
                    <h5 style={{color:"#FF0000"}}>0,00£</h5>
                </div>
                <hr style={{width:"100%"}}/>
                <div className={styles.distancia}>
                    <h5>Total</h5>
                    <h5>0,00£</h5>
                </div>
            </div>
        </div>
        <div className={styles.sub}>
            <div className={styles.distancia}>
                <h5>Horas por empleado</h5>
                <Icon icon="mingcute:more-2-fill" />
            </div>
            <p>MES ACTUAL | TODOS</p>
            <div id={styles.menciones}>
                <Icon icon="mdi:account-tie" />
                <p>Actualmente no se ha asignado ningún
                tiempo a tus proyectos</p>
                <p style={{color:"#36007A",cursor:"pointer"}}>Ir a Registro horario</p>
            </div>
        </div>
    </div>
  )
}

export default Proyectos