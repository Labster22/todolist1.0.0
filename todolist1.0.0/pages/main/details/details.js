
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tasks: [],
    tasktitle: '',
    taskcontent: '',
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


  sure: function (e) {
    let value = getApp().globalData.value2;

    let tasks = getApp().globalData.tasks2;

    let newTasks = tasks.filter(task => task.value != value);

    getApp().globalData.tasks2 = newTasks;

    let taskObj = {
      title: this.data.tasktitle,
      content: this.data.taskcontent,
      value: getApp().globalData.value2,
      checked: false
    };
    getApp().globalData.tasks2.push(taskObj);

    console.log(getApp().globalData.tasks2);


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
    console.log("value2",getApp().globalData.value2);
    console.log("task2",getApp().globalData.tasks2);

    let oneTask = getApp().globalData.tasks2.filter(task => task.value == getApp().globalData.value2);
    

    let result1 = oneTask.map(a => a.title);
    let result2 = oneTask.map(a => a.content);
    

    this.setData({
      tasktitle: result1[0],
      taskcontent:result2[0]
    });
    
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