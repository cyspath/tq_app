json.date item[:date]

json.events do
  json.array! item[:events] do |event|
    json.partial! 'event',
                  event: event,
                  display_group: false,
                  display_members: true
  end
end
