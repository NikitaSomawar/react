import axios from 'axios';
import { put, call, takeLatest ,takeEvery , take  } from 'redux-saga/effects';
import { GOT_CITY_LIST_BY_BANK_NAME,GET_CITY_LIST_BY_BANK_NAME } from '../constants';

function* getCityListByBankNameworker(action){
    const { bank ,state, token } = action.datapack;
  try {
        const commonPostHeader = {
            headers: {
                'Authorization':'Bearer ' + token,
            }
        }
        const httpArgs = [`https://us-central1-buynsta-ae869.cloudfunctions.net/onGetBankDetailsRequest?bank=${bank}&state=${state}`,commonPostHeader];
        const { data } = yield call(axios.get, ...httpArgs);
        if(data.code === 200) {
         console.log(data.model);
           yield put({ type: GOT_CITY_LIST_BY_BANK_NAME , 'cities' :data.model });
        }
      
    } catch(e) {
      //console.log(e);
    }
}


export default function* getCityListByBankNameWatcher(action){
    console.log('in watcher');
    yield takeLatest(GET_CITY_LIST_BY_BANK_NAME,getCityListByBankNameworker)
}
