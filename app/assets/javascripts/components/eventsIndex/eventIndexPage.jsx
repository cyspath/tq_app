var EventsIndexPage = React.createClass({

  render: function() {
    return (
      <div>
        <div id="date-changer__container" className="events-index__container-top" >
          <div id="date-changer">
            TIME
          </div>
        </div>

        <BannerMain />

        <div className="events-index__container" >
          <EventsIndex />
        </div>

      </div>
    )
  }
});
