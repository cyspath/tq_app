var EventPage = React.createClass({

  getInitialState: function() {
    return {
      eventId : parseInt(this.props.params.eventId),
      eventDetails: EventDetailStore._eventDetails
    };
  },

  childContextTypes: {
    eventId: React.PropTypes.number.isRequired
  },

  getChildContext: function() {
    return {
      eventId: this.state.eventId,
    }
  },

  componentDidMount: function() {
    EventDetailStore.getOrFetchEventDetail(this.state.eventId);
    EventDetailStore.addChangeListener(this._onChange)
  },

  componentWillUnmount: function() {
    EventDetailStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ eventDetails: EventDetailStore._eventDetails });
  },

  render: function() {
    // find the event in all event details and render that event if found
    var currentEvent = this.state.eventDetails.map(function(event) {
      if (event.id == this.state.eventId) {
        return (
          <div key={event.id} className="content-page__container-inner" >
            <GroupBanner name={event.group_name}/>
            <EventBody event={event}/>
          </div>
        )
      }
    }.bind(this))

    return (
      <div className="content-page__container">
        {currentEvent}
      </div>
    )
  }
});
