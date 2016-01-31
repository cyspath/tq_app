var GroupActionButtons = React.createClass({

  isActive: function(e) {
    $('.content-banner__lower-item').removeClass('active');
    $(e.target).addClass('active');
  },

  render: function() {
    return (
      <div className="content-banner__lower" >
        <div className="content-banner__lower-item active" onClick={this.isActive}>群主页</div>
        <div className="content-banner__lower-item" onClick={this.isActive}>群员</div>
        <div className="content-banner__lower-item" onClick={this.isActive}>图片</div>
        <div className="content-banner__lower-item" onClick={this.isActive}>讨论</div>
      </div>
    )
  }
});
