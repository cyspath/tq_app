# User.create(email: "mike@gmail.com", username: "小李子"， password: "foobar")

group_names = ["好男儿不怕高山峰", "上班族咖啡谈心群", "周末新电影热爱队", "我们一起开启英语角吧", "用眼神杀死你们情侣", "基督教，佛教，天主教群", "单身兄弟姐妹也high"]

i = 0

6.times do
  Group.create!(
    name: group_names[i],
    avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/" + (rand(50) + 1).to_s + ".jpg",
    description: Faker::Lorem.paragraph,
    location_id: rand(10),
    author_id: rand(User.all.count) + 1,
    created_at: Faker::Time.between(DateTime.now - 20, DateTime.now)
  )
  i += 1
end
