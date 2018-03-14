import { createSelector } from 'reselect';

/**
 * Direct selector to the addBank state domain
 */
const selectAddBankDomain = (state) => state.get('addBank');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddBank
 */

const makeSelectAddBank = () => createSelector(
  selectAddBankDomain,
  (substate) => substate.toJS()
);

export default makeSelectAddBank;
export {
  selectAddBankDomain,
};
