import React, {useState, useRef, useEffect} from 'react'
import styles from './ScrollBar.module.css'

const ScrollBar = ({actualizarEstado}) => {
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
            <p>Básico</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===2 ? styles.active : ''}`}onClick={()=>{handleChange(2)}} >
            <p>Bancos</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===3 ? styles.active : ''}`}onClick={()=>{handleChange(3)}} >
            <p>Preferencias</p>
            <i></i>
        </div>
        <div className={`${styles.boton} ${active===4 ? styles.active : ''}`}onClick={()=>{handleChange(4)}} >
            <p>Contabilidad</p>
            <i></i>
        </div>
        <div className={styles.boton} style={{flex:'1',justifyContent:'space-between', cursor:"unset"}}>
            <p> </p>
            <i></i>
        </div>
    </div>
    )
}

export default ScrollBar