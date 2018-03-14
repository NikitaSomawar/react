import React from 'react';
import styled from 'styled-components';
import { BCYlw, BRed } from './../colors';
import { BTxt } from './BTypo';

const ErrText = styled(BTxt)`
	color: ${BRed};
`

const CheckBox = styled.div`
	position: relative;
 	margin: 8px 0;
`

const CheckBoxLabel = styled.label`
	cursor: pointer;
	display: inline-block;
	margin-left: 36px;
	&:before, &:after{
		content: "";
		position: absolute;
		left: 0;
		top: 0;
	}
	&:before{
		width: 18px;
		height: 18px;
        margin-top: 0px;
		background: #fff;
		border: 2px solid #191919;
		border-radius: 2px;
		cursor: pointer;
		transition: background .3s;
	}
`
const CheckBoxInput = styled.input`
	outline: 0;
  	margin-right: 2px;
    opacity:0;
    position: absolute;
  	&:checked + label {
  		&:before{
  			background-color: #191919;
  			border: none;
  			width: 20px;
			height: 20px;
  		}
  		&:after {
			transform: rotate(-45deg);
			top: 4px;
			left: 4px;
			width: 12px;
			height: 6px;
			border: 2px solid #ffffff;
			border-top-style: none;
			border-right-style: none;
  		}
  	}
`

const BCheckBox = props => {
	const { label, checked, onClick, ev, em } = props;
	return (
		<CheckBox onClick = { e => onClick(e) }>
            <CheckBoxInput type = 'checkbox' checked = { checked } />
            <CheckBoxLabel><BTxt>{ label }</BTxt></CheckBoxLabel>
            { ev && <ErrText>{ em }</ErrText> }
		</CheckBox>
	)
}

export default BCheckBox;
