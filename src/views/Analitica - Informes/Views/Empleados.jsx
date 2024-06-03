import React from 'react'
import styles from './Empleados.module.css'

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