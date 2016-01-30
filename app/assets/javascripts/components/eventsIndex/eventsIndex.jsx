var EventsIndex = React.createClass({

  getInitialState: function() {
    return {
      eventsList: EventStore._allEvents
    };
  },

  componentDidMount: function() {
    EventActions.getEvents();
    EventStore.addChangeListener(this._onChange)
  },

  componentWillUnmount: function() {
    EventStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ eventsList: EventStore._allEvents });
  },

  render: function() {

    var timeFrames = this.state.eventsList.map(function(timeFrame, idx) {
      return <EventsList key={idx} uniqueId={idx} {...timeFrame} />
    })

    return (
      <div className="events-index__container">
        <div id="date-changer" className="events-index__container-top" >
          TIME
        </div>

        <div className="events-index__container-left" >
          {timeFrames}
        </div>

        <div className="events-index__container-right" >
          <div className="temp-box FILTER" >FILTER</div>
          <div className="temp-box CALENDAR" >CALENDAR</div>
        </div>

      </div>
    )
  }
});
