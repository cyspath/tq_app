json.(
  @user,
  :id,
  :username,
  # :email,
  # :phone,
  :sign_in_count,
  :last_sign_in_at,
  :current_sign_in_ip,
  :last_sign_in_ip,
  :created_at,
  :updated_at,
  :avatar,
  :identicon,
  :location,
  :location_id,
  :home_town,
  :bio
)

# count of how many events are upcoming for the groups you've joined
json.set! :groups_upcoming_events_count, @user.groups_upcoming_events_count

json.set! :upcoming_events, @user.upcoming_events

# number of events which are in the same city as current user
json.set! :nearby_events_count, @user.nearby_events_count

if @user.upcoming_events.length > 0
  json.set! :next_event_group, @user.upcoming_events.first.group
end
