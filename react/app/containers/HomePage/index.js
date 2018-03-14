/**
 *
 * HomePage
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
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import MobileVerify from '../../components/Verification/MobileVerify';
import OtpVerify from '../../components/Verification/OtpVerify';
import { makeSelectCustomer } from '../Bhive/selectors';
import firebase, { db, auth } from "../../firebaseConfig";
import createHistory from 'history/createBrowserHistory'

export class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isUserInfoFetched: false,
      isMobAvailable: false,
      isMobAvailChecked :false,
    }
  }

  fetchUserInfo(){
    const { Customer: { authToken, isCustomerLoggedIn, uid }, homepage: { isMobNumSubmitted } } = this.props;
    const { isUserInfoFetched, isMobAvailable } = this.state;
    // console.log('isCustomerLoggedIn: ', isCustomerLoggedIn, 'isUserInfoFetched: ', isUserInfoFetched);
    if(!isUserInfoFetched && isCustomerLoggedIn && !isMobAvailable) {
      this.setState({isUserInfoFetched: true});

      db.collection('ypuser').doc(uid).get().then((doc) => {
        this.setState({isMobAvailChecked: true});
        if (doc.exists && doc.data().mobile !== undefined ) {
            this.setState({isMobAvailable: true});
            // browserHistory.push('/');
            // console.log("Document data:", doc.data().mobile);
        }
      })
    }
    // console.log(isMobNumSubmitted, 'in fetchUserInfo')
    // if(isMobNumSubmitted){
    //   const history = createHistory();
    //   history.push('/home/otpVer');
    //   location.reload();
    // }
  }

  componentDidMount() {
    // console.log(this.props, 'in componentDidMount FirebaseLogin')
    // const history = createHistory();
    // history.push('/');
    // console.log(history.push, 'to show history');
    this.fetchUserInfo();
  }

  componentDidUpdate() {
    // console.log(this.props, 'in componentDidUpdate FirebaseLogin')
    this.fetchUserInfo();
  }

  routeScreen() {
    const { match:{ params } } = this.props;
    switch(params.whichscreen) {
      case 'mobVer':
        return <MobileVerify {...this.props} />
      case 'otpVer':
        return <OtpVerify {...this.props} />
      case 'welcome':
        return <p>Welcome Screen</p>
    }
  }

  render() {
    const { isCustomerLoggedIn } = this.props.Customer;
    const { isMobAvailable, isMobAvailChecked } = this.state;
    // console.log(this.props, this.state);
    return (
      <div>
        { isMobAvailChecked && !isMobAvailable  && <div>{ this.routeScreen() } </div> }
        { isMobAvailChecked && <p>Mobile Number Available in firebase</p> }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
  Customer: makeSelectCustomer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
