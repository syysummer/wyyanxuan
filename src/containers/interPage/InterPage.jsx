import React,{Component} from "react";
import {connect} from 'react-redux'
import './interPage.less'

class InterPage extends Component{
    gotoMask =  () => {
      this.props.history.replace('/home')
    }
    render(){
        return (
          <div className="interPage">
            <img src="http://yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt="inter" />
            <img src="http://yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt="inter" />
            <img onClick={this.gotoMask} src="http://yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg" alt="inter" />
          </div>
        )
    }
}
export default connect(

)(InterPage);