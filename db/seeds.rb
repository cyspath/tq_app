# User.create(email: "mike@gmail.com", username: "小李子"， password: "foobar")

group_names = ["羡慕嫉妒恨", "空虚寂寞冷", "麻痹我单身", "用眼神杀死你们情侣", "银色情人节", "单身滴兄弟姐妹们都转起来"]

20.times do
  Group.create!(
    name: group_names[rand(group_names.length)],
    avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/" + (rand(50) + 1).to_s + ".jpg",
    description: Faker::Lorem.paragraph,
    location_id: rand(10),
    author_id: rand(User.all.count) + 1,
    created_at: Faker::Time.between(DateTime.now - 20, DateTime.now)
  )
end
