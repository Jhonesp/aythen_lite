import React, { useState, useEffect } from 'react'
import styles from './Subcampo.module.css'

const Subcampo = ({titulo, width}) => {
  return (
        <div className={styles.campo}>
              <p>{titulo}</p>
              <div className={styles.subcampo}>
                <input type="text" pattern="^\d+(\.\d{1,2})?$" style={{width:width}}/>
              </div>
        </div>
  )
}

export default Subcampo