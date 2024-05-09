import React from 'react'
import styles from './Informacion.module.css'
import Subcampo from './Subcampo'

const Informacion = () => {
  return (
    <div className={styles.liquidacion_container}>
        <h2>4- Información adicional</h2>
        <div className={styles.categorias}>
          <div className={styles.top}>
            <p>IVA devengado</p>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Entregas intracomunitarias de bienes y servicios</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>            
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
                <p className={styles.subtitulo}>Exportaciones y operaciones asimiladas</p>
              <div className={styles.subcampos}>
                  <Subcampo numero={"01"}/>
              </div>
              </div>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
                <p className={styles.subtitulo}>Operaciones no sujetas por reglas de localización (excepto las incluidas en la casilla 123)</p>
              <div className={styles.subcampos}>
                  <Subcampo numero={"01"}/>
              </div>
              </div>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
                <p className={styles.subtitulo}>Operaciones sujetas con inversión del sujeto pasivo</p>
              <div className={styles.subcampos}>
                  <Subcampo numero={"01"}/>
              </div>
              </div>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
                <p className={styles.subtitulo}>Operaciones no sujetas por reglas de localización acogidas a los regímenes especiales de ventanilla única</p>
              <div className={styles.subcampos}>
                  <Subcampo numero={"01"}/>
              </div>
              </div>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
                <p className={styles.subtitulo}>Operaciones sujetas y acogidas a los regímenes especiales de ventanilla única</p>
              <div className={styles.subcampos}>
                  <Subcampo numero={"01"}/>
              </div>
              </div>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
                <p className={styles.subtitulo}>Importes  de las entregas de bienes y prestaciones de servicios a las que  habiéndoles sido aplicado el régimen especial del criterio de caja  hubieran resultado devengadas conforme a la regla general de devengo  contenida en el art. 75 LIVA</p>
              <div className={styles.subcampos}>
                  <Subcampo titulo={"Base Imponible"} numero={"01"} small={true}/>
                  <Subcampo titulo={"Cuota"} numero={"01"} small={true}/>
              </div>
              </div>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
                <p className={styles.subtitulo}>Importes  de las adquisiciones de bienes y servicios a las que sea de aplicación o  afecte el régimen especial del criterio de caja</p>
              <div className={styles.subcampos}>
                  <Subcampo titulo={"Base Imponible"} numero={"01"} small={true}/>
                  <Subcampo titulo={"Cuota soportada"} numero={"01"} small={true}/>
              </div>
              </div>
          </div>
        </div>
        <p id={styles.end}>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Informacion