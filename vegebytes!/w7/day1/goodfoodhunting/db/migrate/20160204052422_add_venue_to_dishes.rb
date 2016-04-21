class AddVenueToDishes < ActiveRecord::Migration
  def change
    add_column :dishes, :venue, :string
  end
end
