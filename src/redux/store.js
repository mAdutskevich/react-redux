import { createStore, combineReducers } from 'redux';
import { clientReducer } from './reducers/clientReducer';
import { counterReducer } from './reducers/counterReducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const rootreducer = combineReducers({
    clients: clientReducer,
    counter: counterReducer,
});

const store = createStore(rootreducer, composeWithDevTools()); // gets 2 args: 1) reducer 2) middleware

export default store;