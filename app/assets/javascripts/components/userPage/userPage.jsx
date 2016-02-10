var UserPage = React.createClass({

  // getInitialState: function() {
  //   return {
  //     userId : parseInt(this.props.params.userId),
  //     userDetails: UserDetailStore._userDetails
  //   };
  // },
  //
  // childContextTypes: {
  //   userId: React.PropTypes.number.isRequired
  // },
  //
  // getChildContext: function() {
  //   return {
  //     userId: this.state.userId
  //   }
  // },
  //
  // componentDidMount: function() {
  //   UserDetailStore.getOrFetchUserDetail(this.state.userId);
  //   UserDetailStore.addChangeListener(this._onChange)
  // },
  //
  // componentWillUnmount: function() {
  //   UserDetailStore.removeChangeListener(this._onChange);
  // },
  //
  // _onChange: function() {
  //   this.setState({ userDetails: UserDetailStore._userDetails });
  // },

  render: function() {
    // // find the user in all user details and render that user if found
    // var currentUser = this.state.userDetails.map(function(user) {
    //   if (user.id == this.state.userId) {
    //     return (
    //       <div key={user.id} className="content-page__container-inner" >
    //         <GroupBanner name={user.group_name}/>
    //         <UserBody group={user.group} user={user}/>
    //       </div>
    //     )
    //   }
    // }.bind(this))

    return (
      <div className="content-page__container">
        in progress
      </div>
    )
  }
});
