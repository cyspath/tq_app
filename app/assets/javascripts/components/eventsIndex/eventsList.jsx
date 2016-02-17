var EventsList = React.createClass({
  render: function() {
    // var uniqueId = this.props.uniqueId
    var date = moment(this.props.date).format("dddd - MMMDo")
    var events = this.props.events.map(function(event) {
      return <Event key={event.id} {...event} />
    })
    return (
      <div id={date} data={this.props.date} className="events-index__container-inner" >

        <div data={moment(this.props.date).format("dddd - MMMDo")} className="events-index__time-frame__date">
          {date}
        </div>

        <div className="events-index__time-frame__events" >
          { events }
        </div>
      </div>
    )
  }
});
