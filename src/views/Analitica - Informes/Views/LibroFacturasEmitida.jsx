import React from 'react'
import styles from './LibroFacturas.module.css'
import FacturasBoard from '../components/FacturasEmitidaBoard'
import Header from '../components/Header'

const LibroFacturas = () => {
  return (
    <div className={styles.container}>
        <Header titulo={"Libro Facturas emitidas"}/>
        <div className={styles.contenido}>
            <FacturasBoard />
        </div>
    </div>
  )
}

export default LibroFacturas