var BannerMain = React.createClass({
  getInitialState: function() {
    return {
      banner: this.publicBanner()
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
      console.log("pub");
      this.setState({ banner: this.publicBanner() });
    } else {
      console.log("user");
      this.setState({ banner: this.userBanner() });
    }
  },

  publicBanner: function() {
    var url = this.randomBannerUrl()
    return (
      <div className="banner-main__container" >
        <div className="banner-main__description_container" >
          <div className="banner-main__description" >
            <div className="large-text" >同趣网是</div>
            <div className="small-text" >同城人们一起分享知识，激发爱好，参与活动...</div>
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

  componentDidMount: function() {
    this.showBanner()
  },

  render: function() {
    return (
      <div>
        {this.state.banner}
      </div>
    )
  }
});
