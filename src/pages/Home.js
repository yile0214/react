import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/home.css'
import banner from '../assets/img/banner.jpg' 
import Position from '../components/Position/Position.js'
import axios from '../utils/axios';
import {connect} from 'react-redux'
import * as types from '../store/types'


import ReactSwipe from 'react-swipe'
import { asyncAction } from '../store/asyncAction';

class Home extends React.Component{


  componentDidMount(){
    this.props.getHome()
    this.props.getBanner()
  }
  render(){
    let {home,banner} = this.props
    // console.log(banner)
    return (
        <div className="home">
          <div className="banner">
            <ReactSwipe
              className="carousel"
              swipeOptions={{
                auto:1000,
                speed:200
              }}
            >
              {/* <div style={{background:"#99f"}}>PANE 1</div>
              <div style={{background:"#9f9"}}>PANE 2</div>
              <div style={{background:"#f99"}}>PANE 3</div> */}
              {banner.map((item)=>(
                <div key={item.id} style={{background:"#9f9"}}>
                  <Link to={{pathname:"/detail/"+item.id,search:"dataName=banner"}}>
                    {/* <span>{item.title}</span> */}
                    <img src={item.banner}/>
                  </Link>
                </div>
              ))}
              
            </ReactSwipe>
          </div>
          {home.map((item)=>(
            <Position key={item.id} data={item} dataName="home"></Position>
          ))}
        </div>
        
    )
  }
}


let stateToProps = (state)=>({
  home:state.home,
  banner:state.banner
})

let dispatchToProps = (dispatch)=>({
  getHome:()=>dispatch(asyncAction({
    url:'/mock/home',
    params:{_page:1,_limit:11},
    typeName:types.UPDATA_HOME
  })),
  getBanner:()=>dispatch(asyncAction({
    url:'/mock/banner',
    params:{_page:1,_limit:3},
    typeName:types.UPDATA_BANNER
  }))
})

export default connect(stateToProps,dispatchToProps)(Home)