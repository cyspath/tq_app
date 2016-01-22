class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :avatar
      t.integer :location_id, index: true, null: false
      t.integer :author_id, index: true, null: false
      t.timestamps null: false
    end
  end
end
