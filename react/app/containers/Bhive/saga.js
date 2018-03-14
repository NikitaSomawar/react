import { takeLatest, call, put, select, fork } from 'redux-saga/effects';
import updateUserInfoWatcher from './sagas/UpdateUserInfoSaga';


// Individual exports for testing
export default function* defaultSaga() {
  yield [
    fork(updateUserInfoWatcher)
  ]
}
