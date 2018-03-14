import React from 'react';
import { Link } from 'react-router-dom';
import { BUEGender } from '../../urls';
import BInput from '../../BComponents/BInput';
import BBtn from '../../BComponents/BBtn';
import BPage from '../../BComponents/BPage';
import { BHead } from '../../BComponents/BTypo';
import BBack from '../../BComponents/BBack';
import BCheck from '../../BComponents/BCheck';
import { FormattedMessage } from 'react-intl';
import messages from '../../containers/Eligibility/messages';

const FillPan = props => {
    const { onChange, toggleCheck, dummyClick, onSubmit, meta:{ pan, checkBox } } = props;
    const { panInfo } = messages;
    return (
        <BPage>
            <BBack /><br />
            <BHead>PAN</BHead><br />
            <form onSubmit = { onSubmit }>
                <BInput 
                    eVis = { pan.ev }
                    eMsg = { pan.em }
                    name = 'pan'
                    value = { pan.v }
                    onChange = { onChange }
                    type = 'text'
                    placeholder = 'Permanent Account Number'
                />
                <p><FormattedMessage { ...panInfo } /></p>
                <BCheck
                    label = 'I Confirm that, this PAN belongs to me '
                    checked = { checkBox.v }
                    onClick = { toggleCheck }
                    onChange = { dummyClick }
                    em = { checkBox.em }
                    ev = { checkBox.ev }
                />
                <BBtn type = 'submit'>NEXT</BBtn>
            </form>
        </BPage>
    )
}

export default FillPan;