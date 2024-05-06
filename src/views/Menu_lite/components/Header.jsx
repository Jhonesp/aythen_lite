import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header_container}>
        <div className={styles.header_top}>
            <h1>¡Hola, Usuario!</h1>
            <select name="dias" id="">
                <option value="">Últimos 30 días</option>
                <option value="">Últimos 15 días</option>
            </select>
        </div>
        <div className={styles.header_text}>
            <p>Tu recorrido en Aythen acaba de comenzar.</p>
            <p>A partir de ahora, cada acción que resuelvas potenciará la gestión de tu negocio. ¡Allá vamos!</p>
        </div>
        <div className={styles.header_buttons}>
            <div className={styles.header_button}>
                <h4>INGRESOS</h4>
                <h3>0,00€</h3>
            </div>
            <div className={styles.header_button}>
                <h4>GASTOS</h4>
                <h3>0,00€</h3>
            </div>
            <div className={styles.header_button}>
                <h4>BENEFICIO</h4>
                <h3>0,00€</h3>
            </div>
        </div>
    </div>
  )
}

export default Header