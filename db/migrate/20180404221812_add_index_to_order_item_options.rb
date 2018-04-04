class AddIndexToOrderItemOptions < ActiveRecord::Migration[5.1]
  def change
    add_column :order_item_options, :created_at, :datetime, null: false
    add_column :order_item_options, :updated_at, :datetime, null: false
  end
end
