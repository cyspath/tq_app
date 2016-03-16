var GroupBanner = React.createClass({

  render: function() {
    return (
      <div className="content-banner__container">
        <div className="content-banner__upper" >
          <div className="content-banner__upper-title" >
            {this.props.group.name}
          </div>
        </div>
        <GroupActionButtons group={this.props.group}/>
      </div>
    )
  }
});
