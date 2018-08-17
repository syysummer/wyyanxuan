import {combineReducers} from "redux";
import {
  HOMEDATA,
  DETAILDATA,
  NAVDATA,
  USERDATA
} from './action-types'

const initHomeData = {}; // home组价信息
function homeData(preState = initHomeData, action) {
  switch (action.type) {
    case HOMEDATA:
      return action.data
    default :
      return preState
  }
}

const initDetailData = {}; // detail组件信息
function detailData(preState = initDetailData, action) {
  switch (action.type) {
    case DETAILDATA:
      return action.data
    default :
      return preState
  }
}

const initNavData = []; // nav组件信息
function navData(preState = initNavData, action) {
  switch (action.type) {
    case NAVDATA:
      return action.data
    default :
      return preState
  }
}

const initUserData = {}; // 用户信息
function userData(preState = initUserData, action) {
  switch (action.type) {
    case USERDATA:
      return action.data
    default :
      return preState
  }
}

export default combineReducers({
  homeData,
  detailData,
  navData,
  userData
});