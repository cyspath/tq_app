var UserStore = new _.extend({}, EventEmitter.prototype, {

  _user: {},

  addUser: function(user) {
    this._user = user
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

    case Constants.GET_USER_DETAIL:
      UserStore.addUser(payload.user);
      UserStore.emitChange();
      break;

    default:
      //  NO-OP
  }
  return true;
});
