/*
 *
 * Form reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,MY_FIRST_ACTION
} from './constants';

const initialState = fromJS({});

function formReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case MY_FIRST_ACTION:
      return state.set('name',name)
    default:
      return state;
  }
}

export default formReducer;
