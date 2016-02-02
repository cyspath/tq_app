var GroupsIndex = React.createClass({

  render: function() {
    return (
      <div className="groups-index__container">
        <GroupsList />
        <Link to="/profile">User profile</Link>
      </div>
    )
  }
});
