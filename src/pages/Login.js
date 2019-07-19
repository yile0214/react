import React from 'react'

import '../assets/css/login.css'
import BackHeader from '../components/BackHeader/BackHeader';
import axios from '../utils/axios';
import { connect } from 'react-redux';
import * as types from '../store/types'
import { asyncAction } from '../store/asyncAction';


class Login extends React.Component{
  state={
    username:'',
    password:'',
  }
  toReg(){
    this.props.history.push('/reg')
  }
  goCar=()=>{
    this.props.history.push('/car')
  }
  render(){
    let {loginMess} = this.props
    return (
      <div className="login">
        <BackHeader text="登陆" handerBack={this.goCar}></BackHeader>
        <ul className="login-put">
          <li>
            <p>
              <i></i>
              <input type="text" placeholder="请输入用户名称" value={this.state.username} onChange={(ev)=>this.setState({username:ev.target.value})}/>
            </p>
            <em></em>
          </li>
          <li>
            <p>
              <i></i>
              <input type="password" placeholder="请输入密码" value={this.state.password} onChange={(ev)=>this.setState({password:ev.target.value})}/>
            </p>
            <em></em>
          </li>
          {/* <li>
            <p>
              <i></i>
              <input type="password" placeholder="请再次输入密码"/>
            </p>
            <em></em>
          </li> */}
        </ul>
        <p className="login-mess">{loginMess}</p>
        <div className="login-button" onClick={()=>this.props.login(this.state.username,this.state.password)}>立即登陆</div>
        <p className="login-already">----------没有账号？----------</p>
        <div className="login-button_reg" onClick={()=>{this.toReg()}}>立即注册</div>
      </div>
  )
  }
}

let stateToProps = (state)=>({
  loginMess:state.loginMess
})

let dispatchToProps = (dispatch,ownProps)=>({
  login:(username,password)=>dispatch(asyncAction({
    url:'/mock/login',
    method:"POST",
    data:{username,password},
    receipt:true,
    typeName:types.UPDATA_USER
  })).then(res=>{
    if(res.err==0){
      localStorage.setItem("login",JSON.stringify(res))
      ownProps.history.push('/user')
    }else{
      dispatch({type:types.ERR_LOGIN_MESS,payload:res.msg})
      setTimeout(()=>dispatch({type:types.ERR_LOGIN_MESS,payload:null})
      ,2000)
    }
  })
})

export default connect(stateToProps,dispatchToProps)(Login)