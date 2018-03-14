import React from 'react';
import BInput from '../../BComponents/BInput';
import BBtn from '../../BComponents/BBtn';
import BPage from '../../BComponents/BPage';
import { BHead } from '../../BComponents/BTypo';
import BBack from '../../BComponents/BBack';
import BRadio from '../../BComponents/BRadio';


export const GenderData = [
    { value: 'male', label: 'Male', isActive: true},
    { value: 'female', label: 'Female', isActive: false},
]

const FillName = props => {
    const { onChange, radioChange, onSubmit, meta:{ dob, gender } } = props;
    return (
        <BPage>
            <BBack /><br />
            <BHead>Your Gender & Birthday</BHead><br />
            <form onSubmit = { onSubmit }>
                <BInput 
                    eVis = { dob.ev }
                    eMsg = { dob.em }
                    name = 'dob'
                    value = { dob.v }
                    onChange = { onChange }
                    type = 'text'
                    placeholder = 'Date of birth (20/04/1998)'
                />
               <BRadio
                    options = { GenderData }
                    disabled = { false }
                    onClick = { radioChange }
                    meta = { gender }
                />
                <BBtn type = 'submit'>NEXT</BBtn>
            </form>
        </BPage>
    )
}

export default FillName;