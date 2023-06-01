import { configureStore } from '@reduxjs/toolkit';
import advReducer from 'redux/slices/advSlice';
import counterReducer from 'redux/slices/counterSlice';
import todosReducer from 'redux/slices/todosSlice';

export const store = configureStore({
    reducer: {
        ads: advReducer,
        counter: counterReducer,
        todos: todosReducer,
    },
});
