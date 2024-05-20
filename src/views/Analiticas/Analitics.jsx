import React from 'react'
import styles from './Analitics.module.css'
import Header from './components/Header'
import { Icon } from '@iconify/react';
import Months from './components/Months';

const Analitics = () => {
  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.top}>
            <div className={styles.seccion}>
                <div id={styles.resumen}>
                    <p>Resumen</p>
                    <Icon icon="mingcute:more-2-fill" />
                </div>
                <div id={styles.proyectos}>
                    <p>Proyectos</p>
                </div>
                <div className={styles.subseccion}>
                    <Icon icon="ph:plus" />
                    <p>Nuevo board</p>
                </div>
            </div>
            <div className={styles.seccion_end}>
                <div id={styles.inicio}>
                    <p>Volver al inicio</p>
                </div>
                <div id={styles.board}>
                    <Icon icon="ph:plus" />
                    <p>Añadir al board</p>
                </div>
            </div>
        </div>
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
                    <h4>Ventas</h4>
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
                <p>Crea tu primer banco</p>
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
    </div>
  )
}

export default Analitics