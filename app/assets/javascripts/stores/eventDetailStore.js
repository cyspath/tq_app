var EventDetailStore = new _.extend({}, EventEmitter.prototype, {

  _eventDetails: [],

  _currentDetail: {},

  addEventDetail: function(event) {
    this._eventDetails.push(event)
    this._currentDetail = event
  },

  getOrFetchEventDetail: function(eventId) {
    // if collection has event detail by id return it, else, fetch it and return it
    var detail = this._eventDetails.filter(function(eventDetail) {
      return eventDetail.id == eventId
    })
    if (detail.length > 0) {
      window.hideSpinner()
      return detail[0]
    } else {
      EventActions.getEventDetail(eventId)
    }
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

    case Constants.GET_EVENT_DETAIL:
      EventDetailStore.addEventDetail(payload.event);
      EventDetailStore.emitChange();
      break;

    default:
      //  NO-OP
  }
  return true;
});
