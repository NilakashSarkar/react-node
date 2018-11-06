import React,{Component}  from 'react'
import {connect } from 'react-redux'
import Payments from './Payment'
import {Link} from 'react-router-dom'
class Header extends Component {
  renderContent(){
    switch(this.props.auth){
      case null:return   <li><a href="/auth/google">SignIn With Google</a></li>;
      case false:return <li><a href="/auth/google">SignIn With Google</a></li>;
      default:return [
        <li key="abc"> <Payments/> </li>,
        <li key="credits" style={{marginLeft:'3px'}}>
        Credit:{this.props.auth.credits}</li>,
      <li key="def"><a href="/api/logout">Logout</a></li>]
      }
  }   
  
    render() {
     
        return (
            <nav>
    <div className="nav-wrapper">
      <Link to={this.props.auth ? '/surveys' : '/'} className=" left brand-logo">Survey</Link>
      <ul  className="right ">
     
      <div>{this.renderContent()}</div>
     
        
      </ul>
    </div>
  </nav>
  
        );
    }
}
 function mapStateToProps({auth}){
   return{ auth
    
  }
  
 }
export default connect(mapStateToProps)(Header);