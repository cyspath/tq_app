class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.date :date
      t.time :start_time
      t.time :end_time
      t.string :location_name
      t.string :location_address
      t.text :description
      t.integer :owner_id, null: false, index: true
      t.integer :group_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
