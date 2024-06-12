import React from 'react'
import styles from './PresupuestoContainer.module.css'
import PresupuestoInfo from './PresupuestoInfo'
import PresupuestoTable from './PresupuestoTable'
import AnadirCampos from './AnadirCampos'
import MetodosPago from './MetodosPago'
import Categorizacion from './Categorizacion'

const PresupuestoContainer = () => {
  return (
    <div className={styles.container}>
        <PresupuestoInfo />
        <PresupuestoTable />
        <AnadirCampos />
        <div className={styles.row}>
          <MetodosPago />
          <Categorizacion />
        </div>
    </div>
  )
}

export default PresupuestoContainer