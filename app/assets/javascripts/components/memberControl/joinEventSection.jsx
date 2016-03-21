var JoinEventSection = React.createClass({

  getInitialState: function() {
    if (UserStore._currentUser === null || UserStore._currentUser === true) {
      return {
        section: (
          <div className="join-event-section">
            是否参与活动?
            <a href='/users/sign_in'>
              <div className="btn btn-red-3d">去</div>
            </a>
            <a href='/users/sign_in'>
              <div className="btn btn-grey-3d">不去</div>
            </a>
          </div>
        )
      }
    }
    var members = this.props.event.members
    for(var i = 0; i < members.length; i++) {
      if (members[i].id == UserStore._currentUser.id) {
        return {
          section: (
            <div>
              currently going
              <div className="btn btn-grey-3d" onClick={this.leaveEvent}>im going</div>
            </div>
          )
        }
      }
    }
    var bailedMembers = this.props.event.bailed_members
    for(var i = 0; i < bailedMembers.length; i++) {
      if (bailedMembers[i].id == UserStore._currentUser.id) {
        return {
          section: (
            <div>currently NOT going
              <div className="btn btn-grey-3d" onClick={this.leaveEvent}>i bailed</div>
            </div>
          )
        }
      }
    }
    return {
      section: (
        <div className="join-event-section" >
          是否参与活动?
          <div className="btn btn-red-3d" onClick={this.joinEvent}>去</div>
          <div className="btn btn-grey-3d" onClick={this.leaveEvent}>不去</div>
        </div>
      )
    }
  },

  joinEvent: function() {
    EventActions.joinEvent(this.props.event.id)
    this.setState({ section: (
      <div className="join-event-section green-joined" >
        您准备参加这项活动
        <div className="btn btn-red-3d" onClick={this.joinEvent}>去</div>
        <div className="btn btn-grey-3d" onClick={this.leaveEvent}>不去</div>
      </div>
    ) });
  },

  leaveEvent: function() {
    EventActions.leaveEvent(this.props.event.id)
    this.setState({ section: (
      <div className="join-event-section grey-left" >
        <div className="btn btn-red-3d" onClick={this.joinEvent}>去</div>
        <div className="btn btn-grey-3d" onClick={this.leaveEvent}>不去</div>
      </div>
    ) });
  },

  render: function() {
    return (
      <div>
        {this.state.section}
      </div>
    )
  }
});
