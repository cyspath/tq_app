class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

# # the 2 lines below should be uncommented except during db:setup

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :group_members
  has_many :groups, through: :group_members

  has_many :event_members
  has_many :events, through: :event_members

  has_many :owned_groups, foreign_key: :owner_id, class_name: Group
  has_many :owned_events, foreign_key: :owner_id, class_name: Event

  # has_many :comments, as: :commentable
  #
  # has_many :ratings, as: :rateable
  # has_many :submitted_ratings, foreign_key: :voter_id, class_name: Rating
  #
  # has_many :images, as: :imageable
  # has_many :authored_comments, foreign_key: :owner_id, class_name: Comment


  def display_name
    username.presence || email.presence || "Guest"
  end

  def upcoming_events
    today = DateTime.now
    events.select {|e| e.datetime >= today }
          .sort { |a, b| a.datetime <=> b.datetime }
  end

  def past_events
    today = DateTime.now
    events.select {|e| e.datetime < today }
          .sort { |a, b| a.datetime <=> b.datetime }
  end

end
