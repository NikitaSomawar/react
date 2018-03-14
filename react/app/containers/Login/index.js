/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import { makeSelectCustomer } from '../Bhive/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import FireBaseLogin from '../../components/FirebaseLogin';
import TogglerScreen from '../../components/TogglerScreen';
import styled from 'styled-components';
import firebase, { db, auth } from "../../firebaseConfig";

const SignOutCon = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    flex-direction: column;
    text-align: center;
    align-items: center;
    > button {
        border: 1px solid gray;
        padding: 5px;
        border-radius: 5px;
        width: 50%;
    }
`

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillMount(){
      // deviceId: 'No deviceId'
    // var urlParams = new URLSearchParams(window.location.search);
    // var dId = urlParams.get('deviceId')
    // // console.log(urlParams, dId);
    // this.setState({deviceId: dId});
  }

  signOut(e) {
    e.preventDefault();
    // console.log('signOut clicked');
    auth.signOut().then(function() {
      console.log('Sign-out successful');
      window.location.reload();
    }).catch(function(error) {
      console.log('An error happened');
    });
  }

  render() {
    const { deviceId } = this.state;
    const { Customer: { isCustomerLoggedIn } } =this.props;
    console.log(this.props, isCustomerLoggedIn);
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
        <div>
          { !isCustomerLoggedIn ? <FireBaseLogin/> : <TogglerScreen /> }
        </div>
         { isCustomerLoggedIn && <SignOutCon>
          <button onClick = {this.signOut.bind(this)} >Sign out</button>
        </SignOutCon> }
      </div>
    );
        // <FormattedMessage {...messages.header} />
        // <p>Home page {deviceId}</p>
  }
}

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  Customer: makeSelectCustomer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
