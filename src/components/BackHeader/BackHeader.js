import React from 'react'
import propTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import './assets/backheader.css'

// class BackHeader extends React.Component{
//   constructor(props){
//     super(props)
//   }

//   render(){
//     return(
//         <div className="backhead">
//           <div className="back" onClick={()=>window.history.go(-1)}>
//             <i></i>
//             <em>返回</em>
//           </div>
//           <p>{this.props.text}</p>
//           <span onClick={()=>{this.props.handerBack()}}></span>
//         </div>
//     )
//   }
// }



  const BackHeader = (props)=>{
    return(
      <div className="backhead">
        <div className="back" onClick={()=>props.history.go(-1)}>
          <i></i>
          <em>返回</em>
        </div>
        <p>{props.text}</p>
        <span onClick={()=>{props.handerBack()}}></span>
      </div>
   )
  }
    
  


BackHeader.defaultProps={
  text:'',
  handerBack:()=>{}
}
BackHeader.propTypes={
  text:propTypes.string,
  handerBack:propTypes.func
}
export default withRouter(BackHeader)