var GroupActionButtons = React.createClass({

  isActive: function(e) {
    $('.content-banner__lower-item').removeClass('active');
    $(e.target).addClass('active');
  },

  joinGroup: function() {
    GroupActions.joinGroup(this.props.group.id)
  },

  joinGroupButton: function() {
    if (UserStore._currentUser === null || UserStore._currentUser === true) {
      return (
        <a href='/users/sign_in'>
          <div className="btn btn-red-3d">加入我们</div>
        </a>
      )
    }
    var members = this.props.group.members
    for(var i = 0; i < members.length; i++) {
      if (members[i].id == UserStore._currentUser.id) {
        return (
          <div className="btn btn-grey-3d">退出此群</div>
        )
      }
    }
    return (
      <div className="btn btn-red-3d" onClick={this.joinGroup}>加入我们</div>
    )
  },

  render: function() {
    var joinGroupButton = this.joinGroupButton()
    return (
      <div className="content-banner__lower" >

        <div className="content-banner__lower__left" >
          <div className="content-banner__lower-item active" onClick={this.isActive}>群主页</div>
          <div className="content-banner__lower-item" onClick={this.isActive}>群员</div>
          <div className="content-banner__lower-item" onClick={this.isActive}>图片</div>
          <div className="content-banner__lower-item" onClick={this.isActive}>讨论</div>
        </div>

        <div className="content-banner__lower__right" >
          {joinGroupButton}
        </div>

      </div>
    )
  }
});
