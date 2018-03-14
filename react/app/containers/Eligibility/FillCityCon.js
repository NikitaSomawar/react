import React from 'react';
import { compose } from 'redux';
import FillCity from '../../components/Eligibility/FillCity';
import { createStructuredSelector } from 'reselect';
import { makeEligibilityCity } from './selectors';
import { connect } from 'react-redux';
import { updateField, passErr } from './actions';
import { BMEm, BMZip } from '../../BMsgs';
import { BRZip } from '../../BRegex';
import { BUEPan } from '../../urls';


class FillCityCon extends React.PureComponent {
    submitCity (e) {
        e.preventDefault();
        const { eligibilityCity:{ zip, salary }, passErr, push } = this.props;
        do {
            if (!zip.v) {
                passErr('zip', BMEm);
                break;
            } else if (!BRZip.test(zip.v)) {
                passErr('zip', BMZip);
                break;
            } else if (!salary.v) {
                passErr('salary', BMEm);
                break;
            } else {
                console.log('im submit');
                push(BUEPan);
            }
        } while (0);
       
    }

    changeField (e) {
        const which = e.target.name;
        const what = e.target.value;
        this.props.updateField({
            mod: 'city',
            which,
            what
        });
    }

    render () {
        return (
            <FillCity 
                onChange = { this.changeField.bind(this) }
                onSubmit = { this.submitCity.bind(this) }
                meta = { this.props.eligibilityCity }
            />
        )
    }
}

const mapStateToProps = createStructuredSelector({
  eligibilityCity: makeEligibilityCity(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateField: dataPack => {
        dispatch(updateField(dataPack))
    },
    passErr: (which, what) => {
        dispatch(passErr({ mod: 'city', which, what }))
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(FillCityCon);


