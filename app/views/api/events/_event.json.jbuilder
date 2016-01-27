json.extract!(
  event,
  :id,
  :name,
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
json.set! :member_count, event.members.count
