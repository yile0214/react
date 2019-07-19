import React from 'react'

import '../assets/css/car.css'
import getDate from '../filters/data.js'

import BackHeader from '../components/BackHeader/BackHeader'
import { connect } from 'react-redux';
class Car extends React.Component{
  goHome=()=>{
    this.props.history.push("/home")
  }
  render(){
    // console.log(this.props.collection)
    let {collection} = this.props
    return (
        <div>
          <BackHeader text="职位收藏"></BackHeader>
           <div className="Collection">
              {collection.length>0?collection.map((item)=>
              (<div className="everyCar" key={item.id}>
                <div className="zhiwei">
                  <h4>{item.occupation}</h4>
                  <p>
                    <span>{getDate(item.time)}</span>
                    <i></i>
                  </p>
                </div>
                <div className="gongshi">
                  <p>{item.compony}</p>
                </div>
                <div className="address">
                  <span>{item.address}</span>
                  <p className="count">
                    {/* <span className="reduce">-</span>
                    <i className="num">1</i>
                    <span className="add">+</span> */}
                  </p>
                </div>
              </div>)):<div className="none" onClick={this.goHome}>去发现</div>}
            </div>
        </div>
    )
  }
}

let stateToProps = (state)=>({
  collection:state.collection
})

let dispatchToProps = (dispatch)=>({
  
})

export default connect(stateToProps,dispatchToProps)(Car)