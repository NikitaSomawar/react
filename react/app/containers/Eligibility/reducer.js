/*
 *
 * Eligibility reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CH_FIELD,
  PASS_ERR,
  SUBMITUSER_DRA,
  SUBMITUSER_DONE
} from './constants';
import initialJSState from './initialState';

const initialState = fromJS(initialJSState);

function eligibilityReducer(state = initialState, action) {
  switch (action.type) {
    case CH_FIELD:
        return state.setIn([action.mod, action.which, 'v'], action.what)
                    .setIn([action.mod, action.which, 'ev'], false)
    case PASS_ERR:
        return state.setIn([action.mod, action.which, 'ev'], true)
                    .setIn([action.mod, action.which, 'em'], action.what)
    case SUBMITUSER_DRA:
        return state.set('isSubmitting', true)
    case SUBMITUSER_DONE:
        return state.set('isSubmitting', false)
    default:
      return state;
  }
}

export default eligibilityReducer;
