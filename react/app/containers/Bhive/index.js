/**
 *
 * Bhive
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
import makeSelectBhive, { makeSelectCustomer } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { setUserInfo } from './actions';
import firebase, { db, auth } from "../../firebaseConfig";

export class Bhive extends React.PureComponent {
  componentWillMount(){
    const { isCustomerLoggedIn, isSessionChecked } = this.props.Customer;
    const self = this;
    auth.onAuthStateChanged(function(user) {
      if (user) {
        user.getIdToken().then(function(token) {
            self.props.setUserInfo({
              uid: user.uid,
              authToken: token,
              email: user.email,
              name: user.displayName
            });
            console.log('looged in by nikita');
        },function(error) {
            console.log(error);
        });
      }
      else {
        console.log('user not available')
      }
    },function(e) {
      console.log('error', e);
    });
  }

  render() {
    return (
      <span></span>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  bhive: makeSelectBhive(),
  Customer: makeSelectCustomer(),
});

function mapDispatchToProps(dispatch) {
  return {
    setUserInfo: datapack => {
      dispatch(setUserInfo(datapack))
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'bhive', reducer });
const withSaga = injectSaga({ key: 'bhive', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Bhive);
