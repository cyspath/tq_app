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







// <form className="form__add-group" onClick={this.stopPropagation}>
//   <div className="form__upper" ><span>建立您的同趣群</span></div>
//   <label><span>您群的名字</span>
//     <input type='text' value={this.state.name} />
//   </label>
//
//   <label><span>简介</span>
//     <textarea name='description' value={this.state.description} onChange={this.onFieldChange} />
//   </label>
//
//   <label><span>城市</span>
//     <select name="selection">
//       <option value="Job Inquiry">Job Inquiry</option>
//       <option value="General Question">General Question</option>
//     </select>
//   </label>
//
//   <label><span></span>
//     <button onClick={this.submitGroup} type="submit" className="submit-btn" >建立您的群</button>
//   </label>
//
//   <div className="form__lower" ><span>&nbsp;</span></div>
// </form>




// <form action="" className="sky-form" onClick={this.stopPropagation}>
//   <header>Registration form</header>
//
//   <fieldset>
//     <section>
//       <label className="input">
//         <i className="icon-append icon-user"></i>
//         <input type="text" placeholder="Username" name='name' onChange={this.onFieldChange} />
//         <b className="tooltip tooltip-bottom-right">Only latin characters and numbers</b>
//       </label>
//     </section>
//
//     <section>
//       <label className="input">
//         <i className="icon-append icon-envelope-alt"></i>
//         <input type="text" placeholder="Email address" />
//         <b className="tooltip tooltip-bottom-right">Needed to verify your account</b>
//       </label>
//     </section>
//
//     <section>
//       <label className="textarea">
//         <i className="icon-append icon-user"></i>
//         <textarea placeholder="Username" name='name' onChange={this.onFieldChange} />
//         <b className="tooltip tooltip-bottom-right">Only latin characters and numbers</b>
//       </label>
//     </section>
//
//     <section>
//       <label className="input">
//         <i className="icon-append icon-lock"></i>
//         <input type="password" placeholder="Password" />
//         <b className="tooltip tooltip-bottom-right">Only latin characters and numbers</b>
//       </label>
//     </section>
//
//     <section>
//       <label className="input">
//         <i className="icon-append icon-lock"></i>
//         <input type="password" placeholder="Confirm password" />
//         <b className="tooltip tooltip-bottom-right">Only latin characters and numbers</b>
//       </label>
//     </section>
//   </fieldset>
//
//   <fieldset>
//     <div className="row">
//       <section className="col col-6">
//         <label className="input">
//           <input type="text" placeholder="First name" />
//         </label>
//       </section>
//       <section className="col col-6">
//         <label className="input">
//           <input type="text" placeholder="Last name" />
//         </label>
//       </section>
//     </div>
//
//     <section>
//       <label className="select">
//         <select>
//           <option value="0" selected disabled>Gender</option>
//           <option value="1">Male</option>
//           <option value="2">Female</option>
//           <option value="3">Other</option>
//         </select>
//         <i></i>
//       </label>
//     </section>
//
//     <section>
//       <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>I agree to the Terms of Service</label>
//       <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>I want to receive news and  special offers</label>
//     </section>
//   </fieldset>
//   <footer>
//     <button type="submit" className="button">Submit</button>
//   </footer>
// </form>
