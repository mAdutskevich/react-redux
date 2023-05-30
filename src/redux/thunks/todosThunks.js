import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todos/getTodos',
    async (thunkApi) => {
        const todos = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await todos.json();

        if (todos.status !== 200) {
            return thunkApi.rejectWithValue({
                message: 'Failed to fetch todos.',
            });
        }

        return data;
    }
);
