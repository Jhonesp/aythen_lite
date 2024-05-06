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


function MenuContainer() {

  return (
    <div className={styles.container}>
      <Header />
      <DatosNegocio />
      <Plan />
      <Facturas />
      <BankAdd />
      <Actions />
      <Consejos />
      <BankMethods />
      <Metricas />
      <Learn />
      
    </div>
  )
}

export default MenuContainer
