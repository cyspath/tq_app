class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :group_members
  has_many :groups, through: :group_members

  has_many :event_members
  has_many :events, through: :event_members

  has_many :owned_groups, foreign_key: :owner_id, class_name: Group
  has_many :owned_events, foreign_key: :owner_id, class_name: Event

  has_many :images, as: :imageable
  # has_many :comments, as: :commentable
  #
  # has_many :ratings, as: :rateable
  # has_many :submitted_ratings, foreign_key: :voter_id, class_name: Rating
  #
  # has_many :authored_comments, foreign_key: :owner_id, class_name: Comment

  def groups_upcoming_events_count
    groups.includes(:events).flat_map(&:events).select {|e| e.date >= Date.today}.count
  end

  def nearby_events_count
    Event.where("date >= ?", Time.now).includes(:group).select {|e| e.group.location_id == self.location_id}.size
  end

  def display_name
    username.presence || email.presence || "Guest"
  end

  def upcoming_events
    today = DateTime.now
    events.select {|e| e.date >= today }
          .sort { |a, b| a.date <=> b.date }
  end

  def past_events
    today = DateTime.now
    events.select {|e| e.date < today }
          .sort { |a, b| b.date <=> a.date }
  end

end
