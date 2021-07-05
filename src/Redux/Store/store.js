import { createStore, compose } from 'redux';
// import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Reducer } from '../Reducer/index.js';
import LoginAction from '../Reducer/LoginReducer.js';

const store = createStore(Reducer, composeWithDevTools());
export default store