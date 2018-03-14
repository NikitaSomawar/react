import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import {
    SUB_MOB_NUM_OTP_DRA,
    SUB_MOB_NUM_OTP_SA,
    SUB_MOB_NUM_OTP_API,
    SUB_OTP_SHOW_ERR
} from '../constants';
// import { BTOAST_SHOW } from '../../Btoast/constants';
// import { commonPostHeader } from '../../commonHeaders';
// import { OTP_SUCCESS, OTP_INVALID, OTP_OOPS } from '../../../components/CartOtp/strings';
// import { browserHistory } from 'react-router';


function* validateMobNumOTPWorker(action){
    const { otp, token, authToken } = action;
    try{
        let formParams = new URLSearchParams();
        formParams.append('otp', otp);
        formParams.append('token', token);

        const commonPostHeader = {
            headers: {
                'Accept':'application/json',
                'Authorization':'Bearer ' + authToken,
            }
        }
        //axios post srgs
        const httpArgs = [SUB_MOB_NUM_OTP_API, formParams, commonPostHeader];
        console.log(httpArgs);
        //Making HTTP Post call with args
        const { data } = yield call(axios.post, ...httpArgs);
        console.log(data, data.code);
        if(data.code === 200) {
            yield put({ type: SUB_MOB_NUM_OTP_SA });
            // browserHistory.push('/');
        }else if(data.code === 400) yield put({ type: SUB_OTP_SHOW_ERR, msg: 'Invalid Otp' });
        // else yield put({ type: BTOAST_SHOW, payload: OTP_OOPS });
    }catch(e){
        //Couldn't reach API
        // yield put({ type: BTOAST_SHOW, payload: OTP_OOPS });
    }
}

export default function* validateMobNumOTPWatcher(action){
    yield takeLatest(SUB_MOB_NUM_OTP_DRA, validateMobNumOTPWorker)
}