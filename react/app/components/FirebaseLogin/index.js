/**
*
* FirebaseLogin
*
*/

import React from 'react';
// import styled from 'styled-components';
import firebase, { db, auth, googleProvider, fbProvider, ui } from "../../firebaseConfig";
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class FirebaseLogin extends React.Component {
  componentDidMount(){
    ui.start('#firebaseui-container', {
       'signInFlow': 'redirect',
       'signInSuccessUrl': '/login',
       'signInOptions': [
         // {
         //   provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
         // },
         {
           provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
         },
         // firebase.auth.GithubAuthProvider.PROVIDER_ID
       ]
    });
  }
  render() {
    // console.log(fbProvider, this.props, 'in FirebaseLogin');
    return (
      <div>
        <div id='firebaseui-container'></div>
      </div>
    );
  }
}

export default FirebaseLogin;
