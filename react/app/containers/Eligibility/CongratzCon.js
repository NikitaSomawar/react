import React from 'react';
import { compose } from 'redux';
import Congratz from '../../components/Eligibility/Congratz';
import { createStructuredSelector } from 'reselect';
import { makeEligibilityCity } from './selectors';
import { makeSelectCustomer } from '../Bhive/selectors';
import { connect } from 'react-redux';
import { updateField, passErr } from './actions';
import { BMEm, BMZip } from '../../BMsgs';
import { BRZip } from '../../BRegex';
import { BUEPan } from '../../urls';


class CongratzCon extends React.PureComponent {
    render () {
        const eligAmt = sessionStorage.getItem('eligibleAmout');
        let refinedAmt = eligAmt ? eligAmt : 0;
        const { BUser:{ name } } = this.props;
        return (
            <Congratz 
                userName = { name }
                uptoAmt = { refinedAmt }
            />
        )
    }
}

const mapStateToProps = createStructuredSelector({
  eligibilityCity: makeEligibilityCity(),
  BUser: makeSelectCustomer()
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(CongratzCon);


