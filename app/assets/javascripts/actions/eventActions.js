var EventActions = new _.extend({}, {

  getEvents: function() {
    Api.get('/api/events').then(function(events) {
      AppDispatcher.dispatch({
        actionType: Constants.GET_EVENTS,
        events: events
      })
    }.bind(this))
  }

});
