var GroupEvent = React.createClass({

  getInitialState: function() {
    if (this.props.description.length > 62) {
      var description = this.props.description.slice(0, 62) + "..."
    } else {
      var description = this.props.description
    }
    return {
      description: description
    };
  },

  getDescription: function() {
    if (this.props.description.length > 62) {
      return (
        <div>
          {this.state.description}
          <div className="toggle__more-info" onClick={this.toggleDescription}>
            更多
          </div>
        </div>
      )
    } else {
      return (
        <div>{this.state.description}</div>
      )
    }
  },

  toggleDescription: function(e) {
    $(e.target).hide()
    this.setState({ description: this.props.description });
  },

  render: function() {
    var i = 0
    var userImages = this.props.members.slice(0, 10).map(function(user) {
      i += 1
      var url = identiconOrAvatarUrl(user)
      return(
        <Link to="userDetail" params={{ userId: user.id }} key={i}><img src={url} /></Link>
      )
    })

    var currentDescription = this.getDescription()
    return (
      <div className="group-events-index__item-container">

        <div className="top" >
          <Link to="eventDetail" params={{ eventId: this.props.id }}>{this.props.name}</Link>
        </div>

        <div className="body" >

          <div className="left" >
            <p className="location_name" >
              {this.props.location_name}
            </p>
            <p className="location_address" >
              {this.props.location_address}
            </p>
            <div className="users-strip" >
              {userImages}
            </div>
            <div className="description">
              {currentDescription}
            </div>
            <div className="hosted-by" >
              <span className="text-darken text-small" >主办: </span> <span>{this.props.founder.username}</span>
            </div>
          </div>

          <div className="right" >
            <p className="date" >
              {moment(this.props.date).format("dddd MMMDo")}
            </p>
            <p className="time" >
              { moment(this.props.start_time, "hmm").format("a hh:mm")}
            </p>
            <a className="btn btn-green" >
              我想去
            </a>
            <p className="num-going" >
              <span className="text-darken text-small" >{this.props.member_count}&nbsp;</span>
              <span className="text-small" >人会参加</span>
            </p>
          </div>

        </div>

      </div>
    )
  }
});
