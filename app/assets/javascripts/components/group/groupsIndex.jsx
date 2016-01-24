var GroupsIndex = React.createClass({

  getInitialState: function() {
    return {
      groupsList: [
        {
        id: 1,
        name: "麻痹我单身",
        description: "Eaque reprehenderit laboriosam illum omnis ipsum. Velit porro doloribus minima dolore. Delectus labore officia ea possimus sed. Quas modi labore incidunt fuga nihil. Accusamus ducimus non sed et ut a facilis.",
        avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/7.jpg",
        location_id: 5,
        author_id: 1,
        created_at: "2016-01-16T01:34:02.000Z",
        updated_at: "2016-01-24T01:21:51.461Z"
        },
{
id: 2,
name: "银色情人节",
description: "Quo quo eaque enim itaque omnis. Ipsum inventore ducimus. Quo provident officiis ipsam tempora quae. Dolore numquam reprehenderit velit maiores qui sed quo.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/20.jpg",
location_id: 4,
author_id: 1,
created_at: "2016-01-17T14:25:08.000Z",
updated_at: "2016-01-24T01:21:51.465Z"
},
{
id: 3,
name: "羡慕嫉妒恨",
description: "Est qui omnis sit non. Optio quidem quaerat voluptatibus maxime a hic delectus. Voluptatem enim nesciunt nostrum illo et.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/15.jpg",
location_id: 8,
author_id: 1,
created_at: "2016-01-10T05:36:30.000Z",
updated_at: "2016-01-24T01:21:51.467Z"
},
{
id: 4,
name: "单身滴兄弟姐妹们都转起来",
description: "Temporibus consectetur aperiam. Dolorum quo vel esse consequuntur est unde. Minus omnis voluptates aperiam doloremque asperiores adipisci. Ducimus voluptatem similique a maiores tenetur fuga sunt.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/7.jpg",
location_id: 8,
author_id: 1,
created_at: "2016-01-10T05:04:14.000Z",
updated_at: "2016-01-24T01:21:51.470Z"
},
{
id: 5,
name: "用眼神杀死你们情侣",
description: "Et necessitatibus vero. Sed vitae nobis dolor expedita et accusantium sit. Aliquid provident iure necessitatibus quam voluptas. Veritatis aperiam et.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/30.jpg",
location_id: 6,
author_id: 1,
created_at: "2016-01-05T07:38:14.000Z",
updated_at: "2016-01-24T01:21:51.472Z"
},
{
id: 6,
name: "用眼神杀死你们情侣",
description: "Aut quod dolorem laboriosam cumque quia. Ipsum quasi sit. Delectus ab ut. Ut libero laboriosam.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/24.jpg",
location_id: 6,
author_id: 1,
created_at: "2016-01-16T13:05:05.000Z",
updated_at: "2016-01-24T01:21:51.475Z"
},
{
id: 7,
name: "羡慕嫉妒恨",
description: "Qui qui nam delectus. Impedit a pariatur ad et fugiat et fuga. Neque esse et dolores velit aliquid quis et. Ipsum nobis harum excepturi molestias amet.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/25.jpg",
location_id: 7,
author_id: 1,
created_at: "2016-01-07T16:17:08.000Z",
updated_at: "2016-01-24T01:21:51.477Z"
},
{
id: 8,
name: "用眼神杀死你们情侣",
description: "Molestias enim quaerat id nemo exercitationem. Eius non ea omnis quis excepturi. Deleniti aut laudantium fugit facere. Asperiores distinctio laudantium. Dolore quas reiciendis quibusdam.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/19.jpg",
location_id: 8,
author_id: 1,
created_at: "2016-01-07T04:06:59.000Z",
updated_at: "2016-01-24T01:21:51.480Z"
},
{
id: 9,
name: "羡慕嫉妒恨",
description: "Nulla impedit ratione. At id culpa libero ipsam. Quia quod sed natus corporis vero.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/12.jpg",
location_id: 5,
author_id: 1,
created_at: "2016-01-12T10:46:50.000Z",
updated_at: "2016-01-24T01:21:51.482Z"
},
{
id: 10,
name: "银色情人节",
description: "Voluptatibus provident porro fugiat blanditiis est quidem. Est aut nihil accusamus et eos non atque. Quisquam atque voluptatem velit et magnam qui. Labore quis eum molestiae error dolorem et voluptas.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/13.jpg",
location_id: 1,
author_id: 1,
created_at: "2016-01-12T21:58:49.000Z",
updated_at: "2016-01-24T01:21:51.485Z"
},
{
id: 11,
name: "用眼神杀死你们情侣",
description: "Sit eveniet quisquam ea. Corrupti et et quae est sapiente excepturi voluptatem. Id molestiae eligendi sed ducimus quae consequatur.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/6.jpg",
location_id: 1,
author_id: 1,
created_at: "2016-01-07T01:03:41.000Z",
updated_at: "2016-01-24T01:21:51.487Z"
},
{
id: 12,
name: "羡慕嫉妒恨",
description: "Deleniti corrupti velit dolores rerum. Provident vitae hic amet consectetur. Optio sint suscipit et ut alias. Earum ex hic ea optio. In ut libero tenetur.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/45.jpg",
location_id: 4,
author_id: 1,
created_at: "2016-01-03T12:32:55.000Z",
updated_at: "2016-01-24T01:21:51.490Z"
},
{
id: 13,
name: "羡慕嫉妒恨",
description: "Ut qui omnis. Molestiae non corporis qui ipsum magnam vitae. Qui optio repellendus est cumque. Modi dignissimos assumenda necessitatibus sit numquam. Est soluta aut.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/29.jpg",
location_id: 8,
author_id: 1,
created_at: "2016-01-12T02:34:00.000Z",
updated_at: "2016-01-24T01:21:51.492Z"
},
{
id: 14,
name: "银色情人节",
description: "Maxime optio quo officia. Nesciunt sed animi aut voluptatem ad. Autem dolor illo sequi. Tempora veritatis sunt culpa quia nisi eos. Et qui vel sunt optio asperiores odit non.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/23.jpg",
location_id: 0,
author_id: 1,
created_at: "2016-01-19T23:37:43.000Z",
updated_at: "2016-01-24T01:21:51.495Z"
},
{
id: 15,
name: "用眼神杀死你们情侣",
description: "Ut delectus natus doloribus. Quasi consequatur quisquam. Voluptatum cum et aliquid totam et.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/50.jpg",
location_id: 2,
author_id: 1,
created_at: "2016-01-21T17:54:12.000Z",
updated_at: "2016-01-24T01:21:51.499Z"
},
{
id: 16,
name: "麻痹我单身",
description: "Nisi atque est facilis itaque quo ratione sed. Voluptatem aut delectus. Veniam repellendus similique unde. Velit non eaque.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/44.jpg",
location_id: 0,
author_id: 1,
created_at: "2016-01-16T03:12:02.000Z",
updated_at: "2016-01-24T01:21:51.501Z"
},
{
id: 17,
name: "空虚寂寞冷",
description: "Rerum provident nesciunt amet aut qui. Corporis id a sunt. Similique consequatur commodi aliquid aspernatur nulla. Id consequatur inventore voluptates autem natus. Quod explicabo quam eveniet assumenda.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/47.jpg",
location_id: 6,
author_id: 1,
created_at: "2016-01-20T21:37:47.000Z",
updated_at: "2016-01-24T01:21:51.504Z"
},
{
id: 18,
name: "空虚寂寞冷",
description: "Omnis aliquid maxime harum. Non odit praesentium quas et cupiditate rerum ad. Et eius quo.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/12.jpg",
location_id: 8,
author_id: 1,
created_at: "2016-01-23T04:10:29.000Z",
updated_at: "2016-01-24T01:21:51.506Z"
},
{
id: 19,
name: "空虚寂寞冷",
description: "Molestias eos quasi. Ut adipisci rerum iste. Fugiat omnis qui fuga nisi tempore sapiente ipsa. Molestiae laboriosam modi aut. Delectus quis accusantium soluta quas.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/18.jpg",
location_id: 9,
author_id: 1,
created_at: "2016-01-17T18:18:11.000Z",
updated_at: "2016-01-24T01:21:51.509Z"
},
{
id: 20,
name: "空虚寂寞冷",
description: "Animi veniam tenetur ex reiciendis. Totam fugit molestiae nihil et possimus nihil aut. Et aut voluptate eum cumque officiis. Quia voluptates tempora consectetur nulla et fugiat.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/10.jpg",
location_id: 2,
author_id: 1,
created_at: "2016-01-14T06:03:53.000Z",
updated_at: "2016-01-24T01:21:51.512Z"
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
      <div className="groups-index__container">
        <GroupsList groups={this.state.groupsList}/>
        <Link to="/profile">User profile</Link>
      </div>
    )
  }
});
