import React from 'react'
import styles from './Ventas.module.css'
import Header from '../components/Header'
import Subtitulo from '../components/Subtitulo'
import AnaliticaBoard from '../components/AnaliticaBoard'
import ResumenBoard from '../components/ResumenBoard'

const Ventas = () => {
  return (
    <div className={styles.container}>
        <Header titulo={"Ventas"}/>
        <div className={styles.contenido}>
            <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
                <Subtitulo titulo={"TOTAL"} monto={"0,00€"}/>
                <Subtitulo titulo={"VENTA MEDIA"} monto={"0,00€"}/>
                <Subtitulo titulo={"MARGEN"} monto={"0,00€"}/>
            </div>
            <AnaliticaBoard />
            <ResumenBoard />
        </div>
    </div>
  )
}

export default Ventas