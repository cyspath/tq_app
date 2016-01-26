class CreateGroupMembers < ActiveRecord::Migration
  def change
    create_table :group_members do |t|
      t.integer :user_id, index: true
      t.integer :group_id, index: true
      t.timestamps null: false
    end
  end
end
