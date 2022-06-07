import { INCREMENT, DECREMENT } from '../types/index.js';

export const increment = () => {
    return {
        type: INCREMENT,
    }; 
};

export const decrement = () => {
    return {
        type: DECREMENT,
    }; 
};
