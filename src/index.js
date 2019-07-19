import React from 'react'
import ReactDom from 'react-dom'
import App from './layouts/App'
import {BrowserRouter,Route} from 'react-router-dom'

import {Provider} from 'react-redux'

import './utils/axios.js'

import store from './store'
import { UPDATA_USER } from './store/types';


let local = localStorage.getItem("login")?JSON.parse(localStorage.getItem("login")):null;
if(local) store.dispatch({type:UPDATA_USER,payload:local})
ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </Provider>
  ,
  document.querySelector('#root')
)
