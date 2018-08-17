import React,{Component} from "react";
import PropTypes from 'prop-types'
import RecommentItem from '../recommentItem/RecommentItem'
import './recommend.less'
class Recommend extends Component{
  static propTypes = {
    detailData: PropTypes.object.isRequired,
    recommend: PropTypes.string.isRequired
  }
    render(){
        let recommend = this.props.detailData[this.props.recommend]
      return (
          <div>
            {
              recommend ?
                (<div className="recommend">
                  {/*顶部推荐部分*/}
                  <h3 className="title">{recommend.name}</h3>
                  <div className="item_recommend_one">
                    <a href="javascript:;">
                      <img src={recommend.Item[0].picUrl} alt="" />
                      <div className="info">
                        <div className="desc">
                          <div className="desc_title">{recommend.Item[0].title}</div>
                          <div className="price">{recommend.Item[0].priceInfo}元起</div>
                        </div>
                        <div className="subDesc">{recommend.Item[0].subTitle}</div>
                      </div>
                    </a>
                  </div>
                  {/*推荐items*/}
                  <RecommentItem recommend={recommend}/>
                </div>)
                : null
            }
    </div>
        )
    }
}
export default Recommend;