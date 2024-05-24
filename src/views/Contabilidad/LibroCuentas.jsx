import React from 'react'
import styles from './LibroCuentas.module.css'
import Campo from './components/Campo'

const LibroCuentas = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.topsub}></div>
            <div className={styles.topsub}>Cuenta</div>
            <div className={styles.topsub} style={{flex:3}}>Nombre</div>
            <div className={styles.topsub}>Grupo</div>
            <div className={styles.topsub}>Debe</div>
            <div className={styles.topsub}>Haber</div>
            <div className={styles.topsub}>Saldo</div>
        </div>
        <div>
          <Campo cuenta={10000000} nombre={"Capital social"} grupo={"Financiación básica"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#512663"} cuenta={11000000} nombre={"Prima de emisión y asunción"} grupo={"Financiación básica"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#923AF4"} cuenta={11200000} nombre={"Reserva legal"} grupo={"Financiación básica"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#8AF115"} cuenta={12000000} nombre={"Remanente"} grupo={"Financiación básica"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#7D06E9"} cuenta={12100000} nombre={"Resultados negativos de ejercicios anteriores"} grupo={"Financiación básica"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#D63333"} cuenta={12900000} nombre={"Resultados del ejercicio"} grupo={"Financiación básica"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#AF1BD4"} cuenta={17000000} nombre={"Deudas a largo plazo con entidades de crédito"} grupo={"Financiación básica"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#C5F98E"} cuenta={17100000} nombre={"Deudas a largo plazo"} grupo={"Financiación básica"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#EFFDE6"} cuenta={17300000} nombre={"Proveedores de inmovilizado a largo plazo"} grupo={"Financiación básica"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#C6B03C"} cuenta={17500000} nombre={"Efecto a pagar a largo plazo"} grupo={"Financiación básica"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#5F657D"} cuenta={18000000} nombre={"Fianzas recibidas a largo plazo"} grupo={"Financiación básica"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#1B56D2"} cuenta={18100000} nombre={"Anticipos recibidos por ventas o prestaciones de servicios a largo plazo"} grupo={"Financiación básica"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#3B8A43"} cuenta={20000000} nombre={"Investigación"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#4B0AA6"} cuenta={20100000} nombre={"Desarrollo"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#B48D49"} cuenta={20200000} nombre={"Concesiones administrativas"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#9EC9BA"} cuenta={20300000} nombre={"Propiedad industrial"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#C77BF0"} cuenta={20400000} nombre={"Fondo comercio"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#EC481F"} cuenta={20500000} nombre={"Derecho de traspaso"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#3B3DD5"} cuenta={20600000} nombre={"Aplicaciones informáticas"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#A8638C"} cuenta={20900000} nombre={"Anticipos para inmovilizaciones intangibles"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#944014"} cuenta={21000000} nombre={"Terrenos y bienes naturales"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#4E6A56"} cuenta={21100000} nombre={"Construcciones"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#A79419"} cuenta={21200000} nombre={"Instalaciones técnicas"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#F54F2E"} cuenta={21300000} nombre={"Maquinaria"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#DC48E7"} cuenta={21400000} nombre={"Utillaje"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#1941AF"} cuenta={21500000} nombre={"Otras instalaciones"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#F030D1"} cuenta={21600000} nombre={"Mobiliario"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#020194"} cuenta={21700000} nombre={"Equipos para procesos de información"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#D7A8C1"} cuenta={21800000} nombre={"Elementos de transporte"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#810839"} cuenta={21900000} nombre={"Otro inmovilizado material"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#670B8B"} cuenta={25200000} nombre={"Créditos a largo plazo"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#CBD72D"} cuenta={25800000} nombre={"Imposiciones a largo plazo"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#C3F7A8"} cuenta={26000000} nombre={"Fianzas constituidas a largo plazo"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#179503"} cuenta={26500000} nombre={"Depósitos constituidos a largo plazo"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#9D64AF"} cuenta={28000000} nombre={"Amortización acumulada de investigación"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#72AF74"} cuenta={28010000} nombre={"Amortización acumulada de desarrollo"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#54D9AA"} cuenta={28020000} nombre={"Amortización acumulada de concesiones administrativas"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#7ADEFB"} cuenta={28030000} nombre={"Amortización acumulada de propiedad industrial"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#1AC876"} cuenta={28040000} nombre={"Amortización acumulada de fondo de comercio"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#033B9D"} cuenta={28050000} nombre={"Amortización acumulada de derechos de traspaso"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#A77D91"} cuenta={28060000} nombre={"Amortización acumulada de aplicaciones informáticas"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#EAE434"} cuenta={28140000} nombre={"Amortización acumulada de utillaje"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#F44BA1"} cuenta={28150000} nombre={"Amortización acumulada de otras instalaciones"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#50EC1B"} cuenta={28160000} nombre={"Amortización acumulada de mobiliario"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#AF903E"} cuenta={28170000} nombre={"Amortización acumulada de equipos para procesos de información"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#209F9E"} cuenta={28180000} nombre={"Amortización acumulada de elementos de transporte"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#5468DD"} cuenta={28190000} nombre={"Amortización acumulada de otro inmovilizado material"} grupo={"Activo no corriente"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#691D79"} cuenta={30000000} nombre={"Mercaderías A"} grupo={"Existencias"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#BFEA01"} cuenta={31000000} nombre={"Materias primas A"} grupo={"Existencias"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#C7ABB0"} cuenta={32500000} nombre={"Materiales diversos"} grupo={"Existencias"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
        </div>
    </div>
  )
}

export default LibroCuentas