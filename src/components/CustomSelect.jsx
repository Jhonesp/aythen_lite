import React, { useState, useEffect } from 'react';
import styles from './CustomSelect.module.css';
import { Icon } from '@iconify/react';

const CustomSelect = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    useEffect(() => {
        // Si las opciones cambian, aseguramos que la primera opción sea seleccionada
        setSelectedOption(options[0]);
    }, [options]);

    return (
        <div className={styles.customSelectContainer}>
            <div 
                className={styles.selectedOption} 
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption ? selectedOption.label : 'Select an option'}
                <Icon icon="iconamoon:arrow-down-2-thin" />
            </div>
            {isOpen && (
                <div className={styles.optionsContainer}>
                    {options.map((option) => (
                        <div 
                            key={option.value} 
                            className={styles.option} 
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
