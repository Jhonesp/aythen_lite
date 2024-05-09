import React from 'react'
import styles from './Liquidacion.module.css'
import Subcampo from './Subcampo'

const Liquidacion = () => {
  return (
    <div className={styles.liquidacion_container}>
        <h2>3 - Liquidacion</h2>
        <div className={styles.categorias}>
          <div className={styles.top}>
            <p>IVA devengado</p>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p ></p>
              <div className={styles.subcampos}>
                <Subcampo titulo={"Base Imponible"} numero={"01"}/>
                <Subcampo titulo={"Tipo %"} numero={"01"} small={true}/>
                <Subcampo titulo={"Cuota devengada"} numero={"01"}/>
              </div>
            </div>
            <div className={styles.sub}>
              <p> </p>
            <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
                <Subcampo numero={"01"} small={true}/>
                <Subcampo numero={"01"}/>
            </div>
            </div>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Regimen General</p>
            <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
                <Subcampo numero={"01"} small={true}/>
                <Subcampo numero={"01"}/>
            </div>
            </div>
            <div className={styles.sub}>
              <p> </p>
            <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
                <Subcampo numero={"01"} small={true}/>
                <Subcampo numero={"01"}/>
            </div>
            </div>
            <div className={styles.sub}>
              <p> </p>
            <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
                <Subcampo numero={"01"} small={true}/>
                <Subcampo numero={"01"}/>
            </div>
            </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Adquisiciones intracomunitarias de bienes y servicios</p>
            <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
                <Subcampo numero={"01"} margen={true}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Otras operaciones con inversión del sujeto pasivo (excepto adq. intracom.)</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"03"}/>
              <Subcampo numero={"03"} margen={true}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Modificación de bases y cuotas</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"04"}/>
              <Subcampo numero={"03"} margen={true}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p ></p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
                <Subcampo numero={"01"} small={true}/>
                <Subcampo numero={"01"}/>
                </div>
            </div>
            <div className={styles.sub}>
                <p className={styles.subtitulo}>Recargo equivalencia</p>
                <div className={styles.subcampos}>
                  <Subcampo numero={"01"}/>
                  <Subcampo numero={"01"} small={true}/>
                  <Subcampo numero={"01"}/>
                </div>
            </div>
            <div className={styles.sub}>
                <p></p>
                <div className={styles.subcampos}>
                  <Subcampo numero={"01"}/>
                  <Subcampo numero={"01"} small={true}/>
                  <Subcampo numero={"01"}/>
                </div>
            </div>
            <div className={styles.sub}>
                <p></p>
                <div className={styles.subcampos}>
                  <Subcampo numero={"01"}/>
                  <Subcampo numero={"01"} small={true}/>
                  <Subcampo numero={"01"}/>
                </div>
            </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Modificaciones bases y cuotas de recargo de equivalencia</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
              <Subcampo numero={"01"} margen={true}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Total cuota devengada (152 + 03 + 155 + 06 + 09 + 11 + 13 + 15 + 158 + 18 + 21 + 24 + 26)</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"08"}/>
            </div>
          </div>
          </div>
          <div className={styles.top}>
            <p>IVA deducible</p>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Por cuotas soportadas en operaciones interiores corrientes</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"} titulo={"Base Imponible"}/>
              <Subcampo numero={"01"} margen={true} titulo={"Cuota devengada"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Por cuotas soportadas en operaciones interiores con bienes de inversión</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
              <Subcampo numero={"01"} margen={true}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Por cuotas soportadas en las importaciones de bienes corrientes</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
              <Subcampo numero={"01"} margen={true}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Por cuotas soportadas en las importaciones de bienes de inversión</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
              <Subcampo numero={"01"} margen={true}/>
            </div>
          </div>
          
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>En adquisiciones intracomunitarias de bienes y servicios corrientes</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
              <Subcampo numero={"01"} margen={true}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>En adquisiciones intracomunitarias de bienes de inversión</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
              <Subcampo numero={"01"} margen={true}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Rectificación de deducciones</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
              <Subcampo numero={"01"} margen={true}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Compensaciones Régimen Especial A.G. y P.</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Regularización bienes de inversión</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Regularización por aplicación del porcentaje definitivo de prorrata</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Total a deducir (29 + 31 + 33 + 35 + 37 + 39 + 41 + 42 + 43 + 44)</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Resultado régimen general (27 - 45)</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
            </div>
          </div>
          </div>
        </div>
        <p id={styles.end}>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Liquidacion