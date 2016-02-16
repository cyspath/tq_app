var EventBodyMain = React.createClass({

  render: function() {
    console.log(this.props.event);
    var event = this.props.event
    return (
      <div className="content-body-main__container">

        <div className="content-body-main__left__container" >

          <div className="event-info" >

            <div className="name" >
              {event.name}
            </div>

            <div className="date-time" >
              <div className="left" ><i className="fa fa-calendar-o"></i></div>
              <div className="right" >
                <div className="right-upper" >{parseDateCN(event.date)}</div>
                <div className="right-lower">{parseAMPMReverse(event.start_time_formatted)} 到 {parseAMPMReverse(event.end_time_formatted)}</div>
              </div>
            </div>

            <div className="location" >
              <div className="left" ><i className="fa fa-map-marker"></i></div>
              <div className="right" >
                <div className="right-upper" >{event.location_name}</div>
                <div className="right-lower" >{event.location_address}</div>
              </div>
            </div>

            <img className="event-avatar" src={event.avatar} />

            <div className="description" >{event.description}</div>

          </div>


        </div>

        <div className="content-body-main__right__container" >
          <EventMembers going={event.members} notGoing={event.bailed_members} />
        </div>

      </div>
    )
  }
});
