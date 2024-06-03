import React from 'react'
import styles from './EntradasSalidas.module.css'
import Header from '../components/Header'
import AnaliticaBoard from '../components/AnaliticaBoard'
import ResumenBoard from '../components/ResumenBoard'
import Campo from '../components/Campo'

const EntradasSalidas = () => {
  return (
    <div className={styles.container}>
        <Header titulo={"Entradas y Salidas de banco"}/>
        <div className={styles.contenido}>
            <AnaliticaBoard />
            <ResumenBoard Campos={
                <>
                <Campo titulo={"Entradas"} color={"#10CF80"}/>
                <Campo titulo={"Saldo"} color={"#4181F2"} />
                <Campo titulo={"Salidas"} color={"#F55753"} />
                </>
            }/>
        </div>
    </div>
  )
}

export default EntradasSalidas