import React from 'react'
import styles from './Header.module.css'
import { Icon } from '@iconify/react';

const Header = ({titulo}) => {
  return (
    <div className={styles.container}>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center",gap:"5px"}}>
            <h3>{titulo}</h3>
            <Icon icon="ph:star" style={{color:"#C1C1C1", cursor:"pointer"}}/>
        </div>
        <div style={{display:"flex", flexDirection:"row",gap:"10px"}}>
          <div className={styles.campo}>
            <Icon icon="mingcute:search-line" />
            <input type="text" />
          </div>            
            <select name="" id="" style={{paddingLeft:"10px"}}>
              <option value="">Ventas</option>
            </select>
            <div className={styles.campo}>
              <Icon icon="mdi:calendar" />
              <select name="" id="">
                <option value="">31/12/2023 - 30/12/2024</option>
              </select>
            </div>
            <div className={styles.campo}>
              <Icon icon="mdi:tag-outline" />
              <input type="text" placeholder='Añade tags para filtrar' /> 
            </div>
            <div id={styles.more}>
              <Icon icon="mage:dots" />
            </div>
        </div>
    </div>
  )
}

export default Header