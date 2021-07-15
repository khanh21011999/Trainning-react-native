import {all} from 'redux-saga/effects';
import {handleSagaLogin} from './handler/SagaLogin.js'
import {handleSagaLogout} from './handler/sagaLogout.js';
export function* watchSaga() {
	yield all([
		handleSagaLogin(),
		handleSagaLogout()
	])
}

