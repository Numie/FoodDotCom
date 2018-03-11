class CreateOrderItems < ActiveRecord::Migration[5.1]
  def change
    create_table :order_items do |t|
      t.integer :order_id, null: false
      t.integer :menu_item_id, null: false
      t.integer :quantity, null: false
      t.string :item_instructions

      t.timestamps
    end
    add_index :order_items, :order_id
    add_index :order_items, :menu_item_id
  end
end
