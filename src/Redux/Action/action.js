import * as actionList from './ActionList.js';

export const GetUserInfo = (username, password) => {
	return {
		type: actionList.GET_USER_INFO,
		data: {
			username,
			password
		},
	}
};
export const LoginSuccess = (data) => {
	return {
		type: actionList.LOGIN_SUCCESS,
		data,
	};
};


export const Logout = () => {
	return {
		type: actionList.LOG_OUT,
	};
};