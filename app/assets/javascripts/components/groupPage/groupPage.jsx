var GroupPage = React.createClass({

  getInitialState: function() {
    return {
      groupId : parseInt(this.props.params.groupId),
      groupDetails: GroupDetailStore._groupDetails
    };
  },

  childContextTypes: {
    groupId: React.PropTypes.number.isRequired
  },

  getChildContext: function() {
    return {
      groupId: this.state.groupId,
    }
  },

  componentDidMount: function() {
    GroupDetailStore.getOrFetchGroupDetail(this.state.groupId);
    GroupDetailStore.addChangeListener(this._onChange)
  },

  componentWillUnmount: function() {
    GroupDetailStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ groupDetails: GroupDetailStore._groupDetails });
  },

  render: function() {
    // find the group in all group details and render that group if found
    var currentGroup = this.state.groupDetails.map(function(group) {
      if (group.id == this.state.groupId) {
        return (
          <div key={group.id} className="content-page__container-inner" >
            <GroupBanner name={group.name}/>
            <GroupBody group={group}/>
          </div>
        )
      }
    }.bind(this))

    return (
      <div className="content-page__container">
        {currentGroup}
      </div>
    )
  }
});
