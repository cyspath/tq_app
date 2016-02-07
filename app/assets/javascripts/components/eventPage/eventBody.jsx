var EventBody = React.createClass({

  contextTypes: {
    eventId: React.PropTypes.number.isRequired,
  },

  render: function() {
    console.log(this.props.event);
    debugger
    return (
      <div className="content-body__container">
        <GroupBodyLeft event={this.props.event.group}/>
        <EventBodyRight event={this.props.event}/>
      </div>
    )
  }
});
