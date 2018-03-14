/**
 *
 * AddBank
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import makeSelectBhive, { makeSelectCustomer } from '../Bhive/selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddBank from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { addbank_Action } from './actions';
import { LookUpIFSC } from './childcomponent/lookupifsc';

export class AddBank extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
}
handelsubmit = (e) =>{
    e.preventDefault();
    var acountNumber = this.refs.acountNumber.value;
    var ifscCode = this.refs.ifscCode.value;
    var bankName = this.refs.bankName.value;
    var authToken = this.props.Customer.authToken;
    this.props.addbank_Action({bankName:bankName,accNo:acountNumber,ifsc:ifscCode, token: authToken});
}

lookup = () => {
    this.props.history.push('/lookupifsc');  
}

render(){
    return (
    <div>
        <button onClick={() => this.lookup()}>Look Up</button>
        <h1>coming</h1>
        <div>
    <form method='POST'>
      <div>      
        <input type="text" name="bankName" ref='bankName' placeholder="Bank Name"/>		
      </div>
      <div>
        <input type="text" name="acountNumber" ref='acountNumber' placeholder="Acount Number"/>		
      </div>
                <div>
        <input type="text" name="ifscCode" ref='ifscCode'  placeholder="IFSC Code"/>	
      </div>
      <div>
        <button onClick={this.handelsubmit}>
          Add Bank
        </button>
                </div>
    </form>
  </div>
        </div>
    )
  }
}

AddBank.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addbank: makeSelectAddBank(),
  Customer: makeSelectCustomer(),
});

function mapDispatchToProps(dispatch) {
  return {
    addbank_Action: datapack => {
      dispatch(addbank_Action(datapack))
    }
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'addBank', reducer });
const withSaga = injectSaga({ key: 'addBank', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddBank);
