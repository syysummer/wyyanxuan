import React,{Component} from "react";
import {connect} from 'react-redux'
import BScroll from 'better-scroll'
import {getNavDate} from '../../redux/actions'
import NavList from '../../components/navList/NavList'
import './nav.less'
class Nav extends Component{
  state = {
    currentIndex: 0
  }
  componentWillMount () {
    this.props.getNavDate()
  }
  componentDidMount () {
    // 创建导航条菜单的scroll对象
    new BScroll(this.refs.navMenu, {
      click: true,
      bounce: {
        top: false,
        bottom: false,
        left: false,
        right: false
      }
    })
  }
  updateIndex = (index) => {
    this.setState({
      currentIndex: index
    })
  }
  render(){
    let navData = this.props.navData
    return (
      <div className="navWrap">
       {/*头部搜索部分*/}
        <div className="navHeader">
          <div className="search">
            <span>搜索商品,共11964款好物</span>
          </div>
        </div>
        {/*导航内容部分*/}
        <div className="navContent">
          <div className="navMenu" ref="navMenu">
            <ul className="menu">
              {
                navData.length ? navData.map((nav, index) => (
                  <li className={this.state.currentIndex === index ? "item active" : "item"} onClick={() => this.updateIndex(index)}  key={index}>
                    {nav.name}
                  </li>
                )) : null
              }
          </ul>
        </div>
          <div className="navList">
            {navData.length ? <NavList category = {navData[this.state.currentIndex]} /> : null }
          </div>
    </div>
  </div>
    )
  }
}
export default connect(
  state => ({navData: state.navData}),
  {getNavDate}
)(Nav);