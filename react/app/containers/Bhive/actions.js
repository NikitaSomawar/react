/*
 *
 * Bhive actions
 *
 */

import {
  SET_USER_INFO,
} from './constants';

export function setUserInfo(datapack) {
  // console.log(datapack);
  return {
    type: SET_USER_INFO,
    datapack
  };
}
