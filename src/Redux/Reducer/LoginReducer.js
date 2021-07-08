import { changeLogin, getDefault } from '../Action/ActionList.js';

initState = {
  loginStatus: false,
};
const LoginAction = (state = initState, action) => {
  if (action.type == changeLogin) {
    return { loginStatus: !state.loginStatus };
  } else if (action.type == getDefault) {
    return { loginStatus: false };
  }
  return state;
};
export default LoginAction;
