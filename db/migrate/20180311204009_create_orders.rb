class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.float :subtotal, null: false
      t.float :tax, null: false
      t.float :tip
      t.float :delivery_fee
      t.float :total, null: false
      t.string :delivery_instructions

      t.timestamps
    end
    add_index :orders, :user_id, unique: true
    add_index :orders, :restaurant_id, unique: true
  end
end
