import { fork } from 'redux-saga/effects';
import fetchEligibilityStatusSagaWatcher from './sagas/FetchEligibilityStatusSaga';


export default function* defaultSaga() {
  yield [
    fork(fetchEligibilityStatusSagaWatcher)
  ]
}
