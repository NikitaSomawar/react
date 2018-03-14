import axios from 'axios';
import { put, call, takeLatest ,takeEvery , take  } from 'redux-saga/effects';
import { GET_BANK_LIST , GOT_BANK_LIST } from '../constants';

function* getBankListworker(action){
    console.log('in submit get bank list');
    console.log(action.datapack);
    const { token } = action.datapack;
  try {
        console.log('abc');
        const commonPostHeader = {
            headers: {
                'Authorization':'Bearer ' + token,
            }
        }
        const httpArgs = ['https://us-central1-buynsta-ae869.cloudfunctions.net/onGetBankDetailsRequest',commonPostHeader];
        const { data } = yield call(axios.get, ...httpArgs);
        if(data.code === 200) {
           
           yield put({ type: GOT_BANK_LIST , 'banks' :data.model });
        }
      
    } catch(e) {
      //console.log(e);
    }
}


export default function* getBankListworkerWatcher(action){
    console.log('in watcher');
    yield takeLatest(GET_BANK_LIST,getBankListworker)
}
