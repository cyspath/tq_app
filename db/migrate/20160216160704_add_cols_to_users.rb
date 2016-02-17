class AddColsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :location, :string
    add_column :users, :location_id, :integer
    add_column :users, :home_town, :string
    add_column :users, :bio, :text
  end
end
