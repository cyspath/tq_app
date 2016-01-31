var GroupPage = React.createClass({

  childContextTypes: {
    groupId: React.PropTypes.number.isRequired
  },

  getChildContext: function() {
    return {
      groupId: parseInt(this.props.params.groupId),
    }
  },

  render: function() {
    return (
      <div className="group-page__container">
        <div className="group-page__container-inner" >
          <GroupBanner />
          <GroupBody />
        </div>
      </div>
    )
  }
});
