import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/organisms/Header';
import styles from './Layout.module.scss';

export const Layout = () => (
    <div className={styles.mainContainer}>
        <Header />
        <Outlet />
    </div>
);
