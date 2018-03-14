/*
 *
 * Bhive reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_STORE_USER_DATA,
  STORE_DEVICE_ID,
  SESSION_STORE_USER_DATA,
} from './constants';

const initialState = fromJS({
  baseGuy: '',
  Customer: {
    deviceId: '',
    isSessionChecked: false,
    isCustomerLoggedIn: false,
    uid: '',
    authToken: '',
    email: '',
    name: ''
  }
});

function bhiveReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_STORE_USER_DATA:
      return state.setIn(['Customer', 'uid'], action.uid)
                  .setIn(['Customer', 'isCustomerLoggedIn'], true)
                  .setIn(['Customer', 'isSessionChecked'], true)
                  .setIn(['Customer', 'authToken'], action.authToken)
                  .setIn(['Customer', 'email'], action.email)
                  .setIn(['Customer', 'name'], action.name)
    case STORE_DEVICE_ID:
      return state.setIn(['Customer', 'deviceId'], action.deviceId)
    // case SESSION_STORE_USER_DATA:
    //   return state.setIn(['Customer', 'uid'], action.deviceId)
    //               .setIn(['Customer', 'isCustomerLoggedIn'], true)
    //               .setIn(['Customer', 'isSessionChecked'], true)
    default:
      return state;
  }
}

export default bhiveReducer;
