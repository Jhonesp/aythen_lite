import React from 'react'
import styles from './Resultado.module.css'
import Subcampo from './Subcampo'

const Resultado = () => {
  return (
    <div className={styles.liquidacion_container}>
        <h2>5 - Resultado</h2>
        <div className={styles.categorias}>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Regularización cuotas art. 80.Cinco.5ª LIVA</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Atribuible a la Administración del Estado</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>IVA a la importación liquidado por la Aduana pendiente de ingreso</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Cuotas a compensar pendientes de períodos anteriores</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Cuotas a compensar de períodos anteriores aplicadas en este periodo</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Regularización cuotas art. 80.Cinco.5ª LIVA</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Cuotas a compensar de periodos previos pendientes para periodos posteriores (110 - 78)</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Resultado (66 + 77 - 78 + 68)</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Exclusivamente  para sujetos pasivos que tributan conjuntamente a la Administración del  Estado y las Haciendas Forales. Resultado de la regularización anual</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>A  deducir (exclusivamente en caso de autoliquidación complementaria):  Resultado de la anterior o anteriores declaraciones del mismo concepto,  ejercicio y periodo</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Devoluciones acordadas por la Agencia Tributaria como consecuencia de la tramitación  de anteriores autoliquidaciones correspondientes al ejercicio y período  objeto de la autoliquidación</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Resultado de la liquidación (69 - 70 + 109)</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.top}>
            <p>Complementaria (8)</p>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Si esta autoliquidación es complementaria de otra autoliquidación anterior correspondiente al mismo concepto, ejercicio y período, indíquelo  marcando con una "X" esta casilla.</p>
              <div className={styles.check}>
                <p className={styles.subtitulo}>Autoliquidación
                  complementaria</p>
                  <input type="checkbox" name="" id="" />
              </div>
            </div>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>En este caso, consigne a continuación el número de justificante identificativo de la declaración anterior.</p>
            </div>
            <div className={styles.sub}>
              <div className={styles.check}>
                <p className={styles.subtitulo} style={{marginRight: "20px"}}><span>Número de justificante</span></p>
                <input type="text" name='nro_justificante' id={styles.justificante}/>
              </div>
            </div>
          </div>
          <div className={styles.top}>
            <p>Información de la tributación por razón de territorio (sólo para sujetos pasivos que tributan a varias Administraciones)</p>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <div className={styles.subcampos} style={{flex: 1}}>
                <Subcampo titulo={"Álava"} numero={"01"}/>
                <Subcampo titulo={"Guipúzcoa"} numero={"01"}/>
                <Subcampo titulo={"Vizcaya"} numero={"01"}/>
                <Subcampo titulo={"Navarra"} numero={"01"}/>
              </div>
            </div>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Si ha  efectuado operaciones por las que tenga obligación de presentar la  declaración anual de operaciones con terceras personas, marque con una  "X"</p>
              <input type="checkbox" name="anual" id="" />
            </div>
          </div>
          <div className={styles.top}>
            <p>Operaciones realizadas en el ejercicio</p>
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Operaciones en régimen general</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Operaciones  a las que habiéndoles sido aplicado el régimen especial del criterio de  caja hubieran resultado devengadas conforme a la regla general de  devengo contenida en el art. 75 LIVA</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Entregas intracomunitarias exentas</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Exportaciones y otras operaciones exentas con derecho a deducción</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Operaciones exentas sin derecho a deducción</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Operaciones no sujetas por reglas de localización o con inversión del sujeto pasivo</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Entregas de bienes objeto de instalación o montaje en otros Estados miembros</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Operaciones en régimen simplificado</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Operaciones en régimen especial de la agricultura, ganadería y pesca</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Operaciones realizadas por sujetos pasivos acogidos al régimen especial del recargo de equivalencia</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Operaciones en Régimen especial de bienes usados, objetos de arte, antigüedades y objetos de colección</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Operaciones en régimen especial de Agencias de Viajes</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Entregas de bienes inmuebles y operaciones financieras no habituales</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Entregas de bienes de inversión</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
          <div className={styles.division}>
            <div className={styles.sub}>
              <p className={styles.subtitulo}>Total volumen de operaciones (Art. 121 Ley IVA) (80 + 81 + 93 + 94 + 83 + 84 + 85 + 86 + 95 + 96 + 97 + 98 - 79 - 99)</p>
              <div className={styles.subcampos}>
                <Subcampo numero={"01"}/>
              </div>
            </div>           
          </div>
        </div>
        <p id={styles.end}>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Resultado