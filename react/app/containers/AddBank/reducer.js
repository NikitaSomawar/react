/*
 *
 * AddBank reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION , ADD_BANK_TYPE , SHOW_ERR , GOT_BANK_LIST , GOT_STATE_LIST_BY_BANK_NAME ,GOT_CITY_LIST_BY_BANK_NAME ,
  IFSC_VERIFIED , SET_BANK_NAME ,SET_STATE_NAME , SET_CITY_NAME
} from './constants';

const initialState = fromJS({
  ifsc: {
    value: '',
    errMsg: false,
    errVisibility: false,
},
  ifsc_verified : false
});

function addBankReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ERR:
           return state.setIn([action.identifier, 'errMsg'], action.msg)
          .setIn([action.identifier, 'errVisibility'], true);
    case GOT_BANK_LIST:
             return state.set('banklist', action.banks)
    case GOT_STATE_LIST_BY_BANK_NAME:
             return state.set('statelist', action.states)
    case GOT_CITY_LIST_BY_BANK_NAME:
             return state.set('cities', action.cities)
    case IFSC_VERIFIED:
             return state.set('ifsc_verified', action.ifsc_verified)
    case SET_BANK_NAME:
             return state.set('bankName', action.bankName)
    case SET_STATE_NAME:
             return state.set('stateName', action.stateName)
    case SET_CITY_NAME:
             return state.set('cityName', action.cityName)
    case DEFAULT_ACTION:
              return state;
    default:
             return state;
  }
}



export default addBankReducer;
