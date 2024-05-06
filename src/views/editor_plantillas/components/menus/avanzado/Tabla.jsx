import React from 'react'
import styles from './Tabla.module.css';
import HeightIcon from '@mui/icons-material/Height';

const Tabla = () => {
  return (
    <div className={styles.tabla_container}>
        <h3>Elementos de la tabla</h3>
        <p>Selecciona que columnas quieres que se muestren, establece su orden y personaliza los títulos.</p>
        <div className={styles.elementos_container}>
            <div className={styles.elemento} draggable="true">
                <div>
                    <h4>Nombre</h4>
                </div>
                <div className={styles.campos}>
                    <HeightIcon />
                    <div className={styles.check}>
                    <input type="checkbox" name="" id="" />
                    </div>
                    <input type="text" placeholder='Nombre'/>
                </div>
            </div>
            <div className={styles.elemento}>
                <div>
                    <h4>Descripción</h4>
                </div>
                <div className={styles.campos}>
                    <HeightIcon />
                    <div className={styles.check}>
                    <input type="checkbox" name="" id="" />
                    </div>
                    <input type="text" placeholder='Descripción'/>
                </div>
            </div>
            <div className={styles.elemento}>
                <div>
                    <h4>Precio</h4>
                </div>
                <div className={styles.campos}>
                    <HeightIcon />
                    <div className={styles.check}>
                    <input type="checkbox" name="" id="" />
                    </div>
                    <input type="text" placeholder='Precio'/>
                </div>
            </div>
            <div className={styles.elemento}>
                <div>
                    <h4>Unidades</h4>
                </div>
                <div className={styles.campos}>
                    <HeightIcon />
                    <div className={styles.check}>
                    <input type="checkbox" name="" id="" />
                    </div>
                    <input type="text" placeholder='Unidades'/>
                </div>
            </div>
            <div className={styles.elemento}>
                <div>
                    <h4>Descuento</h4>
                </div>
                <div className={styles.campos}>
                    <HeightIcon />
                    <div className={styles.check}>
                    <input type="checkbox" name="" id="" />
                    </div>
                    <input type="text" placeholder='Descuento'/>
                </div>
            </div>
            <div className={styles.elemento}>
                <div>
                    <h4>Peso</h4>
                </div>
                <div className={styles.campos}>
                    <HeightIcon />
                    <div className={styles.check}>
                    <input type="checkbox" name="" id="" />
                    </div>
                    <input type="text" placeholder='Peso'/>
                </div>
            </div>
            <div className={styles.elemento}>
                <div>
                    <h4>Peso total</h4>
                </div>
                <div className={styles.campos}>
                    <HeightIcon />
                    <div className={styles.check}>
                    <input type="checkbox" name="" id="" />
                    </div>
                    <input type="text" placeholder='Peso total'/>
                </div>
            </div>
            <div className={styles.elemento}>
                <div>
                    <h4>Subtotal</h4>
                </div>
                <div className={styles.campos}>
                    <HeightIcon />
                    <div className={styles.check}>
                    <input type="checkbox" name="" id="" />
                    </div>
                    <input type="text" placeholder='Subtotal'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tabla