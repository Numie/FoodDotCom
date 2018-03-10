class AddColumnToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :city, :string, null: false, default: 'New York'
    add_column :restaurants, :state, :string, null: false, default: 'NY'
    add_column :restaurants, :zip, :string, null: false, default: '10003'
  end
end
