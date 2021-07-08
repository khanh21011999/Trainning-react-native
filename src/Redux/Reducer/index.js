import { combineReducers } from 'redux';
import LoginAction from './LoginReducer.js';
import User from './UserReducer.js';

export const Reducer = combineReducers({
  LoginAction,
  User,
});
