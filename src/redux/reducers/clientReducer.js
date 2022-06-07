import { ADD_CLIENT, REMOVE_LAST_CLIENT } from 'redux/types';

const defaultState = {
    clients: ['Mike', 'Mike', 'Mike'],
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
        default:
            return state;
    }
};
