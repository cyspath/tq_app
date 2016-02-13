var GroupsList = React.createClass({

  getInitialState: function() {
    return {
      groupsList: GroupStore._groups
    };
  },

  componentDidMount: function() {
    window.showSpinner()
    GroupActions.getGroups();
    GroupStore.addChangeListener(this._onChange)
  },

  componentWillUnmount: function() {
    GroupStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    window.hideSpinner()
    this.setState({ groupsList: GroupStore._groups });
  },

  render: function() {
    var groups = this.state.groupsList.map(function(group) {
      return <Group key={group.id} {...group} />
    })
    return (
      <div className="groups-index__container-inner" >
        { groups }
      </div>
    )
  }
});
