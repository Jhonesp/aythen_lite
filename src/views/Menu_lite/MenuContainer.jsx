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


function MenuContainer() {
  let [active, setActive] = useState();
  const [contenido, setContenido] = useState();
  function handleChange(estado){
    switch (estado) {
      case 'datos':
        setContenido(<DatosNegocio />)
        break;
    
      default:
        break;
    }
  }

  return (
    <div className={styles.container}>
      <Header />
      <ScrollBar actualizarEstado={setActive}/>
      <BankTitle />
      <ScrollBarBanco actualizarEstado={setActive}/>
      {(active == 'datos' && (<DatosNegocio />))}
      {(active == 'facturas' && (<Facturas />))}
      {(active == 'bancos' && (<BankAdd />))}
      {(active == 'metodos' && (<BankMethods />))}
      <Plan />
      <Actions />
      <Consejos />
      <Metricas />
      <Learn />
      
    </div>
  )
}

export default MenuContainer
