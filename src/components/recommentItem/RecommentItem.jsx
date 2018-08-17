import React,{Component} from "react"
import PropTypes from 'prop-types'
import './recommentItem.less'
class RecommentItem extends Component{
  static propTypes = {
    recommend: PropTypes.object.isRequired
  }
    render(){
      let Item = this.props.recommend.Item
        return (
          <div>
            {Item.map((item, index) => (
              index > 0 ? (
                <div className="items" key={index}>
                  <div className="topicInfo">
                    <div className="desc">
                      <div className="topicTitle">{item.title}</div>
                    </div>
                    <div className="subDesc">
                      <div className="cont">{item.subTitle}</div>
                    </div>
                  </div>
                  <div className="topicPic">
                    <img src={item.picUrl} alt="" />
                    <div className="topicTag">
                      <div className="tag">{item.typeName}</div>
                    </div>
                  </div>
                </div>
              ) : null
          ))
        }
          </div>
        )
    }
}
export default RecommentItem;