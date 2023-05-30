import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from 'components/templates/Home';
import { Todos } from 'components/templates/Todos';

export const Root = () => {
    const routing = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/todos',
            element: <Todos />,
        },
    ]);

    return routing;
};
