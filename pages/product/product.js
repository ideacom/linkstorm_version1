// pages/product/product.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tagImg: [
      'images/1.jpg',
      'images/2.jpg',
      'images/3.jpg',
      'images/4.jpg',
      'images/5.jpg',
      'images/6.jpg'
    ],
    placeHolder:'请输入商品关键字进行搜索',
    leftColumnBtnText: [
      '工字钢',
      '槽钢',
      '角钢',
      'H型钢',
      '圆钢',
      '扁铁',
      '镀锌圆管',
      '镀锌方管',
      '镀锌矩管',
      '镀锌角钢',
      '镀锌槽钢',
      '镀锌扁铁',
      '镀锌圆钢',
      '镀锌带方管',
      '镀锌带矩管',
      '镀锌带圆管'
    ],
    rightColumnContent:[
      { 
        image:'./images/1.jpg',
        title:'10工字钢',
        priceLabel:'￥',
        priceLeft:3670,
        priceTag:'~',
        priceRight:4670,
        labelText:'有货'
      },
      {
        image: './images/1.jpg',
        title: '12工字钢',
        priceLabel: '￥',
        priceLeft: 3670,
        priceTag: '~',
        priceRight: 4670,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '114工字钢',
        priceLabel: '￥',
        priceLeft: 3650,
        priceTag: '~',
        priceRight: 4650,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '16工字钢',
        priceLabel: '￥',
        priceLeft: 3650,
        priceTag: '~',
        priceRight: 4650,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '18工字钢',
        priceLabel: '￥',
        priceLeft: 3650,
        priceTag: '~',
        priceRight: 4650,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '20工字钢',
        priceLabel: '￥',
        priceLeft: 3700,
        priceTag: '~',
        priceRight: 4700,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '20B工字钢',
        priceLabel: '￥',
        priceLeft: 3700,
        priceTag: '~',
        priceRight: 4700,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '22工字钢',
        priceLabel: '￥',
        priceLeft: 3700,
        priceTag: '~',
        priceRight: 4700,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '22B工字钢',
        priceLabel: '￥',
        priceLeft: 3700,
        priceTag: '~',
        priceRight: 4700,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '25工字钢',
        priceLabel: '￥',
        priceLeft: 3700,
        priceTag: '~',
        priceRight: 4700,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '25B工字钢',
        priceLabel: '￥',
        priceLeft: 3700,
        priceTag: '~',
        priceRight: 4700,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '28工字钢',
        priceLabel: '￥',
        priceLeft: 3700,
        priceTag: '~',
        priceRight: 4700,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '28B工字钢',
        priceLabel: '￥',
        priceLeft: 3700,
        priceTag: '~',
        priceRight: 4700,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '30工字钢',
        priceLabel: '￥',
        priceLeft: 3700,
        priceTag: '~',
        priceRight: 4700,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '30B工字钢',
        priceLabel: '￥',
        priceLeft: 3700,
        priceTag: '~',
        priceRight: 4700,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '32工字钢',
        priceLabel: '￥',
        priceLeft: 3700,
        priceTag: '~',
        priceRight: 4700,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '32B工字钢',
        priceLabel: '￥',
        priceLeft: 3800,
        priceTag: '~',
        priceRight: 4800,
        labelText: '有货'
      },
      {
        image: './images/1.jpg',
        title: '36工字钢',
        priceLabel: '￥',
        priceLeft: 3820,
        priceTag: '~',
        priceRight: 4820,
        labelText: '有货'
      }
    ],
    logo: "images/store.png",
    storeName: "物联科技有限公司",
    localtionBtn: "立即前往",

  },
  makeRightDisplay: function(event){
    var leftColumnId = event.currentTarget.id
    /**
     * 联调时用
     * wx.request({
      url: 'https://ideacom.cn/jlklkl/'+leftColumnId,
      success:function(res){
        this.setData({
          rightColumnContent:res.data
        })
      }
    })
     */
    //测试时用
    this.setData({
      rightColumnContent:[
        {
          key: '1',
          image: './images/1.jpg',
          title: '圆形扁钢',
          priceLabel: '￥',
          priceLeft: 128,
          priceTag: '~',
          priceRight: 285,
          labelText: '有货'
        },
        {
          key: '1',
          image: './images/1.jpg',
          title: '14工字钢',
          priceLabel: '￥',
          priceLeft: 128,
          priceTag: '~',
          priceRight: 285,
          labelText: '有货'
        },
      ]
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