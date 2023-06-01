import React from 'react';
import { Counter } from 'components/molecules/Counter';
import styles from './Home.module.scss';

export const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Counter />
        </div>
    );
};
