import React from 'react';
import { compose } from 'redux';
import FillName from '../../components/Eligibility/FillName';
import { createStructuredSelector } from 'reselect';
import { makeEligibilityName } from './selectors';
import { connect } from 'react-redux';
import { updateField, passErr } from './actions';
import { BMEm } from '../../BMsgs';
import { BRName } from '../../BRegex';
import { BUEGender } from '../../urls';


class FillNameCon extends React.PureComponent {
    submitName (e) {
        e.preventDefault();
        const { eligibilityName:{ fname, lname }, passErr, push } = this.props;
        do {
            if (!fname.v) {
                passErr('fname', BMEm);
                break;
            } else if (!BRName.test(fname.v)) {
                passErr('fname', BMEm);
                break;
            } else if (!lname.v) {
                passErr('lname', BMEm);
                break;
            } else if (!BRName.test(lname.v)) {
                passErr('fname', BMEm);
                break;
            } else {
                console.log('im submit');
                push(BUEGender);
            }
        } while (0);
       
    }

    changeField (e) {
        const which = e.target.name;
        const what = e.target.value;
        this.props.updateField({
            mod: 'name',
            which,
            what
        });
    }

    render () {
        return (
            <FillName 
                onChange = { this.changeField.bind(this) }
                onSubmit = { this.submitName.bind(this) }
                meta = { this.props.eligibilityName }
            />
        )
    }
}

const mapStateToProps = createStructuredSelector({
  eligibilityName: makeEligibilityName(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateField: dataPack => {
        dispatch(updateField(dataPack))
    },
    passErr: (which, what) => {
        dispatch(passErr({ mod: 'name', which, what }))
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(FillNameCon);


