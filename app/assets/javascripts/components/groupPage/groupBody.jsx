var GroupBody = React.createClass({

  contextTypes: {
    groupId: React.PropTypes.number.isRequired,
  },

  render: function() {
    console.log(this.props.group);
    return (
      <div className="content-body__container">
        <GroupBodyLeft group={this.props.group}/>
        <GroupBodyMid group={this.props.group}/>
        <GroupBodyRight group={this.props.group}/>
      </div>
    )
  }
});
