var EventActions = new _.extend({}, {

  getEvents: function() {
    Api.get('/api/events').then(function(events) {
      AppDispatcher.dispatch({
        actionType: Constants.GET_EVENTS,
        events: events
      })
    }.bind(this))
  },

  getEventDetail: function(eventId) {
    Api.get('/api/events/' + eventId).then(function(event) {
      AppDispatcher.dispatch({
        actionType: Constants.GET_EVENT_DETAIL,
        event: event
      })
    }.bind(this))
  }

});
