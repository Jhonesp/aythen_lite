import React from 'react'
import styles from './NuevasActividades.module.css'
import Header from '../components/Header'
import AnaliticaBoard from '../components/AnaliticaBoard'
import ResumenBoard from '../components/ResumenBoard'
import Campo from '../components/Campo'

const NuevasActividades = () => {
  return (
    <div className={styles.container}>
        <Header titulo={"Nuevas Actividades"}/>
        <div className={styles.contenido}>
            <AnaliticaBoard />
            <ResumenBoard Campos={
                <>
                <Campo titulo={"Cena"} color={"#9741FF"}/>
                <Campo titulo={"Comida"} color={"#FF7441"}/>
                <Campo titulo={"Llamada"} color={"#FFC641"}/>
                <Campo titulo={"No asignado"} color={"#F66A67"}/>
                <Campo titulo={"Reunión"} color={"#41A5FF"}/>
                <Campo titulo={"Vuelo"} color={"#FF4941"}/>
                </>
            }/>
        </div>
    </div>
  )
}

export default NuevasActividades