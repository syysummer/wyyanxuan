import React,{Component} from "react";
import {NavLink} from 'react-router-dom'

import './headerTop.less'
class HeaderTop extends Component{
    render(){
        return (
          <div className="detailHeader">
            <NavLink className="span home" to="/home"><i className="iconfont icon-shouye"></i></NavLink>
            <span className="span title">网易严选</span>
            <span className="span search"></span>
            <span className="span shopCart"><i className="iconfont icon-gouwuchekong"></i></span>
          </div>
        )
    }
}
export default HeaderTop;