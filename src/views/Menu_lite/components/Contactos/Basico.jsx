import React from 'react'
import styles from './Basico.module.css'

const Basico = () => {
  return (
    <div className={styles.container}>
        <div className={styles.fila}>
            <div className={styles.campo}>
                <label htmlFor="">Dirección</label>
                <input type="text" />
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Email</label>
                <input type="text" />
            </div>
        </div>
        <div className={styles.fila} >
            <div className={styles.campo} >
                <label htmlFor="">Población</label>
                <input type="text" style={{width:'90%'}}/>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Código Postal</label>
                <input type="text" style={{width:'90%'}}/>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Teléfono</label>
                <input type="text" style={{width:'90%'}}/>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Móvil</label>
                <input type="text" style={{width:'90%'}}/>
            </div>
        </div>
        <div className={styles.fila}>
            <div className={styles.campo}>
                <label htmlFor="">Provincia</label>
                <input type="text" />
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Pais</label>
                <input type="text" />
            </div>
            <div className={styles.campo} style={{flex:"2"}}>
                <label htmlFor="">Website</label>
                <input type="text" />
            </div>
        </div>
        <div className={styles.fila} style={{margin:"10px 0", marginTop:'20px'}}>
            <div className={styles.campo}>
                <label htmlFor="">Nombre comercial</label>
                <input type="text" placeholder='Nombre comercial'/>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Tags</label>
                <input type="text" placeholder='Tags'/>
            </div>
        </div>
        <div className={styles.fila} style={{margin:"10px 0"}}>
            <div className={styles.campo}>
                <label htmlFor="">Identificación VAT</label>
                <input type="text" placeholder='Identificación VAT'/>
            </div>
            <div className={styles.campo}>
                <label htmlFor="">Tipo de contacto</label>
                <input type="text" placeholder='Sin especificar'/>
            </div>
        </div>
        <div className={styles.boton}>
            <button>Crear</button>
        </div>
    </div>
  )
}

export default Basico