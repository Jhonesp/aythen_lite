import React from 'react'
import styles from './DatosNegocio.module.css'
import countries from '../assets/countries'

const DatosNegocio = () => {
    return (
        <div className={styles.Bussiness_container}>
            <div className={styles.form}>
                <div className={styles.form_text}>
                    <h4>Completa los datos de tu negocio</h4>
                    <p>Rellena los campos con la información utilizada para registrar legalmente tu
                        empresa.</p>
                </div>
                <div className={styles.formulario}>
                    <form>
                        <div className={styles.group1}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="nombre">Nombre completo:</label>
                                <input type="text" id="nombre" name="nombre"/>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="nif">NIF:</label>
                                <input type="text" id="nif" name="nif"/>
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="direccion">Dirección:</label>
                            <input type="text" id="direccion" name="direccion"/>
                        </div>
                        <div className={styles.group3}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="codigoPostal">Código Postal:</label>
                                <input type="text" id="codigoPostal" name="codigoPostal"/>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="poblacion">Población:</label>
                                <input type="text" id="poblacion" name="poblacion"/>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="pais">País:</label>
                                <select name='pais' >
                                    <option value=""></option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country.name}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <button type="submit">Continuar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DatosNegocio