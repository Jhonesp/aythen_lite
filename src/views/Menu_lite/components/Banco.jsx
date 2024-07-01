import React,{useState, useEffect} from 'react'
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
import BankCard from './BankCard';

const Banco = () => {
    const [banco, setBanco] = useState();
    const [banks, setBanks] = useState([]);
    const posts_URL = 'https://aythem-lite-backend.vercel.app'

    async function fetchBanks(){
      const response = await fetch(posts_URL+'/posts');
      const resData = await response.json();
      setBanks(resData.posts);
  }

  useEffect(() => {    
    fetchBanks();
  }, [])

  function isBanks(){
    if(banks.length() > 0 ){
      return true
    }else return false
  }

  return (
    <div className={styles.container}>
        {banks.map((item) => (
                    <BankCard titulo={item.bank} nombre={item.user} key={item._id}/>
        ))}
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