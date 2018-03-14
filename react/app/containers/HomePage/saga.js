import { take, call, put, select, fork } from 'redux-saga/effects';
import submitMobWatcher from './sagas/SubmitMobSaga';
import validateMobNumOTPWatcher from './sagas/ValidateMobNumOTPSaga';

// Individual exports for testing
export default function* rootHomeSaga() {
  yield [
    fork(submitMobWatcher),
    fork(validateMobNumOTPWatcher)
  ]
}
