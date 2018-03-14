import { createSelector } from 'reselect';

/**
 * Direct selector to the bhive state domain
 */
const selectBhiveDomain = (state) => state.get('bhive');
const selectCustomerDataDomain = (state) => state.getIn(['bhive','Customer']);

/**
 * Other specific selectors
 */


/**
 * Default selector used by Bhive
 */

const makeSelectBhive = () => createSelector(
  selectBhiveDomain,
  (substate) => substate.toJS()
);

const makeSelectCustomer = () => createSelector(
  selectCustomerDataDomain,
  (substate) => substate.toJS()
);

export default makeSelectBhive;
export {
  selectBhiveDomain,
  makeSelectCustomer,
  selectCustomerDataDomain
};
