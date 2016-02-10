class ChangeColGoingNotGoing < ActiveRecord::Migration
  def change
    remove_column :event_members, :going
    remove_column :event_members, :not_going
    add_column :event_members, :going, :boolean, default: true
  end
end
