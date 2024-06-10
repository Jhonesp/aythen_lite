import React from 'react'
import styles from './NuevosProductos.module.css'
import Header from './Components/Header'
import InfoBasica from './Components/InfoBasica'
import Ventas from './Components/Ventas'
import Compras from './Components/Compras'
import Seguimiento from './Components/Seguimiento'
import GestionStock from './Components/GestionStock'
import Contabilidad from './Components/Contabilidad'

const NuevosProductos = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.subcontainer}>
                <div className={styles.left}>
                    <InfoBasica />
                    <Ventas />
                    <Compras />
                    <Seguimiento />
                    <GestionStock />
                    <Contabilidad />
                </div>
                <div className={styles.right}>

                </div>
            </div>

        </div>
    )
}

export default NuevosProductos