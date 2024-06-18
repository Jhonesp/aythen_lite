import React from 'react'
import style from './ProximoImpuestoCampo.module.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const ProximoImpuestoCampo = ({numero, link}) => {
  return (
    <div className={style.campo}>
        <div style={{display:"flex", flexDirection:"row",gap:"10px"}}>
            <div className={style.icono}>
                {numero}
            </div>
            <div className={style.desc}>
                <h4>Modelo {numero} trimestral</h4>
                <div style={{display:"flex", flexDirection:"row",gap:"5px", alignItems:"center"}}>
                    <p>1 Trimestre</p>
                    <div className={style.pendiente}>Pendiente</div>
                </div>
            </div>
        </div>
        <Link to={link}>
        <Icon icon="ci:chevron-right" />
        </Link>
    </div>
  )
}

export default ProximoImpuestoCampo