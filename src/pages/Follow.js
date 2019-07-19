import React from 'react'

import BackHeader from '../components/BackHeader/BackHeader'
import Position from '../components/Position/Position';
import '../assets/css/follow.css'
import axios from '../utils/axios';
import { connect } from 'react-redux';
import * as types from '../store/types';
import { asyncAction } from '../store/asyncAction';

class Follow extends React.Component{


  
  componentDidMount(){
    this.props.getFollow()
  }
  back=()=>{
    this.props.history.push("/car")
  }
  render(){
    let {follow} = this.props 
    return (
        <div>
          <BackHeader text="职位列表" handerBack={this.back}></BackHeader>
          <div className="follow-top">
            {follow.map((item)=>(
              <Position key={item.id} data={item} dataName="follow"></Position>
            ))}
          </div>
        </div>
    )
  }
}

let stateToProps = (state)=>({
  follow:state.follow
})

let dispatchToProps = (dispatch)=>({
  getFollow:()=>dispatch(asyncAction({
    url:'/mock/follow',
    params:{_page:1,_limit:10},
    typeName:types.UPDATA_FOLLOW
  }))
})

export default connect(stateToProps,dispatchToProps)(Follow)