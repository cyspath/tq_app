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

  joinGroup: function(groupMember) {
    for (var i = 0; i < this._groupDetails.length ; i++) {
      if (this._groupDetails[i].id == groupMember.group_id) {
        this._groupDetails[i].members.push(UserStore._currentUser)
        this._currentDetail = this._groupDetails[i]
      }
    }
  },

  leaveGroup: function(groupMember) {
    for (var i = 0; i < this._groupDetails.length ; i++) {
      if (this._groupDetails[i].id == groupMember.group_id) {
        var groupMembers = this._groupDetails[i].members
        for (var j = 0; j < groupMembers.length ; j++) {
          if (groupMembers[j].id == UserStore._currentUser.id) {
            groupMembers.splice(j, 1)
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

    case Constants.GET_GROUP_DETAIL:
      GroupDetailStore.addGroupDetail(payload.group);
      GroupDetailStore.emitChange();
      break;

    case Constants.JOIN_GROUP:
      GroupDetailStore.joinGroup(payload.group_member);
      GroupDetailStore.emitChange();
      break;

    case Constants.LEAVE_GROUP:
      GroupDetailStore.leaveGroup(payload.group_member);
      GroupDetailStore.emitChange();
      break;

    default:
      //  NO-OP
  }
  return true;
});
