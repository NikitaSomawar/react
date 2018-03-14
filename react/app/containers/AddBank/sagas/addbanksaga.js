import axios from 'axios';
import { put, call, takeLatest ,takeEvery , take } from 'redux-saga/effects';
import { ADD_BANK_API,ADD_BANK_TYPE } from '../constants';

function* submitAddBank(action){
    const { mobile,token } = action.datapack;
    const { bankName,accNo,ifsc } = action.datapack;
  try {
        const commonPostHeader = {
            headers: {
                'Accept':'application/json',
                'Authorization':'Bearer ' + token,
            }
        }
      const httpArgs = ['https://us-central1-buynsta-ae869.cloudfunctions.net/onAddBankRequest', {bankName:bankName,accNo:accNo,ifsc:ifsc}  ,commonPostHeader];
       const { data: {code, model} } = yield call(axios.post, ...httpArgs);
       
    } catch(e) {
      //console.log(e);
    }
}


export default function* submitAddBankWatcher(action){
    console.log('in watcher');
    yield takeLatest(ADD_BANK_TYPE,submitAddBank)
}
