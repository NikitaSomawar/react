import React from 'react';
import styled from 'styled-components';
import { BRed } from '../colors';

const InCon = styled.div`
    position:relative;
    min-height: 64px;
`

const InInp = styled.input`
    border-bottom: 2px solid ${props => props.eVis ? BRed : '#f3f3f3' };
    width: 100%;
    padding: 10px 0;
    outline: 0;
    &:focus {
        border-bottom: 2px solid ${props => props.eVis ? BRed : '#191919' };
    }
`

const ErrP = styled.p`
    font-size: 12px;
    margin: 4px 0px;
    color: ${BRed};
    font-weight: 500;
`

const BInput = props => {
    const { eVis, eMsg } = props;
    return ( 
        <InCon>
            <InInp { ...props } />
            { eVis && <ErrP>{ eMsg }</ErrP> }
        </InCon>
    )   
}

export default BInput;