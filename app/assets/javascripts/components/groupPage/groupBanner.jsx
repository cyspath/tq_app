var GroupBanner = React.createClass({
  contextTypes: {
    groupId: React.PropTypes.number.isRequired
  },

  render: function() {
    return (
      <div className="content-banner__container">
        <div className="content-banner__upper" >
          {this.props.name}
        </div>
        <div className="content-banner__lower" >
          <div className="content-banner__lower-item">群主页</div>
          <div className="content-banner__lower-item">群员</div>
          <div className="content-banner__lower-item">图片</div>
          <div className="content-banner__lower-item">讨论</div>
        </div>
      </div>
    )
  }
});
