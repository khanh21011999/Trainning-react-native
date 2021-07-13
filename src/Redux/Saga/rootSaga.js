import {takeLatest } from 'redux-saga/effects';
import {GET_USER_INFO} from '../Action/ActionList.js';
import {loginSaga} from './handler/SagaLogin.js'
export function* watchSaga() {
	yield takeLatest(GET_USER_INFO,loginSaga);
}

