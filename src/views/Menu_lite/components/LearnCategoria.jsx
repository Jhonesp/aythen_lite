import React from 'react'
import styles from './LearnCategoria.module.css'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const LearnCategoria = ({icono, titulo, descripcion}) => {
  return (
    <div className={styles.categoria_container}>
            
            <div className={styles.contenido}>
                <div className={styles.icono_container}>
                    <div className={styles.icono}>
                        {icono}
                    </div>
                </div>
                <div className={styles.texto}>
                    <h2>{titulo}</h2>
                    <p>{descripcion}</p>
                </div>
                
            </div>
            <div className={styles.flecha}>
                <OpenInNewIcon />
            </div>
        </div>
  )
}

export default LearnCategoria