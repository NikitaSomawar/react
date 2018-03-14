/**
*
* TogglerScreen
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BUEIntro } from '../../urls';

import  createHistory   from 'history/createBrowserHistory'



const TogglerCon = styled.div`
    display: flex;
    justify-content: center;
    padding: 110px 20px;
    flex-direction: column;
    text-align: center;
    align-items: center;
    > a {
      text-decoration: none;
      color: #333333;
      > button {
        border: 1px solid gray;
        padding: 5px;
        border-radius: 5px;
      }
    }
`

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class TogglerScreen extends React.Component {
  gotoEligibity(e){
    e.preventDefault();
    console.log('btn clicked');
    // browserHistory.push('/'); //update the route path here
  }

  addBank=(e)=> {
    e.preventDefault();
    console.log('addBank clicked');
    
    const history = createHistory();
    alert('hi');
    console.log(history);
    history.push('/addBank');//update the route path here
  }



  render() {
    return (
      <TogglerCon>
        <Link to = '/home/mobVer' ><button >Mobile Verification</button></Link><br/>
        <Link to = { BUEIntro }><button>Go to Eligibility</button></Link><br/>
        <Link to = '/addbank' ><button >Add Bank</button></Link><br/>
      </TogglerCon>
    );
  }
}

export default TogglerScreen;
