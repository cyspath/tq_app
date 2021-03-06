json.extract!(
  event,
  :id,
  :name,
  :avatar,
  :date,
  :start_time,
  :end_time,
  :location_name,
  :location_address,
  :description,
  :owner_id,
  :group_id,
  :created_at,
  :datetime_num,
  :group_name,
  :start_time_formatted,
  :end_time_formatted
)

json.set! :start_date, event.date.strftime("%b %d, %Y")
json.set! :member_count, event.members.size
json.set! :founder, event.founder

if display_members
  json.set! :members, event.members
  json.set! :bailed_members, event.bailed_members
end

if display_group
  json.group do
    json.partial! 'api/groups/group', group: event.group, display_events: false, display_events_count: true
  end
end
