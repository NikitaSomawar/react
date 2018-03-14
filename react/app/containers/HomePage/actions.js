/*
 *
 * HomePage actions
 *
 */

import {
  UPDATE_FIELD,
  SUB_MOB_NUM_DRA,
  SUB_MOB_NUM_OTP_DRA,
  SHOW_ERR
} from './constants';

export function updateField(datapack) {
  const { identifier, val } = datapack;
  return {
    type: UPDATE_FIELD,
    identifier,
    val
  };
}

export function submitMobNum(datapack) {
  // console.log(datapack, 'in actions');
  return {
    type: SUB_MOB_NUM_DRA,
    datapack
  };
}

export function showErr(datapack){
    return {
        type: SHOW_ERR,
        identifier: datapack.identifier,
        msg: datapack.msg
    }
}

export function submitOtp(otpData){
    console.log(otpData);
    return {
        type: SUB_MOB_NUM_OTP_DRA,
        otp: otpData.otp,
        token: otpData.token,
        authToken: otpData.authToken,
    }
}