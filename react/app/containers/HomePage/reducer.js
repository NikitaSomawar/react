/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_FIELD,
  SUB_MOB_NUM_DRA,
  SUB_MOB_NUM_SA,
  SUB_MOB_NUM_OTP_DRA,
  SUB_MOB_NUM_OTP_SA,
  SUB_OTP_SHOW_ERR,
  SHOW_ERR
} from './constants';

const initialState = fromJS({
    isOtpGenerated: false,
    isOtpValidating: false,
    isOtpValidated: false,
    isMobNumSubmitting: false,
    isMobNumSubmitted: false,
    isOtpResending: false,
    otpToken: '',
    otp: {
        value: '',
        errMsg: false,
        errVisibility: false,
    },
    mobile: {
        value: '',
        errMsg: false,
        errVisibility: false,
    }
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return state.setIn([action.identifier, 'value'], action.val)
                  .setIn([action.identifier, 'errMsg'], '')
                  .setIn([action.identifier, 'errVisibility'], false);
    case SUB_MOB_NUM_DRA:
      return state.set('isMobNumSubmitting', true)
    case SUB_MOB_NUM_SA:
      return state.set('isMobNumSubmitting', false)
                  .set('otpToken', action.otpToken)
                  .set('isMobNumSubmitted', true)
    case SHOW_ERR:
      return state.setIn([action.identifier, 'errMsg'], action.msg)
                  .setIn([action.identifier, 'errVisibility'], true);
    case SUB_MOB_NUM_OTP_DRA:
      return state.set('isOtpValidating', true)
    case SUB_MOB_NUM_OTP_SA:
      return state.set('isOtpValidating', false)
                  .set('isOtpValidated', true)
    case SUB_OTP_SHOW_ERR:
      return state.set('isOtpValidating', false)
                  .setIn(['otp', 'value'], action.val)
                  .setIn(['otp', 'errVisibility'], false)
    default:
      return state;
  }
}

export default homePageReducer;
