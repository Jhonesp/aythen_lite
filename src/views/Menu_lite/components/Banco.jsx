import React,{useState} from 'react'
import styles from './Banco.module.css'
import BankTitle from './BankTitle';
import DatosNegocio from './DatosNegocio';
import Facturas from './Facturas';
import BankAdd from './BankAdd';
import BankMethods from './BankMethods';
import ScrollBarBanco from './ScrollBarBanco';
import Plan from './Plan';
import Actions from './Actions';
import Consejos from './Consejos';
import Metricas from './Metricas';
import Learn from './Learn';
import AnadirBanco from './Banco/AnadirBanco';

const Banco = () => {
    const [banco, setBanco] = useState();
  return (
    <div className={styles.container}>
        <AnadirBanco />
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
    </div>
  )
}

export default Banco