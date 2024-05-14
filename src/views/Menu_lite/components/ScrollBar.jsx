import React from 'react'
import styles from './ScrollBar.module.css'

const ScrollBar = () => {
  return (
    <div className={styles.scroll_container}>
        <div className={styles.boton}>
            <p>All</p>
            <i></i>
        </div>
    </div>
  )
}

export default ScrollBar