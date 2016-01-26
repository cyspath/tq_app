class GroupMember < ActiveRecord::Base
  validates :user, :group, presence: true

  belongs_to :user
  belongs_to :group
end
