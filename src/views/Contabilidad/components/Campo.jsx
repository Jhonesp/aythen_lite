import React from 'react'
import styles from './Campo.module.css'
import { Icon } from '@iconify/react';

const Campo = ({cuenta,color,nombre,grupo,debe,haber,saldo}) => {
  return (
    <div className={styles.container}>
        <div className={styles.sub} style={{flex:0.3}}>
            <input type="checkbox" name="" id="" />
        </div>
        <div className={styles.sub} style={{flex:0.5, justifyContent:"center"}}>
            <div className={styles.color} style={{backgroundColor:color}}>
            </div>
        </div>
        <div className={styles.sub} style={{paddingLeft:"20px"}}>
            {cuenta}
        </div>
        <div className={styles.sub} style={{flex:3,fontWeight:600}}>
            <Icon icon="material-symbols:text-ad-outline" />{nombre}
            
        </div>
        <div className={styles.sub} style={{flex:1.2}}>
            {grupo}
        </div>
        <div className={styles.sub} style={{flex:1}}>
            {debe}
        </div>
        <div className={styles.sub} style={{flex:0.9}}>
            {haber}
        </div>
        <div className={styles.sub} style={{flex:0.7}}>
            {saldo}
        </div>
        <div className={styles.sub} id={styles.config}>
            <Icon icon="iconamoon:settings" />
        </div>
    </div>
  )
}

export default Campo