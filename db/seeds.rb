# User.create(email: "mike@gmail.com", username: "小李子"， password: "foobar")

User.create!(
username: "小李子",
avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ee/ee4fb033e82b95586de1675fb5b05265bd72662b_full.jpg",
password: 'foobar',
email: 'mzl@berkeley.edu',
phone: Faker::PhoneNumber.cell_phone,
encrypted_password: "$2a$10$Knzp29UFXM4Z2g3UEac3T.mRveqEG18T7.ft25HhVLFJaVig27guC"
)

500.times do
  username = ["贝茨", "不能错的决定", "执笔", "寂寞不是罪", "好先森", "凉橙", "嘿咻嘿咻", "微光",
      "宠沵", "k-17款爷", "画子入戏", "小花", "曲奇的娇气", "光和影子", "玫瑰", "叶落~", "海边飘逸"].sample
  n = rand(5)
  if n < 1
    user_avatar = Faker::Avatar.image
  end

  User.create!(
    username: username,
    avatar: user_avatar,
    password: 'Cyspathl1',
    email: Faker::Internet.email,
    identicon: Image.generate_identicon,
    phone: Faker::PhoneNumber.cell_phone,
    encrypted_password: "$2a$10$Knzp29UFXM4Z2g3UEac3T.mRveqEG18T7.ft25HhVLFJaVig27guC"
  )
end

group_names = ["星巴克聊天族", "单身宅人聚乐部", "每周我要KTV", "好男儿不怕高山峰", "上班族咖啡谈心群", "周末新电影热爱队", "青岛栈桥英语角", "用眼神杀死你们情侣", "基督教，佛教，天主教群", "单身兄弟姐妹也high"]

i = 0
while i < group_names.length

  arr = "环路和高速路都实现了不靠人工干预的完全自动驾驶全世界只有不足十台科学潜艇能够到达海面".split("")
  r = rand(100) + 20
  description = ""
  r.times {description += arr.sample}

  Group.create!(
    name: group_names[i],
    avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/" + (rand(50) + 1).to_s + ".jpg",
    description: description,
    location_id: rand(10),
    owner_id: rand(3) + 1,
    created_at: Faker::Time.between(DateTime.now - 20, DateTime.now)
  )
  i += 1
