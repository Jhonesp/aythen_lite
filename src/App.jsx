import Editor from "./views/editor_plantillas/Editor"
import NuevoPresupuesto from "./views/ventas/NuevoPresupuesto"
import FacturaContainer from "./views/ventas/FacturaContainer"
import Impuesto130Container from './views/impuestos/Modelo 130/ImpuestoContainer'
import Impuesto303Container from "./views/impuestos/Modelo 303/ImpuestoContainer"
import Impuesto349Container from "./views/impuestos/Modelo 349/ImpuestoContainer"
import Impuesto369Container from "./views/impuestos/Modelo 369/ImpuestoContainer"

function App() {

  return (
    <>
    <Impuesto369Container />
    </>
  )
}

export default App
