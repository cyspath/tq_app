3.times do
  Group.create!(
    name: Faker::Hipster.sentence(3, false, 4),
    avatar: Faker::Avatar.image,
    description: Faker::Lorem.paragraph,
    location_id: rand(10),
    author_id: rand(User.all.count) + 1,
    created_at: Faker::Time.between(DateTime.now - 20, DateTime.now)
  )
end
