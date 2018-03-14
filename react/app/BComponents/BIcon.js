import React from 'react';
import styled from 'styled-components';

const BI = styled.i`
    ${props => props.clr ? 'color:' + props.clr + ';': null }
    ${props => props.fs ? 'font-size:' + props.fs + ';': null }
`

const BIcon = props => {
	return <BI {...props} clr = { props.clr }></BI>
}

export default BIcon;
