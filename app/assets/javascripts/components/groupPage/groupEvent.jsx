var GroupEvent = React.createClass({

  render: function() {
    var userImages = this.props.members.slice(0, 11).map(function(user) {
      return <img key={user.id} src={user.avatar} />
    })
    var eventLink = "/events/" + this.props.id
    return (
      <div className="group-events-index__item-container">

        <div className="top" >
          <Link to={eventLink}>{this.props.name}</Link>
        </div>

        <div className="body" >

          <div className="left" >
            <p className="location_name" >
              {this.props.location_name}
            </p>
            <p className="location_address" >
              {this.props.location_address}
            </p>
            <div className="users-strip" >
              {userImages}
            </div>
            <p className="description">
              {this.props.description}
            </p>
            <div className="hosted-by" >
              主办: {this.props.founder.username}
            </div>
          </div>

          <div className="right" >
            <p className="date" >
              {parseDateCN(this.props.date)}
            </p>
            <p className="time" >
              {this.props.start_time_formatted}
            </p>
            <a className="btn btn-green" >
              我想去
            </a>
            <p className="num-going" >
              {this.props.member_count}
            </p>
          </div>

        </div>

      </div>
    )
  }
});
// <div className="events-index__container-inner-left" >
//   <Link to={eventLink}>
//     <div className="left" >
//       {this.props.start_time_formatted.slice(0, this.props.start_time_formatted.length - 2)}
//     </div>
//     <div className="right" >
//       {this.props.start_time_formatted.slice(this.props.start_time_formatted.length - 2)}
//     </div>
//   </Link>
// </div>
//
// <div className="events-index__container-inner-right" >
//   <Link to={groupLink}><div className="top" >{this.props.group_name}</div></Link>
//   <Link to={eventLink}><div className="mid" >{this.props.name}</div></Link>
//
//   <div className="bottom" >{this.props.member_count} 个同趣者</div>
// </div>
