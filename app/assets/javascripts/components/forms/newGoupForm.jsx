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
        <div className="form-wrapper" >
          <form action="" className="sky-form" onClick={this.stopPropagation}>
            <header>建立您的同趣群</header>

            <fieldset>
              <section>
                <label className="input">
                  <i className="icon-append fa-group"></i>
                  <input type="text" placeholder="您群的名字" name='name' onChange={this.onFieldChange} value={this.state.name} />
                  <b className="tooltip tooltip-bottom-right">有创意好，但要文明一点</b>
                </label>
              </section>

              <section>
                <label className="textarea">
                  <i className="icon-append textarea fa-list"></i>
                  <textarea placeholder="群体简介" name='description' onChange={this.onFieldChange} />
                  <b className="tooltip tooltip-bottom-right">描述一下您的群，慢慢来</b>
                </label>
              </section>

              <section>
                <label className="select">
                  <select name='location_id' onChange={this.onFieldChange} defaultValue="1">
                    <option value="1">山东青岛</option>
                    <option value="2">天津</option>
                    <option value="3">北京</option>
                  </select>
                  <b className="tooltip tooltip-bottom-right">描述一下您的群，慢慢来</b>
                  <i></i>
                </label>
              </section>

            </fieldset>

            <footer>
              <button type="submit" className="button" onClick={this.submitGroup}>提交</button>
            </footer>
          </form>
        </div>
      </div>
    );
  },

})
