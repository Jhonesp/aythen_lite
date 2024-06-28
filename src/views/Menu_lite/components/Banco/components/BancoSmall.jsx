import React from 'react'
import styles from './BancoSmall.module.css'
import VincularBanco from '../VincularBanco'

const BancoSmall = ({titulo, icono, link}) => {
    function setPage(){
        link(<VincularBanco titulo={titulo} icono={icono} link={link}/>)
    }
  return (
    <div className={styles.container} onClick={()=>setPage()}>
        <img src={icono} alt="" />
        <h4>{titulo}</h4>
    </div>
  )
}

export default BancoSmall