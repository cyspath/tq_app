
20.times do
  Group.create!(
    name: Faker::Hipster.sentence(3, false, 4),
    avatar: "https://cdn.tutsplus.com/photo/uploads/legacy/762_animalRU/" + (rand(50) + 1).to_s + ".jpg",
    description: Faker::Lorem.paragraph,
    location_id: rand(10),
    author_id: rand(User.all.count) + 1,
    created_at: Faker::Time.between(DateTime.now - 20, DateTime.now)
  )
end
