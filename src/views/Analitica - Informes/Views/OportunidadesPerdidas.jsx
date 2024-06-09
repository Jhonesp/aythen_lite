import React from 'react'
import styles from './OportunidadesPerdidas.module.css'
import Header from '../components/Header'
import AnaliticaBoard from '../components/AnaliticaBoard'
import ResumenBoard from '../components/ResumenBoard'
import Campo from '../components/Campo'

const OportunidadesPerdidas = () => {
  return (
    <div className={styles.container}>
        <Header titulo={"Oportunidades perdidas por razón"}/>
        <div className={styles.contenido}>
            <AnaliticaBoard />
            <ResumenBoard Campos={
                <>
                <Campo titulo={"Razón eliminada"} color={"#F55753"}/>
                <Campo titulo={"Sin razón"} color={"#353434"}/>
                </>
            }/>
        </div>
    </div>
  )
}

export default OportunidadesPerdidas