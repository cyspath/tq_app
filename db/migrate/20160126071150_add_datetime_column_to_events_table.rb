class AddDatetimeColumnToEventsTable < ActiveRecord::Migration
  def change
    add_column :events, :datetime, :datetime
    add_index :events, :datetime
  end
end
