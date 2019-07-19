// import React from 'react';
// import {Route,Redirect} from 'react-router-dom'
// import ReacrDom from 'react-dom'
// // import axios from '../utils/axios'

// export default class AuthUser extends React.Component{
  
//   constructor(){
//     super()
//     this.state={
//       hasAuth:false,
//       err:1,
//       data:{}
//     };
//     axios({
//       url:'/mock/user'
//     }).then(
//       res=>{
//         console.log(res.data.err)
//         this.setState({hasAuth:true,err:res.data.err,data:res.data.data})}
//     )
  
//   }
  


//   render(){
//     if(!this.setState.hasAuth) return null;
//     let {component:Component,...rest} = this.props
//     return <Route {...rest} render={(rest)=>
//       (this.state.err==0?<Component {...rest} data={this.state.data} />:<Redirect to="/login"/>)
    
//     }/>
//   } 
// }
import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import User from "../pages/User";
import { connect } from 'react-redux';

let AuthUser = ({userData,component:User,...rest})=>(<Route {...rest} render={(rest)=>(
      userData.err==0? <User {...rest} userData={userData} /> : <Redirect to="/login"/>
    )} />)

  


let stateToProps = (state)=>({
  userData:state.user
})

let dispatchToProps = (dispatch)=>({
  
})

export default connect(stateToProps,dispatchToProps)(AuthUser)