import styled from 'styled-components';

const BCenter = styled.div`
    text-align:center;
    ${props => props.w ? ('width: ' + props.w + ';') : null }
`

export default BCenter;
