// pages/dt/dt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  //返回post
  fh: function (e) {
    wx.redirectTo({
      url: '../post/post',
    })
  },
  //进入六学答题
  lx: function (e) {
    wx.navigateTo({
      url: '../lx/lx',
    })
  },
  //进入数学答题
  sx: function (e) {
    wx.navigateTo({
      url: '../sx/sx',
    })
  },
  //进入文学答题
  wx: function (e) {
    wx.navigateTo({
      url: '../wx/wx',
    })
  },

  jsj: function (e) {
    wx.navigateTo({
      url: '../jsj/jsj',
    })
  },

  ls: function (e) {
    wx.navigateTo({
      url: '../ls/ls',
    })
  },

  yy: function (e) {
    wx.navigateTo({
      url: '../yy/yy',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '选择题目类型'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})


//const db = wx.cloud.database()
//db.collection('test').get({
//  success: res => {
//    console.log('[数据库] [查询记录] 成功：', res.data)
//  },
//  fail: err => {
//    wx.showToast({
//      icon: 'none',
//      title: '查询记录失败'
//    })
//    console.error('[数据库] [查询记录] 失败', err)
//  }
//})