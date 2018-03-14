import axios from 'axios';
import { put, call, takeLatest ,takeEvery , take  } from 'redux-saga/effects';
import { GOT_STATE_LIST_BY_BANK_NAME,GET_STATE_LIST_BY_BANK_NAME,TEST } from '../constants';

function* getStateListByBankNameworker(action){
    console.log('in submit get bank list');
    console.log(action.datapack);
    if(action.datapack!='' || action.datapack!=undefined)
    {
    const { bank , token } = action.datapack;

  try {
        console.log('abc');
        const commonPostHeader = {
            headers: {
                'Authorization':'Bearer ' + token,
            }
        }
        const httpArgs = [`https://us-central1-buynsta-ae869.cloudfunctions.net/onGetBankDetailsRequest?bank=${bank}`,commonPostHeader];
        const { data } = yield call(axios.get, ...httpArgs);
        if(data.code === 200) {
          
           yield put({ type: GOT_STATE_LIST_BY_BANK_NAME , 'states' :data.model });
        }
      
    } catch(e) {
      //console.log(e);
    }
    }
    else{
        console.log('in else part');
    }
}


export default function* getStateListByBankNameWatcher(action){
    console.log('in watcher');
    yield takeLatest(TEST,getStateListByBankNameworker)
}
