json.array! events do |event|
  json.partial! 'event', event: event, display_members: false
end
