// pages/wx/wx.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lx: [],
    index: 0
  },

  //获取输入的答案内容
  nrtextarea: function (e) {
    this.setData({
      tmnr: e.detail.value
    })
  },
  
  //返回题目显示
  dt: function (e) {
    wx.redirectTo({
      url: '../dt/dt',
    })
    app.globalData.dqth = 0;
    this.wxdqth();
  },

  //返回题目显示
  fh: function (e) {
    wx.redirectTo({
      url: '../dt/dt',
    })
    app.globalData.dqth = 0;
    this.wxdqth();
  },

  //函数 存储当前题号
  wxdqth: function () {
    wx.setStorage({
      key: 'dqth',
      data: app.globalData.dqth
    })
  },

  xt: function () {
    wx.setNavigationBarTitle({
      title: '文学题目'
    });
    if (app.globalData.dqth === 0) {
      app.globalData.xyth = app.globalData.dqth + 1;
      const db = wx.cloud.database()
      db.collection('test').where({
        topictype: '文学'
      })
        .get({
          success: res => {
            // res.data 是包含以上定义的两条记录的数组
            //console.log(res.data)
            this.setData({
              lx: res.data[app.globalData.xyth],
            })
            console.log(app.globalData.xyth)
          }
        })
      app.globalData.dqth = app.globalData.xyth;
      this.wxdqth();
    } else if (app.globalData.dqth > 0 && app.globalData.dqth < app.globalData.zts - 1) {
      app.globalData.xyth = app.globalData.dqth + 1;
      const db = wx.cloud.database()
      db.collection('test').where({
        topictype: '文学'
      })
        .get({
          success: res => {
            // res.data 是包含以上定义的两条记录的数组
            //console.log(res.data)
            this.setData({
              lx: res.data[app.globalData.xyth],
            })
            console.log(app.globalData.xyth)
          }
        })
      app.globalData.dqth = app.globalData.xyth;
      this.wxdqth();
    } else if (app.globalData.dqth === app.globalData.zts - 1) {
      const db = wx.cloud.database()
      db.collection('test').where({
        topictype: '文学'
      })
        .get({
          success: res => {
            // res.data 是包含以上定义的两条记录的数组
            //console.log(res.data)
            this.setData({
              lx: res.data[app.globalData.xyth],
            })
            console.log(app.globalData.xyth)
          }
        }),
        wx.showToast({
          title: '此题为最后一题！',
          icon: 'none',
          duration: 1500 //持续的时间
        })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '文学题目'
    });
    const db = wx.cloud.database()
    db.collection('test').where({
      topictype: '文学'
    })
      .get({
        success: res => {
          // res.data 是包含以上定义的两条记录的数组
          //console.log(res.data)
          this.setData({
            lx: res.data[this.data.index],
          })
          app.globalData.zts = res.data.length;
          console.log(app.globalData.zts)
          this.bczts();
        }
      })
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