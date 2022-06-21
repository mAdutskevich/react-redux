import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import clientReducer from './reducers/clientReducer';
import counterReducer from './reducers/counterReducer';

const rootreducer = combineReducers({
  clients: clientReducer,
  counter: counterReducer,
});

// gets 2 args: 1) reducer 2) middleware
const store = createStore(rootreducer, composeWithDevTools());

export default store;
