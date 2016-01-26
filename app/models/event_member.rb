class EventMember < ActiveRecord::Base
  validates :user, :event, presence: true

  belongs_to :event
  belongs_to :user

end
