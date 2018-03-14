import React from 'react';
import { CommonDiv, IIcon } from '../../BComponents/BInfo';
import BBtn from '../../BComponents/BBtn';
import { BHead, BTxt } from '../../BComponents/BTypo';
import { Link } from 'react-router-dom';
import { BULogin } from '../../urls';

const Congratz = props => {
    const { userName, uptoAmt } = props;
    return (
        <CommonDiv>
            <IIcon className = 'kb-check-circle2' /><br />
            <BHead>Congratulations</BHead><br /><br />
            <BHead>{ userName }</BHead><br /><br />
            <BTxt>You are now eligible for an Advance Salary upto</BTxt>
            <BHead>{ uptoAmt }</BHead><br /><br />
            <BBtn><Link to = { BULogin }>OK</Link></BBtn>
        </CommonDiv>
    )
}

export default Congratz;