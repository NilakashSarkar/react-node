import React from 'react';
import {connect} from 'react-redux'
import * as action from '../../action'
import SurveyFormField from './SurveyFromField'
import _ from 'lodash';
import {withRouter} from 'react-router-dom';
const SurveyReviewForm=({onCancel,formValue,submitSurvey,history})=>{
    const ReviewForm=_.map(SurveyFormField,({name,label})=>{
           return (<div key={name}>
                    <label>{label}</label>
                    <div>
                        {formValue[name]}
                    </div>
               </div>)
    });
    return(
        <div>
            <h5>Confirm Your Reviews :</h5>
            <div>
               {ReviewForm}
            </div>
            <button className="yellow darken-3 btn-flat" onClick={onCancel}>
            Back
            </button>
            <button className="green white-text btn-flat right" 
            onClick={()=>submitSurvey(formValue,history)}>
            Send Survey
             <i className= "material-icons right">email</i>
            </button>
        </div>
    )
}

function mapStateToProps(state){
   
return {formValue:state.form.SurveyForm.values}
}
export default connect(mapStateToProps,action)(withRouter(SurveyReviewForm));
