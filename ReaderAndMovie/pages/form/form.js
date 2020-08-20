Page({
    data: {
        pickerHidden: true,
        chosen: '',
        items: [
            { name: 'USA', value: '美国' },
            { name: 'CHN', value: '中国', checked: 'true' },
            { name: 'BRA', value: '巴西' },
            { name: 'JPN', value: '日本' },
            { name: 'ENG', value: '英国' },
            { name: 'TUR', value: '法国' },
        ]
    },
    onBindChange: function (event) {
        console.log(event.detail.value);

    },
    onRadioChange: function (event) {
        console.log(event.detail.value);
    },
    onCheckboxChange: function (event) {
        console.log('checkbox发生change事件，携带value值为：', event.detail.value)
    },
    checkClick: function (e) {
        console.log(e)
    },

    formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },

    formReset(e) {
        console.log('form发生了reset事件，携带数据为：', e.detail.value)
        this.setData({
            chosen: ''
        })
    } ,

    onTap: function (event) {
        // wx.navigateTo({
        //     url:"../posts/post"
        // });

        wx.switchTab({
            url: "../posts/post"
        });
    }
})