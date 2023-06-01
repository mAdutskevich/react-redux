import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from 'redux/thunks/todosThunks';
import { clearTodosAction } from 'redux/slices/todosSlice';
import Button from 'components/atoms/Button';
import styles from './Todos.module.scss';

export const Todos = () => {
    const dispatch = useDispatch();
    const { todos, error, isLoading } = useSelector((state) => state.todos);

    const handleGetTodos = () => {
        dispatch(fetchTodos());
    };

    const handleClearTodos = () => {
        dispatch(clearTodosAction());
    };

    return (
        <div className={styles.wrapper}>
            <main className={styles.content}>
                {isLoading && <div>Loading...</div>}
                {!!error && <div>Error: {error.message}</div>}
                {!!todos.length &&
                    todos
                        .slice(0, 10)
                        .map((item, index) => (
                            <div key={item.id}>{`${index + 1}. ${
                                item.title
                            }`}</div>
                        ))}
                <div className={styles.buttons}>
                    <Button label="Get todos" onClick={handleGetTodos} />
                    <Button label="Clear todos" onClick={handleClearTodos} />
                </div>
            </main>
        </div>
    );
};
