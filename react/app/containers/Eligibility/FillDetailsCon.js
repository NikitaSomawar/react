import React from 'react';
import { compose } from 'redux';
import FillDetails from '../../components/Eligibility/FillDetails';
import { createStructuredSelector } from 'reselect';
import makeSelectEligibility from './selectors';
import { connect } from 'react-redux';
import { updateField, passErr, submitUser } from './actions';
import { BMEm } from '../../BMsgs';
import { BRName } from '../../BRegex';
import { BUEGender } from '../../urls';
import _ from 'lodash';

class FillDetailsCon extends React.PureComponent {
    submitAll (e) {
        e.preventDefault();
        const { submitUser, passErr, push, eligibility:{ details: { confirmz }, gender:{ dob, gender }, name:{ fname, lname }, 
        pan:{ pan }, city:{ salary, zip } } } = this.props;
        do {
            if (!(confirmz.v)) {
                passErr('confirmz', 'Please confirm');
            } else {
                const postData = {
                    fname: _.trim(fname.v),
                    lname: _.trim(lname.v),
                    pan: _.trim(pan.v),
                    pin: _.trim(zip.v),
                    monthlySalary: _.trim(salary.v),
                    dob: _.trim(dob.v),
                    gender: _.trim(gender.v)
                }
                submitUser(postData);
            }
        } while (0);
    }

    changeField (e) {}

    toggleCheck () {
        const { eligibility:{ details:{ confirmz } } } = this.props;
        this.props.updateField({
            mod: 'details',
            which: 'confirmz',
            what: !(confirmz.v)
        });
    }

    dummyClick () {}

    editClick (e) {
        const { push } = this.props;
        const clickedScreen = e.target.getAttribute('data-screen');
        push(`/eligibility/${clickedScreen}`);
    }

    render () {
        return (
            <FillDetails 
                dummyClick = { this.dummyClick.bind(this) }
                onChange = { this.changeField.bind(this) }
                onSubmit = { this.submitAll.bind(this) }
                toggleCheck = { this.toggleCheck.bind(this) }
                editClick = { this.editClick.bind(this) }
                meta = { this.props.eligibility }
            />
        )
    }
}

const mapStateToProps = createStructuredSelector({
  eligibility: makeSelectEligibility(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateField: dataPack => {
        dispatch(updateField(dataPack))
    },
    passErr: (which, what) => {
        dispatch(passErr({ mod: 'details', which, what }))
    },
    submitUser: dataPack => {
        dispatch(submitUser(dataPack))
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(FillDetailsCon);


