var BannerMain = React.createClass({
  getInitialState: function() {
    return {
      banner: this.publicBanner()
    };
  },

  randomBannerUrl: function() {
    var urls = [
      "http://res.cloudinary.com/cyspath/image/upload/v1456454619/yyj_p4smo7.jpg",
      "http://res.cloudinary.com/cyspath/image/upload/v1456455510/pxs_ghfwvn.jpg"
    ]
    return(urls[Math.floor(Math.random()*urls.length)])
  },

  showBanner: function() {
    if (UserStore.hasCurrentUser()) {
      this.setState({ banner: this.userBanner() });
    } else {
      this.setState({ banner: this.publicBanner() });
    }
  },

  publicBanner: function() {
    var url = this.randomBannerUrl()
    return (
      <div className="banner-main__container" >
        <div className="banner-main__description_container" >
          <div className="banner-main__description" >
            <div className="large-text" >同趣网是</div>
            <div className="small-text" >同城人们一起分享知识，激发爱好，参与活动...</div>
          </div>
        </div>
        <img src={url} className="banner-main__img" />
      </div>
    )
  },

  bannerLeftContent: function(user) {
    if (user.upcoming_events.length > 0) {
      var userEvents = user.upcoming_events
      var nextEvent = userEvents[0]
      var nextEventGroup = user.next_event_group
      return (
        <div className="content" >
          <div className="header" >您的下一个活动</div>
          <div className="next-event__content" >
            <div className="next-event__left__date" ><div className="date-month" >{moment(nextEvent.date).format("MMMM")}</div><div className="date-day" >{moment(nextEvent.date).format("D")}</div></div>
            <div className="next-event__right__text" >
              <div className="group-name" >{nextEventGroup.name}</div>
              <div className="event-name" >{nextEvent.name}</div>
              <div className="event-time" ><span className="first-span" >{moment(nextEvent.date).format("dddd, MMMDo ")}</span><span>{moment(nextEvent.start_time, "hmm").format("a hh:mm")}</span></div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="content" >
          <div className="title" >{user.username}您好，</div>
          <div className="message" >欢迎加入同趣网，您目前还未参与任何群体。请您先参考以下的群体与活动。</div>
        </div>
      )
    }
  },

  userBanner: function() {
    var url = this.randomBannerUrl()
    var user = UserStore._currentUser
    var content = this.bannerLeftContent(user)
    return (
      <div className="banner-main__container" >
        <div className="banner-main__dashboard" >
          <div className="dashboard__content" >

            <div className="left" >
              {content}
            </div>

            <div className="right" >
              <div className="item" ><div className="count" >{user.upcoming_events.length}</div> 个您群里将来的活动</div>
              <div className="item" ><div className="count" >{user.nearby_events}</div> 个将来的同城活动</div>
            </div>

          </div>
        </div>
      </div>
    )
  },

  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange)
    if (UserStore.hasCurrentUser() === true ) {
      this.setState({ banner: this.userBanner() });
    }
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.showBanner()
  },

  render: function() {
    return (
      <div>
        {this.state.banner}
      </div>
    )
  }
});
