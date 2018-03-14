/**
 *
 * KashIntro
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectKashIntro from './selectors';
import { makeSelectCustomer } from '../Bhive/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import KashIntroCompo from '../../components/KashIntro';
import { fetchStatus } from './actions';

export class KashIntro extends React.PureComponent {
  componentWillMount () {
    const { fetchStatus, kashintro:{ isDataFetched, isDataFetching } } = this.props;
    if (!isDataFetched && !isDataFetching) {
      fetchStatus();
    }
  }

  render() {
    const { BUser, kashintro:{ isDataFetched, isDataFetching } } = this.props;
    return (
      <div>
        { isDataFetched ? <KashIntroCompo userName = { BUser.name } />  : 'Fetching status ...'}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  kashintro: makeSelectKashIntro(),
  BUser: makeSelectCustomer()
});

function mapDispatchToProps(dispatch) {
  return {
    fetchStatus: () => {
      dispatch(fetchStatus())
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'kashIntro', reducer });
const withSaga = injectSaga({ key: 'kashIntro', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(KashIntro);
