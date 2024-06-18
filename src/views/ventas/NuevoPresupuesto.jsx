import React from 'react'
import styles from './NuevoPresupuesto.module.css'
import Header from './Header'
import PresupuestoContainer from './components/PresupuestoContainer'
import ScrollToTop from '../../ScrollToTop'

const NuevoPresupuesto = () => {
  return (
    <div className={styles.presupuesto_container}>
      <ScrollToTop />
        <Header />
        <PresupuestoContainer />
    </div>
  )
}

export default NuevoPresupuesto