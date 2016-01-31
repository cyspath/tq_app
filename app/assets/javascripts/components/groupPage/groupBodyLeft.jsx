var GroupBodyLeft = React.createClass({

  contextTypes: {
    groupId: React.PropTypes.number.isRequired
  },

  render: function() {
    return (
      <div className="content-body-left__container">

        <div className="content-body-left__avatar" >
          <Image imageableType="Group" imageableId={this.context.groupId} />
        </div>

        <div className="content-body-left__info" >

        </div>

        <div className="content-body-left__counts" >

        </div>

        <div className="content-body-left__organizers" >

        </div>

        <div className="content-body-left__tags" >

        </div>

      </div>
    )
  }
});
