import React from 'react'
import styles from './Liquidacion.module.css'
import Subcampo from './Subcampo'

const Liquidacion = () => {
  return (
    <div className={styles.liquidacion_container}>
        <h2>3 - Liquidacion</h2>
        <div className={styles.categorias}>
          <div className={styles.top}>
            <p>I. Rendimientos del trabajo</p>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Rendimientos diarios</p>
            <div className={styles.subcampos}>
              <Subcampo titulo={"N° de preceptores"} numero={"01"}/>
              <Subcampo titulo={"Importe de las percepciones"} numero={"02"}/>
              <Subcampo titulo={"Importe de las retenciones"} numero={"03"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Rendimientos en especie</p>
            <div className={styles.subcampos}>
              <Subcampo titulo={"N° de preceptores"} numero={"04"}/>
              <Subcampo titulo={"Valor percepciones en especie"} numero={"05"}/>
              <Subcampo titulo={"Importe de los ingresos a la cuenta"} numero={"06"}/>
            </div>
          </div>
          <div className={styles.top}>
            <p>II. Rendimientos de actividades económicas</p>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Rendimientos dinerarios</p>
            <div className={styles.subcampos}>
              <Subcampo titulo={"N° de preceptores"} numero={"07"}/>
              <Subcampo titulo={"Importe de las percepciones"} numero={"08"}/>
              <Subcampo titulo={"Importe de las retenciones"} numero={"09"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Rendimientos en especie</p>
            <div className={styles.subcampos}>
              <Subcampo titulo={"N° de preceptores"} numero={"10"}/>
              <Subcampo titulo={"Valor percepciones en especie"} numero={"11"}/>
              <Subcampo titulo={"Importe de los ingresos a cuenta"} numero={"12"}/>
            </div>
          </div>
          <div className={styles.top}>
            <p>III. Premios por la participación en juegos, concursos, rifas o combinaciones aleatorias</p>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Premios en metálico</p>
            <div className={styles.subcampos}>
              <Subcampo titulo={"N° de preceptores"} numero={"13"}/>
              <Subcampo titulo={"Importe de las percepciones"} numero={"14"}/>
              <Subcampo titulo={"Importe de las retenciones"} numero={"15"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Premios en especie</p>
            <div className={styles.subcampos}>
              <Subcampo titulo={"N° de preceptores"} numero={"16"}/>
              <Subcampo titulo={"Valor percepciones en especie"} numero={"17"}/>
              <Subcampo titulo={"Importe de los ingresos a cuenta"} numero={"18"}/>
            </div>
          </div>
          <div className={styles.top}>
            <p>IV. Ganancias patrimoniales derivadas de los aprovechamientos forestales de los vecinos en montes públicos</p>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Percepciones dinerarias</p>
            <div className={styles.subcampos}>
              <Subcampo titulo={"N° de preceptores"} numero={"19"}/>
              <Subcampo titulo={"Importe de las percepciones"} numero={"20"}/>
              <Subcampo titulo={"Importe de las retenciones"} numero={"21"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Percepciones en especie</p>
            <div className={styles.subcampos}>
              <Subcampo titulo={"N° de preceptores"} numero={"22"}/>
              <Subcampo titulo={"Valor percepciones en especie"} numero={"23"}/>
              <Subcampo titulo={"Importe de los ingresos a cuenta"} numero={"24"}/>
            </div>
          </div>
          <div className={styles.top}>
            <p>V.  Contraprestaciones por la cesión de derechos de imagen: ingresos a  cuenta previstos en el artículo 92.8 de la Ley del Impuesto</p>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Contraprestaciones dinerarias o en especie</p>
            <div className={styles.subcampos}>
              <Subcampo titulo={"N° de preceptores"} numero={"25"}/>
              <Subcampo titulo={"Importe de las percepciones"} numero={"26"}/>
              <Subcampo titulo={"Importe de las retenciones"} numero={"27"}/>
            </div>
          </div>
          <div className={styles.top}>
            <p>Total liquidación:</p>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Suma de retenciones e ingresos a cuenta ( [03] + [06] + [09] + [12] + [15] + [18] + [21] + [24] + [27] )</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"28"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>A deducir (exclusivamente en caso de autoliquidación complementaria):
Resultados a ingresar de anteriores autoliquidaciones por el mismo concepto, ejercicio y período</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"29"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Resultado a ingresar ( [28] - [29] )</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"30"}/>
            </div>
          </div>
        </div>
        <p id={styles.end}>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Liquidacion