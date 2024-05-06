import React from 'react'
import styles from './BankMethods.module.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddCardIcon from '@mui/icons-material/AddCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const BankMethods = () => {
    return (
        <div className={styles.bankmethods_container}>
            <div className={styles.bankmethods_header}>
                <h3>Bancos</h3>
                <p>Accede al detalle de todas tus cuentas bancarias y agiliza el cobro de tus
                    facturas.</p>
            </div>
            <div className={styles.bankmethods_buttons}>
                <div className={styles.bank_button_group}>
                    <div className={styles.button_start}>
                        <div className={styles.button_icon}>
                            <CreditCardIcon/>
                        </div>
                        <div className={styles.button_text}>
                            <h4>Cobra más rápido tus facturas</h4>
                            <p>Integra tu cuenta con Stripe, PayPal o Square para cobrar sin demoras.</p>
                        </div>
                    </div>
                    <button>
                        Conectar
                    </button>
                </div>
                <div className={styles.bank_button_group}>
                    <div className={styles.button_start}>
                        <div className={styles.button_icon}>
                            <AddCardIcon/>
                        </div>
                        <div className={styles.button_text}>
                            <h4>Pago por transferencia bancaria</h4>
                            <p>Agrega tu IBAN para mostrarlo como información de pago al final de los
                                documentos.</p>
                        </div>
                    </div>
                    <button>
                        Añadir
                    </button>
                </div>
                <div className={styles.bank_button_group}>
                    <div className={styles.button_start}>
                        <div className={styles.button_icon}>
                            <AccountBalanceIcon/>
                        </div>
                        <div className={styles.button_text}>
                            <h4>Agrega otro método de pago</h4>
                            <p>Crea otra opción de pago para tus clientes.</p>
                        </div>
                    </div>
                    <button>
                        Añadir
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BankMethods