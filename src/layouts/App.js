import React from 'react'
import ReactDom from 'react-dom'
import {Route,Redirect,Switch} from 'react-router-dom'
import PubSub from 'pubsub-js'
import '../assets/css/base.css'
import '../library/font.js'
import asyncComponent from '../utils/asyncComponent'
import loadable from 'react-loadable'

import {Link} from 'react-router-dom'
import Header from './Header'
import Home from '../pages/Home'
import Car from '../pages/Car'
// import Follow from '../pages/Follow'
const Follow = asyncComponent(()=>import('../pages/Follow'))
import Footer from './Footer'
// import Detail from '../pages/Detail';
const Detail = loadable({
  loader:()=>import('../pages/Detail'),
  loading:()=>null
})

import User from '../pages/User'
import Reg from '../pages/Reg'
import Login from '../pages/Login'
import ErrorPage from '../pages/ErrorPage'
import Loading from '../components/Loading/Loading'
import AuthUser from '../guard/AuthUser'
import { connect } from 'react-redux';
import * as types from '../store/types'
class App extends React.Component{

  // constructor(){
  //   super()
  //   var token = PubSub.subscribe('VIEW_LOADING',(evname,payload)=>{
  //     // console.log("app",evname,payload)
  //     this.setState({VIEW_LOADING:payload})
  //   });
  // }
  checkPath(path){
    if(/home/.test(path)){
      this.props.ViewNav(true)
      this.props.ViewFoot(true)
    }
    if(/follow|user/.test(path)){
      this.props.ViewNav(false)
      this.props.ViewFoot(true)
    }
    if(/detail|login|reg|car/.test(path)){
      this.props.ViewNav(false)
      this.props.ViewFoot(false)
    }
  }
  componentWillReceiveProps(nextProps){
    let path = nextProps.location.pathname;
    this.checkPath(path);
    window.scrollTo(0,0)
  }
  componentDidMount(){
    let path = this.props.location.pathname;
    this.checkPath(path);

  }
  // componentWillUnmount(){
  //   PubSub.unsubscribe(token)
  // }
  render(){
    let {bNav,bFoot,bLoading} = this.props
    return (
      <div>
        {bNav&&<Header/>}
        {bLoading&&<Loading/>}
        <Switch>}
          <Route path="/home" component={Home}/>
          <Route path="/car" component={Car}/>
          <Route path="/follow" component={Follow}/>
          <Route path="/detail/:id" component={Detail}/>
          <AuthUser path="/user" component={User}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Redirect exact from="/" to="/home"/>
          <Route component={ErrorPage}/>
        </Switch>
        {bFoot&&<Footer/>}
      </div>
    )
  }
}

let stateToProps = (state)=>({
  bNav:state.bNav,
  bFoot:state.bFoot,
  bLoading:state.bLoading
})

let dispatchToProps = (dispatch)=>({
  ViewNav:(bl)=>dispatch({type:types.VIEW_NAV,payload:bl}),
  ViewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
})

export default connect(stateToProps,dispatchToProps)(App)