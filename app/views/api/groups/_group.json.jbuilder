json.extract!(
  group,
  :id,
  :name,
  :description,
  :owner_id,
  :avatar,
  :created_at,
  :location_id
)

json.set! :member_count, group.members.size
json.set! :most_recent_image, group.most_recent_image
