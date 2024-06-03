import React from 'react'
import styles from './Presupuestos.module.css'
import Header from '../components/Header'
import Subtitulo from '../components/Subtitulo'
import AnaliticaBoard from '../components/AnaliticaBoard'
import ResumenBoard from '../components/ResumenBoard'
import Campo from '../components/Campo'

const Presupuestos = () => {
  return (
    <div className={styles.container}>
        <Header titulo={"Presupuesto"}/>
        <div className={styles.contenido}>
            <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
                <Subtitulo titulo={"TOTAL"} monto={"0,00€"}/>
                <Subtitulo titulo={"VENTA MEDIA"} monto={"0,00€"}/>
                <Subtitulo titulo={"TOTAL PRESUPUESTO"} monto={"0,00€"}/>
            </div>
            <AnaliticaBoard />
            <ResumenBoard Campos={
                <>
                <Campo titulo={"Coste"} color={"#F55753"}/>
                <Campo titulo={"Margen"} color={"#4181F2"} />
                <Campo titulo={"Ventas"} color={"#10CFBD"} />
                </>
            }/>
        </div>
    </div>
  )
}

export default Presupuestos