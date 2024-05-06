import React from 'react'
import styles from './FacturaContainer.module.css'
import Header from './Header'
import FacturaGeneral from './components/facturas/FacturaGeneral'

const FacturaContainer = () => {
  return (
    <div className={styles.factura_container}>
        <Header />
        <FacturaGeneral />
    </div>
  )
}

export default FacturaContainer