import { put, takeEvery } from 'redux-saga/effects';
import { increment, decrement } from 'redux/actions/counterActions'; 
import { INCREMENT } from 'redux/types';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* incrementWorker() {
    yield delay(1000); 
    yield put(increment());
};

function* decrementWorker() {
};

export function* counterWatcher() {
    yield takeEvery(INCREMENT, incrementWorker);
};