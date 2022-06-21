import { ADD_CLIENT, REMOVE_LAST_CLIENT } from 'redux/types';

const defaultState = {
  clients: ['Mike', 'Mike', 'Mike'],
};

const clientReducer = (state = defaultState, action) => {
  const clientsFiltered = [...state.clients];

  switch (action.type) {
    case ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients, action.payload],
      };
    case REMOVE_LAST_CLIENT:
      clientsFiltered.pop();

      return {
        ...state,
        clients: clientsFiltered,
      };
    default:
      return state;
  }
};

export default clientReducer;
