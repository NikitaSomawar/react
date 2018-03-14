import styled from 'styled-components';

const BFlexDiv = styled.div`
	display: flex;
    ${props => props.jc ? 'justify-content:'+props.jc+';' : '' }
    ${props => props.fd ? 'flex-direction:'+props.fd+';' : '' }
    ${props => props.ai ? 'align-items:'+props.ai+';' : '' }
	${props => props.wid ? 'width:'+props.wid+';' : '' }
	${props => props.mt ? 'margin-top' + props.mt : '' }px;
	${props => props.mb ? 'margin-bottom' + props.mb : '' }px;
`

export const CADiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: row;
`
export default BFlexDiv;
