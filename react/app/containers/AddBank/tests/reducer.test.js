
import { fromJS } from 'immutable';
import addBankReducer from '../reducer';

describe('addBankReducer', () => {
  it('returns the initial state', () => {
    expect(addBankReducer(undefined, {})).toEqual(fromJS({}));
  });
});
