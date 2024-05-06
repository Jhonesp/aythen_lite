import React, {useState} from 'react'
import styles from './PanelLateral.module.css'
import { Icon } from '@iconify/react';
import Plantilla from './menus/Plantilla';
import Logo from './menus/Logo';
import Personalizar from './menus/Personalizar';
import Campos from './menus/Campos';
import Detalles from './menus/Detalles';
import Tabla from './menus/avanzado/Tabla';
import CamposLegales from './menus/avanzado/CamposLegales';
import InfoEmpresa from './menus/avanzado/InfoEmpresa';
import InfoProducto from './menus/avanzado/InfoProducto';
import NombreDocs from './menus/avanzado/NombreDocs';
import Personaliza from './menus/avanzado/Personaliza';

const PanelLateral = () => {
    const [isActive, setIsActive] = useState(false);
    
    const [mostrarOpciones,
        setMostrarOpciones] = useState(false);
    const toggleOpciones = () => {
        setMostrarOpciones(!mostrarOpciones);
    };

    const [expandir,
        setExpandir] = useState(false);
    const toggleExpand = () => {
        setExpandir(!expandir);
    }

    const [contenido,
        setContenido] = useState(null);
    const [activo,
        setActivo] = useState(null);

    const handleClick = (componente) => {
        if (expandir === false || componente === activo) 
            toggleExpand();
        
        setActivo(componente);
        setIsActive(false);

        switch (componente) {
            case 'Plantilla':
                setContenido(<Plantilla/>);
                break;
            case 'Logo':
                setContenido(<Logo/>);
                break;
            case 'Personalizar':
                setContenido(<Personalizar/>);
                break;
            case 'Campos':
                setContenido(<Campos/>);
                break;
            case 'Detalles':
                setContenido(<Detalles/>);
                break;
            case 'Tabla':
                setContenido(<Tabla/> );
                break;
            case 'Campos legales':
                setContenido(<CamposLegales/> );
                break;
            case 'Info Empresa':
                setContenido(<InfoEmpresa /> );
                break;
            case 'Info producto':
                setContenido(<InfoProducto /> );
                break;
            case 'Nombre Docs':
                setContenido(<NombreDocs /> );
                break;
            case 'Personaliza HTML':
                setContenido(<Personaliza /> );
                setIsActive(true);
                console.log("hola");
                break;
            default:
                setContenido(null);
        }
    }

    return (
        <div className={styles.panel_lateral}>
            <div className={styles.panel_container}>
                <div className={styles.opciones_container}>
                    <div className={styles.opcion} onClick={() => handleClick('Plantilla')}>
                        <div className={styles.logo}>
                        <Icon icon="eos-icons:templates-outlined" />
                        </div>
                        <div className={styles.titulo}>
                            <p>Plantilla</p>
                        </div>
                    </div>
                    <div className={styles.opcion} onClick={() => handleClick('Logo')}>
                        <div className={styles.logo}>
                        <Icon icon="material-symbols:image-outline" />
                        </div>
                        <div className={styles.titulo}>
                            <p>Logo</p>
                        </div>
                    </div>
                    <div className={styles.opcion} onClick={() => handleClick('Personalizar')}>
                        <div className={styles.logo}>
                            <Icon icon="bx:paint-roll" />
                        </div>
                        <div className={styles.titulo}>
                            <p>Personalizar</p>
                        </div>
                    </div>
                    <div className={styles.opcion} onClick={ () => handleClick('Campos')}>
                        <div className={styles.logo}>
                            <Icon icon="ion:list" />
                        </div>
                        <div className={styles.titulo}>
                            <p>Campos</p>
                        </div>
                    </div>
                    <div className={styles.opcion} onClick={() => handleClick('Detalles')}>
                        <div className={styles.logo}>
                            <Icon icon="ph:text-h-bold" />
                        </div>
                        <div className={styles.titulo}>
                            <p>Detalles</p>
                        </div>
                    </div>
                </div>
                <div className={styles.opciones_bottom}>
                    <div className={styles.boton_opciones} onClick={toggleOpciones}>
                        <p>Opciones avanzadas</p>
                        <span
                            className={`flecha ${mostrarOpciones
                            ? 'abajo'
                            : 'derecha'}`}>&#x25B6;</span>
                    </div>
                    {mostrarOpciones && (
                        <div className={styles.opciones_avanzadas}>
                            {/* Aquí van las opciones avanzadas */}
                            <div className={styles.opcion} onClick={() => handleClick('Tabla')}>
                                <div className={styles.logo}>
                                    <Icon icon="bi:table" />
                                </div>
                                <div className={styles.titulo}>
                                    <p>Tabla</p>
                                </div>
                            </div>
                            <div className={styles.opcion} onClick={() => handleClick('Campos legales')}>
                                <div className={styles.logo}>
                                    <Icon icon="lucide:file-badge" />
                                </div>
                                <div className={styles.titulo}>
                                    <p>Campos legales</p>
                                </div>
                            </div>
                            <div className={styles.opcion} onClick={() => handleClick('Info Empresa')}>
                                <div className={styles.logo}>
                                    <Icon icon="mdi:information-slab-box-outline" />
                                </div>
                                <div className={styles.titulo}>
                                    <p>Información de la empresa</p>
                                </div>
                            </div>
                            <div className={styles.opcion} onClick={() => handleClick('Info producto')}>
                                <div className={styles.logo}>
                                    <Icon icon="gg:list" />
                                </div>
                                <div className={styles.titulo}>
                                    <p>Información del producto</p>
                                </div>
                            </div>
                            <div className={styles.opcion} onClick={() => handleClick('Nombre Docs')}>
                                <div className={styles.logo}>
                                    <Icon icon="bx:edit" />
                                </div>
                                <div className={styles.titulo}>
                                    <p>Nombre de los documentos</p>
                                </div>
                            </div>
                            <div className={styles.opcion} onClick={() => handleClick('Personaliza HTML')}>
                                <div className={styles.logo}>
                                    <Icon icon="ph:code-bold" />
                                </div>
                                <div className={styles.titulo}>
                                    <p>Personaliza el código HTML</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {expandir && (
                <div className={`${styles.panel_expansion} ${isActive ? styles.active : ''}`}>
                    {contenido}
                </div>
            )}
        </div>
    )
}

export default PanelLateral