var GroupBanner = React.createClass({
  contextTypes: {
    groupId: React.PropTypes.number.isRequired
  },
  
  render: function() {
    return (
      <div className="group-banner__container">
        <div className="group-banner__upper" >

        </div>
        <div className="group-banner__lower" >
          <div className="group-banner__lower-item">群主页</div>
          <div className="group-banner__lower-item">群员</div>
          <div className="group-banner__lower-item">图片</div>
          <div className="group-banner__lower-item">讨论</div>
        </div>
      </div>
    )
  }
});
