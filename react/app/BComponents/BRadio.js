import React from 'react';
import { BTxt } from './BTypo';
import BFlexDiv from './BFlexDiv';
import BIcon from './BIcon';
import styled from 'styled-components';
import { BRed } from '../colors';
import _ from 'lodash';

const SpanBtn = styled.span`
    width: 100px;
    display: flex;
    background-color: ${props => props.active ? '#191919': '#fff' };
    border: 2px solid ${props => props.active ? '#191919': '#ccc' };
    padding: 9px;
    cursor: pointer;
    color:#fff;
    border-radius: 60px;
    margin-left: 10px;
    margin-bottom: 45px;
    font-size: 20px;
    &:first-child{
        margin-left: 0px !important;
    }
    > p {
         color: ${props => props.active ? '#fff': '#ccc' };
    }
`

const SelectedIcon = styled(BIcon)`
    margin-right:10px;
`

const BInputErr = styled.p`
    color:${BRed};
    position: absolute;
    font-size: 14px;
    font-weight: 600;
    line-height:2;
    margin-top:50px;
`


class BRadio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: '',
            valObj: { value: '', label: '' }
        }
    }

    componentWillMount(){
        const { options, disabled } = this.props;
        this.setState({ data: options });
    }

    changeRadio(e){
        if(e.target.getAttribute('data-disabled') !== 'true'){
            const clickedEle = e.target.getAttribute('data-val');
            const { data } = this.state;
            const newData = data.map((obj) => {
                if(obj.value === clickedEle){
                    this.props.onClick(obj);
                    obj.isActive = true;
                    return obj;
                }else{
                    obj.isActive = false;
                    return obj;
                }
            })
            this.setState({ data: newData });
        }
    }

    render() {
        const { data } = this.state;
        const { meta, disabled } = this.props;
        return (
            <BFlexDiv>
                {data.map((ele, index) => (
                    <SpanBtn active = { ele.isActive } data-val = { ele.value } key = { ele.value } data-disabled = { disabled } onClick = { this.changeRadio.bind(this) }>
                        { ele.isActive && <SelectedIcon data-disabled = { disabled } data-val = { ele.value } className = 'kb-check-circle2' /> }
                        <BTxt data-disabled = { disabled } data-val = { ele.value }>{ ele.label }</BTxt>
                    </SpanBtn>
                ))}
                {meta.ev && <BInputErr><span><i className = "kb-exclamation-circle"></i></span>&nbsp; {meta.em}</BInputErr>}
            </BFlexDiv>
        )
    }
}

export default BRadio;