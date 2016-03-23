var EventStore = new _.extend({}, EventEmitter.prototype, {

  _allEvents: [],
  _doneFetching: false,

  resetState: function() {
    this._allEvents = []
    this._doneFetching = false
  },

  getEvents: function(events) {
    if (events.length === 0) {
      this._doneFetching = true
    }
    this._allEvents = this._allEvents.concat(events)
  },

  addChangeListener: function(callback) {
    this.on(Constants.CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback)
  },

  emitChange: function() {
    this.emit(Constants.CHANGE_EVENT);
  }

});


AppDispatcher.register(function(payload) {

  switch(payload.actionType) {

    case Constants.GET_EVENTS:
      EventStore.getEvents(payload.events);
      EventStore.emitChange();
      break;

    default:
      //  NO-OP
  }
  return true;
});
