import React,{Component} from "react";
import {connect} from 'react-redux'
import HeaderTop from '../../components/headerTop/HeaderTop'
import {Toast} from 'antd-mobile'
import './profile.less'
import StorageUtils from '../../utils/storageUtils'
class Profile extends Component{
    state = {
      isLogin: false,
      isPhone: false,
      isMail: false,
      user: '',
      vertify: '',
      computedTime: 0
    }
  handleChange = (name,val)=>{
    this.setState({
      [name]:val
    })
  };
  toPhoneLogin = () =>{
      let {isLogin,isPhone,isMail,user,vertify} = this.state
      if(!isLogin && !isPhone && !isMail){
        this.setState({
          isLogin: true,
          isPhone: true,
          isMail: false
        })
        return
      }
      if(isLogin && isPhone && !isMail) {
        // 手机登录的逻辑
        let userReg = /^1[0-9]{10}$/
        let verReg = /^[0-9]{6,8}$/
        if(!user){
          Toast.success('账号不能为空', 1);
          return
        }
        if(!vertify){
          Toast.success('验证码不能为空', 1);
          return
        }
        if(!userReg.test(user) || !verReg.test(vertify)){
          Toast.success('账号或验证码错误', 1);
          return
        }
        Toast.success('登录成功', 1);
        this.props.history.replace('/home')
        StorageUtils.SaveStorage({isLogined: true, username: user})
        this.setState({
          user: '',
          vertify: '',
          isLogin: false,
          isPhone: false,
          isMail: false
        })
        return
      }

      if(isLogin && !isPhone && isMail) {
        // 邮箱登录的逻辑
        let mailReg = /^[a-z0-9A-Z_]{3,12}@[a-z0-9A-Z_]{2,6}\.(com|cn|net)$/
        let pwdReg = /^[a-z0-9A-Z]{6,8}$/
        if(!user){
          Toast.success('邮箱账号不能为空', 1)
          return
        }
        if(!vertify){
          Toast.success('密码不能为空', 1)
          return
        }
        if(!mailReg.test(user) || !pwdReg.test(vertify)){
          this.setState({
            user: '',
            vertify: ''
          })
          Toast.success('账号或验证码错误', 1)
          return
        }
        Toast.success('登录成功', 1);
        this.props.history.replace('/home')
        StorageUtils.SaveStorage({isLogined: true, username: user})
        this.setState({
          user: '',
          vertify: '',
          isLogin: false,
          isPhone: false,
          isMail: false
        })
      }
    }

  toMailLogin = () => {
      let {isLogin,isPhone,isMail} = this.state
      if(!isLogin && !isPhone && !isMail){
        this.setState({
          isLogin: true,
          isPhone: false,
          isMail: true
        })
      } else if((isLogin && isPhone && !isMail) || (isLogin && !isPhone && isMail)){
        this.setState({
          isLogin: false,
          isPhone: false,
          isMail: false
        })
      }
    }

  getCode = () => {//发送验证码的逻辑
    this.setState({
      computedTime: 30
    })
    this.timer = setInterval(() => {
      let computedTime = this.state.computedTime - 1
      this.setState({
        computedTime
      })
      if (this.state.computedTime === 24) {
        Toast.success('验证码为: 123456 ', 2);
        clearInterval(this.timer)
        this.setState({
          computedTime: 0
        })
      }
    },1000)
  }
  render(){
      let {isLogin,isPhone,isMail} = this.state
        return (
          <div className={isLogin ? 'profileContainer logined' : 'profileContainer'}>
            <HeaderTop />
            <div className="profile">
            <div className="logoImg">
            </div>
             {/*登录部分 */}
              {
                isLogin ? (
                  <div className="personMsg">
                    <div className="phone mail">
                      <input type="text" placeholder={isPhone ? "请输入手机号" : "邮箱账号"} onChange={event => this.handleChange("user",event.target.value)}/>
                    </div>
                    <div className="vertify pwd">
                      <input type="text" placeholder={isPhone ? "请输入验证码" : "密码"} onChange={event => this.handleChange("vertify",event.target.value)}/>
                      {isPhone ?  <span onClick={this.getCode}>{this.state.computedTime > 0 ? '已发送'+this.state.computedTime+ 's' :'获取验证码'}</span> : null}
                    </div>
                    <div className="issue">
                      <span className="promble">{isPhone ? "遇到问题?" : "注册账号"}</span>
                      <span className="right">{isPhone ? "使用密码验证登录" : "忘记密码"}</span>
                    </div>
                  </div>
                ) : null
              }
             {/*登录按钮部分*/}
            <div className="login">
              <button type='primary' className="phone" onClick={this.toPhoneLogin} >
              { isLogin ? null :  <i className="iconfont icon-shouji"></i>}
                <span>{isLogin ? '登录' : '手机号码登录'}</span>
              </button>
              <button type='primary' className="mail" onClick={this.toMailLogin}>
              { isLogin ? null :  <i className="iconfont icon-youxiang"></i>}
              <span>{isLogin ? '更换登录方式' : '邮箱账号登录'}</span>
              </button>
              { isMail ? null :<div className="phoneLogin">
                <span>{isPhone ? "注册账号" : "手机快速注册"}</span>
                <i className="iconfont icon-jiantou2"></i>
              </div>}
            </div>
            {/*底部footer部分*/}
              {
                isLogin ? null : <div className="mediaFooter">
                  <span><i className="iconfont icon-weixin"></i>微信</span>
                  <span><i className="iconfont icon-qq"></i>QQ</span>
                  <span><i className="iconfont icon-weibo"></i>微博</span>
                </div>
              }
          </div>
        </div>
        )
    }
}

export default connect(
  state => ({})
)(Profile);