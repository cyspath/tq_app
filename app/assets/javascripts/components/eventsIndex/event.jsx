var Event = React.createClass({

  render: function() {
    var eventLink = "/events/" + this.props.id
    var groupLink = "/groups/" + this.props.group_id
    var time = moment(this.props.start_time, "hmm").format("hh:mma")
    return (
      <div className="events-index__item-container">

        <div className="events-index__container-inner-left" >
          <Link to={eventLink}>
            <div className="left" >
              {time.slice(0, time.length - 2)}
            </div>
            <div className="right" >
              {time.slice(time.length - 2)}
            </div>
          </Link>
        </div>

        <div className="events-index__container-inner-right" >
          <Link to={groupLink}><div className="top" >{this.props.group_name}</div></Link>
          <Link to={eventLink}><div className="mid" >{this.props.name}</div></Link>

          <div className="bottom" >{this.props.member_count} 个同趣者</div>
        </div>


      </div>
    )
  }
});

//
// {
// id: 1,
// name: "活动 1",
// date: "2016-01-23",
// start_time: "2000-01-01T07:58:38.024Z",
// end_time: "2000-01-01T08:15:18.024Z",
// location_name: "repurpose web-enabled web-readiness",
// location_address: "46177 Gaylord Port",
// description: "关于百度无人驾驶车目前的技术水平，李彦宏用“创造了三个中国之‘最’予以概括：第一是路况最复杂，在城市道路、环路和高速路都实现了不靠人工干预 的完全自动驾驶；第二是动作最全面，包括超车、高速汇入、下高速、掉头等等；第三是对环境理解的精度最高，百度自己的定位能够达到10厘米的精度，大大高 于GPS定位3-5米的精度。正如习近平在世界互联网大会开幕式致辞中所说，当前世界经济复苏艰难曲折，中国经济也面临一定下行压力，而解决问题的关键在于坚持创新驱动发展，开 拓发展的新境界。在无人驾驶车展台前，国家互联网信息办公室主任鲁炜也问到，百度的无人驾驶是否达到了世界领先？对此，李彦宏给出肯定的回答。",
// owner_id: 2,
// group_id: 1,
// created_at: "2016-01-26T07:58:38.040Z",
// datetime: "2016-01-23T00:00:00.000Z",
// start_date: "Jan 23, 2016"
// }