end

  Image.create!(
    url_original: "http://res.cloudinary.com/cyspath/image/upload/v1454382324/xvuvssp17n9ujgoby6qi.jpg",
    url_cropped: "",
    url_225x225: "http://res.cloudinary.com/cyspath/image/upload/x_62,y_0,w_184,h_184,c_crop/w_225,h_225,c_fill/xvuvssp17n9ujgoby6qi.jpg",
    url_50x50: "http://res.cloudinary.com/cyspath/image/upload/x_62,y_0,w_184,h_184,c_crop/w_50,h_50,c_fill/xvuvssp17n9ujgoby6qi.jpg",
    url_30x30: "http://res.cloudinary.com/cyspath/image/upload/x_62,y_0,w_184,h_184,c_crop/w_30,h_30,c_fill/xvuvssp17n9ujgoby6qi.jpg",
    imageable_id: 2,
    imageable_type: "Group"
  )

  Image.create!(
    url_original:
    "http://res.cloudinary.com/cyspath/image/upload/v1454394943/cmxc2ladljf6a1jydg2q.gif",
    url_cropped: "",
    url_225x225:
    "http://res.cloudinary.com/cyspath/image/upload/x_144,y_16,w_288,h_288,c_crop/w_225,h_225,c_fill/cmxc2ladljf6a1jydg2q.gif",
    url_50x50:
    "http://res.cloudinary.com/cyspath/image/upload/x_144,y_16,w_288,h_288,c_crop/w_50,h_50,c_fill/cmxc2ladljf6a1jydg2q.gif",
    url_30x30:
    "http://res.cloudinary.com/cyspath/image/upload/x_144,y_16,w_288,h_288,c_crop/w_30,h_30,c_fill/cmxc2ladljf6a1jydg2q.gif",
    imageable_id: 1,
    imageable_type: "Group"
  )

 Image.create!(
   url_original:
    "http://res.cloudinary.com/cyspath/image/upload/v1454384282/cpagwmp5ujuo2alcryl3.jpg",
   url_cropped: "",
   url_225x225:
    "http://res.cloudinary.com/cyspath/image/upload/x_18,y_9,w_170,h_170,c_crop/w_225,h_225,c_fill/cpagwmp5ujuo2alcryl3.jpg",
   url_50x50:
    "http://res.cloudinary.com/cyspath/image/upload/x_18,y_9,w_170,h_170,c_crop/w_50,h_50,c_fill/cpagwmp5ujuo2alcryl3.jpg",
   url_30x30:
    "http://res.cloudinary.com/cyspath/image/upload/x_18,y_9,w_170,h_170,c_crop/w_30,h_30,c_fill/cpagwmp5ujuo2alcryl3.jpg",
   imageable_id: 3,
   imageable_type: "Group"
 )

 Image.create(
   url_original:
    "http://res.cloudinary.com/cyspath/image/upload/v1454394020/kpdrnspbjynjq44deiix.jpg",
   url_cropped: "",
   url_225x225:
    "http://res.cloudinary.com/cyspath/image/upload/x_10,y_35,w_181,h_181,c_crop/w_225,h_225,c_fill/kpdrnspbjynjq44deiix.jpg",
   url_50x50:
    "http://res.cloudinary.com/cyspath/image/upload/x_10,y_35,w_181,h_181,c_crop/w_50,h_50,c_fill/kpdrnspbjynjq44deiix.jpg",
   url_30x30:
    "http://res.cloudinary.com/cyspath/image/upload/x_10,y_35,w_181,h_181,c_crop/w_30,h_30,c_fill/kpdrnspbjynjq44deiix.jpg",
   imageable_id: 4,
   imageable_type: "Group"
 )

 Image.create!(
   url_original:
    "http://res.cloudinary.com/cyspath/image/upload/v1454394082/n1j2vtz6ytru5gk8xvws.jpg",
   url_cropped: "",
   url_225x225:
    "http://res.cloudinary.com/cyspath/image/upload/x_120,y_20,w_360,h_360,c_crop/w_225,h_225,c_fill/n1j2vtz6ytru5gk8xvws.jpg",
   url_50x50:
    "http://res.cloudinary.com/cyspath/image/upload/x_120,y_20,w_360,h_360,c_crop/w_50,h_50,c_fill/n1j2vtz6ytru5gk8xvws.jpg",
   url_30x30:
    "http://res.cloudinary.com/cyspath/image/upload/x_120,y_20,w_360,h_360,c_crop/w_30,h_30,c_fill/n1j2vtz6ytru5gk8xvws.jpg",
   imageable_id: 6,
   imageable_type: "Group"
 )

 Image.create!(
   url_original:
    "http://res.cloudinary.com/cyspath/image/upload/v1454394693/kldv6atxrut4kqhbyohp.jpg",
   url_cropped: "",
   url_225x225:
    "http://res.cloudinary.com/cyspath/image/upload/x_297,y_43,w_776,h_776,c_crop/w_225,h_225,c_fill/kldv6atxrut4kqhbyohp.jpg",
   url_50x50:
    "http://res.cloudinary.com/cyspath/image/upload/x_297,y_43,w_776,h_776,c_crop/w_50,h_50,c_fill/kldv6atxrut4kqhbyohp.jpg",
   url_30x30:
    "http://res.cloudinary.com/cyspath/image/upload/x_297,y_43,w_776,h_776,c_crop/w_30,h_30,c_fill/kldv6atxrut4kqhbyohp.jpg",
   imageable_id: 5,
   imageable_type: "Group"
 )

i = 1
while i <= 20
  GroupMember.create!(
    user_id: i,
    group_id: 1
  )
  i += 1
end

start_times = [
28800,
36000,
50400,
57600]

i = 1
while i <= 100
  date = Date.today + rand(-3..15)
  time = start_times.sample

  arr = "环路和高速路都实现了不靠人工干预的完全自动驾驶全世界只有不足十台科学潜艇能够到达海面".split("")
  r = rand(15) + 5
  event_name = ""
  r.times {event_name += arr.sample}

  arr = "环路和高速路都实现了不靠人工干预的完全自动驾驶全世界只有不足十台科学潜艇能够到达海面".split("")
  r = rand(100) + 20
  description = ""
  r.times {description += arr.sample}

  location = ["中山公园", "栈桥南沙滩", "市南区博物馆", "河南路图书馆", "佳世客商场", "星巴克咖啡厅"].sample
  address = ("海景天中花市北里".split("").shuffle.take(rand(3)+4)).join("") + "路" + rand(100).to_s + "号楼" + rand(10).to_s + "单元" + rand(100).to_s + "室"

  Event.create!(
    name: event_name,
    date: date,
    start_time: time,
    end_time: time + 3600,
    location_name: location,
    location_address: address,
    description: description,
    group_id: rand(5)+1,
    owner_id: 2
  )
  i += 1
end

500.times do
  event_id = rand(100) + 1
  user_id = rand(500) + 1
  if EventMember.where(event_id: event_id, user_id: user_id).length <= 1
    EventMember.create!(event_id: event_id, user_id: user_id)
  end
end

500.times do
  group_id = rand(10) + 1
  user_id = rand(500) + 1
  if GroupMember.where(group_id: group_id, user_id: user_id).length <= 1
    GroupMember.create!(group_id: group_id, user_id: user_id)
  end
end
