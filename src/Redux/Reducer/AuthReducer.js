import * as actionList from '../Action/ActionList.js';
const initStateAuth = {
	isAuth: false,
}
const AuthReducer = (state = initStateAuth, action) => {
	switch (action.type) {
		case actionList.LOGIN_SUCCESS:
			{
				return {
					isAuth: true,
				};
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