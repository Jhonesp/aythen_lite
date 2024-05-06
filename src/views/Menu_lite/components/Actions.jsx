import React from 'react'
import styles from './Actions.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Actions = () => {
  return (
    <div className={styles.actions_container}>
        <div className={styles.actions_top}>
            <h2>Acciones pendientes</h2>
        </div>
        <div className={styles.actions_bottom}>
            <div className={styles.icon}>
                <CheckCircleIcon />
            </div>
            <p>No tienes tareas pendientes</p>
        </div>
    </div>
  )
}

export default Actions