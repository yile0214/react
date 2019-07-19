import React from 'react'
import '../assets/css/header.css'
class Header extends React.Component{
  render(){
    return (
        <div className="header">
          <span></span>
          <input type="text" placeholder="前端开发工程师"/>
          <i></i>
        </div>
    )
  }
}

export default Header