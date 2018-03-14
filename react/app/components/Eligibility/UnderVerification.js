import React from 'react';
import BInfo from '../../BComponents/BInfo';
import { BRed } from '../../colors';

const UnderVerification = () => {
    return (
        <BInfo 
            icon = 'kb-clock'
            desc = 'Please check back later'
            title = 'Your approval is under Verification'
            iconClr = { BRed }
            goLink = { BULogin }
        />
    )
}

export default UnderVerification;