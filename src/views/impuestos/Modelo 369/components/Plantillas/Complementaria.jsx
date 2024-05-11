import React from 'react'
import styles from './Liquidacion.module.css'
import Subcampo from './Subcampo'

const Complementaria = () => {
  return (
    <div className={styles.liquidacion_container}>
        <h2>Declaración complementaria o sustitutiva</h2>
        <div className={styles.categorias}>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Si la  presentación de esta declaración tiene por objeto incluir operaciones  que, debiendo haber figurado en otra declaración del mismo ejercicio y  período presentada anteriormente, hubiera sido complemente omitidas en  la misma, marque con una "X" la casilla "Declaración complementaria".</p>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>
Cuando  la presentación de esta declaración tenga por objeto anular y sustituir  completamente otra declaración anterior del mismo ejercicio y período  en la cual se hubieran consignado datos inexactos, o erróneos, indique  su carácter de declaración sustitutiva marcando con una "X" la casilla  correspondiente.</p>
          </div>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>En caso de declaraciones sustitutivas, se hará  constar a continuación el número identificativo de la declaración  anterior que se sustituye mediante la nueva.</p>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Declaración complementaria</p>
            <div className={styles.subcampos}>
              <input type="checkbox" name="" id="" />
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Declaración sustitutiva</p>
            <div className={styles.subcampos}>
              <input type="checkbox" name="" id="" />
            </div>
          </div>
          </div>
          <div className={styles.division}>
          <div className={styles.sub}>
            <p className={styles.subtitulo}>Número identificativo de la declaración anterior</p>
            <div className={styles.subcampos}>
              <input type="text" />
            </div>
          </div>
          </div>
        </div>
        <p id={styles.end}>*  Aythen no se hace responsable de la información detallada en el modelo. Antes de realizar la presentación en la Agencia Tributaria (AEAT), comprueba los datos teniendo en cuenta que provienen de operaciones  registradas en la plataforma previamente.</p>
    </div>
  )
}

export default Complementaria