import React from 'react'
import styles from './ResumenBoard.module.css'
import Campo from './Campo'

const ResumenBoard = ({Campos}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.seccion} style={{flex:"1.4",textAlign:"right", paddingRight:"20px"}}>
            flecha
          </div>
          <div className={styles.seccion}>
            Diciembre 23
          </div>
          <div className={styles.seccion}>
            Enero 24
          </div>
          <div className={styles.seccion}>
            Febrero 24
          </div>
          <div className={styles.seccion}>
            Marzo 24
          </div>
          <div className={styles.seccion}>
            Abril 24
          </div>
          <div className={styles.seccion}>
            Mayo 24
          </div>
          <div className={styles.seccion}>
            Junio 24
          </div>
          <div className={styles.seccion}>
            Julio 24
          </div>
          <div className={styles.seccion}>
            Agosto 24
          </div>
          <div className={styles.seccion}>
            Septiembre 24
          </div>
          <div className={styles.seccion}>
            Octubre 24
          </div>
        </div>
        {Campos}
    </div>
  )
}

export default ResumenBoard