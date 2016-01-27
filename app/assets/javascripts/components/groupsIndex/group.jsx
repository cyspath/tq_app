var Group = React.createClass({

  render: function() {
    var link = "/groups/" + this.props.id
    return (
      <Link to={link}>

        <div className="groups-index__item-container">
          <img src={this.props.avatar} />

          <div className="overlay" >

            <div className="overlay__text-container" >
              <div className="large-text">{this.props.name}</div>
              <div className="small-text" >
                我们是 {Math.floor((Math.random() * 2000) + 1)} 个同兴趣者
              </div>
            </div>

          </div>

        </div>

      </Link>
    )
  }
});