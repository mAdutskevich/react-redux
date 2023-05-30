import React from 'react';
import styles from './Counter.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    incrementAsync,
} from 'redux/slices/counterSlice';

import Button from 'components/atoms/Button';

export const Counter = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counter);

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleIncrementAsync = () => {
        dispatch(incrementAsync(1));
    };

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Counter:</h3>
            <div className={styles.value}>{value}</div>

            <div className={styles.buttons}>
                <div className={styles.itemWrapper}>
                    <Button label="Decrement" onClick={handleDecrement} />
                </div>

                <div className={styles.itemWrapper}>
                    <Button label="Increment" onClick={handleIncrement} />
                </div>

                <div className={styles.itemWrapper}>
                    <Button
                        label="Increment Async 3 sec"
                        onClick={handleIncrementAsync}
                    />
                </div>
            </div>
        </div>
    );
};
