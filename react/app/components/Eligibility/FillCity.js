import React from 'react';
import { Link } from 'react-router-dom';
import BInput from '../../BComponents/BInput';
import BBtn from '../../BComponents/BBtn';
import BPage from '../../BComponents/BPage';
import { BHead } from '../../BComponents/BTypo';
import BBack from '../../BComponents/BBack';

const FillCity = props => {
    const { onChange, onSubmit, meta:{ zip, salary } } = props;
    return (
        <BPage>
            <BBack /><br />
            <BHead>City and Income</BHead><br />
            <form onSubmit = { onSubmit }>
                <BInput 
                    eVis = { zip.ev }
                    eMsg = { zip.em }
                    name = 'zip'
                    value = { zip.v }
                    onChange = { onChange }
                    type = 'text'
                    placeholder = 'Current Address Pincode'
                />
                <BInput 
                    eVis = { salary.ev }
                    eMsg = { salary.em }
                    value = { salary.v }
                    name = 'salary'
                    onChange = { onChange }
                    type = 'number'
                    placeholder = 'Monthly Salary / Income'
                />
                <BBtn type = 'submit'>NEXT</BBtn>
            </form>
        </BPage>
    )
}

export default FillCity;