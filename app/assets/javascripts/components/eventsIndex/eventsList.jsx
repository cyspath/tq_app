var EventsList = React.createClass({
  render: function() {
    var events = this.props.events.map(function(event) {
      return <Event key={event.id} {...event} />
    })
    return (
      <div className="events-index__container-inner" >
        { events }
      </div>
    )
  }
});
