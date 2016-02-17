var UserInfo = React.createClass({

  render: function() {
    var user = this.props.user
    return (
      <div className="content-page__container-inner">
        <div className="user-page__container" >

          <div className="user-page__left" >

            <div className="username" >{user.username}</div>

            <div className="info" >
              <div className="top" >
                <div className="location" >
                  <div className="label" >地区:</div>
                  <div>{user.location}</div>
                  <div>老家: {user.home_town}</div>
                </div>
                <div className="member-since" >
                  <div className="label" >加入时间:</div>
                  <div>{user.created_at}</div>
                </div>
              </div>

              <div className="bottom" >
                <div className="label" >自我介绍</div>
                <div>{user.bio}</div>
              </div>
            </div>

          </div>

          <div className="user-page__right" >

          </div>
        </div>
      </div>
    )
  }
});
