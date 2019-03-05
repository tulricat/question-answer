//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'chendongtest-1b1544'
    })
    wx.setNavigationBarTitle({
      title: 'Question answering'
    });
  },

  globalData: {
    xyth: 0,
    dqth: 0,
    zts: 0
  }

})
//const db = wx.cloud.database()
//db.collection('test').get({
//  success(res) {
//    // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
//    console.log(res.data)
//    this.setData({
//      test: res.data
//    })
//  }
//})