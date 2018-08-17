import React,{Component} from "react";
import {connect} from 'react-redux'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import BScroll from 'better-scroll'
import Split from '../../components/split/Split'
import Recommend from '../../components/recommend/Recommend'
import TenFifteen from '../../components/tenFifteen/TenFifteen'
import FindMore from '../../components/findMore/FindMore'

import {getDetailDate} from "../../redux/actions";
import HeaderTop from '../../components/headerTop/HeaderTop'
import './detail.less'
class Detail extends Component{
  componentWillMount () {
    this.props.getDetailDate(() => {
      new Swiper('.swiper-container', { //创建轮播图的swiper对象
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1.1,
        centeredSlides: true
      })
    })
  }
  componentDidMount () {
    // 创建banner下面scroll的scroll对象
    new BScroll('.m-exploreChannels', {
      click: true,
      scrollX: true
    })
    // 创建banner下面scroll的scroll对象
    new BScroll(this.refs.detailContent, {
      click: true
    })
  }

  render(){
    let banner = this.props.detailData.banner
    let column = this.props.detailData.column
    let tenFifteenData = this.props.detailData.tenfifteen
    let yxLook = this.props.detailData.yxLook
    let findMore = this.props.detailData.findMore
    return (
      <div className="detailContainer">
        {/*头部*/}
        <HeaderTop/>
        <div className="detailContent" ref="detailContent">
          <div className="innerContent">
            {/*轮播图部分*/}
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  banner ? banner.map((item, index) => (
                      <div className="swiper-slide"  key={index}>
                        <img src={item.picUrl} alt="banner" />
                        <div className="mask-content">
                          <div className="subTitle">{item.subTitle}</div>
                          <div className="title">{item.title}</div>
                          <div className="desc">{item.desc}</div>
                        </div>
                      </div>
                  ))
                    : null
                }

            </div>
          </div>

            {/*banner下面的scroll*/}
            <div className="m-exploreChannels">
              <div className="scroll-wrap">
                {
                  column ? column.map((item, index) => (
                      <div className="scroll-item" key={index}>
                        <div className="imgContainer">
                          <img src={item.picUrl} alt="" />
                        </div>
                        <div className="rbGradient">
                          <div className="topNum">{item.articleCount}</div>
                        </div>
                        <div className="title">{item.title}</div>
                      </div>
                    ))
                  : null
                }
              </div>
            </div>

            {/*推荐部分*/}
            <Split/>
            <Recommend detailData={ this.props.detailData || {} } recommend= 'recommend' />
            <Recommend detailData={ this.props.detailData || {} } recommend="recommendOne"/>

            {/*十点一刻*/}
            <TenFifteen tenFifteenData={tenFifteenData || []} />

            {/*严选甄品,采用Recommend组件*/}
            <Split/>
            <Recommend detailData={ this.props.detailData || {} }  recommend="zhen"/>

            {/*严选Look*/}
            <Split/>
            {yxLook ? (<div className="look">
              <h3 className="title">严选LOOK</h3>
              <div className="wrap">
                <img src={yxLook.picUrl} className='mianImg' alt=""/>
                <div className="authorContainer">
                  <div className="author">
                    <div className="authorPic">
                      <img src={yxLook.avatar} alt="" />
                    </div>
                    <div className="authorName">{yxLook.nickname}</div>
                  </div>
                  <div className="desc">{yxLook.content}</div>
                </div>
              </div>
            </div>) : null}

            {/*更多精彩*/}
            <div className="findMore">
              <FindMore data={findMore || []} />
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  state => ({detailData:state.detailData}),
  {getDetailDate}
)(Detail);