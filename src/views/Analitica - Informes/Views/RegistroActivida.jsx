import React from 'react'
import styles from './RegistroActividad.module.css'
import ActividadCampo from '../components/ActividadCampo'

const RegistroActivida = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Registro de Actividad
        </div>
        <div className={styles.botones}>
            <div style={{display:"flex", flexDirection:"row",gap:"10px"}}>
                <select name="" id="">
                    <option value="">Últimos 7 días</option>
                </select>
                <select name="" id="">
                    <option value="">Usuario: Todo</option>
                </select>
                <select name="" id="">
                    <option value="">Operación Todo</option>
                </select>
            </div>
            <div>
                <input type="text" placeholder='Buscar...' />
            </div>
        </div>
        <div className={styles.contenido}>
            <div className={styles.registro}>
                <div className={styles.top}>
                    <div className={styles.sub}>
                    Fecha
                    </div>
                    <div className={styles.sub}>
                    Usuario
                    </div>
                    <div className={styles.sub}>
                    Evento
                    </div>
                </div>
                <div>
                    {/*Este div es para colocar los campos */}
                    <ActividadCampo fecha={"11/04/2024, 09:49:06"} evento1={"Aprovado"} evento2={"Compra"} evento3={"Borrador"} />
                    <ActividadCampo fecha={"11/04/2024, 09:49:06"} evento1={"Aprovado"} evento2={"Presupuesto"} evento3={"E240002"} />
                </div>
                <div className={styles.bottom}>
                    <div style={{display:"flex", flexDirection:"row", gap:"80px", paddingRight:"50px"}}>
                        <div className={styles.end}>
                        Resultados por página
                        <select name="" id="">
                            <option value="">100</option>
                        </select>
                        </div>
                        <div className={styles.end}>
                        1-7 of 7
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegistroActivida