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
          {/*Pagina 2 */}
          <Campo color={"#98FB8E"} cuenta={32600000} nombre={"Embalajes"} grupo={"Existencias"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#1B72D7"} cuenta={32700000} nombre={"Envases"} grupo={"Existencias"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#29DCEE"} cuenta={32800000} nombre={"Material de oficina"} grupo={"Existencias"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#A0F81F"} cuenta={33000000} nombre={"Productos en curso A"} grupo={"Existencias"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#262BA9"} cuenta={34000000} nombre={"Productos semiterminados A"} grupo={"Existencias"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#C27C28"} cuenta={35000000} nombre={"Productos terminados A"} grupo={"Existencias"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#99B915"} cuenta={39000000} nombre={"Deterioro de valor de las mercaderías"} grupo={"Existencias"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#016BA3"} cuenta={39100000} nombre={"Deterioro de valor de las materias primas"} grupo={"Existencias"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#431DA6"} cuenta={39200000} nombre={"Deterioro de valor de otros aprovisionamiento"} grupo={"Existencias"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#8CF1C9"} cuenta={40000000} nombre={"Proveedores euros"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#F8E660"} cuenta={40040000} nombre={"Proveedores moneda extranjera"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#05D168"} cuenta={40090000} nombre={"Proveedores, facturas pendientes de recibir o formalizar"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#5EA1DA"} cuenta={40100000} nombre={"Proveedores, efectos comerciales a pagar"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#C7A04C"} cuenta={41000000} nombre={"Acreedores por prestaciones de servicios (euros)"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#5C3CF9"} cuenta={41040000} nombre={"Acreedores por prestaciones de servicios (moneda extranjera)"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#AA7B4A"} cuenta={41090000} nombre={"Acreedores por prestaciones de servicios, facturas pendientes de recibo"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#FEEC09"} cuenta={41100000} nombre={"Acreedores, efectos comerciales a pagar"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#322E70"} cuenta={43000000} nombre={"Clientes"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#8B7009"} cuenta={43040000} nombre={"Clientes (moneda extranjera)"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#95EF66"} cuenta={43080000} nombre={"Clientes, retenciones por garantía"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#812FB0"} cuenta={43090000} nombre={"Clientes, factura pendientes de formalizar"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#11AB15"} cuenta={43100000} nombre={"Efectos comerciales en cartera"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#CF1FF6"} cuenta={43200000} nombre={"Clientes, operaciones de factoring"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#28E50E"} cuenta={44000000} nombre={"Deudores (euros)"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#D4A82F"} cuenta={44040000} nombre={"Deudores (moneda extranjera)"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#0DBED3"} cuenta={44090000} nombre={"Deudores, facturas pendientes de formalizar"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#F59E45"} cuenta={44100000} nombre={"Deudores, efectos comerciales en cartera"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#4E7E5A"} cuenta={44600000} nombre={"Deudores de dudoso cobro"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#965CE2"} cuenta={46000000} nombre={"Anticipos de remuneraciones"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#0B7369"} cuenta={46500000} nombre={"Remuneraciones pendientes de pago"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#900A58"} cuenta={46600000} nombre={"Remuneraciones mediante sistemas de aportación definida pendientes de pago"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#BA55B6"} cuenta={47000000} nombre={"Hacienda Pública, deudora por IVA"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#39F102"} cuenta={47100000} nombre={"Organismos de la Seguridad Social, deudores"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#2ED6C4"} cuenta={47200000} nombre={"Hacienda Pública, IVA soportado"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#28ABB4"} cuenta={47300000} nombre={"Haciendo Pública, retenciones y pago a cuenta"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#96ECDD"} cuenta={47500000} nombre={"Haciendo Pública, acreedora por IVA"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#8DC993"} cuenta={47510000} nombre={"Hacienda Pública, acreedora por retenciones practicadas"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#8C14A9"} cuenta={47520000} nombre={"Hacienda Pública, acreedora por impuesto sobre sociedades"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#8E7323"} cuenta={47600000} nombre={"Organismos de la Seguridad Social, acreedores"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#394F04"} cuenta={47700000} nombre={"Hacienda Pública, IVA repercutido"} grupo={"Clientes y proveedores"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#4C2439"} cuenta={52000000} nombre={"Préstamos a corto plazo de entidades de crédito"} grupo={"Cuentas financieras"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#DBCC84"} cuenta={52090000} nombre={"Deudas por operaciones de factoring"} grupo={"Cuentas financieras"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#6B4860"} cuenta={52100000} nombre={"Deudas a corto plazo"} grupo={"Cuentas financieras"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#4EB03C"} cuenta={52300000} nombre={"Proveedores de inmovilizado a corto plazo"} grupo={"Cuentas financieras"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#90FC80"} cuenta={52400000} nombre={"Acreedores por arrendamiento financiero a corto plazo"} grupo={"Cuentas financieras"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#E7276E"} cuenta={52500000} nombre={"Efecto a pagar a corto plazo"} grupo={"Cuentas financieras"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#2D486F"} cuenta={52700000} nombre={"Intereses a corto plazo de deudas con entidades de crédito"} grupo={"Cuentas financieras"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#2A2682"} cuenta={52800000} nombre={"Intereses a corto plazo de deudas"} grupo={"Cuentas financieras"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#2035ED"} cuenta={54200000} nombre={"Créditos a corto plazo"} grupo={"Cuentas financieras"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          {/*Pagina 3*/}
          <Campo color={"#4C2439"} cuenta={32500000} nombre={"Materiales"} grupo={"Cuentas financieras"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#4C2439"} cuenta={32500000} nombre={"Materiales"} grupo={"Cuentas financieras"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>
          <Campo color={"#4C2439"} cuenta={32500000} nombre={"Materiales"} grupo={"Cuentas financieras"} debe={"0,00"} haber={"0,00"} saldo={"0,00"}/>

        </div>
    </div>
  )
}

export default LibroCuentas