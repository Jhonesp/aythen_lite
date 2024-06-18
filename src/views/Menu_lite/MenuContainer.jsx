import styles from './MenuContainer.module.css'
import Header from './components/Header'
import DatosNegocio from './components/DatosNegocio'
import Plan from './components/Plan'
import Learn from './components/Learn'
import Metricas from './components/Metricas'
import BankMethods from './components/BankMethods'
import Actions from './components/Actions'
import Consejos from './components/Consejos'
import Facturas from './components/Facturas'
import BankAdd from './components/BankAdd'
import ScrollBar from './components/ScrollBar'
import { useState } from 'react'
import BankTitle from './components/BankTitle'
import ScrollBarBanco from './components/ScrollBarBanco'
import Presupuesto from './components/Presupuesto'
import Gastos from './components/Gastos'
import Productos from './components/Productos'
import Contabilidad from './components/Contabilidad'
import Impuestos from './components/impuestos/Impuestos'
import Contactos from './components/Contactos'


function MenuContainer() {
  const [banco, setBanco] = useState();
  const [active, setActive] = useState(3);

  return (
    <div className={styles.container}>
      <Header />
      <ScrollBar actualizarEstado={setActive}/>
      {(active === 3) &&(
        <>
        <BankTitle />
        <ScrollBarBanco actualizarEstado={setBanco}/>
        {(banco == 'datos' && (<DatosNegocio />))}
        {(banco == 'facturas' && (<Facturas />))}
        {(banco == 'bancos' && (<BankAdd />))}
        {(banco == 'metodos' && (<BankMethods />))}
        <Plan />
        <Actions />
        <Consejos />
        <Metricas />
        <Learn />
        </>
      )}
      {(active === 4 && (
        <Contabilidad />
      ))}
      {(active === 5 && (
        <Contactos />
      ))}
      {(active === 6 && (
        <Presupuesto />
      ))}
      {(active === 7 && (
        <Gastos />
      ))}
      {(active === 8 && (
        <Productos />
      ))}
      {(active === 9 && (
        <Impuestos />
      ))}
      
      
      
    </div>
  )
}

export default MenuContainer
