import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch,Redirect} from "react-router-dom";
import {Provider} from "react-redux";

import './mock/mockServer'
import store from './redux/store'
import Main from './containers/main/Main'
import InterPage from './containers/interPage/InterPage'

import './assets/css/react.css'
import './assets/css/mixins.less'
import './assets/js/adaptive'
import UserCenter from "./containers/userCenter/UserCenter";

ReactDOM.render(
  <Provider store={store}>
   <HashRouter>
    <Switch>
      <Route path='/home' component={Main} />
      <Route path='/detail' component={Main} />
      <Route path='/nav' component={Main} />
      <Route path='/shopcart' component={Main} />
      <Route path='/profile' component={Main} />
      <Route path='/usercenter' component={Main} />
      <Route component={InterPage} />
    </Switch>
   </HashRouter>
  </Provider>
  , document.getElementById('app'));

