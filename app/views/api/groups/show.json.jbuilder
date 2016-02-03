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

members = @group.members
json.set! :members, members.take(10)
json.set! :members_count, members.size

json.set! :images, @group.images
json.set! :founder, @group.founder

json.upcoming_events do
  json.array! @group.upcoming_events do |event|
    json.partial!(
      'api/events/event',
      event: event,
      display_members: true
    )
  end
end

json.past_events do
  json.array! @group.past_events do |event|
    json.partial!(
      'api/events/event',
      event: event,
      display_members: true
    )
  end
end
