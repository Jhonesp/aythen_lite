import React from 'react'
import styles from './Pasarela.module.css'
import { Icon } from '@iconify/react';
import TipoCuenta from './components/TipoCuenta'
import paypal from '../../../../assets/paypal.png'
import stripe from '../../../../assets/stripe.png'

const Pasarela = ({estado}) => {
  return (
    <div className={styles.container}>
        <div style={{display:'flex', flexDirection:'row', gap:'10px', alignItems:'center'}}>
              <div className={styles.back} onClick={()=>{estado('anadir')}}>
              <Icon icon="formkit:arrowleft" />
              </div>
              <h4>Indica a qué banco pertenece la cuenta</h4>
          </div>
        <h5>Pasarelas de pago disponible</h5>
        <div className={styles.campos}>
        <TipoCuenta borde={true} icono={<img src={paypal} alt="" />} titulo={'Paypal'} descripcion={true}/>
        <TipoCuenta borde={true} icono={<img src={stripe} alt="" />} titulo={'Stripe'} descripcion={true}/>
        <TipoCuenta icono={<Icon icon="flowbite:window-solid" />} titulo={'Añadir manualmente'} descripcion={true} conexion={true}/>
        </div>
    </div>
  )
}

export default Pasarela