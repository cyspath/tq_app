var UserInfo = React.createClass({
  render: function() {
    var user = this.props.user
    var url = identiconOrAvatarUrl(user)
    return (
      <div className="content-page__container-inner">
        <div className="user-page__container" >

          <div className="user-page__left" >

            <div className="username" >{user.username}</div>

            <div className="info" >
              <div className="top" >
                <div className="location" >
                  <div className="label" >地区:</div>
                  <div className="grey-6-text" >{user.location}</div>
                  <div className="grey-6-text font-size__14px" >老家: {user.home_town}</div>
                </div>
                <div className="member-since" >
                  <div className="label" >加入时间:</div>
                  <div className="grey-6-text" >{moment(user.created_at).format('YYYY年MMMD日')}</div>
                </div>
              </div>

              <div className="bottom" >
                <div className="label" >自我介绍</div>
                <div className="grey-6-text" >{user.bio}</div>
              </div>
            </div>

          </div>

          <div className="user-page__right" >
            <div className="user-page__avatar-container" >
              <div className="img-wrap" ><img src={url} /><div>上传您的图片</div></div>
              <div className="img-count" >5 张图片</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
