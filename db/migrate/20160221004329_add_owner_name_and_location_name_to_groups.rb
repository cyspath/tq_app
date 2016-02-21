class AddOwnerNameAndLocationNameToGroups < ActiveRecord::Migration
  def change
    add_column :groups, :location_name, :string
    add_column :groups, :owner_name, :string
  end
end
