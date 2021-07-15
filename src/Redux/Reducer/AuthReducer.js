import * as actionList from '../Action/ActionList.js';
const initStateAuth = {
	isAuth: false,
}
const authReducer = (state = initStateAuth, action) => {
	switch (action.type) {
		case actionList.LOGIN_SUCCESS:
			{
				console.log('Login success')
				return {
					isAuth: true,
				};
			}
		case actionList.RESTORE_TOKEN:
			{
				return {
					isAuth: true
				}
			}
		case actionList.LOG_OUT:
			console.log("user removed")
			{
				return initStateAuth
			}
		default:
			return state;
	}
}
export default authReducer