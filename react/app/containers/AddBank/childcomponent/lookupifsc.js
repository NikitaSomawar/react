import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { createStore } from "redux";
import  bhiveReducer  from '../../Bhive/reducer';
import makeSelectBhive, { makeSelectCustomer } from '../../Bhive/selectors';
import { createStructuredSelector } from 'reselect';
import saga from '../saga';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { lookupifsc_Action, 
         showifscErr,
         getBanksList_Action,
         getSateListByBankName_Action,
         getCityListByBankName_Action,
         ifsc_verified_Action ,
         set_bank_name ,
         set_state_name
        } from '../actions';
import lookupifsc, { LookUpIFSC } from '../childcomponent/lookupifsc';
import reducer from '../reducer';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from '../selectors';
import BankListInput from '../../../components/addbankinputs/banklist';
import StateListInput from '../../../components/addbankinputs/statename';
import CityListInput from '../../../components/addbankinputs/cityname';



export class lookUpIFSC extends React.PureComponent {
    
    constructor(props){
        super(props);
    }
    componentWillMount(){
         this.props.getBanksList_Action({token:this.props.Customer.authToken});
    }
    
    handelsubmit = (e) =>{
      e.preventDefault();
     // var bankName = this.refs.bankName.value;
     // var state = this.refs.state.value;
     // var city = this.refs.city.value;
     
    // this.props.ifsc_verified_Action({token:this.props.Customer.authToken,ifsc:'SCBL0036001',});

     // this.props.getSateListByBankName_Action({token:this.props.Customer.authToken,bank:'AXIS BANK'});
     //this.props.getCityListByBankName_Action({token:this.props.Customer.authToken,bank:'AXIS BANK',state:'karnataka'});
      
    // this.props.getBanksList_Action({token:this.props.Customer.authToken});
     // this.props.lookupifsc_Action({bankName:bankName , state:state, city:city , token:this.props.Customer.authToken});

    }

    test = () => {
       // const { Customer: { authToken }, addbank: { ifsc } } = this.props;
        console.log(this.props);
    }


    render(){
      console.log('jayshree');
        return (
        <div>
            <BankListInput properties = {this.props}/>
            <StateListInput properties = {this.props}/>
            <CityListInput properties = {this.props}/>
            
            <div>
                <input   
                name = 'ifsc'
                type = 'text'
                placeholder = 'Enter your ifsc'
                />
                <button onClick ={this.test}>click</button>
            <form method='POST'>
					<div>    
						<input type="text" name="bankName" ref='bankName' placeholder="Bank Name"/>	
					</div>
					<div>
						<input type="text" name="state" ref='state' placeholder="State"/>	
					</div>
                    <div>
						<input type="text" name="city" ref='city'  placeholder="City"/>	
					</div>
					<div>
						<button onClick={this.handelsubmit}>
							Serach Bank
						</button>
                    </div>
				</form>
			</div>
            </div>
        )

    }
}

const mapStateToProps = createStructuredSelector({
    Customer: makeSelectCustomer(),
    lookupifsc: makeSelectHomePage()
  });

  function mapDispatchToProps(dispatch) {
    return {
        lookupifsc_Action: datapack => {
          dispatch(lookupifsc_Action(datapack))
      },
      getBanksList_Action: datapack => {
        dispatch(getBanksList_Action(datapack))
      },
      getSateListByBankName_Action: datapack => {
        dispatch(getSateListByBankName_Action(datapack))
      },
      getCityListByBankName_Action: datapack => {
        dispatch(getCityListByBankName_Action(datapack))
      },
      ifsc_verified_Action: datapack => {
        dispatch(ifsc_verified_Action(datapack))
      },
      showifscErr: datapack => {
        dispatch(showifscErr(datapack))
      },
      set_bank_name: datapack => {
        dispatch(set_bank_name(datapack))
      },
      set_state_name: datapack => {
        dispatch(set_state_name(datapack))
      },

      
    };
  }
  

  const withConnect = connect(mapStateToProps,mapDispatchToProps);
  const withSaga = injectSaga({ key: 'lookupifsc', saga });
  const withReducer = injectReducer({ key: 'lookupifsc', reducer });

  export default compose(
    withSaga,
    withConnect,
    withReducer
  )(lookUpIFSC);
  