json.(
  @group,
  :id,
  :name,
  :description,
  :created_at,
  :avatar,
  :location_id,
  :owner_id
)

json.set! :start_date, @group.created_at.strftime("%b %d, %Y")
json.set! :upcoming_events, @group.upcoming_events
json.set! :past_events, @group.past_events

members = @group.members
json.set! :members, members.take(10)
json.set! :members_count, members.size

json.set! :images, @group.images
