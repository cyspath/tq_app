class Location < ActiveRecord::Base

  def find_by_location_id(id)
    location = { 1 => "山东青岛", 2 => "天津", 3 => "北京" }
    location[id]
  end

end
