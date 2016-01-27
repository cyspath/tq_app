class ChangeColumnsStartAndEndTime < ActiveRecord::Migration
  def change
    remove_column :events, :datetime
    remove_column :events, :start_time
    remove_column :events, :end_time
    add_column :events, :start_time, :integer
    add_column :events, :end_time, :integer
    add_column :events, :datetime_num, :integer, index: true
  end
end
