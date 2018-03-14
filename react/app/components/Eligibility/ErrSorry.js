import React from 'react';
import BInfo from '../../BComponents/BInfo';
import { BRed } from '../../colors';

const ErrSorry = () => {
    return (
        <BInfo 
            icon = 'kb-error'
            desc = 'Either your Criteria doesnt match or we are not in a position to lend you a loan yet.'
            title = 'Sorry'
            iconClr = { BRed }
        />
    )
}

export default ErrSorry;