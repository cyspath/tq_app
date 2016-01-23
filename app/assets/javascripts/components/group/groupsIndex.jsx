var GroupsIndex = React.createClass({

  getInitialState: function() {
    return {
      groupsList: [
{
id: 1,
name: "3 wolf moon gluten-free fap leggings wolf put a bird on it.",
description: "Et exercitationem ut enim tenetur facere animi. Minima dolorem nobis. Quis illo exercitationem. Facilis accusamus facere mollitia nam voluptatem totam.",
avatar: "https://robohash.org/evenietfugitdolorum.png?size=300x300&set=set1",
location_id: 0,
author_id: 1,
created_at: "2016-01-22T05:52:09.000Z",
updated_at: "2016-01-22T02:56:48.796Z"
},
{
id: 2,
name: "Butcher narwhal retro.",
description: "Omnis et et autem est est. Illo aut doloremque quibusdam eum delectus minus. Est eum est a ea laborum.",
avatar: "https://robohash.org/exercitationemrerumblanditiis.png?size=300x300&set=set1",
location_id: 8,
author_id: 1,
created_at: "2016-01-19T16:26:03.000Z",
updated_at: "2016-01-22T02:56:48.801Z"
},
{
id: 3,
name: "Artisan tote bag tilde kinfolk.",
description: "Sint repudiandae voluptates ad molestias tenetur vitae. Ut dolorem ea. Amet adipisci itaque eligendi et rerum voluptatem. Sit nam accusantium voluptas maxime voluptatem ut.",
avatar: "https://robohash.org/etnisiiusto.png?size=300x300&set=set1",
location_id: 5,
author_id: 1,
created_at: "2016-01-21T09:08:00.000Z",
updated_at: "2016-01-22T02:56:48.804Z"
}
]//GroupStore.getAll()
    };
  },

  // componentDidMount: function() {
  //   GroupActions.getAllGroups();
  //   GroupStore.addChangeListener(this._onChange)
  // },
  //
  // componentWillUnmount: function() {
  //   GroupStore.removeChangeListener(this._onChange);
  // },
  //
  // _onChange: function() {
  //   this.setState({ groupsList: GroupStore.getAll() });
  // },

  render: function() {
    return (
      <div>
        "GROUPS!"
        <Link to="/profile">User profile</Link>

        <GroupsList className="groups-index__container" groups={this.state.groupsList}/>
      </div>
    )
  }
});
