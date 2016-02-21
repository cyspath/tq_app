class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def self.location(id)
    location = { 1 => "山东青岛", 2 => "天津", 3 => "北京" }
    location[id]
  end

end
