/*
 *
 * KashIntro actions
 *
 */

import {
  FETCH_STATUS_DRA,
} from './constants';

export function fetchStatus() {
  return {
    type: FETCH_STATUS_DRA,
  };
}
