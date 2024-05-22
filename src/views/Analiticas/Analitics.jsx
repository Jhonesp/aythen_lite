import React, { useState } from 'react'
import styles from './Analitics.module.css'
import Header from './components/Header'
import { Icon } from '@iconify/react';
import Resumen from './Resumen';
import Proyectos from './Proyectos';

const Analitics = () => {
    const [estado, setEstado] = useState();
  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.top}>
            <div className={styles.seccion}>
                <div id={styles.resumen} onClick={()=>{setEstado(1)}}>
                    <p>Resumen</p>
                    <Icon icon="mingcute:more-2-fill" />
                </div>
                <div id={styles.proyectos} onClick={()=>{setEstado(2)}}>
                    <p>Proyectos</p>
                </div>
                <div className={styles.subseccion}>
                    <Icon icon="ph:plus" />
                    <p>Nuevo board</p>
                </div>
            </div>
            <div className={styles.seccion_end}>
                <div id={styles.inicio}>
                    <p>Volver al inicio</p>
                </div>
                <div id={styles.board}>
                    <Icon icon="ph:plus" />
                    <p>Añadir al board</p>
                </div>
            </div>
        </div>
        {estado === 1 && (<Resumen /> )}
        {estado === 2 && (<Proyectos />)}        
    </div>
  )
}

export default Analitics