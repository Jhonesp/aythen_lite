import React from 'react'
import styles from './TareasNuevas.module.css'
import Header from '../components/Header'
import AnaliticaBoard from '../components/AnaliticaBoard'
import ResumenBoard from '../components/ResumenBoard'
import Campo from '../components/Campo'

const TareasNuevas = () => {
  return (
    <div className={styles.container}>
        <Header titulo={"Tareas Nuevas y Tareas Resueltas"}/>
        <div className={styles.contenido}>
            <AnaliticaBoard />
            <ResumenBoard Campos={
                <>
                <Campo titulo={"Nuevas tareas"} color={"#6A5ACD"}/>
                <Campo titulo={"Tareas resueltas"} color={"#3CB371"}/>
                </>
            }/>
        </div>
    </div>
  )
}

export default TareasNuevas