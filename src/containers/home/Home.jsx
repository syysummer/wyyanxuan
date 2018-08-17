import React,{Component} from "react";
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import MaskLayer from '../../components/maskLayer/MaskLayer'
import {getHomeDate} from '../../redux/actions'
import GoodsList from '../../components/goodsList/GoodsList'

import './home.less'

class Home extends Component{
  state = {
    navCurrentIndex: 0,
    cateList: ['推荐','居家','鞋包配饰','服饰','电器','洗护','饮食','餐厨','婴童','文体','特色区'],
    hour: '',
    minute: '',
    second: '',
    isMaskShow: true
  }
  _countDown = () => {
    let expiration = Date.now() + 60*60*8*1000
    this.timer = setInterval(() => {
      let date = Date.now()
      if(date >= expiration) {
        expiration = date + 60*60*8*1000
      }
      let time = (expiration - date) / 1000
      let hours = parseInt((time / 3600))
      let minutes = parseInt((time - (hours * 3600)) / 60)
      let seconds = parseInt(time - (hours * 3600 + minutes * 60))
      hours = hours < 10 ? ('0' + hours) : hours
      minutes = minutes < 10 ? ('0' + minutes) : minutes
      seconds = seconds < 10 ? ('0' + seconds) : seconds
      this.setState({
        hour: hours,
        minute: minutes,
        second: seconds,
      })
    }, 500)
  }
  componentWillMount() {
    this.props.getHomeDate(() => {
      this.state.isMounted = true
      // 轮播图的swiper对象
      new Swiper('.swiper-container', {
        // effect: 'fade', //可设置淡入淡出的效果
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    })
  }
  componentDidMount () {
    // 创建顶部导航的scroll对象
    new BScroll(this.refs.headerNav, {
      click: true,
      scrollX: true
    })
    // 创建整体上下滚动的scroll对象
    this.contentContainer = new BScroll('.content_container', {
      click: true
    })
    // 创建新品页的scroll对象
    new BScroll(this.refs.newGood, {
      click: true,
      scrollX: true
    })
    // 创建人气推荐的水平滚动
    new BScroll(this.refs.popular, {
      click: true,
      scrollX: true
    })
    // 实现倒计时
    this._countDown()
    // 创建精选专区的水平滚动indexTopics
    new BScroll(this.refs.indexTopics, {
      click: true,
      scrollX: true
    })
  }
  cateIndex = index => { // 根据点击的顶部导航的index确定样式
    this.setState({
      navCurrentIndex: index
    })
  }
  toTop = () => {
    // 点击回到顶部时,滚动到顶部
    this.contentContainer.scrollTo(0, 0, 500)
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
   toClose = () => {
    this.setState({
      isMaskShow: false
    })
   }
  render(){
    let policyDescList = this.props.homeData.policyDescList
    let newItemList = this.props.homeData.newItemList
    let popularItemList = this.props.homeData.popularItemList
    let topicList = this.props.homeData.topicList
    return (
      // 头部部分
      <div className='homeContainer'>
        {
          this.state.isMaskShow ? <MaskLayer toClose={this.toClose}/> : null
        }

        <div className="homeHeader">
          <span className="title">网易严选</span>
          <div className="search">
            <input type="text" />
              <span>搜索商品,共9771款好物</span>
          </div>
        </div>
        {/*顶部导航条部分*/}
        <div className="nav_wrap" ref="headerNav">
          <ul className="menu">
            {
              this.state.cateList.map((cate, index) => (
                <li className="item" key={index} onClick={() => this.cateIndex(index)}>
                  <span className={this.state.navCurrentIndex === index ? 'active' : ''}>{cate}</span>
                </li>
              ))
            }
         </ul>
        </div>

        {/*主要内容区*/}
        <div className='content_container'>
          <div className="content_wrap">
            {/*轮播图部分*/}
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  this.props.homeData.focusList ? this.props.homeData.focusList.map((focus, index) => (
                    <div className="swiper-slide"  key={index}>
                      <img src={focus.picUrl} alt="banner" />
                    </div>
                  )) : null
                }
              </div>
            {/*&lt;!&ndash; Add Pagination &ndash;&gt;*/}
             <div className="swiper-pagination"></div>
            </div>

           {/*轮播图下面部分*/}
            <div className="to_grow">
            {
              policyDescList ? policyDescList.map((item, index) => (
                <div className="item" key={index}>
                  <img src={item.icon} />
                  <span>{item.desc}</span>
                </div>
              )) : null
            }
          </div>

            {/*indexFloor部分*/}
            <div className="m-indexFloor">
              <div className="hd">
                <div className="hd-Wrap">
                  <span>品牌制造商直供</span>
                  <i className="iconfont icon-jiantou2"></i>
                </div>
              </div>
              <div className="hd-itemWrap">
                <div className="hd-item">
                  <h4>CK制造商</h4>
                  <div className="title">
                    25元起
                  </div>
                  <span>上新</span>
                </div>
                <div className="hd-item">
                  <h4>Nine West制造商</h4>
                  <div className="title">
                    199元起
                  </div>
                  <span>上新</span>
                </div>
                <div className="hd-item">
                  <h4>新秀丽制造商</h4>
                  <div className="title">
                    49元起
                  </div>
                  <span>上新</span>
                </div>
                <div className="hd-item">
                  <h4>Birkenstock集团制造商</h4>
                  <div className="title">
                    89.9元起
                  </div>
                </div>
              </div>
            </div>

            {/*新品发布部分*/}
            <div className="m-newItems">
              <header className="newItemsWrap">
                <span>新品首发</span>
                <div id="all">查看全部 ></div>
              </header>
              <div className="m-goodGrid" ref="newGood">
                <div className="list">
                  {
                    newItemList ? newItemList.map((item, index) => (
                      <div className="goodGrid-item" key={index}>
                        <div className="wraper">
                          <img src={item.primaryPicUrl} alt="" />
                        </div>
                        <div className="title">
                          新品
                        </div>
                        <div className="name">{item.name}</div>
                        <div className="newItemDesc">{item.simpleDesc}</div>
                        <div className="price">{item.retailPrice}￥</div>
                      </div>
                    ))
                    : null
                  }
              </div>
            </div>
          </div>

            {/*人气推荐,好物精选*/}
            <div className="m-indexFloor m-popularItemList">
              <header className="popularItemWrap">
                <span>人气推荐,好物精选</span>
                <div className="all">查看全部 ></div>
              </header>
              <div className="m-goodGrid" ref="popular">
                <div className="list">
                  {
                    popularItemList ? popularItemList.map((item, index) => (
                      <div className="goodGrid-item" key={index}>
                        <div className="wraper">
                          <img src={item.primaryPicUrl} alt="" />
                        </div>
                        <div className="title">
                          限时购
                        </div>
                        <div className="name">{item.name}</div>
                        <div className="newItemDesc">{item.simpleDesc}</div>
                        <div className="price">{item.retailPrice}￥</div>
                      </div>
                    ))
                    : null
                  }

              </div>
            </div>
          </div>

            {/*倒计时部分*/}
            <div className="m-indexFlash">
              <div className="computeTime">
                <div className="limitShop">严选限时购</div>
                <div className="timeWatch">
                  <input type="text" value={this.state.hour} />
                  <div>&nbsp; : &nbsp;</div>
                  <input type="text" value={this.state.minute}/>
                  <div>&nbsp; : &nbsp;</div>
                  <input type="text" value={this.state.second} />
                </div>
                <div className="next">下一场14:00开始</div>
              </div>
              <div className="pic">
                <img
                  src="http://yanxuan.nosdn.127.net/dc3ea0bf6df2e75dd9ec7fa8987be25a.png?imageView&quality=85&thumbnail=330x330"
                  alt="" />
                  <div className="pic_price">
                    <span>¥300</span>
                    <span>¥399</span>
                  </div>
              </div>
            </div>

            {/*福利社*/}
            <div className="welfare">
              <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="" />
            </div>

            {/*专题精选*/}
             <div className="m-indexFloor m-indexTopics">
              <div className="hd">
                <div className="hd-Wrap">
                 <span>专题精选</span>
                   <i className="iconfont icon-jiantou2"></i>
                 </div>
              </div>
              <div className="m-indexTopics-slide" ref="indexTopics">
               <div className="indexTopics-wrap">
                  {
                   topicList ? topicList.map((item, index) => (
                  <div className="hd-item" key={index}>
                  <img src={item.itemPicUrl} alt="" />
                  <div className="detail">
                  <div className="decription">
                    <div className="title">{item.title}</div>
                    <div className="subTitle">{item.subtitle}</div>
                    </div>
                    <div className="price">{item.priceInfo}元起</div>
                    </div>
                    </div>
                      ))
                      : null
                  }
              </div>
            </div>
          </div>

            {/*好物列表*/}
            <GoodsList cateList={this.props.homeData.cateList || []} />

            {/*底部认证部分*/}
            <div className="copyright">
              <div className="content">
                <div className="bd">
                  <a href="javascript:;" className="goApp">下载APP</a>
                  <a href="javascript:;">电脑版</a>
                </div>
                <p className="desc">
                  <span>网易公司版权所有 © 1997-2018</span>
                  <br />
                  <span>食品经营许可证：JY13301080111719</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/*礼物盒*/}
        <div className="giftBox"></div>

        {/*回到顶部*/}
        <div className="fixed" onClick={this.toTop}></div>

      </div>
    )
  }
}
export default connect(
  state => ({homeData: state.homeData}),
  {getHomeDate}
)(Home);