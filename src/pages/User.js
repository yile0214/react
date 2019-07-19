import React from 'react'
import BackHeader from '../components/BackHeader/BackHeader';

import {connect} from 'react-redux'
import '../assets/css/user.css'
import toux from '../assets/img/baitou-ico.png'
import { UPDATA_USER } from '../store/types';
class User extends React.Component{
 
  render(){
    let {userData:{data},logout} = this.props
    return (
        <div>
          <BackHeader text="个人中心"></BackHeader>
          <div className="user">
            <div className="personal">
              <img className="photo" src={data.icon}/>
              <p><span>{data.nikename}</span>&nbsp;欢迎回来</p>
              <p className="login-time">最后登录时间:1992.03.23 最后更新时间:1992.03.23</p>
            </div>
            <ul className="msg">
              <li>
                <p>
                  <i></i>
                  <span>简历预览</span>
                </p>
                <em></em>
              </li>
              <li>
                <p>
                  <i></i>
                  <span>简历编辑</span>
                </p>
                <em></em>
              </li>
              <li>
                <p>
                  <i></i>
                  <span>投递记录</span>
                </p>
                <em></em>
              </li>
              <li>
                <p>
                  <i></i>
                  <span>职位收藏夹</span>
                </p>
                <em></em>
              </li>
              <li>
                <p>
                  <i></i>
                  <span>修改密码</span>
                </p>
                <em></em>
              </li>
              <li onClick={logout}>
                <p>
                  <i></i>
                  <span>退出登录</span>
                </p>
                <em></em>
              </li>
            </ul>
          </div> 
        </div>
    )
  }
}

let stateToProps = ()=>({

})

let dispatchToProps = (dispatch,ownProps)=>({
  logout:()=>{
    dispatch({type:UPDATA_USER,payload:{err:1}})
    localStorage.removeItem("login")
    ownProps.history.push('/home')
    // console.log(this.props.store)
  }
})

export default connect(stateToProps,dispatchToProps)(User)