var GroupsList = React.createClass({
  render: function() {
    var groups = this.props.groups.map(function(group) {
      return <Group key={group.id} {...group} />
    })
    return (
      <div className="groups-index__container-inner" >
        { groups }
      </div>
    )
  }
});
