// pages/main/main.js
var app = getApp();

Page({
  data: {
    tasks: [],    
    key:0
  },

  add: function (e) {
    wx.navigateTo({
      url: 'sub/sub'
    })
  },
  
  checkboxChange: function (e) {
    let value = e.currentTarget.dataset.value;
    let tasks = this.data.tasks;
    let index = tasks.findIndex(task => task.value == value);   //取到需要改变状态的对象的序号
    if (index < 0) {
      return;
    }
    tasks[index].checked = !tasks[index].checked;   //改变状态
    this.setData({
      tasks: tasks
    });
  },


  details: function (e) {
    let value = e.currentTarget.dataset.value;     //获取点击对象的序号并存在全局变量里
    getApp().globalData.value2 = value;
    console.log("点击详情事件时获取的的value", getApp().globalData.value2);
    
    wx.navigateTo({
      url: 'details/details',
    })
  },


  remove: function (e) {
    let value = e.currentTarget.dataset.value;       //获取点击对象的序号

    let tasks = getApp().globalData.tasks2;

    let newTasks = tasks.filter(task => task.value != value);   //让序号与上述制定序号不同的对象重新组成一个数组

    getApp().globalData.tasks2 = newTasks;
    
    this.setData({
      tasks: newTasks
    });

    console.log("tasks", tasks);

  },

  onLoad: function (options) {},

  onReady: function () {},

  onShow: function () {
    this.setData({
      tasks: getApp().globalData.tasks2    
    })
  },

  onHide: function () {},

  onUnload: function () {},

  onPullDownRefresh: function () {},

  onReachBottom: function () {},

  onShareAppMessage: function () {}
})