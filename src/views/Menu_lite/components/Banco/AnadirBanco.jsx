import React, { useState } from 'react'
import styles from './AnadirBanco.module.css'
import { Icon } from '@iconify/react';
import TipoCuenta from './components/TipoCuenta';
import BancoSearch from './BancoSearch';
import Pasarela from './Pasarela';

const AnadirBanco = () => {
    const [estado, setEstado] = useState('inicio');
  return (
    <div>
        {estado ==='inicio' && (
    <div className={styles.container}>
        <div className={styles.bancos}>
            Bancos
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
            <div className={styles.left}>
                <h3>Un lugar para todas tus cuentas</h3>
                <p>Conecta tu banco, concilia y manten tu contabilidad al día</p>
                <div className={styles.check}>
                    <Icon icon="ic:baseline-check" />
                    <p>Vincula tus bancos y sincroniza tu extracto bancario</p>
                </div>
                <div className={styles.check}>
                    <Icon icon="ic:baseline-check" />
                    <p>Crea reglas y concilia tus movimientos de forma automática</p>
                </div>
                <div className={styles.check}>
                    <Icon icon="ic:baseline-check" />
                    <p>Sigue la evolución del flujo de caja en tiempo real</p>
                </div>
                <div className={styles.boton} onClick={()=>{setEstado('anadir')}}>
                + Añadir cuenta
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.circle}></div>
            </div>
        </div>
    </div>
    )}
    {estado === 'anadir' && (
        <div className={`${styles.tipo_cuenta} ${styles.slideIn}`}>
        <h3>Indica qué tipo de cuenta quieres añadir</h3>
        <TipoCuenta icono={<Icon icon="mingcute:bank-fill" />} titulo={'Banco'} desc={'Cuentas corrientes, depósitos, préstamos y líneas de crédito'} link={setEstado} arg={'banco'}/>
        <TipoCuenta icono={<Icon icon="ion:card-sharp" />} titulo={'Tarjeta'} desc={'Tarjetas de crédito y débito'}/>
        <TipoCuenta icono={<Icon icon="flowbite:window-solid" />} titulo={'Pasarela de pago'} desc={'PayPal y Stripe'} link={setEstado} arg={'pasarela'}/>
        <TipoCuenta icono={<Icon icon="mingcute:cash-fill" />} titulo={'Caja'} desc={'Movimientos en efectivo'}/>
        </div>
    )}
    {estado === 'banco' && (
        <BancoSearch estado={setEstado}/>
    )}
    {estado === 'pasarela' && (
        <Pasarela estado={setEstado}/>
    )}
    
    </div>
  )
}

export default AnadirBanco