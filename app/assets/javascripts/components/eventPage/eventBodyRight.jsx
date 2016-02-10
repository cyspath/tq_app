var EventBodyRight = React.createClass({

  render: function() {
    return (
      <div className="content-body-main__container">

        <div className="content-body-main__left__container" >

        </div>

        <div className="content-body-main__right__container" >
          <EventMembers going={this.props.event.members} notGoing={this.props.event.bailed_members} />
        </div>

      </div>
    )
  }
});
