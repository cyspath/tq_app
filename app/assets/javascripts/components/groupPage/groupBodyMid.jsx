var GroupBodyMid = React.createClass({
  contextTypes: {
    groupId: React.PropTypes.number.isRequired
  },

  render: function() {
    return (
      <div className="content-body-mid__container">

        <div className="content-body-mid__title" >

        </div>

        <div className="content-body-mid__description" >

        </div>

        <div className="content-body-mid__events" >

          <div className="content-body-mid__events-upcoming" >

          </div>
          <div className="content-body-mid__events-past" >

          </div>


        </div>


      </div>
    )
  }
});
