import {ActionType} from './ActionList';
import axios from 'axios';
export interface LoginI {
  type: string;
  user: string;
  password: string;
}

export type ActionI = LoginI | any;

export const Login = (user, password) => {
  return {type: ActionType.LOGIN, user: user, password: password};
};

export const Logout = () => {
  return {type: ActionType.LOG_OUT};
};
export const LoadData = res => {
  return {type: ActionType.FETCH_DATA, payload: res};
};
export const FetchData = () => {
  return async (dispatch, getState, api) => {
    const res = await axios
      .get('https://my-json-server.typicode.com/khanh21011999/demo/user')
      .then(response => response.data);

    return dispatch(LoadData(res));
  };
};
