var GroupBanner = React.createClass({
  contextTypes: {
    groupId: React.PropTypes.number.isRequired
  },

  render: function() {
    return (
      <div className="content-banner__container">
        <div className="content-banner__upper" >
          <div className="content-banner__upper-title" >
            {this.props.name}
          </div>
        </div>
        <GroupActionButtons />
      </div>
    )
  }
});
