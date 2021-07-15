import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Reducer} from '../Reducer/index.js';
import createSagaMiddleware from '@redux-saga/core';
import {watchSaga} from '../Saga/rootSaga.js';

const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];
const store = createStore(Reducer, composeWithDevTools(applyMiddleware(...middleWare)));
sagaMiddleWare.run(watchSaga);
export default store;
