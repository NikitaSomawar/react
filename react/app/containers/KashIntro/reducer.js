/*
 *
 * KashIntro reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_STATUS_DRA,
  FETCH_STATUS_SA
} from './constants';
import initialJSState from './initialState';

const initialState = fromJS(initialJSState);

function kashIntroReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STATUS_DRA:
        return state.set('isDataFetching', true);
    case FETCH_STATUS_SA:
        return state.set('isDataFetching', false)
                    .set('isDataFetched', true)
    default:
      return state;
  }
}

export default kashIntroReducer;
