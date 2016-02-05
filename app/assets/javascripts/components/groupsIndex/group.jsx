var Group = React.createClass({

  mostRecentImage: function() {
    var image = this.props.most_recent_image
    if (image) {
      return image.url_225x225
    } else {
      return ""
    }
  },

  render: function() {
    // var link = "/groups/" + this.props.id
    var image = this.mostRecentImage()
    return (
      <Link to="groupShow" params={{ groupId: this.props.id }} className="groups-index__item-container-wrapper" >

        <div className="groups-index__item-container">
          <img src={image} />

          <div className="overlay" >

            <div className="overlay__text-container" >
              <div className="large-text">{this.props.name}</div>
              <div className="small-text" >
                我们是 {this.props.member_count} 个同兴趣者
              </div>
            </div>

          </div>

        </div>

      </Link>
    )
  }
});
