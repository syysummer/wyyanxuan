import React,{Component} from "react";
import {withRouter, NavLink} from 'react-router-dom'

import './footGuide.less'
class FoodGuide extends Component{
    render(){
        return (
          <footer className="footer_guide border-1px">
           <NavLink href="javascript:;" className="guide_item" to='/home' activeClassName='on'>
                <span className="item_icon">
                  <i className="iconfont icon-shouye"></i>
                </span>
            <span>首页</span>
           </NavLink>
           <NavLink href="javascript:;" className="guide_item" to='/detail' activeClassName='on'>
              <span className="item_icon">
                <i className="iconfont icon-lifangtilitiduomiantifangkuai"></i>
              </span>
              <span>识物</span>
          </NavLink>
          <NavLink href="javascript:;" className="guide_item" to='/nav' activeClassName='on'>
            <span className="item_icon">
              <i className="iconfont icon-fenlei"></i>
            </span>
            <span>分类</span>
         </NavLink>
         <NavLink href="javascript:;" className="guide_item" to='/shopcart' activeClassName='on'>
          <span className="item_icon">
            <i className="iconfont icon-gouwuchekong"></i>
          </span>
          <span>购物车</span>
         </NavLink>
         <NavLink href="javascript:;" className="guide_item" to='/usercenter' activeClassName='on'>
          <span className="item_icon">
            <i className="iconfont icon-gerenzhongxin1"></i>
          </span>
          <span>个人</span>
         </NavLink>
    </footer>
        )
    }
}
export default withRouter(FoodGuide);