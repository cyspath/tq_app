var GroupBodyMid = React.createClass({
  contextTypes: {
    groupId: React.PropTypes.number.isRequired
  },
  
  render: function() {
    return (
      <div className="group-body-mid__container">

        <div className="group-body-mid__title" >

        </div>

        <div className="group-body-mid__description" >

        </div>

        <div className="group-body-mid__events" >

          <div className="group-body-mid__events-upcoming" >

          </div>
          <div className="group-body-mid__events-past" >

          </div>


        </div>


      </div>
    )
  }
});
