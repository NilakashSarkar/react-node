import {REGISTATION} from '../action/types'

export default function(state=null, action) {
   
    switch(action.type) {
       case REGISTATION: 
          return action.payload || false
       default:
          return state;
    }
 }