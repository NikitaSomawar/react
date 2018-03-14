/**
*
* MobileVerification
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import BckArw from '../../images/MobOtp/ic_arrow_back.png';
import { MobileVerCon, BckArwImg, Msg, NumBlock, Layer, MobInput, GetOtpBtn, NumShow } from './skins';
import { updateField, submitMobNum, showErr, submitOtp } from '../../containers/HomePage/actions';
import { BMEm, BMInvalidPhone, BMInvalidOtp } from '../../BMsgs';
import { BRPhoneNumber, BROtp } from '../../BRegex';
import BOtpForm from '../../BComponents/BOtpForm';

class OtpVerify extends React.Component {
  submitMobNumer(e) {
    // e.preventDefault();
    const { Customer: { authToken }, homepage: { mobile }, submitMobNum, showErr } = this.props;
    console.log(mobile)
    if (!mobile.value) showErr({identifier: 'mobile', msg: BMEm});
    else if (!BRPhoneNumber.test(mobile.value)) showErr({identifier: 'mobile', msg: BMInvalidPhone});
    else {
        console.log('success of mob');
        // submitMobNum({mobile: mobile.value, token: authToken});
    }
  }

  submitOrderOtp(e){
    e.preventDefault();
    // console.log('test');

    const { Customer: { authToken }, homepage: { otp: { errMsg, errVisibility, value }, otpToken }, submitOtp, showErr } = this.props;
    console.log(value, 'otpToken', otpToken, this.props);
    if(!value) showErr({identifier: 'otp', msg: BMEm});
    else if(!BROtp.test(value)) showErr({identifier: 'otp', msg: BMInvalidOtp});
    else submitOtp({ otp: value, token: otpToken, authToken });
  }
  // componentDidMount() {
  //   console.log(this.props.homepage.isMobNumSubmitted, 'componentDidMount');
  // }

  componentDidUpdate() {
    console.log(this.props.homepage.isOtpValidated, 'componentDidUpdate');
    const { homepage: {isOtpValidated}, history } = this.props;
      console.log(this.props.homepage, 'in OtpVerify');
    if(isOtpValidated){
      history.push('/home/welcome');
    }
  }

  updateField(val) {
    const { updateField } = this.props;
    console.log(val);
    updateField({ identifier: 'otp' , val });
  }

  render() {
    const { Customer, homepage: { mobile, otp, isOtpResending } } = this.props;
    console.log(this.props);
    return (
      <MobileVerCon>
        <BckArwImg src = { BckArw } />
        <Msg>We sent you an OTP to your number</Msg>
        <NumShow>{mobile.value} change?</NumShow>
        <br/>
        <NumBlock>
            <BOtpForm
                eVis = { otp.errVisibility }
                eMsg = { otp.errMsg }
                value = { otp.value }
                onChange = { this.updateField.bind(this) }
                resendClick = { this.submitMobNumer.bind(this) }
                otpSending = { isOtpResending }
                name = 'otp'
                type = 'number'
                placeholder = 'Enter OTP'
            />
        </NumBlock>
        <br/>
        <GetOtpBtn onClick={this.submitOrderOtp.bind(this)}>
            <span>Submit</span>
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
    submitOtp : (datapack) => {
        dispatch(submitOtp(datapack))
    },
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(OtpVerify);

