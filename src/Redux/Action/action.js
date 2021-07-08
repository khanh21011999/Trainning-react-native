import * as actionList from './ActionList.js';

export const getUser = () => ({
  type: actionList.GET_USER,
});
export const setUser = (user) => ({
  type: actionList.SET_USER,
  user,
});
export const GetUserInfo = (user, password) => ({
  type: actionList.GET_USER_INFO,
  data: { user, password },
});
