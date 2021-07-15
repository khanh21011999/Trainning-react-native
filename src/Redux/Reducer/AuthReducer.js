import * as actionList from '../Action/ActionList.js';
const initStateAuth = {
	isAuth: false,
	isError:false
}
const authReducer = (state = initStateAuth, action) => {
	switch (action.type) {
		case actionList.LOGIN_SUCCESS:
			{
				console.log('Login success')
				return {
					isAuth: true,
					isError: false
				};
			}
		case actionList.LOGIN_ERROR:
			{
				return {
					isAuth: false,
					isError: true

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