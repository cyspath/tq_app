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

  joinEvent: function(eventMember) {
    for (var i = 0; i < this._eventDetails.length ; i++) {
      if (this._eventDetails[i].id == eventMember.event_id) {

        var members = this._eventDetails[i].members
        if (members.filter(function(e) { return e.id == UserStore._currentUser.id }).length === 0) {
          members.push(UserStore._currentUser)
        }

        var bailedMembers = this._eventDetails[i].bailed_members
        for (var j = 0; j < bailedMembers.length ; j++) {
          if (bailedMembers[j].id == UserStore._currentUser.id) {
            bailedMembers.splice(j, 1)
          }
        }

      }
    }
  },

  leaveEvent: function(eventMember) {
    for (var i = 0; i < this._eventDetails.length ; i++) {
      if (this._eventDetails[i].id == eventMember.event_id) {

        var bailedMembers = this._eventDetails[i].bailed_members
        if (bailedMembers.filter(function(e) { return e.id == UserStore._currentUser.id }).length === 0) {
          bailedMembers.push(UserStore._currentUser)
        }

        var members = this._eventDetails[i].members
        for (var j = 0; j < members.length ; j++) {
          if (members[j].id == UserStore._currentUser.id) {
            members.splice(j, 1)
          }
        }

      }
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

    case Constants.JOIN_EVENT:
      EventDetailStore.joinEvent(payload.event_member);
      EventDetailStore.emitChange();
      break;

    case Constants.LEAVE_EVENT:
      EventDetailStore.leaveEvent(payload.event_member);
      EventDetailStore.emitChange();
      break;
    default:
      //  NO-OP
  }
  return true;
});
