/**
 *
 * Eligibility
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEligibility from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import FillNameCon from './FillNameCon';
import FillGenderCon from './FillGenderCon';
import FillCityCon from './FillCityCon';
import FillPanCon from './FillPanCon';
import FillDetailsCon from './FillDetailsCon';
import ErrSorry from '../../components/Eligibility/ErrSorry';
import Verification from '../../components/Eligibility/UnderVerification';
import CongratzCon from './CongratzCon';


export class Eligibility extends React.PureComponent {
  routeScreen() {
    const { match:{ params }, history } = this.props;
    switch(params.whichscreen) {
      case 'name':
        return <FillNameCon push = { history.push } />
      case 'gender':
        return <FillGenderCon push = { history.push } />
      case 'city':
        return <FillCityCon push = { history.push } />
      case 'pan':
        return <FillPanCon push = { history.push } />
      case 'details':
        return <FillDetailsCon push = { history.push } />
      case 'sorry':
        return <ErrSorry push = { history.push } />
      case 'verification':
        return <Verification push = { history.push } />
      case 'congratz':
        return <CongratzCon push = { history.push } />
    }
  }

  render() {
    return (
      <div>
        { this.routeScreen() }
      </div>
    );
  }
}

const withReducer = injectReducer({ key: 'eligibility', reducer });
const withSaga = injectSaga({ key: 'eligibility', saga });

export default compose(
  withReducer,
  withSaga,
)(Eligibility);
