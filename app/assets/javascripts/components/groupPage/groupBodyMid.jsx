var GroupBodyMid = React.createClass({
  contextTypes: {
    groupId: React.PropTypes.number.isRequired
  },

  showUpcoming: function() {
    $('.content-body-mid__events-upcoming').removeClass('hide')
    $('.content-body-mid__events-past').addClass('hide')
  },

  showPast: function() {
    $('.content-body-mid__events-upcoming').addClass('hide')
    $('.content-body-mid__events-past').removeClass('hide')
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

          <div className="content-body-mid__events-action-tabs" >
            <div className="upcoming" onClick={this.showUpcoming}>未来的活动 {this.props.group.upcoming_events.length}</div>
            <div className="past" onClick={this.showPast}>过去的活动 {this.props.group.past_events.length}</div>
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
