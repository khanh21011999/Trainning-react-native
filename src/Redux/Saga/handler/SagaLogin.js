import {Alert} from 'react-native';
import {call, cancel, put} from 'redux-saga/effects'
import {requestGetUser} from '../request/user.js'
import {CommonActions} from '@react-navigation/native';
import {navigate} from '../../../../App.js';

function* SaveToAsyncStorage(data) {
	try {
		AsyncStorage.setItem(
			'data',
			JSON.stringify({
				username: data.username,
				password: data.password
			}))
	} catch (e) {
		console.log('error save to Storage');
	}
}
function* loginSaga(action, navigation) {

	const getJson = yield call(requestGetUser)
	const getJsonUsername = getJson.username
	const getJsonPassword = getJson.password
	// console.log(getJson)
	// console.log('getjson data ', getJsonUsername)
	// console.log('getjson data ', getJsonPassword)
	// console.log(action.data.username)
	// console.log(action.data.password)

	if (action.data.username === getJsonUsername && action.data.password == getJsonPassword) {
		console.log('saga login success')
		yield put({type: 'LOGIN_SUCCESS'})
		SaveToAsyncStorage(action.data)
		setTimeout(() => {
			navigate('Home')

		}, 2000);
		Alert.alert(
			'Login Status',
			'Successful, letting you in ....',
		)

	}
	else if (String(action.data.username) !== getJsonUsername || action.data.password == getJsonPassword) {
		console.log('wrong username or password')
		Alert.alert(
			'Login Status',
			'Wrong username or password',
			[
				{text: 'OKeyy', style: 'cancel'}
			]
		)
	}

}
export {loginSaga}