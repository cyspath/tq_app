var EventsList = React.createClass({
  render: function() {
    var events = this.props.events.map(function(event) {
      return <Event key={event.id} {...event} />
    })
    return (
      <div className="events-index__container-inner" >

        <div className="events-index__time-frame__date">
          {parseDateCN(this.props.date)}
        </div>

        <div className="events-index__time-frame__events" >
          { events }
        </div>
      </div>
    )
  }
});
