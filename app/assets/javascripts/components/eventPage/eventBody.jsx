var EventBody = React.createClass({

  contextTypes: {
    eventId: React.PropTypes.number.isRequired,
  },

  render: function() {
    return (
      <div className="content-body__container">
        <GroupBodyLeft group={this.props.group} event={this.props.event.group}/>
        <EventBodyMain event={this.props.event}/>
      </div>
    )
  }
});
