var EventActions = new _.extend({}, {

  getEvents: function(url) {
    Api.get('/api/events' + url).then(function(events) {
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
  },

  joinEvent: function(eventId) {
    Api.post('/api/event_members', { event_id: eventId}).then(function(event_member) {
      UserActions.getCurrentUser()
      AppDispatcher.dispatch({
        actionType: Constants.JOIN_EVENT,
        event_member: event_member
      });
    })
  },

  leaveEvent: function(eventId) {
    Api.delete('/api/event_members/' + eventId, {}).then(function(event_member) {
      UserActions.getCurrentUser()
      AppDispatcher.dispatch({
        actionType: Constants.LEAVE_EVENT,
        event_member: event_member
      });
    })
  }

});
