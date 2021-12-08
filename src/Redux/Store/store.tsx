import {createStore, applyMiddleware, combineReducers} from 'redux';

import thunk from 'redux-thunk';
import LoginReducer from '../Reducer/login-reducer';

const reducer = combineReducers({
  login: LoginReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
