import { ADD_CLIENT, REMOVE_LAST_CLIENT, ADD_MANY_CLIENTS } from 'redux/types';

const defaultState = {
    clients: ['Mike', 'Mike', 'Mike'],
    users: [],
};

export const clientReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CLIENT:
            return {
                ...state,
                clients: [...state.clients, action.payload],
            };
        case REMOVE_LAST_CLIENT:
            const clientsFiltered = [...state.clients];
            clientsFiltered.pop();

            return {
                ...state,
                clients: clientsFiltered,
            };
        case ADD_MANY_CLIENTS:
            return {
                ...state,
                users: [...state.users, ...action.payload],
            };
        default:
            return state;
    }
};
