import React from 'react';
import styled from 'styled-components';
import { BOtpLength, BOtpDelay } from '../HiveConfig';
import BInput from './BInput';
import { BRed } from '../colors';


const ResendBtn = styled.a`
    ${props => !(props.disabled) ? 'pointer-events:none;' : '' }
    > p {
        ${props => !(props.disabled) ? 'color:#ccc;' : '' }
    }
`

const OtpCon = styled.div`
    position: relative;
    > div {
        // display: inline-block;
        // width: 260px;
    }
`

const Timer = styled.p`
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: right;
    color: ${props => props.clr };
    display: inline-block;
`

const ResendOption = styled.span`
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px 0;
    > p {
        margin: 0;
    }
`

class BOtpForm extends React.Component {
    constructor(props){
        super(props);
        const { otpSending, errMsg, errVisibility } = props;
        this.state = { 
            dashVisibility: true, 
            // value: '',
            otpTimer: BOtpDelay,
            resendEnable: false,
            resendingOtp: otpSending,
            resendClicked: false,
            errMsg: errMsg,
            errVisibility: errVisibility
        };
        this.tick = this.tick.bind(this);
        this.resendClick = this.resendClick.bind(this);
        this.restoreTimerAndResend = this.restoreTimerAndResend.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(this.tick, 1000);
    }

    otpEnter(e){
        e.preventDefault();
        // console.log(e.target.value, 'in BOtpForm', BOtpLength);
        this.props.onChange(e.target.value);
    }

    tick(){
        let timerCount = this.state.otpTimer - 1;
        let timerLabel = timerCount.toString();
        if(timerLabel.length != 2) timerLabel = `0${timerLabel}`
        if(timerLabel == '00'){
            clearInterval(this.timer);
            this.setState((state) => ({ resendEnable: true }));
        }
        this.setState((state) => ({ otpTimer: timerLabel }));
    }

    resendClick(){
        // this.setState((statez) => ({ resendClicked: true }));
        this.setState({resendClicked: true})
        this.props.resendClick();
    }

    restoreTimerAndResend(){
        this.setState((statez) => ({
            resendClicked: false,
            otpTimer: BOtpDelay,
            resendEnable: false,
        }));
        this.timer = setInterval(this.tick, 1000);
    }

    componentDidUpdate(){
        this.state.resendClicked && !this.state.resendingOtp && this.restoreTimerAndResend();
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        // console.log(this.timer);
    }

    render() {
        // console.log(this.props, this.state, 'in BOtpForm');
        const { otpTimer, resendEnable } = this.state;
        const { eMsg, eVis, type, onChange, placeholder, value, otpSending, otpLength} = this.props;
        // console.log(otpLength);
        return (
            <OtpCon>
                <BInput
                    eVis = { eVis }
                    eMsg = { eMsg }
                    value = { value }
                    onChange = { this.otpEnter.bind(this) }
                    maxLength = { otpLength ? otpLength : BOtpLength }
                    placeholder = { placeholder }
                    type = { type }
                />
                <ResendOption>
                    <Timer clr = { otpTimer === '00' ? '#3d3d3d' : '#333333' } >(00:{ otpTimer })</Timer>
                </ResendOption>
            </OtpCon>
                    // { otpSending &&
                    //     <ResendBtn onClick = {this.resendClick.bind(this)} disabled = { resendEnable } >Resend?</ResendBtn> }
        )
    }
}

export default BOtpForm;