import React from 'react'
import styles from './Tarea.module.css'

const Tarea = () => {
  return (
    <div className={styles.tarea}>
        <div id={styles.purple}>
        </div>
        <p style={{color:"#000"}}>Tarea 1</p>
        <div className={styles.distancia}>
            <p style={{color:"#BCBCBC"}}>
                PRO-001
            </p>
            <div id={styles.ua}>
                UA
            </div>
        </div>
    </div>
  )
}

export default Tarea