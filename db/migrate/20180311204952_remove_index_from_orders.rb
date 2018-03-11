class RemoveIndexFromOrders < ActiveRecord::Migration[5.1]
  def change
    remove_index :orders, :user_id
    remove_index :orders, :restaurant_id
    add_index :orders, :user_id
    add_index :orders, :restaurant_id
  end
end
