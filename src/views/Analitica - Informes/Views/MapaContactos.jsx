import React from 'react'
import styles from './MapaContactos.module.css'
import Header from '../components/Header'
import MapaMundialGris from '../components/Mapa'

const MapaContactos = () => {
  return (
    <div className={styles.container}>
        <Header titulo={"Mapa Contactos"}/>
        <div className={styles.contenido}>
            <MapaMundialGris />
        </div>
    </div>
  )
}

export default MapaContactos