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

json.set! :upcoming_events, @user.upcoming_events
json.set! :next_event, @user.upcoming_events.first
json.set! :next_event_group, @user.upcoming_events.first.group
json.set! :nearby_events, @user.nearby_events.size
