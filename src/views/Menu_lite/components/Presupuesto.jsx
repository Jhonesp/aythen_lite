import React from 'react'
import styles from './Presupuesto.module.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import CustomSelect from '../../../components/CustomSelect';

const Presupuesto = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.small_boton}>
            <Icon icon="cil:drop" />
            </div>
            <div className={styles.small_boton}>
            <Icon icon="bi:book" />
            </div>
            <div className={styles.small_boton}>
            <Icon icon="pepicons-pencil:dots-y" />
            </div>
            <Link to='/Nuevopresupuesto'><div className={styles.boton}>
                Nuevo Presupuesto
            </div></Link>
        </div>

        <div className={styles.contenido}>
            <div className={styles.top}>
                <div>
                    <CustomSelect options={[{label: 'Todos', value:'Todos'}]} />
                </div>
                <div style={{display:"flex", flexDirection:"row", gap:"8px", alignItems:"center"}}>
                    <Icon icon="ion:search-outline" id={styles.icono}/>
                    <input type="text" />
                    <div className={styles.small_boton}>
                    <Icon icon="icons8:download-2" />
                    </div>
                </div>
            </div>
            <div className={styles.imagen}>
            <img src="https://github.com/Jhonesp/aythen_lite/blob/main/src/assets/aythenmenu.png?raw=true" alt="imagen" />
            </div>
            <div className={styles.desc}>
                <h4>Presupuestos</h4>
                <p>Desde  aquí puedes crear nuevos presupuestos, enviar presupuestos  personalizados y verificar si tus clientes han abierto los emails.  También puedes comprobar el estado de los presupuestos.</p>
                <div style={{display:"flex", gap:"10px"}}>
                    <Link to='/Nuevopresupuesto'><div className={styles.boton}>Nuevo Presupuesto</div></Link>
                    <div className={styles.boton}>Importar Presupuestos</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Presupuesto