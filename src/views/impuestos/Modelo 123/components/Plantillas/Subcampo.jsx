import React, { useState, useEffect } from 'react'
import styles from './Subcampo.module.css'

const Subcampo = ({titulo, numero}) => {
  return (
        <div className={styles.campo}>
              <p>{titulo}</p>
              <div className={styles.subcampo}>
                <p>{numero}</p>
                <input type="text" pattern="^\d+(\.\d{1,2})?$" placeholder="0,00"/>
              </div>
        </div>
  )
}

export default Subcampo