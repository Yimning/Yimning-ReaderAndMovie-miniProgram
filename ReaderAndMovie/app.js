App({
    globalData:{
        g_isPlayingMusic:false,
        g_currentMusicPostId:null,
        doubanBase: "https://api.douban.com",
        appKey: "0df993c66c0c636e29ecbb5344252a4a",
    },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})





///* 在非全局文件下只能设置Windows属性，而在app文件当中可以设置多个属性 */