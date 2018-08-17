import React,{Component} from "react";
import PropTypes from 'prop-types'
import './goodsList.less'
class GoodsList extends Component{
    static propTypes = {
      cateList: PropTypes.array.isRequired
    }
    render(){
        let cateList = this.props.cateList
        return (
          <div>
            {
              cateList.map((cate, index) => (
                <div className="m-indexFloor" key={index}>
                  <div className="m-titleGoodGrid">
                    <h3 className="title">{cate.name}</h3>
                  </div>
                  <ul className="good_list">
                    {
                      cate.itemList.map((cateItem, index) => (
                        index < 7 ?  <li className="item"  key={index}>
                          <div className="hd_wraper">
                            <img src={cateItem.primaryPicUrl} alt="" />
                            <div className="desc">{cateItem.simpleDesc}</div>
                          </div>
                          <div className="tagWraper">
                            <p className="status gradientPrice">{cateItem.promTag}</p>
                            <div className="name">
                              <span>{cateItem.name}</span>
                            </div>
                            <div className="price">
                              <span>¥{cateItem.retailPrice}</span>
                            </div>
                          </div>
                        </li> : null

                      ))
                    }
                    <li className="item">
                      <a href="javascript:;" className="hd_wraper">
                        <p className="lastName">更多{cate.name}好物</p>
                        <i></i>
                      </a>
                    </li>
                  </ul>
                </div>
              ))
            }

    </div>
        )
    }
}
export default GoodsList;