/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import using_first_action from './actions';

export class Form extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
}
  setting_state = () => {
    this.props.using_first_action('nikita');
  }

  getting_state = () => {
    console.log(this.props);
  }
 
  render() {
    return (
      <div>
        <button onClick={this.setting_state}>set in store</button>
        <button onClick={this.getting_state}>get props</button>
        <FormattedMessage {...messages.header}/>
      </div>
    );
  }
}



const mapStateToProps = createStructuredSelector({
  form: makeSelectForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    using_first_action: datapack => {
      dispatch(using_first_action(datapack))
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'form', reducer });
const withSaga = injectSaga({ key: 'form', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Form);
