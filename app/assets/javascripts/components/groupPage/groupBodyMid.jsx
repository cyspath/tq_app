var GroupBodyMid = React.createClass({
  contextTypes: {
    groupId: React.PropTypes.number.isRequired
  },

  showUpcoming: function() {
    $('.content-body-mid__events-upcoming').removeClass('hide')
    $('.content-body-mid__events-past').addClass('hide')
    $('.tab.upcoming').addClass('front')
    $('.tab.past').removeClass('front')
  },

  showPast: function() {
    $('.content-body-mid__events-upcoming').addClass('hide')
    $('.content-body-mid__events-past').removeClass('hide')
    $('.tab.upcoming').removeClass('front')
    $('.tab.past').addClass('front')
  },

  render: function() {
    var upcomingEvents = this.props.group.upcoming_events.map(function(eventObject) {
      return <GroupEvent key={eventObject.id} {...eventObject} />
    })
    var pastEvents = this.props.group.past_events.map(function(eventObject) {
      return <GroupEvent key={eventObject.id} {...eventObject} />
    })
    return (
      <div className="content-body-mid__container">

        <div className="content-body-mid__title" >

        </div>

        <div className="content-body-mid__description" >

        </div>

        <div className="content-body-mid__events" >

          <div className="grey-background" ></div>
          <div className="content-body-mid__events-action-tabs" >
            <div className="place-holder holder-1" ></div>
            <div className="upcoming tab front" onClick={this.showUpcoming}>未来的活动 <span className="number-font number-darken" >{this.props.group.upcoming_events.length}</span></div>
            <div className="place-holder holder-2" ></div>
            <div className="past tab" onClick={this.showPast}>过去的活动 <span className="number-fton number-darken">{this.props.group.past_events.length}</span></div>
            <div className="place-holder holder-3" ></div>
        </div>

          <div className="content-body-mid__events-upcoming" >
            {upcomingEvents}
          </div>

          <div className="content-body-mid__events-past hide" >
            {pastEvents}
          </div>


        </div>


      </div>
    )
  }
});
