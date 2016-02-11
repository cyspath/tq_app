var EventMembers = React.createClass({

  going: function() {
    var going = this.props.going.map(function(user) {
      var url = identiconOrAvatarUrl(user)
      var userLink = "/users/" + user.id
      return(
        <div key={user.id} className="event-member__container" >
          <Link to={userLink}><img className="user-avatar" src={url} /></Link>
          <Link to={userLink}><div className="user-name" >{user.username}</div></Link>
        </div>
      )
    })
    if (going.length > 0) {
      return(
        <div className="events-members__list" >
          <h1><div>{going.length}</div><div className="superscript">个同去者</div></h1>
          {going}
        </div>
      )
    } else {
      return(
        <div className="events-members__list" >
          <h1>目前没人RSVP</h1>
        </div>
      )
    }
  },

  notGoing: function() {
    var notGoing = this.props.notGoing.map(function(user) {
      var url = identiconOrAvatarUrl(user)
      var userLink = "/users/" + user.id
      return(
        <div key={user.id} className="event-member__container" >
          <Link to={userLink}><img className="user-avatar" src={url} /></Link>
          <Link to={userLink}><div className="user-name" >{user.username}</div></Link>
        </div>
      )
    })

    if (notGoing.length > 0) {
      return(
        <div className="events-members__list border-top" >
          <h1>
            <div>{notGoing.length}</div>
            <div className="superscript" >个人不去</div>
            <div className="toggle__more-not-going" onClick={this.toggleNotGoing}>展开</div>
          </h1>
          <div className="not-going hide" >
            {notGoing}
          </div>
        </div>
      )
    } else {
      return(
        <div className="events-members__list" ></div>
      )
    }
  },

  toggleNotGoing: function() {
    $('.not-going').toggleClass('hide')
  },

  render: function() {

    return (
      <div className="events-members">
        {this.going()}
        {this.notGoing()}
      </div>
    )
  }
});
