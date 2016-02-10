class AddColumnGoingNotGoingToEventMembers < ActiveRecord::Migration
  def change
    add_column :event_members, :going, :integer, default: false
    add_column :event_members, :not_going, :integer, default: false
  end
end
