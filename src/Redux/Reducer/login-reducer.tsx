import {ActionType} from 'src/Redux/Action/ActionList';
import {ActionI} from '../Action/LoginAction';

const initState = {
  loginStatus: false,
  data: {},
};
const LoginReducer = (state = initState, action: ActionI) => {
  switch (action.type) {
    case ActionType.LOGIN:
      Object.values(initState.data).map(item => {
        if (item.password === action.password) {
          return {
            ...state,
            loginStatus: true,
          };
        }
      });
      break;
    case ActionType.FETCH_DATA:
      return {
        ...state,
        data: Object.assign(state.data, action.payload),
      };

    default:
      return state;
  }
};

export default LoginReducer;
