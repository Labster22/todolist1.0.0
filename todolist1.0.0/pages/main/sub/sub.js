// pages/main/sub/sub.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tasktitle: '',
    taskcontent: '',
    //tasks: [],
    
  },

  typetitle: function (e) {
    this.setData({
      tasktitle: e.detail.value
    });
  },

  typecontent: function (e) {
    this.setData({
      taskcontent: e.detail.value
    });
  },

  back: function () {
    console.log("变化前的序号",app.globalData.key);
    let tasks = getApp().globalData.tasks2;
    let key = app.globalData.key;

    let taskObj = {
      title: this.data.tasktitle,
      content: this.data.taskcontent,
      value: ++app.globalData.key,
      checked: false
    };
    getApp().globalData.tasks2.push(taskObj);
    
    this.setData({
      tasktitle: '',
      taskcontent: ''
    });

    wx.navigateBack({
      url: '../main'
    }) 
  },

 




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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