import React from 'react'
import styles from './Resumen.module.css'
import { Icon } from '@iconify/react';
import Months from './components/Months';
import CuentasGasto from './components/CuentasGasto';
import Tarea from './components/Tarea';

const Resumen = () => {
  return (
    <div>
        <div className={styles.seccion_2}>
            <div className={styles.sub}>
                <div className={styles.distancia}>
                    <h4>Ventas</h4>
                    <Icon icon="mingcute:more-2-fill" />
                </div>
                <div className={styles.distancia}>
                    <h5>AÑO ACTUAL</h5>
                    <h2>0,00€</h2>
                </div>
                <div className={styles.distancia}>
                    <p>0% del objetivo</p>
                    <p style={{color: "#50E66E"}}>0,00€</p>
                </div>
            </div>
            <div className={styles.sub}>
            <div className={styles.distancia}>
                    <h4>Ventas</h4>
                    <Icon icon="mingcute:more-2-fill" />
                </div>
                <div className={styles.distancia}>
                    <h5>AÑO ACTUAL</h5>
                    <h2>0,00€</h2>
                </div>
                <div className={styles.distancia}>
                    <p>0% del objetivo</p>
                    <p style={{color: "#ED3D6A"}}>0,00€</p>
                </div>
            </div>
            <div className={styles.sub}>
            <div className={styles.distancia}>
                    <h4>Beneficio</h4>
                    <Icon icon="mingcute:more-2-fill" />
                </div>
                <div className={styles.distancia}>
                    <h5>AÑO ACTUAL</h5>
                </div>
                <div className={styles.distancia}>
                    <p></p>
                    <h2>0,00€</h2>
                </div>
            </div>
            <div className={`${styles.sub} ${styles.center}`} >
                <Icon icon="ph:bank-bold" />
                <p style={{fontWeight:"700",color:"#000"}}>Crea tu primer banco</p>
                <p>Conecta Aythen con tus bancos para relacionar y tener un control máximo de tus movimientos.</p>
            </div>
        </div>
        <div className={styles.seccion_3}>
            <div className={styles.sub} style={{flex:2}}>
                <div className={styles.distancia}>
                    <h4>Resumen ventas</h4>
                    <Icon icon="mingcute:more-2-fill" />
                </div>
                <p>ULTIMOS 12 MESES</p>
                <div className={styles.right} style={{gap: "32.5%"}}>
                    <h5>Objetivo</h5>
                    <h5>0,00£</h5>
                </div>
                <div className={styles.distancia}>
                    <h4>0,00£</h4>
                    <h5>-</h5>
                </div>
                <p>ABRIL 2024</p>
                <div className={styles.right}>
                    <h5>MoM</h5>
                    <h5>-</h5>
                </div>
                <Months />
            </div>
            <div className={styles.down} style={{flex:1}}>
                <div className={styles.sub} >
                    <div className={styles.distancia}>
                        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                            <div id={styles.green}></div>
                            <h4>Pagos pendientes</h4>
                        </div>
                        <Icon icon="mingcute:more-2-fill" />
                    </div>
                    <p>AÑO ACTUAL</p>
                    <div className={styles.distancia}>
                        <p></p>
                        <h2>0,00€</h2>
                    </div>
                </div>
                <div className={styles.sub}>
                <div className={styles.distancia}>
                        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                            <div id={styles.green}></div>
                            <h4>Cobros pendientes</h4>
                        </div>
                        <Icon icon="mingcute:more-2-fill" />
                    </div>
                    <p>AÑO ACTUAL</p>
                    <div className={styles.distancia}>
                        <p></p>
                        <h2>0,00€</h2>
                    </div>
                </div>
            </div>
            <div className={styles.sub} style={{flex:1, justifyContent:"space-between"}}>
                <div>
                    <div className={styles.distancia}>
                        <h4>Entradas y salidas de banco</h4>
                        <Icon icon="mingcute:more-2-fill" />
                    </div>
                    <p>MES ACTUAL</p>
                </div>
                <div>
                    <div className={styles.banco}>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <div id={styles.green}></div>
                            <h5>Entradas</h5>
                        </div>
                        <h3>0</h3>
                    </div>
                    <div className={styles.banco}>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <div id={styles.red}></div>
                            <h5>Salidas</h5>
                        </div>
                        <h3>0</h3>
                    </div>
                    <div className={styles.banco}>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <div id={styles.blue}></div>
                            <h5>Saldo</h5>
                        </div>
                        <h3>0</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.seccion_4}>
            <div className={styles.down} style={{flex:1}}>
                <div className={styles.sub} style={{maxHeight:"200px"}}>
                    <div className={styles.distancia}>
                        <h4>Resumen gastos</h4>
                        <Icon icon="mingcute:more-2-fill" />
                    </div>
                    <p>ULTIMOS 12 MESES</p>
                    <div className={styles.right} style={{gap: "32.5%"}}>
                        <h5>Objetivo</h5>
                        <h5>0,00£</h5>
                    </div>
                    <div className={styles.distancia}>
                        <h4>0,00£</h4>
                        <h5>-</h5>
                    </div>
                    <p>ABRIL 2024</p>
                    <div className={styles.right}>
                        <h5>MoM</h5>
                        <h5>-</h5>
                    </div>
                    <Months />
                </div>
                <div className={styles.sub}>
                    <div className={styles.distancia}>
                        <h4>Mis tareas</h4>
                        <Icon icon="mingcute:more-2-fill" />
                    </div>
                    <p>TODOS LOS PROYECTOS</p>
                    <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                        <Tarea />
                    </div>
                </div>
            </div>
            <div className={styles.down} style={{flex:1}}>
                <div className={styles.sub}>
                    <div className={styles.distancia}>
                        <h6>Cuentas de gasto</h6>
                        <Icon icon="mingcute:more-2-fill" />
                    </div>
                    <p>MES ACTUAL</p>
                    <CuentasGasto />
                </div>
                <div style={{display:"flex", flexDirection:"row", gap:"10px"}}>
                    <div className={`${styles.sub} ${styles.center}`}>
                        <Icon icon="lets-icons:message" />
                        <h5 style={{color:"#000"}}>1 Emails no leídos</h5>
                        <p style={{color:"#fff", fontWeight:"400"}}>Envía facturas y presupuestos por email y podrás saber si han sido leídos.</p>
                    </div>
                    <div className={`${styles.sub} ${styles.center}`} style={{justifyContent:"center"}}>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <Icon icon="ic:sharp-people-alt" />
                        <h5 style={{color:"#000"}}>1 Contacto</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resumen