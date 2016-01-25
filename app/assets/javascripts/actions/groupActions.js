var GroupActions = new _.extend({}, {

  // setComments: function(params) {
  //   AppDispatcher.dispatch({
  //     actionType: Constants.SET_COMMENTS,
  //     comments: params
  //   })
  // },

  getGroups: function() {
    Api.get('/api/groups').then(function(groups) {
      AppDispatcher.dispatch({
        actionType: Constants.GET_GROUPS,
        groups: groups
      })
    }.bind(this))
  },

  addComment: function(params) {
    Api
      .post(
        '/restaurants/' + this.restaurantId + '/comments',
        { comment: params}
      )
      .then(function(comment) {
        window.AppDispatcher.dispatch({
          actionType: Constants.ADD_COMMENT,
          comment: comment
        });
      })
  },

  // upvoteComment: function(comment) {
  //   Api
  //     .put(
  //       '/restaurants/' + this.restaurantId + '/comments/' + comment.id + '/upvote')
  //     .then(function(comment) {
  //       window.AppDispatcher.dispatch({
  //         actionType: Constants.UPVOTE_COMMENT,
  //         comment: comment
  //       });
  //     })
  // },
  //
  //
  // deleteComment: function(comment) {
  //   Api
  //     .delete('/restaurants/' + this.restaurantId + '/comments/' + comment.id)
  //     .then(function(deletedComment) {
  //       window.AppDispatcher.dispatch({
  //         actionType: Constants.DELETE_COMMENT,
  //         comment: deletedComment
  //       });
  //     })
  // }

});
