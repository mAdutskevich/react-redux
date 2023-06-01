import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { postsApi } from 'redux/api/postsApi';
// import Button from 'components/atoms/Button';
import styles from './Products.module.scss';

export const Products = () => {
    // const dispatch = useDispatch();
    // const [trigger, result, lastPromiseInfo] = postsApi.useLazyGetPostsQuery();
    // console.log('trigger', trigger);
    // console.log('result', result);
    // console.log('lastPromiseInfo', lastPromiseInfo);
    // console.log('postsApi', postsApi);

    // const handleGetTodos = () => {
    //     trigger();
    // };

    // const handleClearTodos = () => {
    //     dispatch(postsApi.util.resetApiState()); // clear data in cache
    // };

    return (
        <div className={styles.wrapper}>
            <main className={styles.content}>
                {/* {result.isLoading && <div>Loading...</div>}
                {!!result.error && <div>Error: {result.message}</div>}
                {!!result.data?.length &&
                    result.data.slice(0, 10).map((item, index) => (
                        <NavLink
                            className={styles.post}
                            to={`${item.id}`}
                            key={item.id}
                        >
                            {`${index + 1}. ${item.title}`}
                        </NavLink>
                    ))} */}
                <div className={styles.buttons}>
                    {/* <Button label="Get posts" onClick={handleGetTodos} />
                    <Button label="Clear posts" onClick={handleClearTodos} /> */}
                </div>
            </main>
        </div>
    );
};
