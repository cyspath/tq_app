class Group < ActiveRecord::Base
  validates :name, :founder, presence: true

  # validates :name, presence: true, uniqueness: true

  has_many :group_members
  has_many :members, through: :group_members, source: :user

  belongs_to :founder, foreign_key: :owner_id, class_name: User

  # has_many :comments, as: :commentable
  #
  # has_many :images, as: :imageable

  has_many :events

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
