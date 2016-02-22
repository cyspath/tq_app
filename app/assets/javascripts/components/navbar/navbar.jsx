var Navbar = React.createClass({

  getInitialState: function() {
    this.currentUser()
    return {
      currentUser: null
    };
  },

  currentUser: function() {
    $.ajax({
      type: 'get',
      url: "/current_user",
      success: function(resp) {
        this.setState({ currentUser: resp });
        window.currentUser = resp
      }.bind(this),
      error: function(resp){
        console.log(resp)
      }
    })
  },

  signOut: function() {
    $.ajax({
      type: 'delete',
      url: "/users/sign_out",
      success: function() {
        window.location='#/'
        this.setState({ currentUser: null });
        window.currentUser = null
      }.bind(this),
      error: function(resp){
        console.log(resp)
      }
    })
  },

  userSection: function() {
    if (this.state.currentUser != null) {
      return (
        <div className="navbar__user-section__inner" >
          <div className="user-avatar__container" onClick={this.showDropdown}>
            <div className="user-avatar">
              <img src={this.state.currentUser.avatar} />
            </div>
            <i className="fa fa-caret-down navicon-caret" ></i>
            <i className="fa fa-navicon navicon-hamburger" ></i>
          </div>

        </div>
      )
    } else {
      return (
        <div>
          <a href="/users/sign_in" >Sign In</a>
          <a href="/users/sign_up" >Register</a>
        </div>
      )
    }
  },

  dropdownSection: function() {
    if (this.state.currentUser != null) {
      return (
        <div id="navbar__dropdown" className="hide"  >
          <div className="caret-up" ></div>
          <div className="dropdown__list" >
            <Link to="userDetail" params={{ userId: this.state.currentUser.id }} className="dropdown__item" >
              我的资料
            </Link>
            <a onClick={this.signOut} className="dropdown__item" >
              退出
            </a>
          </div>
        </div>
      )
    }
  },

  showDropdown: function() {
    $('#navbar__dropdown').toggleClass('hide')
  },

  render: function() {
    var userSection = this.userSection()
    var dropdown = this.dropdownSection()

    return (
      <nav className="navbar__container">
        <div className="navbar__content">

          <a href="#/" className="navbar__logo-section">
            <div className="navbar__logo">
              <div className="logo" ></div>
            </div>
          </a>

          <a href="#/groups" className="navbar__search-group-section">
            <div className="navbar__action-btn">
              <p className="large-text">
                探索
              </p>
              <p className="small-text">
                您感兴趣的群
              </p>
            </div>
          </a>

          <a className="navbar__create-group-section">
            <div className="navbar__action-btn start-a-group">
              <p className="large-text">
                创建
              </p>
              <p className="small-text">
                一个属于您的群
              </p>
            </div>
          </a>

          <div className="navbar__user-section">
            {userSection}
          </div>
          {dropdown}
        </div>
      </nav>
    )
  }
});
