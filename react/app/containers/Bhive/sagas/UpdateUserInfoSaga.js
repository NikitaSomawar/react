import { cancel, fork, takeLatest, put } from 'redux-saga/effects';
import { SET_USER_INFO, LOGIN_STORE_USER_DATA } from '../constants';

function* updateUserInfoWorker(action) {
    try {
        const { authToken, uid, email, name } = action.datapack;
        // console.log(email, 'in saga');
        yield put({
            type: LOGIN_STORE_USER_DATA,
            uid,
            authToken,
            email,
            name
        });
    } catch (e) {
        // yield put({ type: SHOW_ERR, msg: e });
    }
}

export default function* updateUserInfoWatcher(action) {
    yield takeLatest(SET_USER_INFO, updateUserInfoWorker)
}