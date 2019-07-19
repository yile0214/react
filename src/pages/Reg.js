import React from 'react'
import BackHeader from '../components/BackHeader/BackHeader';

import '../assets/css/reg.css'
import {connect} from 'react-redux'
import { asyncAction } from '../store/asyncAction';
import * as types from '../store/types'

class Reg extends React.Component{
  state={
    username:'',
    password:'',
  }
  // send(){
  //   axios({
  //     url:'/mock/reg',
  //     method:"POST",
  //     data:{username:this.state.username,password:this.state.password}
  //   }).then(res=>{
  //     if(res.data.err==0){
  //       this.props.history.push('/login')
  //     }else{
  //       this.setState({mess:res.data.msg})
  //       setTimeout(()=>{
  //         this.setState({username:'',password:'',mess:''})
  //       },2000)
  //     }
  //   })
  // }
  toLogin(){
    this.props.history.push('/login')
  }
  render(){
    let {regMess} = this.props
    return (
        <div className="reg">
          <BackHeader text="注册"></BackHeader>
          <ul className="reg-put">
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
          <p className="login-mess">{regMess}</p>
          <div className="reg-button" onClick={()=>{this.props.reg(this.state.username,this.state.password)}}>免费注册</div>
          <p className="reg-already">----------已有账号？----------</p>
          <div className="reg-button_login" onClick={()=>{this.toLogin()}}>立即登陆</div>
        </div>
    )
  }
}

let stateToProps = (state)=>({
  regMess:state.regMess
})

let dispatchToProps = (dispatch,ownProps)=>({
  reg:(username,password)=>dispatch(asyncAction({
    url:'/mock/reg',
    method:"POST",
    data:{username,password},
    typeName:types.UPDATA_USER,
    receipt:true
  })).then(res=>{
    if(res.err==0){
      // dispatch({type:types.ERR_REG_MESS,payload:res})
      ownProps.history.push("/login")
    }else{
      dispatch({type:types.ERR_REG_MESS,payload:res.msg})
      setTimeout(()=>{
      dispatch({type:types.ERR_REG_MESS,payload:null})

      },2000)
    }
  })
})

export default connect(stateToProps,dispatchToProps)(Reg)