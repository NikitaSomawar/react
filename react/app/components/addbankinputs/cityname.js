import React from 'react';
import './style.css'; 

export class CityListInput extends React.PureComponent {
    
    constructor(props){
        super(props);
        this.state = {
            cityName:'',
            value: '',
            suggestions: {}
          };    
    }
    
    getcityname = (cityName)  => {
       this.setState({ cityName: cityName});
       this.props.properties.set_city_name(stateName);
       var bankName = this.props.properties.lookupifsc.bankName;
       var stateName = this.props.properties.lookupifsc.stateName;
       //this.props.properties.getCityListByBankName_Action({token:this.props.properties.Customer.authToken,bank:bankName,state:stateName});
        this.setState({
        suggestions: {}
      });
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
        return result;
    };

    changevalue = (e) => {
        this.setState({ stateName: e.target.value});
        const suggestions = this.filteronobject(this.props.properties.lookupifsc.cities,e.target.value);
        
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
        var tifs = this.state.suggestions;		   
        const { value, suggestions } = this.state;
        return (
        <div>  
            <input type='text' onChange={(e) => {this.changevalue(e)}} value={this.state.cityName} placeholder='Enter City Name'/>
            <ul>
            {
             Object.keys(tifs).map((key, index) => ( 
                 <li key={index} onClick={() => this.getcityname(key)}>{tifs[key]}</li> 
                 ))
             }
             </ul>
            </div>
        )

    }
}

export default CityListInput;
   
  