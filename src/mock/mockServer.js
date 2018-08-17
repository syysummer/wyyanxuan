import Mock from 'mockjs'
import data_nav from './data_nav.json' //分类列表的数据
import home_data from './home_data.json' //主页的数据
import shiwu_data from './shiwu_data.json'
// 个人中心
import login_data from './login_data.json'

// 返回分类页面的数据
Mock.mock( '/data_nav', {code: 0, data: data_nav.categoryL1List})

//返回首页的的数据接口
Mock.mock('/home_data', {code:0, data: home_data})

//返回detail页面的轮播图
Mock.mock('/detail', {code:0, data: shiwu_data})

//返回个人页面
Mock.mock('/login_data', {code:0, data: login_data})
