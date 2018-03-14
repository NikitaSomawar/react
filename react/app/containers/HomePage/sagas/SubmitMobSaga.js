import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import {
    SUB_MOB_NUM_DRA,
    SUB_MOB_NUM_SA,
    SUB_MOB_NUM_API,
} from '../constants';
// import { BTOAST_SHOW } from '../../Btoast/constants';
// import { commonPostHeader } from '../../commonHeaders';
// import { BApiOops } from '../../../BValidationMsgs';

// Watcher saga
function* submitMobWorker(action){
    const { mobile, token } = action.datapack;
     console.log(mobile, 'in saga');
    try {
        const commonPostHeader = {
            headers: {
                'Accept':'application/json',
                'Authorization':'Bearer ' + token,
            }
        }
        const httpArgs = [SUB_MOB_NUM_API + mobile, commonPostHeader];

        //Making HTTP Get call with args
        const { data: {code, model} } = yield call(axios.get, ...httpArgs);
        // console.log(code, model);
        if(code === 200) {
            yield put({
                type: SUB_MOB_NUM_SA, otpToken: model.token
            })
        }
        // else 
        // yield put({ type: BTOAST_SHOW, payload: BApiOops });
    } catch(e) {
        //if something bad while reaching api
    }
}

//Watcher saga ( Homepage banners fetch )
export default function* submitMobWatcher(action){
    yield takeLatest(SUB_MOB_NUM_DRA, submitMobWorker)
}
