import { configureStore } from '@reduxjs/toolkit';
import advReducer from 'redux/slices/advSlice';
import counterReducer from 'redux/slices/counterSlice';


export const store = configureStore({
  reducer: {
    ads: advReducer,
    counter: counterReducer,
  },
});