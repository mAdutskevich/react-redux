import { ADD_CLIENT, REMOVE_LAST_CLIENT } from '../types/index.js';

export const addClient = (clientName) => ({
  type: ADD_CLIENT,
  payload: clientName,
});

export const removeLastClient = () => ({
  type: REMOVE_LAST_CLIENT,
});
