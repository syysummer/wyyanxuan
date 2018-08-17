import React,{Component} from "react";
import {Button} from 'antd-mobile'
import PropTypes from 'prop-types'
import './maskLayer.less'

class MaskLayer extends Component{
    static propTypes = {
      toClose: PropTypes.func.isRequired
    }
    toClose = () => {
      this.props.toClose()
    }
    render(){
        return (
          <div className="masklayer">
             <div className="close" ref='close' onClick={this.toClose}>
              <span>X</span>
             </div>
             <div className="gift">
              <div className="title">
              <i>- 新人专享 -</i>
              </div>
              <div className="description">感谢使用网易严选,已为你准备了一份专享礼</div>
                <div className="good">
                  <img src="http://yanxuan.nosdn.127.net/4c372b5314d26235324abb0cf7f0713a.jpg?imageView&quality=85&thumbnail=232y232" alt="礼物图片" />
                  <div className="good_detail">
                    <span className="good_name">花样年华女士小白鞋</span>
                    <span className="good_label"><i>舒适透气,时尚经典</i></span>
                    <div className="good_price">
                      <span className="price_now">
                         ¥259
                      </span>&nbsp;
                      <span className="price_old">
                        ¥259
                      </span>
                    </div>
                  </div>
                </div>
              <Button className="mtBotton1 mtBotton">领券立减¥60</Button>
              <Button className="mtBotton">查看更多优惠商品</Button>
              </div>
          </div>
        )
    }
}
export default MaskLayer;