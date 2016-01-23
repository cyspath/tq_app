var GroupsIndex = React.createClass({

  getInitialState: function() {
    return {
      groupsList: [
{
id: 1,
name: "Pop-up leggings kitsch locavore green juice banjo.",
description: "Saepe ut est officia. Quod occaecati sit nisi sed cumque velit. Rerum at soluta delectus expedita quod recusandae.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/2.jpg",
location_id: 8,
author_id: 1,
created_at: "2016-01-22T20:37:03.000Z",
updated_at: "2016-01-23T21:39:49.707Z"
},
{
id: 2,
name: "Kickstarter small batch pop-up.",
description: "In qui et autem ut voluptatem. Reiciendis sequi libero aliquam tempore. Itaque odit aut.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/31.jpg",
location_id: 5,
author_id: 1,
created_at: "2016-01-12T07:08:50.000Z",
updated_at: "2016-01-23T21:39:49.715Z"
},
{
id: 3,
name: "Chicharrones kitsch slow-carb 90's fingerstache before they sold out.",
description: "Quia deserunt voluptas id at maiores. Ea sint est. Deleniti ut consequatur sed illo.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/43.jpg",
location_id: 0,
author_id: 1,
created_at: "2016-01-03T22:38:24.000Z",
updated_at: "2016-01-23T21:39:49.720Z"
},
{
id: 4,
name: "Put a bird on it irony williamsburg.",
description: "Voluptates et amet. Consequuntur in consequatur et dolores et iste. Pariatur consequatur rerum laudantium voluptatibus architecto ut. Non eum hic reprehenderit.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/20.jpg",
location_id: 2,
author_id: 1,
created_at: "2016-01-18T10:29:05.000Z",
updated_at: "2016-01-23T21:39:49.725Z"
},
{
id: 5,
name: "Synth hammock stumptown tilde +1.",
description: "Qui ut assumenda. Quam aut vero sed soluta recusandae non. Autem non rerum voluptates qui dolor dolorem. Consequatur facere aut rem dolore debitis.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/35.jpg",
location_id: 5,
author_id: 1,
created_at: "2016-01-19T14:20:23.000Z",
updated_at: "2016-01-23T21:39:49.729Z"
},
{
id: 6,
name: "Typewriter microdosing post-ironic mustache keffiyeh.",
description: "Voluptatem doloremque minima. Nesciunt eius unde natus. Repellat minus quibusdam velit. Est vel dolor maiores qui.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/36.jpg",
location_id: 0,
author_id: 1,
created_at: "2016-01-16T21:18:24.000Z",
updated_at: "2016-01-23T21:39:49.735Z"
},
{
id: 7,
name: "Seitan gentrify tousled dreamcatcher tote bag.",
description: "Incidunt et maiores ut. Sit beatae suscipit quaerat consequuntur alias. Rerum minima modi mollitia tempora.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/36.jpg",
location_id: 1,
author_id: 1,
created_at: "2016-01-21T14:13:09.000Z",
updated_at: "2016-01-23T21:39:49.740Z"
},
{
id: 8,
name: "Swag you probably haven't heard of them typewriter normcore.",
description: "Similique quia sed. Nulla eveniet facilis qui illo atque voluptatem impedit. Voluptatibus accusamus praesentium magni. Dignissimos et animi ex ullam. Ut et recusandae eos rerum temporibus.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/7.jpg",
location_id: 7,
author_id: 1,
created_at: "2016-01-16T10:04:49.000Z",
updated_at: "2016-01-23T21:39:49.745Z"
},
{
id: 9,
name: "Street green juice vice echo.",
description: "Perferendis aperiam et. Veritatis ex sint. Autem veritatis omnis odit. Maxime soluta omnis qui est aliquam nihil. Id temporibus ad voluptatibus culpa non.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/4.jpg",
location_id: 6,
author_id: 1,
created_at: "2016-01-08T09:37:24.000Z",
updated_at: "2016-01-23T21:39:49.751Z"
},
{
id: 10,
name: "Tote bag authentic chambray leggings microdosing.",
description: "Amet sed aut recusandae cumque. Eum pariatur temporibus velit quis non. Omnis adipisci eaque quam assumenda.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/25.jpg",
location_id: 6,
author_id: 1,
created_at: "2016-01-18T03:27:46.000Z",
updated_at: "2016-01-23T21:39:49.755Z"
},
{
id: 11,
name: "Hammock pork belly plaid jean shorts quinoa.",
description: "Dolores minus saepe nihil. Eligendi architecto dicta illo inventore. Eum aut animi dolore alias commodi laborum. Ut quos optio quis voluptas quod.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/29.jpg",
location_id: 7,
author_id: 1,
created_at: "2016-01-11T05:12:56.000Z",
updated_at: "2016-01-23T21:39:49.761Z"
},
{
id: 12,
name: "Twee meh kogi 8-bit.",
description: "Consequatur totam nostrum veritatis provident nihil earum. Sit accusantium voluptates corrupti corporis possimus. Aperiam non dolore qui. Occaecati voluptatem rerum.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/3.jpg",
location_id: 1,
author_id: 1,
created_at: "2016-01-22T23:23:47.000Z",
updated_at: "2016-01-23T21:39:49.766Z"
},
{
id: 13,
name: "Diy austin artisan beard.",
description: "Distinctio omnis voluptas quidem esse sint rerum corrupti. Odio ex explicabo voluptatibus sit est sapiente. Magnam repellendus laudantium ut. Et quo omnis totam maxime officia sit iusto.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/11.jpg",
location_id: 9,
author_id: 1,
created_at: "2016-01-20T21:55:56.000Z",
updated_at: "2016-01-23T21:39:49.771Z"
},
{
id: 14,
name: "Green juice venmo vice cronut tousled ugh.",
description: "Magni dolores ad error modi sit non. Quia rerum fugiat porro quod id ratione. Veritatis voluptatem ut. Dolorem dignissimos sunt qui. Ratione est consequatur iste qui illum qui.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/49.jpg",
location_id: 6,
author_id: 1,
created_at: "2016-01-06T02:06:12.000Z",
updated_at: "2016-01-23T21:39:49.776Z"
},
{
id: 15,
name: "Raw denim literally green juice 8-bit.",
description: "Excepturi illo debitis omnis dicta. Praesentium odio illo cum. Qui laboriosam non consequatur recusandae. Maxime et eveniet quia voluptatum.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/20.jpg",
location_id: 5,
author_id: 1,
created_at: "2016-01-13T16:00:43.000Z",
updated_at: "2016-01-23T21:39:49.783Z"
},
{
id: 16,
name: "Brunch tousled pitchfork actually gastropub iphone.",
description: "Aperiam recusandae fugiat nulla id. Tempora sed voluptatem aut cumque excepturi. Et sit eum laudantium repudiandae.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/11.jpg",
location_id: 9,
author_id: 1,
created_at: "2016-01-20T00:17:33.000Z",
updated_at: "2016-01-23T21:39:49.788Z"
},
{
id: 17,
name: "Hella readymade intelligentsia.",
description: "Minus in rem voluptatem sint. Dignissimos quas eius placeat nulla perferendis unde sunt. Quis molestiae iusto dolorem fugit quo qui tenetur. Quam sapiente tempore est corrupti. Iure assumenda et perferendis odit unde omnis alias.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/13.jpg",
location_id: 8,
author_id: 1,
created_at: "2016-01-11T11:25:41.000Z",
updated_at: "2016-01-23T21:39:49.791Z"
},
{
id: 18,
name: "Normcore fingerstache tilde austin mumblecore fanny pack.",
description: "Repellendus incidunt facere tenetur numquam. Reiciendis illum architecto voluptatem tempore quisquam. Ea facilis quod. Fugit ratione animi et enim sed placeat consectetur. Quaerat nostrum possimus qui laudantium.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/26.jpg",
location_id: 4,
author_id: 1,
created_at: "2016-01-22T23:31:36.000Z",
updated_at: "2016-01-23T21:39:49.795Z"
},
{
id: 19,
name: "Listicle distillery photo booth migas.",
description: "In facilis illum soluta ex ipsum numquam impedit. Qui dolorem est est consequuntur. Ex nesciunt necessitatibus soluta. Ea culpa minima consequatur similique autem.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/11.jpg",
location_id: 5,
author_id: 1,
created_at: "2016-01-11T03:51:54.000Z",
updated_at: "2016-01-23T21:39:49.799Z"
},
{
id: 20,
name: "Bushwick kogi gentrify squid viral.",
description: "Quam dolorem et vero. Iste sed adipisci. Officiis dolorum deserunt quam aut quia. Numquam consequatur non qui. Repudiandae incidunt similique at sapiente illum corrupti.",
avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/45.jpg",
location_id: 9,
author_id: 1,
created_at: "2016-01-11T06:45:44.000Z",
updated_at: "2016-01-23T21:39:49.807Z"
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
