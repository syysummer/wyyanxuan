import React,{Component} from "react";
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'
import './tenFifteen.less'
class TenFifteen extends Component{
   static propTypes = {
     tenFifteenData: PropTypes.array.isRequired
   }
    componentDidMount () {
      // 创建十点一刻的scroll对象
      new BScroll(this.refs.mySwiper, {
        click: true,
        scrollX: true
      })
    }
    render(){
        let tenFifteenData = this.props.tenFifteenData
        return (
          <div className="topicShow">
            <h3 className="title">十点一刻</h3>
            <div className="showSwiper" ref="mySwiper">
              <ul className="swiperWrap">
                {
                  tenFifteenData.length ?
                    tenFifteenData.map((item, index) => (
                    index < 1 ? (<li className='item contentItem' key={item.id}>
                      <a href="javascript:;">
                        <div className="lineTitle">
                          <span className="inner">今日话题</span>
                        </div>
                        <div className="tsTitle">{item.title}</div>
                        <div className="desc">{item.desc}</div>
                        <div className="joinInfo">{item.participantNum}人参与话题</div>
                      </a>
                    </li>) : null
                    ))
                    : null
                }

              <li className='item lastItem' >
                <a href="javascript:;">
                  <div className="move">
                    <span>查看全部话题</span>
                    <i className="iconfont icon-jiantou2"></i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
       </div>
        )
    }
}
export default TenFifteen;