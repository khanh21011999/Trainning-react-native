import {call, takeLatest, put} from 'redux-saga/effects'

import {requestGetUser} from '../request/user.js'

export function* LoginsSagaFunc() {
	yield takeLatest('GET_USER_INFO', loginSaga)

}
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
	const getJsonData = JSON.parse(JSON.stringify(getJson))

	const getJsonUsername = String(getJsonData.username)
	console.log('JsonUsername'+getJsonUsername)
	console.log("local data" + action.data.username)
	console.log('getJsonData'+getJsonData)
	console.log('GetJson'+getJson)
	

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