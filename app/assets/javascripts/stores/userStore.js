var UserStore = new _.extend({}, EventEmitter.prototype, {

  _user: {},
  _currentUser: null,

  addUser: function(user) {
    this._user = user
  },

  addCurrentUser: function(currentUser) {
    this._currentUser = currentUser
  },

  hasCurrentUser: function() {
    return(
      this._currentUser != null && Object.keys(this._currentUser).length > 0
    )
  },

  signOutCurrentUser: function() {
    this._currentUser = null
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

    case Constants.GET_CURRENT_USER:
      UserStore.addCurrentUser(payload.currentUser);
      UserStore.emitChange();
      break;

    case Constants.SIGN_OUT_CURRENT_USER:
      UserStore.signOutCurrentUser();
      UserStore.emitChange();
      break;

    default:
      //  NO-OP
  }
  return true;
});
