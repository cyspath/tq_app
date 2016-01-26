var GroupPage = React.createClass({

  render: function() {
    return (
      <div className="group-page__container">
        <div className="group-page__container-inner" >          
          <GroupBanner />
          <GroupBody />
        </div>
      </div>
    )
  }
});
