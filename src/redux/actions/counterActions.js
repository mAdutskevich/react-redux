import { INCREMENT, DECREMENT } from '../types/index.js';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
