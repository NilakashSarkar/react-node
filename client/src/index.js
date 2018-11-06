import React from 'react';
import '../node_modules/materialize-css/dist/css/materialize.css';
import reduxThunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import reducers from './reducers'
import {createStore,applyMiddleware} from 'redux'
const store=createStore(reducers,{},applyMiddleware(reduxThunk))
ReactDOM.render(
<Provider store={store}><App /></Provider>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
