$.fullCalendar.lang("zh-cn", {
    buttonText: {
        today: '今日',
        month: "月",
        week: "周",
        day: "日",
        list: "日程"
    },
    allDayText: "全天",
    eventLimitText: function (n) {
        return "另外 " + n + " 个";
    },
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
    timeFormat: 'h:mm'
});