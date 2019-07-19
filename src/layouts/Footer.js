import React from 'react'
import {Link,NavLink} from 'react-router-dom'
// import {TabBar,ListView } from 'antd-mobile'
import '../assets/css/footer.css'
class Footer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
  render() {
    return (
      // <div className="footer">
      //   <ul>
      //     <li>
      //       <span></span>
      //       <p>首页</p>
      //     </li>
      //     <li>
      //       <span></span>
      //       <p>列表</p>
      //     </li>
      //     <li>
      //       <span></span>
      //       <p>购物车</p>
      //     </li>
      //     <li>
      //       <span></span>
      //       <p>我的</p>
      //     </li>
      //   </ul>
      // </div>
      <div className="footer">
        <div className="footer-skip">
          <NavLink activeClassName="home" to="/home">
            <span></span>
            <p>首页</p>
          </NavLink>
          <NavLink activeClassName="follow" to="/follow">
            <span></span>
            <p>列表</p>
          </NavLink>
          <NavLink activeClassName="car" to="/car">
            <span></span>
            <p>职位收藏</p>
          </NavLink>
          <NavLink activeClassName="my" to="/user">
            <span></span>
            <p>我的</p>
          </NavLink>
          </div>
       </div>
    )
      
  }

}


export default Footer