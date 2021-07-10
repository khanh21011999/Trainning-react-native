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
	data: {user, password},
})
export const LoginSuccess = (data) => {
	return {
		type: actionList.LOGIN_SUCCESS,
		data,
	};
};

export const LoginFailed = (data) => {
	return {
		type: actionList.LOGIN_FAIL,
		data,
	};
};

export const Logout = (data) => {
	return {
		type: actionList.LOG_OUT,
		data
	};
};