class CreateOrderItemOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :order_item_options do |t|
      t.integer :order_item_id, null: false
      t.integer :item_option_id, null: false
    end
    add_index :order_item_options, :order_item_id
    add_index :order_item_options, :item_option_id
  end
end
