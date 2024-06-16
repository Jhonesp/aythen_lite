import React from 'react'
import style from './ProximoImpuestoCampo.module.css'
import { Icon } from '@iconify/react';

const ProximoImpuestoCampo = ({numero}) => {
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
        <Icon icon="ci:chevron-right" />
    </div>
  )
}

export default ProximoImpuestoCampo