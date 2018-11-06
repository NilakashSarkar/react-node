import React,{Component}  from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../action'

class Payment extends Component{
    
    render(){
        return(
    <StripeCheckout
        token={(token) =>this.props.handelToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
        )
    }
}
export default connect(null,actions)(Payment)