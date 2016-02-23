class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.string :city
      t.string :province
      t.timestamps null: false
    end
  end
end
