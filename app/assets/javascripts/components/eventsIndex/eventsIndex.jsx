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
      return <EventsList key={idx} {...timeFrame} />
    })

    return (
      <div className="events-index__container">

        {timeFrames}

        <div className="" >
          <div className="FILTER" >FILTER</div>
          <div className="CALENDAR" >CALENDAR</div>
        </div>

      </div>
    )
  }
});
