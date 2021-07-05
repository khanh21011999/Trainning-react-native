import {takeLatest} from 'redux-saga/effects'
import { GET_USER } from '../Action/ActionList.js'
import { handleGetUser } from './handler/user.js'


export function* watchSaga(){
    yield takeLatest(GET_USER,handleGetUser)
}