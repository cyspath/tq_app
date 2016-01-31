var GroupBodyLeft = React.createClass({

  contextTypes: {
    groupId: React.PropTypes.number.isRequired
  },

  render: function() {
    return (
      <div className="group-body-left__container">

        <div className="group-body-left__avatar" >
          <Image imageableType="Group" imageableId={this.context.groupId} />
        </div>

        <div className="group-body-left__info" >

        </div>

        <div className="group-body-left__counts" >

        </div>

        <div className="group-body-left__organizers" >

        </div>

        <div className="group-body-left__tags" >

        </div>

      </div>
    )
  }
});
