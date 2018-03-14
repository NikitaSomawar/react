import styled from 'styled-components';
import { BHuge, BHead } from '../../BComponents/BTypo';

export const InImg = styled.img`
    padding: 20px 0;
`

export const BlueBg = styled.div`
    background: #3d3d3d;
    width: 90%;
    min-height: 58vh;
    float: right;
    padding: 20px 14px;
    position: relative;
    margin-bottom: 30px;
`

export const BName = styled(BHuge)`
    padding-bottom: 10px;
    border-bottom: 2px solid #888;
`

export const UnderL = styled.span`
    border-bottom: 2px solid #fff;
    color: #fff;
`

export const BSalary = styled(BHead)`
    color: #fff;
`

export const FinImg = styled.img`
    position: absolute;
    right: 20px;
    bottom: 20px;
`