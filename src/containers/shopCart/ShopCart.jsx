import React,{Component} from "react";
import {Button} from 'antd-mobile'
import './shopCart.less'
class ShopCart extends Component{
  render(){
    return (
      <div className="shopcartContainer">
        {/*头部搜索部分*/}
        <div className="cartHeader">
          <span>购物车</span>
          <span className="ticket">领券</span>
        </div>

       {/*售后服务部分*/}
        <div className="afterServe">
          <div className="item">
            <span className="circle"></span>
            <span>30天无忧退货</span>
          </div>
          <div className="item">
            <span className="circle"></span>
            <span>48小时快速退款</span>
          </div>
          <div className="item">
            <span className="circle"></span>
            <span>满88元免邮费</span>
          </div>
        </div>

        {/*购物车图片部分*/}
        <div className="cartImg">
          <span>去添加点什么吧</span>
        </div>
        <Button className="login" onClick={() => this.props.history.replace('/usercenter')}>登录</Button>
     </div>
    )
  }
}
export default ShopCart;