var Group = React.createClass({

  render: function() {
    return (
      <div>
        <img style={ { width: '50px', height: 'auto' }} src={this.props.avatar} />
        <span className="title">{this.props.name}</span>
          <time>{this.props.formattedDate}</time>
          <p>{this.props.body}</p>
      </div>
    )
  }
});
