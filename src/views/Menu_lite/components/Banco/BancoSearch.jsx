import React, { useState } from 'react'
import styles from './BancoSearch.module.css'
import { Icon } from '@iconify/react';
import BancoSmall from './components/BancoSmall';
import santander from '../../../../assets/santander.png';
import bbva from '../../../../assets/bbva.png'
import caixa from '../../../../assets/caixabank.png'
import santander2 from '../../../../assets/santander2.png'
import ruralvia from '../../../../assets/ruralvia.png'
import cajamar from '../../../../assets/cajamar.png'

const BancoSearch = ({estado}) => {
    const [banco, setBanco] = useState(null);
    const renderContent = () => {
        if (banco) {
            return banco;
        } else {
            return <div className={`${styles.container} ${styles.slideIn}`}>
            <div style={{display:'flex', flexDirection:'row', gap:'10px', alignItems:'center'}}>
                <div className={styles.back} onClick={()=>{estado('anadir')}}>
                <Icon icon="formkit:arrowleft" />
                </div>
                <h4>Indica a qué banco pertenece la cuenta</h4>
            </div>
            <h5>Banco</h5>
            <div className={styles.search}>
                <select name="" id="">
                    <option value=""></option>
                </select>
                <input type="text" placeholder='Escribe el nombre de tu banco'/>
            </div>
            <h5>Bancos Populares</h5>
            <div className={styles.bancos_grid}>
                <BancoSmall titulo={'Banco Santander'} icono={santander} link={setBanco}/>
                <BancoSmall titulo={'BBVA'} icono={bbva} link={setBanco}/>
                <BancoSmall titulo={'Caixabank'} icono={caixa} link={setBanco}/>
                <BancoSmall titulo={'Banco Santander'} icono={santander2} link={setBanco}/>
                <BancoSmall titulo={'Cajamar'} icono={cajamar} link={setBanco}/>
                <BancoSmall titulo={'Ruralvia'} icono={ruralvia} link={setBanco}/>
            </div>
        </div>;
        }
    };
  return (
        <>
        {renderContent()}
        </>
  )
}

export default BancoSearch