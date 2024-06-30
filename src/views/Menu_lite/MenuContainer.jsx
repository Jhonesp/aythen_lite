import styles from './MenuContainer.module.css'
import Header from './components/Header'
import ScrollBar from './components/ScrollBar'
import { useState } from 'react'
import Presupuesto from './components/Presupuesto'
import Gastos from './components/Gastos'
import Productos from './components/Productos'
import Contabilidad from './components/Contabilidad'
import Impuestos from './components/impuestos/Impuestos'
import Contactos from './components/Contactos'
import Banco from './components/Banco'


function MenuContainer() {
  const [active, setActive] = useState(3);

  return (
    <div className={styles.container}>
      <Header />
      <ScrollBar actualizarEstado={setActive}/>
      {(active === 1) &&(
        <Banco />
      )}
      {(active === 2) &&(
        <Banco />
      )}
      {(active === 3) &&(
        <Banco />
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
