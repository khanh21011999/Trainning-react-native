import {Alert} from 'react-native';
import {call, cancel, put, takeLatest} from 'redux-saga/effects'
import {requestGetUser} from '../../../Services/user.js'
import {CommonActions} from '@react-navigation/native';
import {navigate} from '../../../../App.js';
import Toast from 'react-native-toast-message';
import {GET_USER_INFO, LOGIN_SUCCESS} from './../../Action/ActionList';
import AsyncStorage from '@react-native-community/async-storage';

function* handleSagaLogin() {
	yield takeLatest(GET_USER_INFO, loginSaga);
}
function saveToAsyncStorage(data) {
	try {
		AsyncStorage.setItem(
			'data',
			JSON.stringify({
				username: data.username,
				password: data.password
			})).then((data) => {
				console.log(data)
			})
		console.log("Asynn Work")
	} catch (e) {
		console.log('error save to Storage');
	}
}
function* loginSaga(action) {

	const getJson = yield call(requestGetUser)
	const getJsonUsername = getJson.username
	const getJsonPassword = getJson.password
	if (action.data.username === getJsonUsername && action.data.password == getJsonPassword) {
		console.log('saga login success')
		yield put({type: LOGIN_SUCCESS})
		saveToAsyncStorage(action.data)
	}
	else if (action.data.username !== getJsonUsername || action.data.password != getJsonPassword) {
		console.log('wrong username or password')
		Alert.alert(
			'Login Status',
			'Wrong username or password',
			[
				{text: 'OKey', style: 'cancel'}
			]
		)
	}

}
export {handleSagaLogin}