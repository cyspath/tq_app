json.array! @groups do |group|
  json.partial! 'group',
  group: group,
  display_events: false,
  display_events_count: false
end
