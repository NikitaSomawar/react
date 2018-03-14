import React from 'react';
import './style.css'; 
//import { connect } from "react-redux";
//import getSateListByBankName_Action from '../../containers/AddBank/actions';
//import reducer from '../../containers/AddBank/reducer';

export class BankListInput extends React.PureComponent {
    
    constructor(props){
        super(props);
       // this.test = this.test.bind(this);
        this.state = {
            bankName:'',
            value: '',
            suggestions: {'abc':'abc'}
          };    
    }
    
    getstatename = (bankName)  => {
     
        this.props.properties.set_bank_name(bankName);
      this.props.properties.getSateListByBankName_Action({token:this.props.properties.Customer.authToken,bank:bankName})
      this.setState({
        suggestions: {}
      });
      this.setState({ bankName: bankName});
 
   }
   
   

   
    escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    filteronobject = function( obj,value) {
        var result = {}, key;
        const escapedValue = this.escapeRegexCharacters(value);
        
        if (escapedValue === '') {
          return [];
        }
        const regex = new RegExp('^' + escapedValue, 'i');
        for (key in obj) {
            if (regex.test(obj[key])) {
                result[key] = obj[key];
            }
        }
        console.log('hi');
        console.log();
        //console.log(result);
        return result;
    };

    changevalue = (e) => {
        e.preventDefault();
        this.setState({ bankName: e.target.value});
        const suggestions = this.filteronobject(this.props.properties.lookupifsc.banklist,e.target.value);
        
        if (suggestions.length === 0) {
          return [
            { isAddNew: true }
          ];
        }
        console.log(suggestions);
        this.setState({
            suggestions: suggestions
          });
    }
 
    render(){
        console.log('here');
        var tifs = this.state.suggestions;		
    
        const { value, suggestions } = this.state;
        console.log('render');
        return (
        <div>
            
           
            <input type='text' onChange={(e) => {this.changevalue(e)}} value={this.state.bankName} placeholder='Enter Bank Name'/>
            <ul>
            {
             Object.keys(tifs).map((key, index) => ( 
                 <li key={index} onClick={() => this.getstatename(key)}>{tifs[key]}</li> 
                 ))
             }
             </ul>
            </div>
        )

    }
}



export default BankListInput;
   
  