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
    case actionList.LOGIN_FAIL:
      {
       
        return initialState;
      }
    case actionList.LOG_OUT:
      {
        return initialState;
      }
    default:
      return state;
  }


}
export default AuthReducer