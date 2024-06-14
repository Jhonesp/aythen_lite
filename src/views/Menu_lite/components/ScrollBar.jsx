import React, { useState , useEffect ,useRef} from 'react'
import styles from './ScrollBar.module.css'

const ScrollBar = ({ actualizarEstado }) => {
    let [active, setActive] = useState();
    const handleChange = (valor) => {
        setActive(valor);
        actualizarEstado(valor); // Llama a la función de actualización del padre con el nuevo valor
      };


    //Funcionalidad para scroll con mousewheel
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const handleWheel = (event) => {
            if (scrollContainerRef.current) {
                event.preventDefault();
                scrollContainerRef.current.scrollLeft += event.deltaY;
            }
        };

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', handleWheel);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);
    //Funcionalidad para scroll con mousewheel
  return (
    <div className={styles.scroll_container} ref={scrollContainerRef}>
        <div className={`${styles.boton} ${active===1 ? styles.active : ''}`} onClick={()=>{handleChange(1)}} >
            <p>All</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===2 ? styles.active : ''}`}onClick={()=>{handleChange(2)}} >
            <p>Datos</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===3 ? styles.active : ''}`}onClick={()=>{handleChange(3)}} >
            <p>Banco</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===4 ? styles.active : ''}`}onClick={()=>{handleChange(4)}} >
            <p>Contabilidad</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===5 ? styles.active : ''}`}onClick={()=>{handleChange(5)}} >
            <p>Contactos</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===6 ? styles.active : ''}`}onClick={()=>{handleChange(6)}} >
            <p>Presupuesto</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===7 ? styles.active : ''}`}onClick={()=>{handleChange(7)}} >
            <p>Gastos</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===8 ? styles.active : ''}`}onClick={()=>{handleChange(8)}} >
            <p>Productos</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===9 ? styles.active : ''}`}onClick={()=>{handleChange(9)}} >
            <p>Impuestos</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===10 ? styles.active : ''}`}onClick={()=>{handleChange(10)}} >
            <p>Contabilidad</p>
            <i></i>
        </div>
    </div>
  )
}

export default ScrollBar