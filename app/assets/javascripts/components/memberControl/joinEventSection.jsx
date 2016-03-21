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
            <div className="join-event-section green-joined" >
              您准备参加此活动
              <div className="toggle__box__trigger" onClick={this.toggleToggleBox}><a>改变回复</a></div>
              <div className="toggle__box__content" >
                <div className="btn btn-red-3d" onClick={this.joinEvent}>去</div>
                <div className="btn btn-grey-3d" onClick={this.leaveEvent}>不去</div>
              </div>
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
            <div className="join-event-section grey-left" >
              您不打算参加此活动
              <div className="toggle__box__trigger" onClick={this.toggleToggleBox}><a>改变回复</a></div>
              <div className="toggle__box__content" >
                <div className="btn btn-red-3d" onClick={this.joinEvent}>去</div>
                <div className="btn btn-grey-3d" onClick={this.leaveEvent}>不去</div>
              </div>
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
        您准备参加此活动
        <div className="toggle__box__trigger" onClick={this.toggleToggleBox}><a>改变回复</a></div>
        <div className="toggle__box__content" >
          <div className="btn btn-red-3d" onClick={this.joinEvent}>去</div>
          <div className="btn btn-grey-3d" onClick={this.leaveEvent}>不去</div>
        </div>
      </div>
    ) });
  },

  leaveEvent: function() {
    EventActions.leaveEvent(this.props.event.id)
    this.setState({ section: (
      <div className="join-event-section grey-left" >
        您不打算参加此活动
        <div className="toggle__box__trigger" onClick={this.toggleToggleBox}><a>改变回复</a></div>
        <div className="toggle__box__content" >
          <div className="btn btn-red-3d" onClick={this.joinEvent}>去</div>
          <div className="btn btn-grey-3d" onClick={this.leaveEvent}>不去</div>
        </div>
      </div>
    ) });
  },

  toggleToggleBox: function() {
    $('.toggle__box__content').slideToggle()
  },

  render: function() {
    return (
      <div>
        {this.state.section}
      </div>
    )
  }
});
