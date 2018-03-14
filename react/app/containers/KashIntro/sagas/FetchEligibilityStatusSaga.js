import axios from 'axios';
import { put, call, takeLatest, select } from 'redux-saga/effects';
import {
    FETCH_STATUS_DRA,
    FETCH_STATUS_SA,
    FETCH_STATUS_API,
} from '../constants';
import { selectCustomerDataDomain } from '../../Bhive/selectors';
import { push, replace } from 'react-router-redux';
import { BUECongratz, BUESorry, BUEVerification } from '../../../urls';

function* fetchEligibilityStatusSagaWorker(){
    try {
        const immutableUserData = yield select(selectCustomerDataDomain);
        const jsState = immutableUserData.toJS();
        const httpArgs = [FETCH_STATUS_API, {
            headers: {
                'Authorization': `Bearer ${jsState.authToken}`,
                'Accept': 'application/json'
            }
        }];

        //Making HTTP Post call with args
        const { data: respData } = yield call(axios.get, ...httpArgs);
        if (respData.code === 200) {
            switch(respData.state) {
                case 'general':
                    yield put({ type: FETCH_STATUS_SA });
                    break;
                case 'reject':
                    yield put(replace(BUESorry));
                    break;
                case 'eligiblePending':
                    yield put(replace(BUEVerification));
                    break;
                case 'eligible':
                    sessionStorage.setItem('eligibleAmout', 25000);
                    yield put(replace(BUECongratz));
                    break;
            }
        } else {
            console.log('Sorry! Something went wrong');
        }
       /*yield put(push('/route'));*/
    } catch(e) {
       console.log(e, 'Exception');
        //Couldn't reach API
       /* yield put({ type: BTOAST_SHOW, payload: 'Sorry, Something went wrong' });*/
    }
}

export default function* fetchEligibilityStatusSagaWatcher(){
    yield takeLatest(FETCH_STATUS_DRA, fetchEligibilityStatusSagaWorker)
}