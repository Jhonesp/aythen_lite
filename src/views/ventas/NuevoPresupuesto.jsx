import React from 'react'
import styles from './NuevoPresupuesto.module.css'
import Header from './Header'
import PresupuestoContainer from './components/PresupuestoContainer'

const NuevoPresupuesto = () => {
  return (
    <div className={styles.presupuesto_container}>
        <Header />
        <PresupuestoContainer />
    </div>
  )
}

export default NuevoPresupuesto