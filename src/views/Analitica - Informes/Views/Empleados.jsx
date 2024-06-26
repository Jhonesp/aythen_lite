import React from 'react'
import styles from './Empleados.module.css'
import Header from '../components/Header'
import AnaliticaBoard from '../components/AnaliticaBoard'
import ResumenBoard from '../components/ResumenBoard'
import Campo from '../components/Campo'

const Empleados = () => {
  return (
    <div className={styles.container}>
        <Header titulo={"Empleados"}/>
        <div className={styles.contenido}>
            <AnaliticaBoard />
            <ResumenBoard Campos={
                <>
                <Campo titulo={"Empleados"} color={"#10CFBD"}/>
                </>
            }/>
        </div>
    </div>
  )
}

export default Empleados