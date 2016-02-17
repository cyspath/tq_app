// var dayCN = {
//   Mon: "星期一",
//   Tue: "星期二",
//   Wed: "星期三",
//   Thu: "星期四",
//   Fri: "星期五",
//   Sat: "星期六",
//   Sun: "星期天"
// }
//
// var function meridiem() {
//   if (hm < 600) {
//       return '凌晨';
//   } else if (hm < 900) {
//       return '早上';
//   } else if (hm < 1130) {
//       return '上午';
//   } else if (hm < 1230) {
//       return '中午';
//   } else if (hm < 1800) {
//       return '下午';
//   } else {
//       return '晚上';
//   }
// }
//
// var parseDateCN = function(date) {
//   return(dayCN[moment(date).format('ddd')] + moment(date).format(' M') + "月" + moment(date).format('D') + "日")
// }
//
// var parseDateYearCN = function(date) {
//   return(moment(date).format('YYYY') + "年" + moment(date).format(' M') + "月" + moment(date).format('D') + "日")
// }
//
// var parseAMPM = function(t) {
//   if (t.slice(t.length - 2) === "AM") {
//     return t.slice(0, t.length - 2) + "上午"
//   } else {
//     return t.slice(0, t.length - 2) + "下午"
//   }
// }
//
// var parseAMPMReverse = function(t) {
//   if (t.slice(t.length - 2) === "AM") {
//     return "上午" + t.slice(0, t.length - 2)
//   } else {
//     return "下午" + t.slice(0, t.length - 2)
//   }
// }
