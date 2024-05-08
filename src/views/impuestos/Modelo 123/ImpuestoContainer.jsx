import React from 'react'
import styles from './ImpuestoContainer.module.css'
import Header from './Header'
import PanelLateral from './components/PanelLateral'

const Impuesto123Container = () => {
  return (
    <div className={styles.impuesto_container}>
        <Header />
        <PanelLateral />
    </div>
  )
}

export default Impuesto123Container