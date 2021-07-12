import { all, takeLatest } from 'redux-saga/effects';
import { GET_USER ,GET_USER_INFO} from '../Action/ActionList.js';
import { handleGetUser } from './handler/user.js';
import {loginSaga} from './handler/SagaLogin.js'
export function* watchSaga() {
	yield takeLatest(GET_USER_INFO,loginSaga);
}

