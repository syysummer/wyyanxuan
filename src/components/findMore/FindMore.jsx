import React,{Component} from "react";
import PropTypes from 'prop-types'
import './findMore.less'
class FindMore extends Component{
    static propTypes = {
      data: PropTypes.array.isRequired
    }
    render(){
        let data = this.props.data
        return (
          <div className="wonderful">
            <div className="wonderfulTit">
              <span className="inner">更多精彩</span>
              <div className="line"></div>
            </div>
            <ul className="listWrap">
              {
                data.length ? data.map((item, index) => (
                  <li className="item"  key={index}>
                    <div className="imgWrap">
                      <div className={item.picList ? 'itemPicUrl hasPicList':'itemPicUrl'}>
                        <img src={item.itemPicUrl} alt="img" />
                      </div>
                      {item.picList ? (
                        <div className="picList">
                          <img src={item.picList[1]} alt=""/>
                          <img src={item.picList[2]} alt=""/>
                        </div>
                      ) : null
                      }
                    </div>
                    <div className="desc">{item.title}</div>
                  </li>
                )) : null
              }
    </ul>
    </div>
        )
    }
}
export default FindMore;