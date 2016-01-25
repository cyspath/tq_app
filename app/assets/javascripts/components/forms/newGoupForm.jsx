var NewGroupForm = React.createClass({

  getInitialState: function() {
    this.defaultState = { name: "", description: "", location_id: 1 };
    return this.defaultState;
  },

  submitGroup: function(event) {
    event.preventDefault();
    GroupActions.addGroup(this.state);
    this.setState(this.defaultState);
    this.hideModal()
  },

  onFieldChange: function(event) {
    var prop = {};
    prop[event.target.name] = event.target.value;
    this.setState(prop)
  },

  hideModal: function() {
    $('.modal.modal__add-group.show').toggleClass('show')
    $('form__add-group').toggleClass('show')
  },

  stopPropagation: function(event) {
    event.stopPropagation()
  },

  render: function() {
    return (
      <div className="modal modal__add-group" onClick={this.hideModal}>

        <form className="form__add-group" onClick={this.stopPropagation}>
          <div className="form__upper" ><span>建立您的同趣群</span></div>
          <label><span>您群的名字</span>
            <input type='text' name='name' onChange={this.onFieldChange} value={this.state.name} />
          </label>

          <label><span>简介</span>
            <textarea name='description' value={this.state.description} onChange={this.onFieldChange} />
          </label>

          <label><span>城市</span>
            <select name="selection">
              <option value="Job Inquiry">Job Inquiry</option>
              <option value="General Question">General Question</option>
            </select>
          </label>

          <label><span></span>
            <button onClick={this.submitGroup} type="submit" className="submit-btn" >建立您的群</button>
          </label>

          <div className="form__lower" ><span>&nbsp;</span></div>
        </form>

      </div>
    );
  },

})
