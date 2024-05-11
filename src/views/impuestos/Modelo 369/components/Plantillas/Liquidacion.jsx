import React from 'react'
import styles from './Liquidacion.module.css'
import Subcampo from './Subcampo'

const Declaracion = () => {
  const elementos = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className={styles.liquidacion_container}>
        <h2>Resúmen declaración</h2>
        <div className={styles.categorias}>
          {elementos.map((elementos, index) =>(
            <div key={index} className={styles.division}>
            <div className={styles.sub}>            
              <div className={styles.subcampos}>
                <Subcampo titulo={"Código país"} width={"56px"} />
                <Subcampo titulo={"NIVA/Otros códigos identificativos"} width={"190px"} />
                <Subcampo titulo={"Código país EM de consumo"} width={"150px"} />
                <Subcampo titulo={"Tipo de IVA"} width={"52px"} />
                <Subcampo titulo={"Base imponible (EUR)"} width={"110px"} />
                <Subcampo titulo={"Cuota IVA (EUR)"} width={"80px"} />
              </div>
            </div>
            </div>
          ))}
        </div>
        <p id={styles.end}>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Declaracion