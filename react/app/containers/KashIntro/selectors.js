import { createSelector } from 'reselect';

/**
 * Direct selector to the kashIntro state domain
 */
const selectKashIntroDomain = (state) => state.get('kashIntro');

/**
 * Other specific selectors
 */


/**
 * Default selector used by KashIntro
 */

const makeSelectKashIntro = () => createSelector(
  selectKashIntroDomain,
  (substate) => substate.toJS()
);

export default makeSelectKashIntro;
export {
  selectKashIntroDomain,
};
