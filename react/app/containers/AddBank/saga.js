// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
import { take, call, put, select, fork } from 'redux-saga/effects';
import submitAddBankWatcher from './sagas/addbanksaga.js';
import lookupifscworkerWatcher from './sagas/lookupactionsaga';
import getBankListworkerWatcher from './sagas/getbanklistsaga';
import getStateListByBankNameWatcher from './sagas/getstatelistbybanksaga';
import getCityListByBankNameWatcher from './sagas/getcitylistbybanksaga';
import ifscVerifiedWatcher from './sagas/ifscverifiedsaga';

export default function* rootAddBankSaga() {
  yield [
    fork(submitAddBankWatcher),
    fork(lookupifscworkerWatcher),
    fork(getBankListworkerWatcher),
    fork(getStateListByBankNameWatcher),
    fork(getCityListByBankNameWatcher),
    fork(ifscVerifiedWatcher)
  ]
  console.log('in saga.js');
}