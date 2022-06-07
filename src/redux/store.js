import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { clientReducer } from './reducers/clientReducer';
import { counterReducer } from './reducers/counterReducer';

const rootreducer = combineReducers({
    clients: clientReducer,
    counter: counterReducer,
});

const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(thunk))); // gets 2 args: 1) reducer 2) middleware

export default store;