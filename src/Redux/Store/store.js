import { createStore, compose } from 'redux';
// import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
import LoginAction from '../Reducer/LoginReducer.js';

const store = createStore(LoginAction, composeWithDevTools());
export default store