import React from 'react'
import styles from './Campos.module.css'
import AddIcon from '@mui/icons-material/Add';
import HeightIcon from '@mui/icons-material/Height';

const Campos = () => {
  return (
    <div className={styles.campos_container}>
        <h3>Campos</h3>
        <p>Aparecerán en el creador de documentos y en el PDF.</p>
        <div className={styles.add_campo}>
            <AddIcon />
            <h4>Añadir Campo</h4>
        </div>
        <div draggable className={styles.drag}>
            <HeightIcon />
            <p> Arrastra las filas para seleccionar la preferencia de los campos extra.</p>
        </div>
        <div className={styles.campos_end}>
            <h3>Pie de página </h3>
            <p>Dependiendo del diseño que hayas seleccionado, aparecerá en diferentes tamaños o ubicaciones dentro de la plantilla.</p>
            <div className={styles.end_container}>
                <p>Plantilla 1</p>
            </div>
        </div>
    </div>
  )
}

export default Campos