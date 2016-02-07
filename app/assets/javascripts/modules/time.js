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

var parseDateYearCN = function(date) {
  return(moment(date).format('YYYY') + "年" + moment(date).format(' M') + "月" + moment(date).format('D') + "日")
}

var parseAMPM = function(t) {
  if (t.slice(t.length - 2) === "AM") {
    return t.slice(0, t.length - 2) + "上午"
  } else {
    return t.slice(0, t.length - 2) + "下午"
  }
}
