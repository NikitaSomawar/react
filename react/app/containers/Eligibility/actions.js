/*
 *
 * Eligibility actions
 *
 */

import {
  CH_FIELD,
  PASS_ERR,
  SUBMITUSER_DRA
} from './constants';

export function updateField(dataPack) {
  return {
    type: CH_FIELD,
    ...dataPack
  };
}

export function passErr(dataPack) {
  return {
    type: PASS_ERR,
    ...dataPack
  };
}

export function submitUser(dataPack) {
  return {
    type: SUBMITUSER_DRA,
    dataPack
  };
}

