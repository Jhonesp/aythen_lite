import React from 'react'
import styles from './RendimientoComercial.module.css'
import Header from '../components/Header'
import EquipoVentaBoard from '../components/EquipoVentaBoard'
import EquipoVentaCampo from '../components/EquipoVentaCampo'

const RendimientoComercial = () => {
  return (
    <div className={styles.container}>
        <Header titulo={"Rendimiento de los comercios"}/>
        <div className={styles.contenido}>
            <EquipoVentaBoard campos={
                <EquipoVentaCampo ganadas={"Total"} cantidad={"0,00"}/>
            }/>
        </div>
    </div>
  )
}

export default RendimientoComercial