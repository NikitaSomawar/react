import { createSelector } from 'reselect';

/**
 * Direct selector to the eligibility state domain
 */
const selectEligibilityDomain = (state) => state.get('eligibility');
const selectNameDomain = (state) => state.getIn(['eligibility', 'name']);
const selectGenderDomain = (state) => state.getIn(['eligibility', 'gender']);
const selectCityDomain = (state) => state.getIn(['eligibility', 'city']);
const selectPanDomain = (state) => state.getIn(['eligibility', 'pan']);
/**
 * Other specific selectors
 */


/**
 * Default selector used by Eligibility
 */

const makeSelectEligibility = () => createSelector(
  selectEligibilityDomain,
  (substate) => substate.toJS()
);

const makeEligibilityName = () => createSelector(
  selectNameDomain,
  (substate) => substate.toJS()
);

const makeEligibilityGender = () => createSelector(
  selectGenderDomain,
  (substate) => substate.toJS()
);

const makeEligibilityCity = () => createSelector(
  selectCityDomain,
  (substate) => substate.toJS()
);

const makeEligibilityPan = () => createSelector(
  selectPanDomain,
  (substate) => substate.toJS()
);


export default makeSelectEligibility;
export {
  selectEligibilityDomain,
  makeEligibilityName,
  makeEligibilityGender,
  makeEligibilityCity,
  makeEligibilityPan
};
