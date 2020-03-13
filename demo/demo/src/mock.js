// mock.js

// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
const produceNewsData = function () {
  let newNewsObject = { name: 'wd', age: '11', sex: '男', address: '上海路' }
  return newNewsObject
}
// 请求该url，就可以返回newsList
Mock.mock('/mock/news', produceNewsData) // 后面讲这个api的使用细节
