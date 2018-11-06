import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {connect} from 'react-redux'
import * as action from '../action'
import Header from './Header'
import {Landing} from './Landing';
const surveys=()=><h2>surveys</h2>
const Dashboard=()=><h2>Dashboard</h2>


class App extends Component{
  componentDidMount(){
this.props.fetchUser();
  }
  render(){
    return (
      <div className='container'>
        <BrowserRouter>
        <div>
        <Header/>
        <Route exact path='/' component={Landing}></Route>
        <Route path='/surveys/new' component={surveys}></Route>
        <Route exact path='/surveys' component={Dashboard}></Route>
      
        </div>
        </BrowserRouter>
        
        
        </div>
    );
  }
}

export default connect(null,action)(App);
