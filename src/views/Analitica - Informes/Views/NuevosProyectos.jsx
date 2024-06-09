import React from 'react'
import styles from './NuevosProyectos.module.css'
import Header from '../components/Header'
import AnaliticaBoard from '../components/AnaliticaBoard'
import ResumenBoard from '../components/ResumenBoard'
import Campo from '../components/Campo'


const NuevosProyectos = () => {
  return (
    <div className={styles.container}>
        <Header titulo={"Nuevos Proyectos"}/>
        <div className={styles.contenido}>
            <AnaliticaBoard />
            <ResumenBoard Campos={
                <>
                <Campo titulo={"Nuevos proyectos"} color={"#4180F3"}/>
                </>
            }/>
        </div>
    </div>
  )
}

export default NuevosProyectos