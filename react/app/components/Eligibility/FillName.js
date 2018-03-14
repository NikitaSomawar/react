import React from 'react';
import { Link } from 'react-router-dom';
import { BUEGender } from '../../urls';
import BInput from '../../BComponents/BInput';
import BBtn from '../../BComponents/BBtn';
import BPage from '../../BComponents/BPage';
import { BHead } from '../../BComponents/BTypo';
import BBack from '../../BComponents/BBack';

const FillName = props => {
    const { onChange, onSubmit, meta:{ fname, lname } } = props;
    return (
        <BPage>
            <BBack /><br />
            <BHead>Your Full Name</BHead><br />
            <form onSubmit = { onSubmit }>
                <BInput 
                    eVis = { fname.ev }
                    eMsg = { fname.em }
                    name = 'fname'
                    value = { fname.v }
                    onChange = { onChange }
                    type = 'text'
                    placeholder = 'First Name as on PAN Card'
                />
                <BInput 
                    eVis = { lname.ev }
                    eMsg = { lname.em }
                    value = { lname.v }
                    name = 'lname'
                    onChange = { onChange }
                    type = 'text'
                    placeholder = 'last Name as on PAN Card'
                />
                <BBtn type = 'submit'>NEXT</BBtn>
            </form>
        </BPage>
    )
}

export default FillName;