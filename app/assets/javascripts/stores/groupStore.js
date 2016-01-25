var GroupStore = new _.extend({}, EventEmitter.prototype, {

  _groups: [],

  getGroups: function(groups) {
    this._groups = groups
    // groups.forEach(function(group) {
    //   this.addGroup(group)
    // }.bind(this))
  },

  addGroup: function(group) {
    this._groups[group.id || this._groups.length] = group
  },

  // upvoteGroup: function(group) {
  //   this._groups[group.id].rank++;
  // },
  //
  // deleteGroup: function(group) {
  //   delete(this._groups[group.id])
  // },

  groups: function(parentId) {
    return _.chain(
      this._groups.filter(function(c) { return c && c.parent_id === parentId })
    ).sortBy('rank').reverse().value()
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

    case Constants.GET_GROUPS:
      GroupStore.getGroups(payload.groups);
      GroupStore.emitChange();
      break;

    case Constants.ADD_GROUP:
      GroupStore.addGroup(payload.group);
      GroupStore.emitChange();
      break;
    //
    // case Constants.UPVOTE_GROUP:
    //   GroupStore.upvoteGroup(payload.group)
    //   GroupStore.emitChange();
    //   break;
    //
    // case Constants.DELETE_GROUP:
    //   GroupStore.deleteGroup(payload.group)
    //   GroupStore.emitChange();
    //   break;

    default:
      //  NO-OP
  }
  return true;
});
