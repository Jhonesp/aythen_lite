import React from 'react'
import styles from './BankAdd.module.css'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const BankAdd = () => {
    return (
        <div className={styles.bankAdd_container}>
            <div className={styles.bankAdd_header}>
                <h3>Bancos</h3>
                <p>Accede al detalle de todas tus cuentas bancarias y agiliza el cobro de tus
                    facturas.</p>
            </div>
            <div className={styles.boton}>
                <div className={styles.bankAdd_button_group}>
                    <div className={styles.button_start}>
                        <div className={styles.button_icon}>
                            <AccountBalanceIcon/>
                        </div>
                        <div className={styles.button_text}>
                            <h4>Añade tus cuentas bancarias (recomendado)</h4>
                            <p>Centraliza la información de todas tus transacciones.</p>
                        </div>
                    </div>
                    <button>
                        Añadir
                    </button>
                </div>
            </div>
            <div className={styles.bankAdd_end}>
                <p>Si prefieres conectar tu banco en otro momento, recuerda que puedes postergar
                    este paso.</p>
                <h5>Posponer</h5>
            </div>
        </div>
    )
}

export default BankAdd