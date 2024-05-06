import React from 'react'
import styles from './Advise.module.css'

const Advise = ({titulo, texto, boton, subtitulo}) => {
  return (
    <div className={styles.advise_container}>
        <h2>
            {titulo}
        </h2>
        <p>
            {texto}
        </p>
        <div className={styles.advise_bottom}>
            <button>
                {boton}
            </button>
            <h3>
                {subtitulo}
            </h3>
        </div>
    </div>
  )
}

export default Advise