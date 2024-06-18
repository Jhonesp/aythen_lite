import Editor from "./views/editor_plantillas/Editor"
import NuevoPresupuesto from "./views/ventas/NuevoPresupuesto"
import FacturaContainer from "./views/ventas/FacturaContainer"
import Impuesto111Container from './views/impuestos/Modelo 111/ImpuestoContainer'
import Impuesto115Container from './views/impuestos/Modelo 115/ImpuestoContainer'
import Impuesto123Container from './views/impuestos/Modelo 123/ImpuestoContainer'
import Impuesto130Container from './views/impuestos/Modelo 130/ImpuestoContainer'
import Impuesto303Container from "./views/impuestos/Modelo 303/ImpuestoContainer"
import Impuesto349Container from "./views/impuestos/Modelo 349/ImpuestoContainer"
import Impuesto369Container from "./views/impuestos/Modelo 369/ImpuestoContainer"
import Impuesto190Container from "./views/impuestos/Modelo 190/ImpuestoContainer"
import MenuContainer from "./views/Menu_lite/MenuContainer"
import Analitics from "./views/Analiticas/Analitics"
import ContabilidadContainer from "./views/Contabilidad/ContabilidadContainer"
import AnaliticaInformes from "./views/Analitica - Informes/AnaliticaInformes"
import NuevosProductos from "./views/Productos/NuevosProductos"
import NuevaCompra from "./views/Gasto/NuevaCompra"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {path: '/aythen_lite/', element: <MenuContainer />},
    {path: '/Contabilidad', element: <ContabilidadContainer/>},
    {path: '/NuevoProducto', element: <NuevosProductos/>},
    {path: '/Nuevopresupuesto', element: <NuevoPresupuesto />},
    {path: '/Nuevacompra', element: <NuevaCompra />},
    {path: '/Modelo111', element: <Impuesto111Container />},
    {path: '/Modelo115', element: <Impuesto115Container />},
    {path: '/Modelo123', element: <Impuesto123Container />},
    {path: '/Modelo130', element: <Impuesto130Container />},
    {path: '/Modelo303', element: <Impuesto303Container />},
    {path: '/Modelo349', element: <Impuesto349Container />}
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
