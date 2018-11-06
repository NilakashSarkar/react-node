import React,{Component}  from 'react'
import {connect} from 'react-redux';
import * as actions from '../action'

class Registation extends Component{
    
    render(){
        return(
            <div className="row">
              <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                </form>
          </div>
        )
    }
}
export default Registation