import React,{Component} from "react";
import {Route,Switch,Redirect} from "react-router-dom";

import Home from '../home/Home'
import Detail from '../detail/Detail'
import Nav from '../nav/Nav'
import ShopCart from '../shopCart/ShopCart'
import Profile from '../profile/Profile'
import FootGuide from '../../components/footGuide/FootGuide'
import UserCenter from '../userCenter/UserCenter'

class Main extends Component{
    render(){
      return (
          <div>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/detail' component={Detail}/>
              <Route path='/nav' component={Nav}/>
              <Route path='/shopcart' component={ShopCart}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/usercenter' component={UserCenter} />
              <Redirect to='/home'/>
            </Switch>
            {this.props.location.pathname !== '/profile' ? <FootGuide /> : null}
          </div>
        )
    }
}
export default Main;