import AsyncStorage from '@react-native-community/async-storage';
import {put, takeLatest} from 'redux-saga/effects'
import {LOG_OUT, LOG_OUT_FUNC} from '../../Action/ActionList.js';
function* handleSagaLogout() {
	yield takeLatest(LOG_OUT_FUNC, logOutSaga);
}
function* logOutSaga() {

	AsyncStorage.removeItem('data')
	yield put({type:LOG_OUT})

}
export {handleSagaLogout}