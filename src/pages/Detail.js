import React from 'react'
import queryString from 'query-string'

import BackHeader from '../components/BackHeader/BackHeader';

import '../assets/css/detail.css'
import axios from '../utils/axios';
import { connect } from 'react-redux';
import { asyncAction } from '../store/asyncAction';
import * as types from '../store/types'
import getDate from '../filters/data.js'

class Detail extends React.Component{

  componentDidMount(){
    let {match,location} = this.props;
    let id = match.params.id ;
    let dataName = queryString.parse(location.search).dataName
    this.props.getDetail(dataName,id)
  }
  goCar=()=>{
    // console.log(111)
    this.props.history.push('/car')
  }
  render(){
    let {detail} = this.props
    // console.log(detail)
    return (
        <div className="detail">
          <BackHeader text="职位详情" handerBack={this.goCar}></BackHeader>
          {detail.detail&&(
            <div>
              <div className="detail-mc">
                <h3>职位名称</h3>
                <div className="detail-address">
                  <p>职位:<span>{detail.occupation}</span></p>
                  <p>地区:<span>{detail.address}</span></p>
                  <p>时间:<span>{getDate(detail.time)}</span></p>
                  <p>薪资:<em>{detail.salary}</em></p>
                </div>
              </div>
              <div className="detail-compony">
                  <div className="title">
                    <h3>
                      <span></span>
                      <p>国泰股份有限公司</p>
                    </h3>
                    <i></i>
                  </div>
                  <div className="jieshao">
                      <p>发布时间:<span>{getDate(detail.time)}</span></p>
                      <p>薪资待遇:<span>面议</span></p>
                      <p>工作地点:<span>{detail.address}</span></p>
                      <p>学历要求:<span>大专及以上</span></p>
                      <p>工作经验:<span>3年以上</span></p>
                      <p>性别要求:<span>不限</span></p>
                  </div>  
              </div>
              <div className="detail-des">
                <div className="title">
                    <h3>
                      <span></span>
                      <p>职位介绍</p>
                    </h3>
                    <i></i>
                </div>
                <div className="des">
                    <p>{detail.detail.content}</p>
                </div>
              </div>
          </div>
          )}
          <div className="detailfoot" onClick={()=>{this.props.push(detail)}}>投递简历</div>
        </div>
    )
  }
}

let stateToProps = (state)=>({
  detail:state.detail
})

let dispatchToProps = (dispatch)=>({
  getDetail:(dataName,id)=>dispatch(asyncAction({
    url:`/mock/${dataName}/${id}`,
    typeName:types.UPDATA_DETAIL
  })),
  push:(detail)=>{dispatch({type:types.COLLECTION_LIST,payload:detail})}
})
export default connect(stateToProps,dispatchToProps)(Detail)