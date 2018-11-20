import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import EmailValidation from '../../utils/EmailValidation'
import SurveyFormField from './SurveyFromField'
import _ from 'lodash';
class SurveyForm extends Component{ 
    SurveyFields(){
       return _.map(SurveyFormField,({label,name})=>{
          return <Field key={name} type="text" component={SurveyField} label={label} name={name}/>
       })
    }

    render(){
      
    return(
        <div>
      <form onSubmit={this.props.handleSubmit(()=>this.props.onSurveySubmit())}>
     
     {this.SurveyFields()}
     
     <Link to='/surveys' className="red btn-flat left white-text">Cancel
      <i className="material-icons right">cancel</i>
      </Link>
      <button type="submit" className="teal btn-flat right white-text">Next
      <i className="material-icons right">done</i>
      </button>
      </form>
    
        </div>
    )
    }
}
function validate(values){
  const errors={}
   errors.recipients=EmailValidation(values.recipients || '');

  _.each(SurveyFormField,({name})=>{
    if(!values[name]){
        errors[name]="You mush provided a value";
    }
  })  
  return errors;
}
export default reduxForm({
    validate,
    form:'SurveyForm',
    destroyOnUnmount:false
})(SurveyForm);