import React,{useState} from 'react'
import styles from './AnadirBanco.module.css'
import { Icon } from '@iconify/react';


const AnadirBanco = () => {
    const [bancoDatos, setBancoDatos] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [banco, setBanco] = useState('')
    const [iban, setIban] = useState('')
    const [swift, setSwift] = useState('');
    const [refMandato, setRefMandato] = useState('')
    const [fechaMandato, setfechaMandato] = useState('')
  return (
    <div className={styles.container}>
    <div className={`${styles.selector} ${bancoDatos? '' : styles.active}`} onClick={()=>{setBancoDatos(!bancoDatos)}}>
          <Icon icon="bi:chevron-down" />
          {!bancoDatos && (
            <>
            <div className={styles.sub}>
            BANCO
            <p>{banco}</p>
            </div>
            <div className={styles.sub} style={{flex:2}}>
              IBAN
              <p>{iban}</p>
            </div>
            <div className={styles.sub}>
            SWIFT
            <p>{swift}</p>
            </div>
            <div className={styles.sub}>
            REF. MANDATO
            <p>{refMandato}</p>
            </div>
            <div className={styles.sub}>
            FECHA<br />
            MANDATO
            <p>{fechaMandato}</p>
            </div>
            </>
          )}
        </div>
          {bancoDatos && (
            <div className={`${styles.contenido_bank} ${bancoDatos ? styles.fadeIn : styles.hidden}`}>
            <div className={styles.fila}>
              <div className={styles.campo}>
                <label htmlFor="">Banco</label>
                <input type="text" value={banco}  onChange={(e)=>{setBanco(e.target.value)}}/>
              </div>
              <div className={styles.campo}>
                <label htmlFor="">IBAN</label>
                <input type="text" value={iban} onChange={(e)=>{setIban(e.target.value)}}/>
              </div>
              <div className={styles.campo}>
                <label htmlFor="">SWIFT</label>
                <input type="text" value={swift} onChange={(e)=>{setSwift(e.target.value)}}/>
              </div>
            </div>
            <h5>Remesas SEPA</h5>
            <div className={styles.fila}>
              <div className={styles.campo}>
                <label htmlFor="">Ref. mandato</label>
                <input type="text" value={refMandato} onChange={(e)=>{setRefMandato(e.target.value)}}/>
              </div>
              <div className={styles.campo}>
                <label htmlFor="">Fecha mandato</label>
                <input type="text" value={fechaMandato} onChange={(e)=>{setfechaMandato(e.target.value)}}/>
              </div>
            </div>
            <div className={styles.right}>
                <div className={styles.botones}>
                  <input type="checkbox" name="" id="" checked={isChecked}/>
                  <p style={{color:"#701BDD"}} onClick={()=>{setIsChecked(!isChecked)}}>Banco predeterminado</p>
                </div>
                <div className={styles.botones} style={{color:"#B20431"}}>
                <Icon icon="mynaui:trash" />
                  <p>Eliminar</p>
                </div>
            </div>
          </div>)}
    </div>
  )
}

export default AnadirBanco