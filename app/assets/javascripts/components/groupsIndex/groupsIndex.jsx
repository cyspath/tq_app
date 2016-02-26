var GroupsIndex = React.createClass({

  render: function() {
    return (
      <div>
        <BannerMain />
        <div className="groups-index__container">
          <GroupsList />
        </div>
      </div>
    )
  }
});
