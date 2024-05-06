import React from 'react'
import styles from './Logo.module.css'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Logo = () => {
  return (
    <div className={styles.logo_container}>
        <h3>Sube tu logo</h3>
        <p>El tamaño del logo recomendado es de máximo 500px de ancho o alto. Formatos aceptados: png y jpg.</p>
        <div className={styles.subir_archivo}>
            <FileUploadIcon />
            <h3>Selecciona o arrastra tu archivo</h3>
            <p>El tamaño de logo recomendado es de 500px máximo (ancho o alto)</p>
        </div>
        <div className={styles.botones}>
            <div className={styles.boton}> 
                <VisibilityOffIcon />
            </div>
            <div className={styles.boton}> 
                <h3>S</h3>
            </div>
            <div className={styles.boton}> 
                <h3>M</h3>
            </div>
            <div className={styles.boton}> 
                <h3>L</h3>
            </div>
            <div className={styles.boton}> 
                <h3>XL</h3>
            </div>
        </div>
    </div>
  )
}

export default Logo