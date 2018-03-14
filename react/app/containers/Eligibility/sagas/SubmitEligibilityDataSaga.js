import axios from 'axios';
import { put, call, takeLatest, select } from 'redux-saga/effects';
import {
    SUBMITUSER_DRA,
    SUBMITUSER_SA,
    SUBMITUSER_DONE,
    SUBMITUSER_API
} from '../constants';
import { selectCustomerDataDomain } from '../../Bhive/selectors';
import { push, replace } from 'react-router-redux';
import { BUECongratz, BUESorry, BUEVerification } from '../../../urls';

function* submitEligibilityDataWorker(action){
    try {
        const immutableUserData = yield select(selectCustomerDataDomain);
        const jsState = immutableUserData.toJS();
        const postData = action.dataPack;
        const httpArgs = [SUBMITUSER_API, postData, {
            headers: {
                'Authorization': `Bearer ${jsState.authToken}`,
                'Accept': 'application/json'
            }
        }];
        //Making HTTP Post call with args
        const { data: respData } = yield call(axios.post, ...httpArgs);
        if (respData.code === 200) {
            yield put(replace(BUEVerification));
        } else {
            console.log('Sorry! Something went wrong');
        }
        yield put({ type: SUBMITUSER_DONE });
    } catch(e) {
       console.log(e, 'Exception');
    }
}

export default function* submitEligibilityDataWatcher(action){
    yield takeLatest(SUBMITUSER_DRA, submitEligibilityDataWorker)
}