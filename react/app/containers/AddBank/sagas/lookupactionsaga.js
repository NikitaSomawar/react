import axios from 'axios';
import { put, call, takeLatest ,takeEvery , take } from 'redux-saga/effects';
import { LOOK_UP_IFSC } from '../constants';

function* lookupifscworker(action){
    const { bankName,state,city,token } = action.datapack;
  try {
        const commonPostHeader = {
            headers: {
                'Accept':'application/json',
                'Authorization':'Bearer ' + token,
            }
        }
      const httpArgs = [`https://us-central1-buynsta-ae869.cloudfunctions.net/onGetBankDetailsRequest?bank=${bankName}&bank=${state}&city=${city}` ,commonPostHeader];
       const { data } = yield call(axios.get, ...httpArgs);
        if(data.code === 200) {
           console.log('200');
        }
        else
        {
            console.log('not');
        }
    } catch(e) {
      console.log(e);
    }
}



export default function* lookupifscworkerWatcher(action){
    yield takeLatest(LOOK_UP_IFSC,lookupifscworker)
}
