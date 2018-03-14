import React from 'react';
import { compose } from 'redux';
import FillGender from '../../components/Eligibility/FillGender';
import { createStructuredSelector } from 'reselect';
import { makeEligibilityGender } from './selectors';
import { connect } from 'react-redux';
import { updateField, passErr } from './actions';
import { BMEm } from '../../BMsgs';
import { BRName } from '../../BRegex';
import { BUECity } from '../../urls';


class GenderCon extends React.PureComponent {
    submitGender (e) {
        e.preventDefault();
        const { eligibilityGender:{ dob, gender }, passErr, push } = this.props;
        do {
            if (!dob.v) {
                passErr('dob', BMEm);
                break;
            } else if (!gender.v) {
                passErr('gender', BMEm);
                break;
            } else {
                console.log('im submit');
                push(BUECity);
            }
        } while (0);
       
    }

    changeField (e) {
        const which = e.target.name;
        const what = e.target.value;
        this.props.updateField({
            mod: 'gender',
            which,
            what
        });
    }

    radioChange(val) {
        this.props.updateField({
            mod: 'gender',
            which: 'gender',
            what: val.value
        });
    }

    render () {
        return (
            <FillGender 
                onChange = { this.changeField.bind(this) }
                onSubmit = { this.submitGender.bind(this) }
                radioChange = { this.radioChange.bind(this) }
                meta = { this.props.eligibilityGender }
            />
        )
    }
}

const mapStateToProps = createStructuredSelector({
  eligibilityGender: makeEligibilityGender(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateField: dataPack => {
        dispatch(updateField(dataPack))
    },
    passErr: (which, what) => {
        dispatch(passErr({ mod: 'gender', which, what }))
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(GenderCon);


