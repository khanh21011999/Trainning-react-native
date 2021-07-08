import { call, put } from 'redux-saga/effects';
import { setUser } from '../../Action/action.js';
import { requestGetUser } from '../request/user.js';

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
