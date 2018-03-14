import { select } from 'redux-saga/effects';
import { selectCustomerDataDomain } from '../containers/Bhive/selectors';

function* commonHeader(){
    const immutableUserData = yield select(selectCustomerDataDomain);
    const jsUserData = immutableUserData.toJS();
    return jsUserData.authToken;
}

export default commonHeader;