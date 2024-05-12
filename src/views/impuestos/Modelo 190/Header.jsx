import React from 'react'
import styles from './Header.module.css'
import CloseIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.header_inicio}>
                <div className={styles.boton_close}>
                    <CloseIcon />
                </div>
                <div className={styles.plantilla_name}>
                    <p>Modelo 190 trimestral - 1T 2024</p>
                </div>
            </div>
            <div className={styles.header_final}>
                <div className={styles.boton_mas}>
                    <MoreVertIcon />
                </div>
                <div className={styles.boton_guardar}>
                    <p>Guardar</p>
                </div>
            </div>
        </div>
    )
}

export default Header