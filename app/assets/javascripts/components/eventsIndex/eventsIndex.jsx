var EventsIndex = React.createClass({

  getInitialState: function() {
    return {
      page: 1,
      atPageBottom: false,
      eventsList: EventStore._allEvents
    };
  },

  componentDidMount: function() {
    window.showSpinner()
    window.addEventListener("scroll", this.handleScroll)
    this.getMore()
    EventStore.addChangeListener(this._onChange)
  },

  componentWillUnmount: function() {
    window.removeEventListener("scroll", this.handleScroll);
    EventStore.removeChangeListener(this._onChange);
  },

  handleScroll: function(event) {
    if (this.state.atPageBottom === false && $(window).scrollTop() > $(document).height() - $(window).height() - 30) {
      this.setState({ atPageBottom: true });
      this.setState({ page: this.state.page + 1 });
      this.getMore()
    } else if (this.state.atPageBottom === true && $(window).scrollTop() < $(document).height() - $(window).height() - 100) {
      this.setState({ atPageBottom: false });
    }
  },

  _onChange: function() {
    window.hideSpinner()
    $('#event-index__grey-spinner').addClass('hide')
    this.setState({ eventsList: EventStore._allEvents });
  },

  getMore: function() {
    if (EventStore._doneFetching === false) {
      $('#event-index__grey-spinner').removeClass('hide')
      EventActions.getEvents("/?page=" + this.state.page);
    }
  },

  render: function() {
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
          <div id="event-index__grey-spinner" className="hide"  ></div>
        </div>
      </div>
    )
  }
});
