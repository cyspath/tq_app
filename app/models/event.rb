class Event < ActiveRecord::Base
  validates :name, :founder, :group, :date, presence: true

  has_many :event_members
  has_many :members, through: :event_members, source: :user

  belongs_to :founder, foreign_key: :owner_id, class_name: User

  belongs_to :group

  def start_time_formatted
    Time.at(start_time).utc.strftime("%I:%M%p")
  end

  def end_time_formatted
    Time.at(end_time).utc.strftime("%I:%M%p")
  end

  def group_name
    group.name
  end

  # has_many :comments, as: :commentable
  #
  # has_many :images, as: :imageable
end
