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
                <Campo titulo={"Embudo 1"} color={"#E300EC"}/>
                </>
            }/>
        </div>
    </div>
  )
}

export default NuevasActividades