/**
*
* MobileVerification
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import BckArw from '../../images/MobOtp/ic_arrow_back.png';
import { MobileVerCon, BckArwImg, Msg, NumBlock, Layer, MobInput, GetOtpBtn } from './skins';
import { updateField, submitMobNum, showErr } from '../../containers/HomePage/actions';
import { BMEm, BMInvalidPhone } from '../../BMsgs';
import { BRPhoneNumber } from '../../BRegex';
import BInput, { BInputPhone } from '../../BComponents/BInput';

class MobileVerification extends React.Component {
  submitMobNumer(e) {
    e.preventDefault();
    const { Customer: { authToken }, homepage: { mobile }, submitMobNum, showErr } = this.props;
    if (!mobile.value) showErr({identifier: 'mobile', msg: BMEm});
    else if (!BRPhoneNumber.test(mobile.value)) showErr({identifier: 'mobile', msg: BMInvalidPhone});
    else {
        console.log('success of mob');
        submitMobNum({mobile: mobile.value, token: authToken});
    }
  }

  // componentDidMount() {
  //   console.log(this.props.homepage.isMobNumSubmitted, 'componentDidMount');
  // }

  componentDidUpdate() {
    // console.log(this.props.homepage, 'componentDidUpdate');
    const { homepage: {isMobNumSubmitted}, history } = this.props;
    if(isMobNumSubmitted){
      console.log(this.props.homepage);
      history.push('/home/otpVer');
    }
  }

  updateField(e) {
    const { updateField } = this.props;
    // console.log(e.target.name, e.target.value);
    updateField({ identifier: e.target.name , val: e.target.value });
  }

  render() {
    const { Customer, homepage: { mobile } } = this.props;
    // console.log(this.props, 'in MobileVerCon');
    return (
      <MobileVerCon>
        <BckArwImg src = { BckArw } />
        <Msg>Kindly provide your contact number</Msg>
        <br/>
        <NumBlock>
            <BInput
                eVis = { mobile.errVisibility }
                eMsg = { mobile.errMsg }
                value = { mobile.value }
                onChange = { this.updateField.bind(this) }
                name = 'mobile'
                type = 'number'
                placeholder = 'Enter your number'
            />
        </NumBlock>
        <br/>
        <GetOtpBtn onClick={this.submitMobNumer.bind(this)}>
            <span>Get OTP</span>
        </GetOtpBtn>
      </MobileVerCon>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateField: datapack => {
        dispatch(updateField(datapack))
    },
    submitMobNum: datapack => {
        dispatch(submitMobNum(datapack))
    },
    showErr: datapack => {
      dispatch(showErr(datapack))
    },
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(MobileVerification);

