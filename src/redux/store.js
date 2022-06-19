import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { counterWatcher } from 'redux/saga/counterSaga'; 

import { clientReducer } from './reducers/clientReducer';
import { counterReducer } from './reducers/counterReducer';

const sagaMiddleware = createSagaMiddleware();

const rootreducer = combineReducers({
    clients: clientReducer,
    counter: counterReducer,
});

const store = createStore(rootreducer, applyMiddleware(sagaMiddleware)); // gets 2 args: 1) reducer 2) middleware

export default store;

sagaMiddleware.run(counterWatcher);