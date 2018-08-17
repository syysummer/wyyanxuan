import React,{Component} from "react";
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import './navList.less'
class NavList extends Component{
   static propTypes = {
     category: PropTypes.object.isRequired
   }
   componentDidMount () {
     // 创建分类列表的scroll对象
     new BScroll(this.refs.listWrap, {
       click: true
     })
   }
    render(){
        let category = this.props.category
        return (
          <div ref="listWrap" className="outerwrap">
            <div className="listContentWrap" >
              <div className="banner">
                <img src={category.bannerUrl} alt="" />
              </div>
              <div className="title">
                <span>{category.name}</span>
                <div className="line"></div>
              </div>
              <div className="innerList">
                <ul className="listUl">
                  {
                    category.subCateList.map((subCate, index) => (
                      <li className="item" v-for="(subCate, index) in category.subCateList" key={index}>
                        <img src={subCate.wapBannerUrl} alt="" />
                        <span>{subCate.name}</span>
                      </li>
                    ))
                  }
                <li className="item"></li>
              </ul>
            </div>
          </div>
          </div>
        )
    }
}
export default NavList;