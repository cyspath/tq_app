var NewGroupForm = React.createClass({

  getInitialState: function() {
    this.defaultState = { body: "", author: "" };
    return this.defaultState;
  },

  contextTypes: function() {
    return {
      actions: React.PropTypes.object.isRequired
    }
  },

  propTypes: function() {
    return {
      isReplying: React.PropTypes.bool,
      onGroupSubmitted: React.PropTypes.func,
      parent_id: React.PropTypes.number
    }
  },

  submitGroup: function(event) {
    event.preventDefault();
    Actions.addGroup(_.merge(this.state, { parent_id: this.props.parent_id }));
    this.setState(this.defaultState);
    if (this.props.onGroupSubmitted) {
      // root form will not have this props and thus will not hide
      this.props.onGroupSubmitted();
    }
  },

  onFieldChange: function(event) {
    var prop = {};
    prop[event.target.name] = event.target.value;
    this.setState(prop)
  },

  hideModal: function() {
    $('.modal.modal__add-group.show').toggleClass('show')
  },

  render: function() {
    return (
      <div className="modal modal__add-group" onClick={this.hideModal}>

        <form className={ this.props.isReplying ? "" : "hide"}>
          <label>Author</label>
          <input type='text' name='author' onChange={this.onFieldChange} value={this.state.author} />
          <label>Group</label>
          <textarea name='body' value={this.state.body} onChange={this.onFieldChange} />
          <button onClick={this.submitGroup} type="submit" >Submit</button>
        </form>

      </div>
    );
  },

})
