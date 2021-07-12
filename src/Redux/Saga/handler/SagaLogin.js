import {act} from 'react-test-renderer';
import {call, takeLatest, put} from 'redux-saga/effects'

import {requestGetUser} from '../request/user.js'

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
function* loginSaga(action) {

	console.log('Saga is working')
	const getJson = yield call(requestGetUser)
	const getJsonData = getJson

	const getJsonUsername = String(getJsonData.username)
	console.log(getJson)
	console.log('getjson data ', getJsonUsername)
	console.log(action.data.username)

	const getJsonPassword = String(getJsonData.password)

	if (String(action.data.username) === getJsonUsername) {
		if (String(action.data.password) === getJsonPassword) {
			console.log('saga login success')
			yield put({type: 'LOGIN_SUCCESS'})
			SaveToAsyncStorage(action.data)
		}
		else {
			console.log('saga password fail')
		}
	}
	else {
		console.log("saga user fail")
	}
}
export {loginSaga}