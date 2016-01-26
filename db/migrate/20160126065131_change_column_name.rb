class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :groups, :author_id, :owner_id
  end
end
