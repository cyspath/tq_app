class Group < ActiveRecord::Base
  validates :name, :founder, presence: true

  # validates :name, presence: true, uniqueness: true

  has_many :group_members
  has_many :members, through: :group_members, source: :user

  belongs_to :founder, foreign_key: :owner_id, class_name: User

  has_many :images, as: :imageable
  # has_many :comments, as: :commentable
  #

  has_many :events

  def upcoming_events
    today = DateTime.now
    # events.select {|e| e.date >= today }
    Event.where("group_id = ? AND date >= ? ", id, today).order("date ASC").includes(:founder, :members, :bailed_members)
          # .sort { |a, b| a.date <=> b.date }
  end

  def past_events
    today = DateTime.now
    # events.select {|e| e.date < today }
    Event.where("group_id = ? AND date < ?", id, today).order("date DESC").includes(:founder, :members, :bailed_members)
          # .sort { |a, b| b.date <=> a.date }
  end

  def most_recent_image
    images.order("created_at").last
  end

end
