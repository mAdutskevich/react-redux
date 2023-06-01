import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { postsApi } from 'redux/api/postsApi';
import { Layout } from 'components/templates/Layout';
import { Home } from 'components/templates/Home';
import { Todos } from 'components/templates/Todos';
import { Posts } from 'components/templates/Posts';
import { Post } from 'components/templates/Post';

export const Root = () => {
    const routing = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/todos',
                    element: <Todos />,
                },
                {
                    path: '/posts',
                    element: (
                        <ApiProvider api={postsApi}>
                            <Posts />
                        </ApiProvider>
                    ),
                },
                {
                    path: '/posts/:postId',
                    element: (
                        <ApiProvider api={postsApi}>
                            <Post />
                        </ApiProvider>
                    ),
                },
            ],
        },
    ]);

    return routing;
};
