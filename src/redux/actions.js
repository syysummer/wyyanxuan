import {
  HOMEDATA,
  DETAILDATA,
  NAVDATA,
  USERDATA
} from './action-types'
import {
  reqHomeData,
  reqDetailData,
  reqNavData,
  reqUserData
} from '../api/index'

const updateHomeDate = (homeData) => ({type:HOMEDATA,data: homeData})
const updateDetailDate = (detailData) => ({type:DETAILDATA,data: detailData})
const updateNavDate = (navData) => ({type:NAVDATA,data: navData})
const updateUserDate = (userData) => ({type:USERDATA,data: userData})


//请求首页数据的异步action
export function  getHomeDate(cb) {
  return async dispatch => {
    let result = await reqHomeData()
    if(result.code === 0) {
      dispatch(updateHomeDate(result.data))
      cb && cb()
    }
  }
}
// 获取识物页面的数据
export function  getDetailDate(cb) {
  return async dispatch => {
    let result = await reqDetailData()
    if(result.code === 0) {
      dispatch(updateDetailDate(result.data))
      cb && cb()
    }
  }
}

// 获取分类页面的数据
export function  getNavDate() {
  return async dispatch => {
    let result = await reqNavData()
    if(result.code === 0) {
      dispatch(updateNavDate(result.data))
    }
  }
}

// 获取用户页面的数据
export function  getUserDate() {
  return async dispatch => {
    let result = await reqUserData()
    if(result.code === 0) {
      dispatch(updateUserDate(result.data))
    }
  }
}