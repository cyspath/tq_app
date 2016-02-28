var BannerMain = React.createClass({
  getInitialState: function() {
    return {
      currentUser: window.currentUser
    };
  },
  
  randomBannerUrl: function() {
    var urls = [
      "http://res.cloudinary.com/cyspath/image/upload/v1456454619/yyj_p4smo7.jpg",
      "http://res.cloudinary.com/cyspath/image/upload/v1456455510/pxs_ghfwvn.jpg"
    ]
    return(urls[Math.floor(Math.random()*urls.length)])
  },

  showBanner: function() {
    if (window.currentUser === undefined) {
      return this.publicBanner()
    } else {
      return this.userBanner()
    }
  },

  publicBanner: function() {
    var url = this.randomBannerUrl()
    return (
      <div className="banner-main__container" >
        <div className="banner-main__description_container" >
          <div className="banner-main__description" >
            <div className="large-text" >同趣网是</div>
            <div className="small-text" >同城人们一起分享知识，维持爱好，参与活动...</div>
          </div>
        </div>
        <img src={url} className="banner-main__img" />
      </div>
    )
  },

  userBanner: function() {
    var url = this.randomBannerUrl()
    return (
      <div className="banner-main__container" >
      user view
      </div>
    )
  },

  render: function() {
    view = this.showBanner()
    return (
      <div>
        {view}
      </div>
    )
  }
});
