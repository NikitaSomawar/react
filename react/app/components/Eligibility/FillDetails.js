import React from 'react';
import { Link } from 'react-router-dom';
import { BUEGender } from '../../urls';
import BInput from '../../BComponents/BInput';
import BBtn from '../../BComponents/BBtn';
import BPage from '../../BComponents/BPage';
import { BHead } from '../../BComponents/BTypo';
import BBack from '../../BComponents/BBack';
import { FormattedMessage } from 'react-intl';
import messages from '../../containers/Eligibility/messages';
import BCheck from '../../BComponents/BCheck';
import { ESpan, EditCon } from './skins';

const FillDetails = props => {
    const { dummyClick, editClick, toggleCheck, onChange, onSubmit, 
        meta:{ isSubmitting, city:{ salary, zip }, gender: { dob, gender }, name: { fname, lname }, pan: { pan }, details:{ confirmz } } } = props;
    return (
        <BPage>
            <BBack /><br />
            <BHead>Reconfirm all details</BHead><br />
            <form onSubmit = { onSubmit }>
                <EditCon>
                <BInput 
                    eVis = { fname.ev }
                    eMsg = { fname.em }
                    name = 'fname'
                    value = { fname.v }
                    onChange = { onChange }
                    type = 'text'
                    disabled = { true }
                    placeholder = 'First Name as on PAN Card'
                /><ESpan data-screen = 'name' onClick = { editClick }>EDIT</ESpan></EditCon>
                <EditCon>
                <BInput 
                    eVis = { lname.ev }
                    eMsg = { lname.em }
                    value = { lname.v }
                    name = 'lname'
                    disabled = { true }
                    onChange = { onChange }
                    type = 'text'
                    placeholder = 'last Name as on PAN Card'
                /><ESpan data-screen = 'name' onClick = { editClick }>EDIT</ESpan></EditCon>
                <EditCon>
                <BInput 
                    eVis = { dob.ev }
                    eMsg = { dob.em }
                    value = { dob.v }
                    name = 'dob'
                    disabled = { true }
                    onChange = { onChange }
                    type = 'text'
                    placeholder = 'DOB as on PAN'
                /><ESpan data-screen = 'gender' onClick = { editClick }>EDIT</ESpan></EditCon>
                <EditCon>
                <BInput 
                    eVis = { gender.ev }
                    eMsg = { gender.em }
                    value = { gender.v }
                    name = 'gender'
                    disabled = { true }
                    onChange = { onChange }
                    type = 'text'
                    placeholder = 'Gender'
                /><ESpan data-screen = 'gender' onClick = { editClick }>EDIT</ESpan></EditCon>
                <EditCon>
                <BInput 
                    eVis = { zip.ev }
                    eMsg = { zip.em }
                    value = { zip.v }
                    name = 'zip'
                    disabled = { true }
                    onChange = { onChange }
                    type = 'text'
                    placeholder = 'Current Address Pincode'
                /><ESpan data-screen = 'city' onClick = { editClick }>EDIT</ESpan></EditCon>
                <EditCon>
                <BInput 
                    eVis = { salary.ev }
                    eMsg = { salary.em }
                    value = { salary.v }
                    name = 'salary'
                    disabled = { true }
                    onChange = { onChange }
                    type = 'text'
                    placeholder = 'Monthly Salary / Income'
                /><ESpan data-screen = 'city' onClick = { editClick }>EDIT</ESpan></EditCon>
                <EditCon>
                <BInput 
                    eVis = { pan.ev }
                    eMsg = { pan.em }
                    value = { pan.v }
                    name = 'pan'
                    disabled = { true }
                    onChange = { onChange }
                    type = 'text'
                    placeholder = 'Permanent Account Number'
                /><ESpan data-screen = 'pan' onClick = { editClick }>EDIT</ESpan></EditCon>
                <p><FormattedMessage {...messages.submitInfo}/></p>
                <BCheck
                    label = 'I Agree to T&C. I Approve financial institution to run credit check'
                    checked = { confirmz.v }
                    onClick = { toggleCheck }
                    onChange = { dummyClick }
                    em = { confirmz.em }
                    ev = { confirmz.ev }
                />
                <BBtn type = 'submit'>{ isSubmitting ? '...' : 'SUBMIT' }</BBtn>
            </form>
        </BPage>
    )
}

export default FillDetails;