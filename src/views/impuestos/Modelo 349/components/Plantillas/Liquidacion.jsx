import React from 'react'
import styles from './Liquidacion.module.css'
import Subcampo from './Subcampo'

const Liquidacion = () => {
  return (
    <div className={styles.liquidacion_container}>
        <h2>3 - Liquidacion</h2>
        <div className={styles.categorias}>
          <div className={styles.top}>
            <p>I.  Actividades económicas en estimación directa, modalidad normal o  simplificada, distintas de las agrícolas, ganaderas, forestales y  pesqueras.
(Datos acumulados del período comprendido entre el primer día del año y el último del trimestre).</p>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Ingresos computables correspondientes al conjunto de las actividades ejercidas</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"01"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Gastos fiscalmente deducibles correspondientes al conjunto de las actividades ejercidas</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"02"}/>
            </div>
          </div>
          <div className={styles.sub}>
            <div className={styles.check}>
              <input type="checkbox" name="" id="" />
              <p className={styles.subtitulo}>Incluir el 7% de gastos de difícil justificación</p>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Rendimiento neto ( [01] - [02] ). Si se obtiene una cantidad negativa, consignela con signo menos (-)</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"03"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>20  por 100 del importe de la casilla [03] si dicho importe es positivo. (Si  la casilla [03] fuese negativa, consigne el número cero)</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"04"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>A deducir:</p>
            </div>
            <div className={styles.sub}>
                <p className={`${styles.subtitulo} ${styles.subsub}`}>De los trimestres anteriores: suma de los importes positivos de la casilla [07] menos la suma de los importes de la casilla [16]</p>
                <div className={styles.subcampos}>
                  <Subcampo numero={"05"}/>
                </div>
            </div>
            <div className={styles.sub}>
                <p className={`${styles.subtitulo} ${styles.subsub}`}>Retenciones  e ingresos a cuenta soportados por las actividades incluidas en este  apartado y correspondientes al período comprendido entre el primer día  del año y el último día del trimestre</p>
                <div className={styles.subcampos}>
                  <Subcampo numero={"06"}/>
                </div>
            </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}><span>Pago fraccionado previo del trimestre</span> ([04]- [05] - [06]). Si se obtiene una cantidad negativa, consignela con signo menos (-)</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"07"}/>
            </div>
          </div>
          </div>
          <div className={styles.top}>
            <p>II. Actividades agrícolas, ganaderas, forestales y pesqueras en estimación directa, modalidad normal o simplificada.</p>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Volumen de ingreso del trimestre (excluidas las subvenciones de capital y las indemnizaciones)</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"08"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>2 por 100 de importe de la casilla [08]</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"09"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>A  deducir: Retenciones e ingresos a cuenta soportados por las actividades  incluidas en este apartado y correspondiente al trimestre</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"10"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}><span>Pago fraccionado previo del trimestre</span> ( [09] - [10] ). Si se obtiene una cantidad negativa, consignela con signo menos (-)</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"11"}/>
            </div>
          </div>
          </div>
          <div className={styles.top}>
            <p>III. Total liquidación:</p>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Suma  de pagos fraccionados previos del trimestre ( [07] + [11] ). Si se  obtiene una cantidad negativa, consigne el número cero (0)</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"12"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>A deducir: Minoración por aplicación de la deducción a que se refiere el artículo 80 bis de la Ley del Impuesto</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"13"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}><span>Diferencia</span>( [12] - [13] ). Si se obtiene una cantidad negativa, consignela con signo menos (-)</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"14"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>A deducir (si la diferencia anterior es positiva y con el máximo de su importe):</p>
          </div>
          <div className={styles.sub}>
                <p className={`${styles.subtitulo} ${styles.subsub}`}>Resultados negativos de trimestres anteriores</p>
                <div className={styles.subcampos}>
                  <Subcampo numero={"15"}/>
                </div>
            </div>
            <div className={styles.sub}>
                <p className={`${styles.subtitulo} ${styles.subsub}`}>Por destinar cantidades al pago de préstamos para la adquisición o  rehabilitación de la vivienda habitual: El 2 por 100 de [03] (máximo  660,14 euros por trimestre) o el 2 por 100 de [08] (máximo: 660,14 euros  anuales)</p>
                <div className={styles.subcampos}>
                  <Subcampo numero={"16"}/>
                </div>
            </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}><span>Total</span> ( [14] - [15] - [16] ). Si se obtiene una cantidad negativa, consignela con signo menos (-)</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"17"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>A  deducir (exclusivamente en caso de declaración complementaria):  Resultado a ingresar de las anteriores declaraciones presentadas por el  mismo concepto, ejercicio y período</p>
            <div className={styles.subcampos}>
              <Subcampo numero={"18"}/>
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}><span>Resultado de la declaración ( [17] - [18] )</span></p>
            <div className={styles.subcampos}>
              <Subcampo numero={"19"}/>
            </div>
          </div>
          </div>
        </div>
        <p id={styles.end}>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Liquidacion