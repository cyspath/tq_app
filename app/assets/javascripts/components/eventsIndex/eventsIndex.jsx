var EventsIndex = React.createClass({

  getInitialState: function() {
    return {
      eventsList: EventStore._events
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
    debugger
    this.setState({ eventsList: EventStore._events });
  },

  render: function() {
    return (
      <div className="events-index__container">

        <EventsList events={this.state.eventsList}/>

        <div className="" >
          <div className="FILTER" >FILTER</div>
          <div className="CALENDAR" >CALENDAR</div>
        </div>

      </div>
    )
  }
});
