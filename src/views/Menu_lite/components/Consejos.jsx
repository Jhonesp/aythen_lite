import React from 'react'
import styles from './Consejos.module.css'
import Advise from './Advise'

const Consejos = () => {
    return (
        <div className={styles.consejos_container}>
            <div className={styles.consejos_header}>
                <h2>Sácale el máximo partido a Aythen</h2>
                <p>Personalizar Aythen es fácil con la guía adecuada.</p>
                <p>Explora esta sección para descubrir cómo adaptar Aythen a tus necesidades y preferencias específicas.</p>
            </div>
            <Advise
                titulo="Invita a tu Equipo"
                texto="Invita a tus compañeros de trabajo a unirse a tu equipo en Aythen y comienza a trabajar juntos en una ubicación centralizada."
                boton="Invita usuarios"
                subtitulo="Conoce más sobre la gestión de usuarios"/>
            <Advise
                titulo="Encuentra tu asesoría"
                texto="Invita a tu asesoría a Aythen o escoge  una de nuestro directorio de profesionales y resuelve tus necesidades  con un equipo experto."
                boton="Buscar asesoría"
                subtitulo="Descubre las ventajas de la contabilidad colaborativa"/>
        </div>
    )
}

export default Consejos