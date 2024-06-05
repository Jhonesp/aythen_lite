import React from 'react'
import styles from './LibroFacturasRec.module.css'
import Header from '../components/Header'
import FacturasRecibidas from '../components/FacturasRecibidas'

const LibroFacturasRec = () => {
  return (
    <div className={styles.container}>
        <Header titulo={"Libro Facturas recibidas"}/>
        <div className={styles.contenido}>
            <FacturasRecibidas />
        </div>
    </div>
  )
}

export default LibroFacturasRec