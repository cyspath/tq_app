var Group = React.createClass({

  render: function() {
    var image = groupAvatarImage(this.props.avatar)
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
