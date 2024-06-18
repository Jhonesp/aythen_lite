import React from 'react'
import styles from './NuevaCompra.module.css'
import Header from './Header'
import PresupuestoInfo from './components/PresupuestoInfo'
import PresupuestoTable from './components/PresupuestoTable'
import AnadirCampos from './components/AnadirCampos'
import Categorizacion from './components/Categorizacion'
import Archivo from './components/Archivo'
import ScrollToTop from '../../ScrollToTop'

const NuevaCompra = () => {
  return (
    <div className={styles.container}>
      <ScrollToTop />
      <Header />
        <div className={styles.row}>
          <div className={styles.left}>
          <Archivo />
          </div>
          <div className={styles.right}>
          <PresupuestoInfo />
          <PresupuestoTable />
          <AnadirCampos />
          <Categorizacion />
          </div>
        </div>
    </div>
  )
}

export default NuevaCompra