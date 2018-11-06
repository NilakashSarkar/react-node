import axios from 'axios';
import {FETCH_USER,REGISTATION} from './types'

 export const fetchUser=()=>
  async dispatch=> {
     const res= await axios.get('/api/current-user');
        dispatch({type:FETCH_USER,payload:res.data})
    }

    export const handelToken=(token) =>
      async dispatch =>{
        const res= await axios.post('/api/stripe',token);
        dispatch({type:FETCH_USER,payload:res.data})
      }
    
    export const registation=()=>
      async dispatch =>{
        const res= await axios.post('/api/registation');
        dispatch({type:REGISTATION,payload:res.data})
      }
    
