import { fetchTodos } from 'redux/thunks/todosThunks';

export const clearTodos = (state) => {
    state.todos = [];
    state.error = null;
    state.isLoading = false;
};

export const todosExtraReducers = (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = false;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
    });
};
