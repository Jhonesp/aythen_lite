import React from 'react'
import styles from './Compras.module.css'
import Header from '../components/Header'
import AnaliticaBoard from '../components/AnaliticaBoard'
import ResumenBoard from '../components/ResumenBoard'
import Campo from '../components/Campo'

const Compras = () => {
  return (
    <div className={styles.container}>
        <Header titulo={"Compras"}/>
        <div className={styles.contenido}>
            <AnaliticaBoard />
            <ResumenBoard Campos={
                <>
                <Campo titulo={"Impuestos"} color={"#3B4752"}/>
                <Campo titulo={"Subtotal"} color={"#F55753"} />
                <Campo titulo={"Unidades"} color={"#F8D053"} />
                <Campo titulo={"Total"} color={"#178479"} />
                </>
            }/>
        </div>
    </div>
  )
}

export default Compras