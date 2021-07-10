import * as actionList from '../Action/ActionList.js';
const initStateAuth={
	isAuth:false,
	isLogIn:false
}
const AuthReducer =(state=initStateAuth,action)=>{
	switch (action.type) {
    case actionList.LOGIN_SUCCESS:
      {
        console.log('action : LOG IN SUCCESS');
        return {
				
          isAuth: true,
					isLogIn: true,
        };
      }
		case actionList.GET_USER_INFO:
			{
				return initStateAuth
			}
    case actionList.LOGIN_FAIL:
      {
       
        return initStateAuth
      }
    case actionList.LOG_OUT:
      {
        return initStateAuth
      }
    default:
      return state;
  }


}
export default AuthReducer