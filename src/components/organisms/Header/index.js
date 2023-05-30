import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <nav>
                <ul className={styles.navigation}>
                    <li className={styles.navigation}>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/todos">Todos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
