var EventsList = React.createClass({
  render: function() {
    var events = this.props.events.map(function(event) {
      return <Event key={event.id} {...event} />
    })
    return (
      <div className="events-index__container-inner" >
        <div>
          {moment(this.props.date).format('ddd, MMM Do')}
        </div>
        { events }
      </div>
    )
  }
});
