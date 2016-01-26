json.(@group, :id, :name, :description, :created_at, :avatar, :location_id, :author_id)
json.set! :start_date, @group.created_at.strftime("%b %d, %Y")
