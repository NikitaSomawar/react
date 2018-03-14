import { fork } from 'redux-saga/effects';
import submitEligibilityDataWatcher from './sagas/SubmitEligibilityDataSaga';

// Individual exports for testing
export default function* eligibilitySaga() {
  yield [
    fork(submitEligibilityDataWatcher)
  ]
}
