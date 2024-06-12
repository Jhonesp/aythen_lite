import React from 'react'
import styles from './Categorizacion.module.css'

const Categorizacion = () => {
  return (
    <div className={styles.categorizacion_container}>
        <h3>Categorización</h3>
        <div className={styles.listas}>
        <label htmlFor="cuenta">Cuenta Contable</label>
        <select name="cuenta" id="">
            <option value="">Venta de mercadería</option>
        </select>
        <div className={styles.checks}>
            <input type="checkbox" name="cuentaConcepto" id="" />
            <label htmlFor="cuentaConcepto">Cuenta por concepto</label>
        </div>
        <label htmlFor="tags">Etiquetas</label>
        <input type="text" name='tags' placeholder='Tags'/>
        <div className={styles.checks}>
            <input type="checkbox" name="tagsConcepto" id="" />
            <label htmlFor="tagsConcepto">Etiquetas por concepto</label>
        </div>
        <label htmlFor="nota">Nota interna</label>
        <input type="text" name='nota' placeholder='Nota interna'/>
        <div className={styles.plan}>
          <label htmlFor="usuarios">Asignar usuarios</label>
          <p>Mejorar plan</p>
        </div>
        <input type="text" name='usuarios'  placeholder='Usuarios asignados'/>
        </div>
        <h4 className={styles.asignar}>+ Asignar a proyecto</h4>
    </div>
  )
}

export default Categorizacion