import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostQuery } from 'redux/api/postsApi';
import Button from 'components/atoms/Button';
import styles from './Post.module.scss';

export const Post = () => {
    const [isSkipQuery, setIsSkipQuery] = React.useState(false);
    const params = useParams();
    const query = useGetPostQuery(params.postId, {
        skip: isSkipQuery,
        // refetchOnMountOrArgChange,
        // pollingInterval: 10000, // refetch in number ms
        // refetchOnReconnect: true,
        // refetchOnFocus,
        // selectFromResult
    });

    const handleGetTodos = () => {
        query.refetch();
    };

    const handleClearTodos = () => {
        // dispatch(clearTodosAction());
    };

    const handleSkipFetchPost = () => {
        setIsSkipQuery(!isSkipQuery);
    };

    return (
        <div className={styles.wrapper}>
            <h4>Post</h4>
            <main className={styles.content}>
                {query.isLoading && <div>Loading...</div>}
                {!!query.isError && <div>Error: {query.error.error}</div>}
                {query.data && (
                    <article>
                        <h4>{query.data.title}</h4>
                        <p>{query.data.body}</p>
                    </article>
                )}

                <div className={styles.buttons}>
                    <Button label="Refetch post" onClick={handleGetTodos} />
                    <Button label="Clear post" onClick={handleClearTodos} />
                    <Button
                        label={`Switch skip (${isSkipQuery ? 'on' : 'off'})`}
                        onClick={handleSkipFetchPost}
                    />
                </div>
            </main>
        </div>
    );
};
