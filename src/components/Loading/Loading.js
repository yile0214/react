import React from 'react'

import './assets/css/loading.css'

class Loading extends React.Component{
  render(){
    return(
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    )
  }
}

export default Loading;