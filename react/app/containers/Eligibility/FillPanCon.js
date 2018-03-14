import React from 'react';
import { compose } from 'redux';
import FillPan from '../../components/Eligibility/FillPan';
import { createStructuredSelector } from 'reselect';
import { makeEligibilityPan } from './selectors';
import { connect } from 'react-redux';
import { updateField, passErr } from './actions';
import { BMEm, BMPan } from '../../BMsgs';
import { BRPan } from '../../BRegex';
import { BUEDetails } from '../../urls';
import _ from 'lodash';

class FillPanCon extends React.PureComponent {
    submitPan (e) {
        e.preventDefault();
        const { eligibilityPan:{ pan, checkBox }, passErr, push } = this.props;
        do {
            if (!pan.v) {
                passErr('pan', BMEm);
                break;
            } else if (!BRPan.test(pan.v)) {
                passErr('pan', BMPan);
                break;
            } else if (!checkBox.v) {
                passErr('checkBox', 'Please confirm');
                break;
            } else {
                push(BUEDetails);
            }
        } while (0);
       
    }

    changeField (e) {
        const which = e.target.name;
        const what = e.target.value;
        this.props.updateField({
            mod: 'pan',
            which,
            what: _.toUpper(what)
        });
    }

    toggleCheck (e) {
        const { eligibilityPan:{ checkBox } } = this.props;
        this.props.updateField({
            mod: 'pan',
            which: 'checkBox',
            what: !(checkBox.v)
        });
    }

    dummyClick () {}

    render () {
        return (
            <FillPan 
                onChange = { this.changeField.bind(this) }
                dummyClick = { this.dummyClick.bind(this) }
                onSubmit = { this.submitPan.bind(this) }
                toggleCheck = { this.toggleCheck.bind(this) }
                meta = { this.props.eligibilityPan }
            />
        )
    }
}

const mapStateToProps = createStructuredSelector({
  eligibilityPan: makeEligibilityPan(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateField: dataPack => {
        dispatch(updateField(dataPack))
    },
    passErr: (which, what) => {
        dispatch(passErr({ mod: 'pan', which, what }))
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(FillPanCon);


