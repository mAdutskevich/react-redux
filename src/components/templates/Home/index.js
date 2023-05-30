import React from 'react';
import { Header } from 'components/organisms/Header';
import { Counter } from 'components/molecules/Counter';
import styles from './Home.module.scss';

export const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Counter />
        </div>
    );
};
