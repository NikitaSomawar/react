import axios from 'axios';
import { put, call, takeLatest ,takeEvery , take  } from 'redux-saga/effects';
import { IFSC_VERIFIED,GET_IFSC_VERIFIED } from '../constants';

function* ifscVerifiedWorker(action){
    console.log('in submit get bank list');
    console.log(action.datapack);
    const { ifsc, token } = action.datapack;
  try {
        console.log('abc');
        const commonPostHeader = {
            headers: {
                'Authorization':'Bearer ' + token,
            }
        }
        const httpArgs = [`https://us-central1-buynsta-ae869.cloudfunctions.net/onGetBankDetailsRequest?ifsc=${ifsc}`,commonPostHeader];
        const { data } = yield call(axios.get, ...httpArgs);
        if(data.code === 200) {
           console.log(data.model);
           yield put({ type: IFSC_VERIFIED , 'ifsc_verified' :true});
        }
      
    } catch(e) {
      //console.log(e);
    }
}


export default function* ifscVerifiedWatcher(action){
    console.log('in watcher');
    yield takeLatest(GET_IFSC_VERIFIED,ifscVerifiedWorker)
}
