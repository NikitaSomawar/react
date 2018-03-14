/*
 *
 * AddBank actions
 *
 */

import {
  DEFAULT_ACTION , ADD_BANK_TYPE , GET_BANK_LIST , LOOK_UP_IFSC , SHOW_ERR , GET_STATE_LIST_BY_BANK_NAME ,
  GET_CITY_LIST_BY_BANK_NAME , GET_IFSC_VERIFIED ,SET_BANK_NAME , TEST ,SET_STATE_NAME , SET_CITY_NAME
} from './constants';


export function addbank_Action(datapack) {
  const { mobile, token } = datapack;
  return {
    type:ADD_BANK_TYPE,
    datapack
  };
}

export function lookupifsc_Action(datapack) {
  return {
    type:LOOK_UP_IFSC,
    datapack
  };
}

export function getBanksList_Action(datapack) {
 return {
   type:GET_BANK_LIST,
   datapack
 };
}

export function getSateListByBankName_Action(datapack) {
  console.log('in action');
 return {
   type:TEST,
   datapack
 };
}

export function getCityListByBankName_Action(datapack) {
 return {
   type:GET_CITY_LIST_BY_BANK_NAME,
   datapack
 };
}

export function ifsc_verified_Action(datapack) {
 return {
   type:GET_IFSC_VERIFIED,
   datapack
 };
}

export function set_bank_name(bankName) {
 return {
   type:SET_BANK_NAME,
   bankName
 };
}

export function set_state_name(stateName) {
  return {
    type:SET_STATE_NAME,
    stateName
  };
}

export function set_city_name(stateName) {
  return {
    type:SET_CITY_NAME,
    stateName
  };
}

export function showifscErr(datapack){
return {
    type: SHOW_ERR,
    identifier: datapack.identifier,
    msg: datapack.msg
}
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
