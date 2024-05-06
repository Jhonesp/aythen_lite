import React from 'react'
import styles from './InfoEmpresa.module.css'

const InfoEmpresa = () => {
  return (
    <div className={styles.info_container}>
        <div className={styles.info_empresa} id={styles.bottom}>
            <h3>Datos de tu empresa</h3>
            <p>Selecciona la información de tu empresa que quieras que aparezca en la plantilla al crear los documentos.</p>
            <div className={styles.checks}>
                <div className={styles.check}>
                    <input type="checkbox" name="Nempresa" id="" />
                    <label htmlFor="factura">Nombre de la empresa</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="Nidenti" id="" />
                    <label htmlFor="factura">Núm. de identificación social</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="Dirección" id="" />
                    <label htmlFor="factura">Dirección</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="Pais" id="" />
                    <label htmlFor="factura">País</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="Email" id="" />
                    <label htmlFor="factura">Email</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="Telefono" id="" />
                    <label htmlFor="factura">Teléfono</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="Fnacimiento" id="" />
                    <label htmlFor="factura">Fecha de nacimiento</label>
                </div>
            </div>
        </div>
        <div className={styles.info_empresa}>
            <h3>Datos de tu contacto</h3>
            <p>Selecciona la información del contacto que quieras que aparezca en la plantilla al crear los documentos.</p>
            <div className={styles.checks}>
                <div className={styles.check}>
                    <input type="checkbox" name="Nempresa" id="" />
                    <label htmlFor="factura">Nombre</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="Nidenti" id="" />
                    <label htmlFor="factura">Nombre comercial</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="Numfiscal" id="" />
                    <label htmlFor="factura">Núm. de identificación fiscal</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="Direccion" id="" />
                    <label htmlFor="factura">Dirección</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="Pais" id="" />
                    <label htmlFor="factura">País</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="Email" id="" />
                    <label htmlFor="factura">Email</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="Telefono" id="" />
                    <label htmlFor="factura">Teléfono</label>
                </div>
                <div className={styles.check}>
                    <input type="checkbox" name="Referencia" id="" />
                    <label htmlFor="factura">Referencia</label>
                </div>
            </div>
        </div>

    </div>
  )
}

export default InfoEmpresa