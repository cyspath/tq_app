var GroupBodyLeft = React.createClass({

  mostRecentImage: function() {
    var image
    var date
    this.props.group.images.forEach(function(el) {
      if (date === undefined) {
        date = el.created_at
        image = el.url_225x225
      } else if (el.created_at > date ) {
        date = el.created_at
        image = el.url_225x225
      }
    })
    return image
  },

  avatar: function() {
    if (this.props.group.avatar == undefined) {
      return this.mostRecentImage()
    } else {
      return this.props.group.avatar
    }
  },

  render: function() {
    var founderLink = "/users/" + this.props.group.founder.id
    var founderImageUrl = identiconOrAvatarUrl(this.props.group.founder)
    var image = this.avatar()
    return (
      <div className="content-body-left__container">

        <div className="content-body-left__avatar" >
          <Image groupId={this.props.group.id} url={image} imageableType="Group" imageableId={this.props.group.id} />
        </div>

        <div className="content-body-left__info" >

          <div className="info-item" >
            <div className="location" >山东 - 青岛</div>
            <div className="start-date" >{parseDateYearCN(this.props.group.created_at)}成立</div>
          </div>

          <div className="info-item" >
            <div className="left" >同趣者</div>
            <div className="right" >{this.props.group.members_count}</div>
          </div>

          <div className="info-item" >
            <div className="left" >未来的活动</div>
            <div className="right" >{this.props.group.upcoming_events_count}</div>
          </div>

          <div className="info-item" >
            <div className="left" >过去的活动</div>
            <div className="right" >{this.props.group.past_events_count}</div>
          </div>

        </div>

        <div className="content-body-left__organizers" >
          <div className="info-item" >
            <div className="left" >
              <div className="left-top" >同趣群主:</div>
              <Link to={founderLink}><div className="left-bottom" >{this.props.group.founder.username}</div></Link>
            </div>
            <div className="right" >
              <Link to={founderLink}><img src={founderImageUrl} /></Link>
            </div>
          </div>
          <div className="btn btn-grey" ><i className="fa fa-envelope " >&nbsp;</i>联系我们</div>
        </div>

        <div className="content-body-left__tags" >

        </div>

      </div>
    )
  }
});
