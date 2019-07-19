import React from 'react'
import {Link} from 'react-router-dom'
import './assets/position.css'
// class Position extends React.Component{
//   constructor(){
//     super()
//   }
//   render(){
//     let {data,dataName} = this.props
//     return (
//       <div className="position">
//         <Link to={{pathname:"/detail/"+data.id,search:`dataName=${dataName}`}}>
//           <h4>{data.occupation}</h4>
//           <p className="company">{data.compony}</p>
//           <p className="salary">薪资:<em>{data.salary}</em></p>
//           <p className="exp"><span>{data.address}|工作三年以上</span><i></i></p>
//         </Link>
//       </div>
//     )
    
//   }
// }

const Position =(props)=>{

    let {data,dataName} = props
    return (
      <div className="position">
        <Link to={{pathname:"/detail/"+data.id,search:`dataName=${dataName}`}}>
          <h4>{data.occupation}</h4>
          <p className="company">{data.compony}</p>
          <p className="salary">薪资:<em>{data.salary}</em></p>
          <p className="exp"><span>{data.address}|工作三年以上</span><i></i></p>
        </Link>
      </div>
    )
}

export default Position