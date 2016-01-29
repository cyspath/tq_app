var dayCN = {
  Mon: "星期一",
  Tue: "星期二",
  Wed: "星期三",
  Thu: "星期四",
  Fri: "星期五",
  Sat: "星期六",
  Sun: "星期天"
}

var parseDateCN = function(date) {
  return(dayCN[moment(date).format('ddd')] + moment(date).format(' M') + "月" + moment(date).format('D') + "日")
}
