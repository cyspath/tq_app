var UserActions = new _.extend({}, {

  getUser: function(userId) {
    Api.get('/api/user/' + userId).then(function(user) {
      AppDispatcher.dispatch({
        actionType: Constants.GET_USER_DETAIL,
        user: user
      })
    }.bind(this))
  },

  getCurrentUser: function(userId) {
    Api.get("/current_user").then(function(currentUser) {
      AppDispatcher.dispatch({
        actionType: Constants.GET_CURRENT_USER,
        currentUser: currentUser
      })
    }.bind(this))
  }

});
