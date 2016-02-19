var Group = React.createClass({

  mostRecentImage: function() {
    var image
    var date
    this.props.images.forEach(function(el) {
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
    if (this.props.avatar == undefined) {
      return this.mostRecentImage()
    } else {
      return this.props.avatar
    }
  },

  render: function() {
    var image = this.avatar()
    return (
      <Link to="groupDetail" params={{ groupId: this.props.id }} className="groups-index__item-container-wrapper" >

        <div className="groups-index__item-container">
          <img src={image} />

          <div className="overlay" >

            <div className="overlay__text-container" >
              <div className="large-text">{this.props.name}</div>
              <div className="small-text" >
                我们是 {this.props.members_count} 个同兴趣者
              </div>
            </div>

          </div>

        </div>

      </Link>
    )
  }
});
