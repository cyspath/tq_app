var GroupBody = React.createClass({

  contextTypes: {
    groupId: React.PropTypes.number.isRequired
  },

  render: function() {
    return (
      <div className="content-body__container">
        <GroupBodyLeft />
        <GroupBodyMid />
        <GroupBodyRight />
      </div>
    )
  }
});
