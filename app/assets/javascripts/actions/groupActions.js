var GroupActions = new _.extend({}, {

  getGroups: function() {
    Api.get('/api/groups').then(function(groups) {
      AppDispatcher.dispatch({
        actionType: Constants.GET_GROUPS,
        groups: groups
      })
    }.bind(this))
  },

  addGroup: function(params) {
    Api.post('/api/groups', { group: params}).then(function(group) {
        window.AppDispatcher.dispatch({
          actionType: Constants.ADD_GROUP,
          group: group
        });
      })
  },

  getGroupDetail: function(groupId) {
    Api.get('/api/groups/' + groupId).then(function(group) {
      AppDispatcher.dispatch({
        actionType: Constants.GET_GROUP_DETAIL,
        group: group
      })
    }.bind(this))
  }
  // upvoteGroup: function(comment) {
  //   Api
  //     .put(
  //       '/restaurants/' + this.restaurantId + '/comments/' + comment.id + '/upvote')
  //     .then(function(comment) {
  //       window.AppDispatcher.dispatch({
  //         actionType: Constants.UPVOTE_GROUP,
  //         comment: comment
  //       });
  //     })
  // },
  //
  //
  // deleteGroup: function(comment) {
  //   Api
  //     .delete('/restaurants/' + this.restaurantId + '/comments/' + comment.id)
  //     .then(function(deletedGroup) {
  //       window.AppDispatcher.dispatch({
  //         actionType: Constants.DELETE_GROUP,
  //         comment: deletedGroup
  //       });
  //     })
  // }

});
