var GroupDetailStore = new _.extend({}, EventEmitter.prototype, {

  _groupDetails: [],

  _currentDetail: {},

  addGroupDetail: function(group) {
    this._groupDetails.push(group)
    this._currentDetail = group
  },

  getOrFetchGroupDetail: function(groupId) {
    // if collection has group detail by id return it, else, fetch it and return it
    var detail = this._groupDetails.filter(function(groupDetail) {
      return groupDetail.id == groupId
    })
    if (detail.length > 0) {
      window.hideSpinner()
      return detail[0]
    } else {
      GroupActions.getGroupDetail(groupId)
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

    case Constants.GET_GROUP_DETAIL:
      GroupDetailStore.addGroupDetail(payload.group);
      GroupDetailStore.emitChange();
      break;

    default:
      //  NO-OP
  }
  return true;
});
