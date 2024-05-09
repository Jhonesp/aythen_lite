import React from 'react'
import styles from './Subcampo.module.css'

const Subcampo = ({titulo, numero , small, margen, flex}) => {
  return (
        <div className={`${styles.campo} ${small === true ? styles.small : ''} ${margen === true ? styles.margen : ''} ${flex === true ? styles.flex : ''}`}>
              <p>{titulo}</p>
              <div className={`${styles.subcampo} `}>
                <p>{numero}</p>
                <input type="text" pattern="^\d+(\.\d{1,2})?$" placeholder="0,00"/>
              </div>
        </div>
  )
}

export default Subcampo