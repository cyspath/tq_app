var Group = React.createClass({

  render: function() {
    return (
      <div className="groups-index__item">
        <img src={this.props.avatar} />
        <span className="title">{this.props.name}</span>
          <div>{this.props.created_at}</div>
          <p>{this.props.description}</p>
      </div>
    )
  }
});
