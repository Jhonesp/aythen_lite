import React, { useState } from 'react'
import styles from './AnadirCampos.module.css'

const AnadirCampos = () => {
    const [descuento, setDescuento] = useState(false);
  return (
    <div className={styles.campos_container}>
        {(!descuento) && (
            <div className={styles.descuento}>
            <h3 onClick={()=>{setDescuento(true)}}>+ Añadir descuento</h3>
            </div>
        )}
        <div className={styles.anadir_container}>
            <div className={styles.anadir_campos}>
                <div className={styles.anadir_linea}>
                    <button>Añadir linea</button>
                    <select name="" id="">Añadir linea</select>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="campos" id="" />
                    <label htmlFor="campos">Campos personalizados</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="texto" id="" />
                    <label htmlFor="texto">Añadir texto en el documento</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="final" id="" />
                    <label htmlFor="final">Añadir mensaje al final</label>
                </div>
            </div>
            <div className={styles.total}>
                {descuento && (
                    <div>
                    <div className={`${styles.subtotal} ${styles.subsub}`} id={styles.first}>
                        <p>Subtotal sin descuento</p>
                        <h3>0,00€</h3>
                    </div>
                    <div className={`${styles.subtotal} ${styles.subsub}`}>
                    <input type="checkbox" name="descuento_prod" id="" />
                        <p>Descuento por producto</p>
                        <h3>0,00€</h3>
                    </div>
                    <div className={`${styles.subtotal} ${styles.subsub}`}>
                    <input type="checkbox" name="descuento_global" id="" />
                        <p>Descuento global</p>
                        <h3>0,00€</h3>
                    </div>
                    </div>
                )} 
                <div className={styles.subtotal}>
                    <p>Subtotal</p>
                    <h3>0,00€</h3>
                </div>
                <div className={styles.subtotal}>
                    <p>IVA</p>
                    <h3>0,00€</h3>
                </div>
                <div className={styles.subtotal}>
                    <p>Total</p>
                    <h3>0,00€</h3>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AnadirCampos