var JoinGroupButton = React.createClass({

  getInitialState: function() {
    if (UserStore._currentUser === null || UserStore._currentUser === true) {
      return {
        button: (
          <a href='/users/sign_in'>
            <div className="btn btn-red-3d">加入我们</div>
          </a>
        )
      }
    }
    var members = this.props.group.members
    for(var i = 0; i < members.length; i++) {
      if (members[i].id == UserStore._currentUser.id) {
        return {
          button: (
            <div className="btn btn-grey-3d" onClick={this.leaveGroup}>退出此群</div>
          )
        }
      }
    }
    return {
      button: (
        <div className="btn btn-red-3d" onClick={this.joinGroup}>加入我们</div>
      )
    }
  },

  // componentDidMount: function() {
  //   if (UserStore._currentUser === null || UserStore._currentUser === true) {
  //     // this.setState({ button: (
  //     //   <a href='/users/sign_in'>
  //     //     <div className="btn btn-red-3d">加入我们</div>
  //     //   </a>
  //     // ) });
  //     return
  //   }
  //   var members = this.props.group.members
  //   for(var i = 0; i < members.length; i++) {
  //     if (members[i].id == UserStore._currentUser.id) {
  //       this.setState({ button: (
  //         <div className="btn btn-grey-3d">退出此群</div>
  //       ) });
  //       return
  //     }
  //   }
  //   this.setState({ button: (
  //     <div className="btn btn-red-3d" onClick={this.joinGroup}>加入我们</div>
  //   ) });
  // },

  joinGroup: function() {
    GroupActions.joinGroup(this.props.group.id)
    this.setState({ button: (
      <div className="btn btn-grey-3d" onClick={this.leaveGroup}>退出此群</div>
    ) });
  },

  leaveGroup: function() {
    GroupActions.leaveGroup(this.props.group.id)
    this.setState({ button: (
      <div className="btn btn-red-3d" onClick={this.joinGroup}>加入我们</div>
    ) });
  },

  render: function() {
    return (
      <div>
        {this.state.button}
      </div>
    )
  }
});
