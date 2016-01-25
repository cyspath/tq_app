var GroupsIndex = React.createClass({

  getInitialState: function() {
    return {
      groupsList: GroupStore._groups
    };
  },

  componentDidMount: function() {
    GroupActions.getGroups();
    GroupStore.addChangeListener(this._onChange)
  },

  componentWillUnmount: function() {
    GroupStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ groupsList: GroupStore._groups });
  },

  render: function() {
    return (
      <div className="groups-index__container">
        <NewGroupForm />
        <GroupsList groups={this.state.groupsList}/>
        <Link to="/profile">User profile</Link>
      </div>
    )
  }
});
