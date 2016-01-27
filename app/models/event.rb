class Event < ActiveRecord::Base
  validates :name, :founder, :group, :date, presence: true

  has_many :event_members
  has_many :members, through: :event_members, source: :user

  belongs_to :founder, foreign_key: :owner_id, class_name: User

  belongs_to :group

  # has_many :comments, as: :commentable
  #
  # has_many :images, as: :imageable
end
