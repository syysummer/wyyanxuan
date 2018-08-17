import React,{Component} from "react";
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
import {getUserDate} from '../../redux/actions'
import StorageUtils from '../../utils/storageUtils'
import './userCenter.less'

class UserCenter extends Component{
    componentWillMount() {
      this.props.getUserDate()
      let userInfo = StorageUtils.ReadStorage()
      if(!userInfo.isLogined){
        this.props.history.replace('/profile')
      }
    }
    componentDidMount(){
      new BScroll( '.usercenter',{
        click: true
      })
    }
    goTo = (path) => {
      this.props.history.replace(path)
      StorageUtils.SaveStorage({isLogined: false , username: ''})
    }
    render(){
        let userInfo = StorageUtils.ReadStorage()
        let userData = this.props.userData
        return (
          <div className="usercenter">
            <div>
            {/*会员信息*/}
            <div className="user">
              <div className="user-avatar">
                <img src="http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" />
              </div>
              <div className="user-id">
                <div>
                  <p>{userInfo.username}</p>
                  <span>普通用户</span>
                </div>
              </div>
              <div className="super-vip">
                <div className="super-model">
                  <div>
                    <p>超级会员</p>
                    <span>立即使用<i className="iconfont icon-jiantou2"/></span>
                  </div>
                </div>
              </div>
            </div>
            {/*菜单*/}
            <div className="menu">
              <ul>
                {
                  userData.menu ? userData.menu.map((item, index) => (
                      <li key={index}>
                        <div className="flex-li">
                          <div>
                            <i className='iconfont  icon-${index}'/>
                            <p>{item}</p>
                          </div>
                        </div>
                      </li>
                    ))

                 : null
                }

      <li className="last-li"></li>
    </ul>
    </div>
            {/*退出登录*/}
            <div className="close" onClick={() => this.goTo('/profile')}>
            <p>退出登录</p>
          </div>
            </div>
          </div>
        )
    }
}
export default connect(
  state => ({userData: state.userData,userInfo:state.userInfo}),
  {getUserDate}
)(UserCenter);