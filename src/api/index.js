/*多个接口请求函数*/
import ajax from './ajax'
const BASE = ''

// 获取首页的数据
export const reqHomeData = () => ajax('/home_data')

// 获取识物部分的数据
export const reqDetailData = () => ajax('/detail')

// 获取nav下面的数据
export const reqNavData = () => ajax('/data_nav')

// 获取user信息
export const reqUserData = () => ajax('/login_data')