class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :url_original
      t.string :url_cropped
      t.string :url_225x225
      t.string :url_50x50
      t.string :url_30x30
      t.references :imageable, polymorphic: true, index: true
      t.timestamps null: false
    end
  end
end
