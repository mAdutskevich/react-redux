import React from 'react';
import styles from './Button.module.scss';

const Button = ({
    label,
    onClick,
}) => {
    const handleClick = (e) => {
        e.preventDefault();

        onClick?.();
    };

    return (
        <button
            className={styles.Button}
            onClick={handleClick}
        >
            {label}
        </button>
    );
}

export default Button;