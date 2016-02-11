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

  getMore: function() {
    EventActions.getEvents("/?page=2");
  },

  render: function() {
    console.log(this.state.eventsList);
    var timeFrames = this.state.eventsList.map(function(timeFrame, idx) {
      return <EventsList key={idx} {...timeFrame} />
    })

    return (
      <div className="events-index">
        <div id="date-changer__container" className="events-index__container-top" >
          <div id="date-changer">
            TIME
          </div>
        </div>

        <div className="events-index__container-left" >
          {timeFrames}
          <button className="load-more" onClick={this.getMore}>Get more</button>
        </div>
      </div>
    )
  }
});
