import {
    ADD_CLIENT,
    REMOVE_LAST_CLIENT,
    ADD_MANY_CLIENTS,
} from '../types/index.js';

export const addClient = (clientName) => {
    return {
        type: ADD_CLIENT,
        payload: clientName
    };
};

export const removeLastClient = () => {
    return {
        type: REMOVE_LAST_CLIENT,
    };
};

export const addManyClients = (data) => {
    return {
        type: ADD_MANY_CLIENTS,
        payload: data,
    };
};

export const fetchClients = () => async (dispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    dispatch(addManyClients(data));
};
