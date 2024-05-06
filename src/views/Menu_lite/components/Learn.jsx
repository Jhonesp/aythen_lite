import React from 'react'
import styles from './Learn.module.css'
import LearnCategoria from './LearnCategoria.jsx';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VideocamIcon from '@mui/icons-material/Videocam';
import CampaignIcon from '@mui/icons-material/Campaign';
import SupportIcon from '@mui/icons-material/Support';

const Learn = () => {
    return (
        <div className={styles.learn_container}>
            <div className={styles.learn_header}>
                <h1>
                    Aprende a usar Aythen</h1>
                <p>Descubre nuestros recursos y ponte en contacto con nuestro equipo para
                    recibir orientación experta sobre cómo utilizar Holded al máximo.</p>
            </div>

            <LearnCategoria
                icono={< MenuBookIcon />}
                titulo="Academy, tu lugar de referencia"
                descripcion="Descubre artículos útiles sobre cada parte de Aythen en nuestra Academy."/>
            <LearnCategoria
                icono={< VideocamIcon />}
                titulo="Webinars cada semana"
                descripcion="únete a nuestros webinars semanales para aprender sobre nuevas integraciones y funcionalidades en Aythen."/>
            <LearnCategoria
                icono={< CampaignIcon />}
                titulo="Novedades"
                descripcion="Conoce las nuevas funcionalidades, mejoras y mucho más sobre la plataforma."/>
            <LearnCategoria
                icono={< SupportIcon />}
                titulo="Chat de soporte"
                descripcion="Contacta a nuestro equipo de Customer Success y resuelve con inmediatez todas tus dudas."/>
                
        </div>
    )
}

export default Learn