var UserPage = React.createClass({

  getInitialState: function() {
    return {
      userId : parseInt(this.props.params.userId),
      user: UserStore._user
    };
  },

  childContextTypes: {
    userId: React.PropTypes.number.isRequired
  },

  getChildContext: function() {
    return {
      userId: this.state.userId
    }
  },

  componentDidMount: function() {
    window.showSpinner()
    UserStore.addChangeListener(this._onChange)
    UserActions.getUser(this.state.userId)
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    window.hideSpinner()
    this.setState({ user: UserStore._user });
  },

  render: function() {
    console.log(this.state.user);
    return (
      <div className="content-page__container">
        <UserInfo user={this.state.user} />
      </div>
    )
  }
});
