import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  value: 0,
};


// Reducer is a function, which changes the global state. 
// That's why we need current state and action. 
// Action is an Object where we necessarily have type to understand what case of changes should be done in state
const  counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - 1,
      };
    default: 
      return state;
  }
};

const store = createStore(counterReducer); // gets 2 args: 1) reducer 2) ...

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
