import React from 'react';
import { BTxt, BHead } from './BTypo';
import BBtn from './BBtn';
import styled from 'styled-components';
import { Link } from 'react-router-redux';

export const CommonDiv = styled.div`
    position: relative;
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`

export const OkBtn = styled(BBtn)`
    position: absolute;
    bottom: 30px;
    margin: auto;
`

export const IIcon = styled.i`
    font-size: 50px;
    margin-top:30%;
    color: ${props => props.iconClr ? iconClr : '#191919' };
`

const BInfo = props => {
    const { icon, desc, title, iconClr, goLink } = props;
    return (
        <CommonDiv>
            <IIcon className = { icon } /><br />
            <BHead>{ title }</BHead><br /><br />
            <BTxt>{ desc }</BTxt>
            <Link to = { goLink }><BBtn>OK</BBtn></Link>
        </CommonDiv>
    )
}

export default BInfo;