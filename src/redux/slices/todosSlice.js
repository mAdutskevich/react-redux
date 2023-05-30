import { createSlice } from '@reduxjs/toolkit';
import { clearTodos, todosExtraReducers } from 'redux/reducers/todosReducers';

const initialState = {
    todos: [],
    isLoading: false,
    error: null,
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // reducers accepts an object of reducers functions
        clearTodos,
    },
    extraReducers: todosExtraReducers,
});

// Action creators are generated for each case reducer function
export const { clearTodos: clearTodosAction } = todoSlice.actions;

export default todoSlice.reducer;
