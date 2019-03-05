// pages/ct/ct.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    ttnr: '',
    tmnr: '',
    items: [
      { name: '六学', value: '六学', checked: 'true' },
      { name: '数学', value: '数学' },
      { name: '文学', value: '文学' },
      { name: '计算机', value: '计算机' },
      { name: '历史', value: '历史' },
      { name: '英语', value: '英语' },
    ]
  },
  //获取输入的题目类型
  radioChange:function (e) {
    console.log( e.detail.value)
    this.setData({
      ttnr: e.detail.value,
    })
  },

  //获取输入的题目内容
  nrtextarea: function (e) {
    this.setData({
      tmnr: e.detail.value
    })
  },
  /**
   * tj事件
   */
  tj: function (e) {
    //提交输入的内容
    const db = wx.cloud.database()
    db.collection('test').add({
      data: {
        topictype: this.data.ttnr,
        wtnr: this.data.tmnr
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        wx.showToast({
          title: '新增题目成功',
        })
        console.log('[数据库] [新增题目] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增题目] 失败：', err)
      }
    })
    //跳转到post页面
    wx.redirectTo({
      url: '../post/post',
    })
  },
  //返回到post页面
  fh: function (e) {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '请出题'
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

